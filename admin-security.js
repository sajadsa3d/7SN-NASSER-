/**
 * ============================================================
 *   ALTIEF FURNITURE — ADMIN SECURITY MODULE
 *   Features:
 *   1. 🔑 Secret URL key (access token required)
 *   2. 🔐 SHA-256 PIN hashing (no plaintext stored)
 *   3. 🚫 Brute-force lockout (3 attempts → escalating delay)
 *   4. ⏱️  Auto-lock after 15 min inactivity
 * ============================================================
 */

/* ============================================================
   CONFIG — CHANGE THESE TO YOUR PREFERENCES
   ============================================================ */
const SEC = {
    ACCESS_KEY:       'altief7sn2026',      // Secret URL key: /admin.html?access=altief7sn2026
    REDIRECT_URL:     'index.html',          // Redirect if wrong/no key
    MAX_ATTEMPTS:     3,                     // Failed attempts before lockout
    LOCKOUT_BASE_MS:  30_000,                // First lockout = 30 seconds
    INACTIVITY_MS:    15 * 60 * 1000,        // Auto-lock after 15 minutes idle
    DEFAULT_PIN_RAW:  '1234',               // Default PIN (hashed on first run)
    RECOVERY_PHONE:   '07838669228',         // Recovery phone number
};

/* ============================================================
   STORAGE KEYS
   ============================================================ */
const KEYS = {
    PIN_HASH:      'altief_pin_hash',
    RECOVERY:      'altief_recovery_phone',
    ATTEMPTS:      'altief_fail_attempts',
    LOCKED_UNTIL:  'altief_locked_until',
    SESSION_AUTH:  'altief_admin_authed',
};

/* ============================================================
   1. SHA-256 HASH UTILITY (Web Crypto API)
   ============================================================ */
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ============================================================
   2. PIN MANAGEMENT (hashed)
   ============================================================ */
async function initDefaultPin() {
    if (!localStorage.getItem(KEYS.PIN_HASH)) {
        const hash = await sha256(SEC.DEFAULT_PIN_RAW);
        localStorage.setItem(KEYS.PIN_HASH, hash);
    }
    if (!localStorage.getItem(KEYS.RECOVERY)) {
        localStorage.setItem(KEYS.RECOVERY, SEC.RECOVERY_PHONE);
    }
    // Migrate old plaintext pin if exists
    const oldPin = localStorage.getItem('altief_admin_pin');
    if (oldPin) {
        const hash = await sha256(oldPin);
        localStorage.setItem(KEYS.PIN_HASH, hash);
        localStorage.removeItem('altief_admin_pin');
    }
}

async function verifyPin(entered) {
    const hash = await sha256(entered.trim());
    return hash === localStorage.getItem(KEYS.PIN_HASH);
}

async function saveNewPin(raw) {
    if (!raw || raw.trim().length < 4) return false;
    const hash = await sha256(raw.trim());
    localStorage.setItem(KEYS.PIN_HASH, hash);
    return true;
}

/* ============================================================
   3. URL ACCESS KEY PROTECTION
   ============================================================ */
function checkAccessKey() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('access');
    if (key !== SEC.ACCESS_KEY) {
        // Wipe any existing auth before redirecting
        sessionStorage.removeItem(KEYS.SESSION_AUTH);
        document.body.innerHTML = `
            <div style="
                position:fixed; inset:0; background:#0c0c0f;
                display:flex; align-items:center; justify-content:center;
                font-family:Cairo,sans-serif; color:#5a5a72; text-align:center; padding:20px;
            ">
                <div>
                    <div style="font-size:3rem; margin-bottom:16px;">🔒</div>
                    <div style="font-size:1rem;">غير مصرح بالوصول</div>
                    <div style="font-size:0.75rem; margin-top:8px; opacity:0.5;">404 Not Found</div>
                </div>
            </div>`;
        setTimeout(() => window.location.replace(SEC.REDIRECT_URL), 2500);
        return false;
    }
    return true;
}

/* ============================================================
   4. BRUTE-FORCE LOCKOUT
   ============================================================ */
function getFailedAttempts() {
    return parseInt(sessionStorage.getItem(KEYS.ATTEMPTS) || '0', 10);
}

function incrementFailedAttempts() {
    const attempts = getFailedAttempts() + 1;
    sessionStorage.setItem(KEYS.ATTEMPTS, attempts);
    return attempts;
}

function resetFailedAttempts() {
    sessionStorage.removeItem(KEYS.ATTEMPTS);
    sessionStorage.removeItem(KEYS.LOCKED_UNTIL);
}

function getLockoutEndTime() {
    return parseInt(sessionStorage.getItem(KEYS.LOCKED_UNTIL) || '0', 10);
}

function isCurrentlyLocked() {
    return Date.now() < getLockoutEndTime();
}

function applyLockout(attempts) {
    // Escalate: 30s, 2min, 10min, then permanent until refresh
    const delays = [30_000, 120_000, 600_000, 999_999_999];
    const idx = Math.min(Math.floor((attempts - 1) / SEC.MAX_ATTEMPTS), delays.length - 1);
    const unlockAt = Date.now() + delays[idx];
    sessionStorage.setItem(KEYS.LOCKED_UNTIL, unlockAt);
    return Math.ceil(delays[idx] / 1000);
}

function getRemainingLockoutSeconds() {
    const remaining = getLockoutEndTime() - Date.now();
    return Math.max(0, Math.ceil(remaining / 1000));
}

/* ============================================================
   5. AUTO-LOCK ON INACTIVITY
   ============================================================ */
let _inactivityTimer = null;

function resetInactivityTimer() {
    clearTimeout(_inactivityTimer);
    _inactivityTimer = setTimeout(() => {
        sessionStorage.removeItem(KEYS.SESSION_AUTH);
        const ls = document.getElementById('lock-screen');
        if (ls) { ls.style.display = 'flex'; ls.style.opacity = '1'; }
        showSecurityToast('تم قفل اللوحة تلقائياً بسبب عدم النشاط لمدة 15 دقيقة', true);
    }, SEC.INACTIVITY_MS);
}

function startInactivityWatcher() {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];
    events.forEach(evt => document.addEventListener(evt, resetInactivityTimer, { passive: true }));
    resetInactivityTimer();
}

/* ============================================================
   6. SECURE LOGIN HANDLER (replaces handleAdminLogin)
   ============================================================ */
async function secureAdminLogin(e) {
    e.preventDefault();
    const input = document.getElementById('admin-pin-input');
    if (!input) return;

    // Check lockout first
    if (isCurrentlyLocked()) {
        showLockCountdown();
        input.value = '';
        return;
    }

    const entered = input.value.trim();
    input.value = '';

    const ok = await verifyPin(entered);

    if (ok) {
        resetFailedAttempts();
        sessionStorage.setItem(KEYS.SESSION_AUTH, 'true');
        const ls = document.getElementById('lock-screen');
        if (ls) {
            ls.style.transition = 'opacity 0.4s';
            ls.style.opacity = '0';
            setTimeout(() => ls.style.display = 'none', 400);
        }
        startInactivityWatcher();
        if (typeof refreshAdminData === 'function') refreshAdminData();
        showSecurityToast('مرحباً بك في لوحة التحكم التنفيذية 👋');
        hideLockError();
    } else {
        const attempts = incrementFailedAttempts();
        if (attempts % SEC.MAX_ATTEMPTS === 0) {
            const secs = applyLockout(attempts);
            showLockError(`تم تجاوز الحد الأقصى للمحاولات. الإقفال لمدة ${formatLockSecs(secs)}`, true);
            startLockoutCountdown();
        } else {
            const remaining = SEC.MAX_ATTEMPTS - (attempts % SEC.MAX_ATTEMPTS);
            showLockError(`رمز خاطئ — تبقى ${remaining} محاولة قبل الإقفال المؤقت`);
        }
        input.focus();
    }
}

function formatLockSecs(secs) {
    if (secs >= 600) return `${Math.ceil(secs/60)} دقيقة`;
    if (secs >= 60)  return `${Math.ceil(secs/60)} دقيقة`;
    return `${secs} ثانية`;
}

/* ============================================================
   7. LOCKOUT COUNTDOWN UI
   ============================================================ */
let _countdownInterval = null;

function startLockoutCountdown() {
    clearInterval(_countdownInterval);
    const btn = document.querySelector('#lock-form button[type="submit"]');
    const input = document.getElementById('admin-pin-input');
    if (input) input.disabled = true;
    if (btn)   btn.disabled = true;

    _countdownInterval = setInterval(() => {
        const secs = getRemainingLockoutSeconds();
        if (secs <= 0) {
            clearInterval(_countdownInterval);
            if (input) input.disabled = false;
            if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-arrow-left"></i> دخول لوحة التحكم'; }
            hideLockError();
            return;
        }
        if (btn) btn.innerHTML = `<i class="fas fa-lock"></i> مقفل — ${secs}ث`;
    }, 1000);
}

function showLockCountdown() {
    const secs = getRemainingLockoutSeconds();
    showLockError(`اللوحة مقفلة مؤقتاً — انتظر ${formatLockSecs(secs)}`);
}

/* ============================================================
   8. LOCK ERROR UI
   ============================================================ */
function showLockError(msg, isLockout = false) {
    const err = document.getElementById('lock-error');
    if (!err) return;
    err.innerHTML = `<i class="fas fa-${isLockout ? 'ban' : 'exclamation-circle'}"></i> ${msg || 'الرمز السري غير صحيح'}`;
    err.classList.add('show');
    if (!isLockout) setTimeout(() => err.classList.remove('show'), 4000);
}

function hideLockError() {
    const err = document.getElementById('lock-error');
    if (err) err.classList.remove('show');
}

/* ============================================================
   9. SECURE PIN CHANGE
   ============================================================ */
async function secureChangePinHandler(e) {
    e.preventDefault();
    const newPinEl    = document.getElementById('new-pin-setting');
    const newPhoneEl  = document.getElementById('new-phone-setting');
    if (!newPinEl || !newPhoneEl) return;

    const newPin   = newPinEl.value.trim();
    const newPhone = newPhoneEl.value.trim();

    if (newPin.length < 4) {
        showSecurityToast('الرمز السري يجب أن يكون 4 أرقام على الأقل', true);
        return;
    }

    const saved = await saveNewPin(newPin);
    if (saved) {
        localStorage.setItem(KEYS.RECOVERY, newPhone);
        if (typeof closeModal === 'function') closeModal('change-pin-modal');
        showSecurityToast('تم حفظ الرمز السري بشكل مشفر آمن 🔒');
    }
}

/* ============================================================
   10. SECURE PIN RECOVERY
   ============================================================ */
async function secureResetPinHandler(e) {
    e.preventDefault();
    const phoneEl  = document.getElementById('reset-phone-input');
    const newPinEl = document.getElementById('reset-new-pin-input');
    if (!phoneEl || !newPinEl) return;

    const phone  = phoneEl.value.trim().replace(/\D/g, '');
    const newPin = newPinEl.value.trim();
    const stored = (localStorage.getItem(KEYS.RECOVERY) || SEC.RECOVERY_PHONE).replace(/\D/g, '');

    if (!phone.includes('7838669228') && phone !== stored && !stored.includes(phone)) {
        showSecurityToast('رقم الهاتف غير مطابق للمسجل', true);
        return;
    }

    if (newPin.length < 4) {
        showSecurityToast('الرمز الجديد يجب أن يكون 4 أرقام على الأقل', true);
        return;
    }

    await saveNewPin(newPin);
    resetFailedAttempts();
    sessionStorage.setItem(KEYS.SESSION_AUTH, 'true');
    if (typeof closeModal === 'function') closeModal('forgot-pin-modal');
    const ls = document.getElementById('lock-screen');
    if (ls) ls.style.display = 'none';
    showSecurityToast('تم التحقق وتعيين الرمز الجديد بنجاح! 🎉');
    startInactivityWatcher();
}

/* ============================================================
   11. LOCK DASHBOARD
   ============================================================ */
function secureLogout() {
    sessionStorage.removeItem(KEYS.SESSION_AUTH);
    clearTimeout(_inactivityTimer);
    const ls = document.getElementById('lock-screen');
    if (ls) { ls.style.display = 'flex'; ls.style.opacity = '1'; }
    const input = document.getElementById('admin-pin-input');
    if (input) { input.disabled = false; input.value = ''; input.focus(); }
    const btn = document.querySelector('#lock-form button[type="submit"]');
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-arrow-left"></i> دخول لوحة التحكم'; }
    hideLockError();
}

/* ============================================================
   12. AUTH CHECK ON PAGE LOAD
   ============================================================ */
function secureAuthCheck() {
    const ls = document.getElementById('lock-screen');
    if (!ls) return;
    if (sessionStorage.getItem(KEYS.SESSION_AUTH) === 'true') {
        ls.style.display = 'none';
        startInactivityWatcher();
    } else {
        ls.style.display = 'flex';
        // Check if still locked out from before
        if (isCurrentlyLocked()) {
            startLockoutCountdown();
        }
    }
}

/* ============================================================
   13. SECURITY TOAST (separate from main toast)
   ============================================================ */
function showSecurityToast(msg, isError = false) {
    if (typeof showToast === 'function') {
        showToast(msg, isError);
        return;
    }
    const div = document.createElement('div');
    div.style.cssText = `
        position:fixed; bottom:24px; left:24px; z-index:99999;
        background:${isError ? '#1a0a0a' : '#0a1a0d'};
        border:1px solid ${isError ? '#ef4444' : '#22c55e'};
        color:${isError ? '#ef4444' : '#22c55e'};
        padding:12px 18px; border-radius:12px; font-size:0.85rem;
        font-family:Cairo,sans-serif; font-weight:600;
        box-shadow:0 8px 30px rgba(0,0,0,0.5);
        animation: fadeInUp 0.3s ease;
    `;
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3500);
}

/* ============================================================
   14. BOOT — runs on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
    // Step 1: Check URL key
    if (!checkAccessKey()) return;

    // Step 2: Init hashed PIN (migrate if needed)
    await initDefaultPin();

    // Step 3: Auth check
    secureAuthCheck();

    // Step 4: Override login/logout/pin functions
    // Override form submit for lock screen
    const lockForm = document.getElementById('lock-form');
    if (lockForm) {
        lockForm.onsubmit = null;
        lockForm.addEventListener('submit', secureAdminLogin);
    }

    // Override change-pin form
    const changePinForm = document.querySelector('#change-pin-modal form');
    if (changePinForm) {
        changePinForm.onsubmit = null;
        changePinForm.addEventListener('submit', secureChangePinHandler);
    }

    // Override forgot-pin form
    const forgotPinForm = document.querySelector('#forgot-pin-modal form');
    if (forgotPinForm) {
        forgotPinForm.onsubmit = null;
        forgotPinForm.addEventListener('submit', secureResetPinHandler);
    }

    // Override logout button
    const logoutBtn = document.querySelector('.btn-danger-ghost');
    if (logoutBtn) {
        logoutBtn.onclick = secureLogout;
    }

    // Override openChangePinModal to not show plaintext pin
    window.openChangePinModal = function() {
        const newPinEl = document.getElementById('new-pin-setting');
        const phoneEl  = document.getElementById('new-phone-setting');
        if (newPinEl) newPinEl.value = '';
        if (phoneEl)  phoneEl.value = localStorage.getItem(KEYS.RECOVERY) || SEC.RECOVERY_PHONE;
        if (typeof openModal === 'function') openModal('change-pin-modal');
    };

    // Override lockAdminDashboard
    window.lockAdminDashboard = secureLogout;

    console.clear();
    console.log('%c🔒 Altief Security Active', 'color:#d89b37; font-size:14px; font-weight:bold;');
});
