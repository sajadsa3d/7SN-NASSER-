// =============================================
// ADMIN EXECUTIVE DASHBOARD - State Management
// =============================================
const getStoredProds = () => JSON.parse(localStorage.getItem('altief_products')) || [];

let adminState = {
    products: getStoredProds(),
    orders: JSON.parse(localStorage.getItem('altief_orders')) || [],
    currentImageBase64: ''
};

// ==================== DOM READY ====================
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuthOnLoad();
    saveProductsState();
    refreshAdminData();
    startClock();
    animateBars();
    drawSparkline();

    // Live sync across tabs
    window.addEventListener('storage', () => refreshAdminData());
});

// ==================== REFRESH ALL DATA ====================
function refreshAdminData() {
    adminState.products = getStoredProds();
    adminState.orders = JSON.parse(localStorage.getItem('altief_orders')) || [];
    renderAdminProductsTable();
    renderAdminOrdersTable();
    updateAdminStats();
    updateSidebarBadges();
    drawSparkline();
}

// ==================== SAVE STATE ====================
function saveProductsState() {
    localStorage.setItem('altief_products', JSON.stringify(adminState.products));
}

// ==================== CATEGORY NAMES ====================
const catNames = {
    living: 'تخوم وقنفات الاستقبال',
    bedroom: 'غرف النوم والدواليب',
    dining: 'طاولات الطعام والسفرة',
    decor: 'الكونسولات والديكورات',
    office: 'المكاتب المنزلية'
};

// ==================== RENDER PRODUCTS TABLE ====================
function renderAdminProductsTable() {
    const tableBody = document.getElementById('admin-products-table-body');
    if (!tableBody) return;

    if (adminState.products.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5">
                    <div class="empty-state">
                        <i class="fas fa-couch"></i>
                        <h4>لا توجد قطع أثاث في المعرض حالياً</h4>
                        <p>اضغط على زر "إضافة منتج جديد" في الأعلى لإضافة أول قطعة إلى المعرض</p>
                    </div>
                </td>
            </tr>`;
        return;
    }

    tableBody.innerHTML = adminState.products.map((p) => `
        <tr id="prod-row-${p.id}">
            <td>
                <div class="prod-info" style="display:flex; align-items:center; gap:12px;">
                    ${p.image ? `<img src="${p.image}" class="prod-thumb" alt="${p.name}" onerror="this.style.display='none'">` : ''}
                    <div>
                        <strong>${p.name}</strong>
                        ${p.material ? `<span>${p.material}</span>` : ''}
                    </div>
                </div>
            </td>
            <td>
                <span class="tag tag-gold">${p.categoryName || catNames[p.category] || p.category}</span>
            </td>
            <td>
                <strong style="color: var(--gold); font-size: 0.95rem;">${(p.price || 0).toLocaleString()} د.ع</strong>
                ${p.originalPrice ? `<br><s style="font-size: 0.75rem; color: var(--ad-subtle);">${p.originalPrice.toLocaleString()} د.ع</s>` : ''}
            </td>
            <td>
                ${p.isNew ? '<span class="tag tag-green"><i class="fas fa-sparkles"></i> جديد</span> ' : ''}
                ${p.isBestseller ? '<span class="tag tag-blue"><i class="fas fa-fire"></i> الأكثر مبيعاً</span>' : ''}
                ${!p.isNew && !p.isBestseller ? '<span style="color:var(--ad-subtle); font-size:0.8rem;">—</span>' : ''}
            </td>
            <td>
                <button onclick="deleteProduct('${p.id}')" class="btn btn-red" style="padding: 6px 14px; font-size: 0.8rem;">
                    <i class="fas fa-trash-alt"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');
}

// ==================== RENDER ORDERS TABLE ====================
function renderAdminOrdersTable() {
    const tableBody = document.getElementById('admin-orders-table-body');
    if (!tableBody) return;

    if (adminState.orders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    <div class="empty-state">
                        <i class="fas fa-shopping-bag"></i>
                        <h4>لا توجد طلبات مسجلة حالياً</h4>
                        <p>الطلبات الواردة من موقع الزبائن ستظهر هنا تلقائياً فور إتمامها</p>
                    </div>
                </td>
            </tr>`;
        return;
    }

    tableBody.innerHTML = adminState.orders.map(o => {
        const items = o.items || [];
        const itemsHtml = items.map((item, i) => `
            <div style="font-size:0.83rem; margin-bottom:3px;">
                <strong>${item.name}</strong>
                <span style="color:var(--gold); font-size:0.72rem; font-family:monospace;"> #${item.id ? item.id.replace('prod-','') : i+1}</span>
                ${item.qty ? `<span style="color:var(--ad-muted); font-size:0.72rem;"> × ${item.qty}</span>` : ''}
            </div>
        `).join('');

        return `
            <tr>
                <td>
                    <code style="background:var(--gold-glow); color:var(--gold); padding:3px 8px; border-radius:6px; font-size:0.78rem;">${o.id}</code>
                    <div style="font-size:0.7rem; color:var(--ad-subtle); margin-top:4px;">${o.date || ''}</div>
                </td>
                <td>${itemsHtml || '<span style="color:var(--ad-muted);">طلب عام</span>'}</td>
                <td>
                    <strong>${o.customerName}</strong><br>
                    <a href="https://wa.me/964${(o.phone||'').replace(/^0/,'')}" target="_blank"
                       style="color:#25d366; text-decoration:none; font-size:0.83rem; font-weight:700; display:inline-flex; align-items:center; gap:4px; margin-top:3px;">
                        <i class="fab fa-whatsapp"></i> ${o.phone}
                    </a>
                </td>
                <td style="font-size:0.83rem; color:var(--ad-muted);">${o.address || '—'}</td>
                <td>
                    <strong style="color:var(--gold);">${(o.total||0).toLocaleString()} <span style="font-size:0.75rem;">د.ع</span></strong>
                </td>
                <td>
                    <button onclick="deleteSingleOrder('${o.id}')" class="btn btn-red" style="padding:6px 14px; font-size:0.8rem;">
                        <i class="fas fa-trash-alt"></i> حذف
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// ==================== STATS ====================
function updateAdminStats() {
    const totalSales = adminState.orders.reduce((s, o) => s + (o.total || 0), 0);
    const el = (id) => document.getElementById(id);
    if (el('admin-total-products')) el('admin-total-products').textContent = adminState.products.length;
    if (el('admin-total-orders')) el('admin-total-orders').textContent = adminState.orders.length;
    if (el('admin-total-sales')) el('admin-total-sales').textContent = totalSales.toLocaleString() + ' د.ع';
}

// ==================== SIDEBAR BADGES ====================
function updateSidebarBadges() {
    const p = document.getElementById('sb-prod-count');
    const o = document.getElementById('sb-order-count');
    if (p) p.textContent = adminState.products.length;
    if (o) o.textContent = adminState.orders.length;
}

// ==================== CLOCK ====================
function startClock() {
    const el = document.getElementById('admin-live-clock');
    if (!el) return;
    const tick = () => el.textContent = new Date().toLocaleTimeString('ar-IQ');
    tick(); setInterval(tick, 1000);
}

// ==================== ANIMATIONS ====================
function animateBars() {
    setTimeout(() => {
        document.querySelectorAll('.cat-fill').forEach(b => {
            b.style.width = b.dataset.width;
        });
    }, 500);
}

function drawSparkline() {
    const el = document.getElementById('sparkline-chart');
    if (!el) return;
    const base = [3, 6, 4, 9, 7, 5, adminState.orders.length + 2];
    const max = Math.max(...base, 1);
    el.innerHTML = base.map(v =>
        `<div class="spark-bar" style="height:${Math.max(8, Math.round((v/max)*80))}px" title="${v} طلب"></div>`
    ).join('');
}

// ==================== PRODUCTS CRUD ====================
function deleteProduct(id) {
    const prod = adminState.products.find(p => p.id === id);
    if (!confirm(`تأكيد حذف "${prod ? prod.name : 'هذه القطعة'}" من المعرض؟`)) return;
    adminState.products = adminState.products.filter(p => p.id !== id);
    saveProductsState();
    refreshAdminData();
    showToast('تمت إزالة القطعة من المعرض بنجاح');
}

function deleteSingleOrder(orderId) {
    if (!confirm(`تأكيد حذف الطلب "${orderId}"؟`)) return;
    adminState.orders = adminState.orders.filter(o => o.id !== orderId);
    localStorage.setItem('altief_orders', JSON.stringify(adminState.orders));
    refreshAdminData();
    showToast(`تم حذف الطلب ${orderId} بنجاح`);
}

function clearAllOrders() {
    if (!confirm('تأكيد تصفير جميع الطلبات نهائياً؟')) return;
    adminState.orders = [];
    localStorage.setItem('altief_orders', JSON.stringify([]));
    refreshAdminData();
    showToast('تم تصفير سجل الطلبات بنجاح', false);
}

// ==================== PRODUCT FORM ====================
function handleSaveProduct(e) {
    e.preventDefault();
    const name = document.getElementById('prod-form-name').value.trim();
    const category = document.getElementById('prod-form-category').value;
    const price = parseFloat(document.getElementById('prod-form-price').value) || 0;
    const origPrice = parseFloat(document.getElementById('prod-form-orig-price').value) || 0;
    const material = document.getElementById('prod-form-material').value.trim();
    const dimensions = document.getElementById('prod-form-dimensions').value.trim();
    const isNew = document.getElementById('prod-form-isnew').checked;
    const isBestseller = document.getElementById('prod-form-isbestseller').checked;
    const desc = document.getElementById('prod-form-desc').value.trim();

    const newProduct = {
        id: `prod-${Date.now()}`,
        name,
        nameEn: name,
        category,
        categoryName: catNames[category] || category,
        price,
        originalPrice: origPrice > 0 ? origPrice : null,
        rating: 5.0,
        reviewsCount: 1,
        isNew,
        isBestseller,
        image: adminState.currentImageBase64 || 'images/luxury_sofa_set.png',
        material: material || 'خشب طبيعي عالي الجودة مع تنجيد فاخر',
        dimensions: dimensions || 'حسب الطلب والقياس',
        description: desc || 'قطعة أثاث فاخرة تم تصنيعها وتفصيلها بأعلى معايير الإتقان.'
    };

    adminState.products.unshift(newProduct);
    saveProductsState();
    refreshAdminData();
    closeModal('add-product-modal');
    e.target.reset();
    adminState.currentImageBase64 = '';
    showToast(`تمت إضافة "${name}" بنجاح إلى المعرض! 🎉`);
}

// ==================== TOAST ====================
function showToast(msg, isError = false) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.className = 'toast' + (isError ? ' toast-err' : '');
    t.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'} toast-icon"></i> ${msg}`;
    container.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(16px)'; t.style.transition = 'all 0.3s'; setTimeout(() => t.remove(), 300); }, 3200);
}

// ==================== AUTH / PIN SECURITY ====================
const DEFAULT_PIN = '1234';
const DEFAULT_RECOVERY_PHONE = '07838669228';

function getAdminPin() { return localStorage.getItem('altief_admin_pin') || DEFAULT_PIN; }
function getRecoveryPhone() { return localStorage.getItem('altief_recovery_phone') || DEFAULT_RECOVERY_PHONE; }

function checkAdminAuthOnLoad() {
    const lockScreen = document.getElementById('lock-screen');
    if (!lockScreen) return;
    if (sessionStorage.getItem('altief_admin_authed') === 'true') {
        lockScreen.style.display = 'none';
    } else {
        lockScreen.style.display = 'flex';
    }
}

function handleAdminLogin(e) {
    e.preventDefault();
    const input = document.getElementById('admin-pin-input');
    const entered = input ? input.value.trim() : '';

    if (entered === getAdminPin()) {
        sessionStorage.setItem('altief_admin_authed', 'true');
        const ls = document.getElementById('lock-screen');
        if (ls) { ls.style.opacity = '0'; ls.style.transition = 'opacity 0.4s'; setTimeout(() => ls.style.display = 'none', 400); }
        refreshAdminData();
        showToast('مرحباً بك في لوحة التحكم التنفيذية 👋');
        if (input) input.value = '';
    } else {
        const err = document.getElementById('lock-error');
        if (err) { err.classList.add('show'); setTimeout(() => err.classList.remove('show'), 3000); }
        if (input) { input.value = ''; input.focus(); }
    }
}

function lockAdminDashboard() {
    sessionStorage.removeItem('altief_admin_authed');
    const ls = document.getElementById('lock-screen');
    if (ls) { ls.style.display = 'flex'; ls.style.opacity = '1'; }
}

// ==================== PIN RECOVERY ====================
function handleResetPinWithPhone(e) {
    e.preventDefault();
    const phone = document.getElementById('reset-phone-input').value.trim().replace(/\D/g, '');
    const newPin = document.getElementById('reset-new-pin-input').value.trim();
    const stored = getRecoveryPhone().replace(/\D/g, '');

    if (phone.includes('7838669228') || phone === stored || stored.includes(phone)) {
        if (newPin.length < 4) { alert('الرمز السري يجب أن يكون 4 أرقام على الأقل'); return; }
        localStorage.setItem('altief_admin_pin', newPin);
        sessionStorage.setItem('altief_admin_authed', 'true');
        closeModal('forgot-pin-modal');
        const ls = document.getElementById('lock-screen');
        if (ls) ls.style.display = 'none';
        showToast('تم التحقق وتعيين الرمز الجديد بنجاح! 🎉');
    } else {
        alert('رقم الهاتف غير مطابق. يرجى التحقق من الرقم المسجل.');
    }
}

function handleChangePinSettings(e) {
    e.preventDefault();
    const newPin = document.getElementById('new-pin-setting').value.trim();
    const newPhone = document.getElementById('new-phone-setting').value.trim();
    if (newPin.length < 4) { alert('يجب أن يكون الرمز 4 أرقام على الأقل'); return; }
    localStorage.setItem('altief_admin_pin', newPin);
    localStorage.setItem('altief_recovery_phone', newPhone);
    closeModal('change-pin-modal');
    showToast('تم حفظ الرمز السري ورقم الاستعادة بنجاح 🔒');
}

// ==================== MODAL HELPERS ====================
function openModal(id) { const m = document.getElementById(id); if (m) m.classList.add('active'); }
function closeModal(id) { const m = document.getElementById(id); if (m) m.classList.remove('active'); }
function openAddProductModal() { adminState.currentImageBase64 = ''; openModal('add-product-modal'); }
function openChangePinModal() {
    document.getElementById('new-pin-setting').value = getAdminPin();
    document.getElementById('new-phone-setting').value = getRecoveryPhone();
    openModal('change-pin-modal');
}
function openForgotPinFlow() { openModal('forgot-pin-modal'); }

// Close on overlay click
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });
    });
});

// ==================== LIVE SEARCH FILTER ====================
function filterAdminProductsTable(query) {
    const tableBody = document.getElementById('admin-products-table-body');
    if (!tableBody) return;
    const q = (query || '').toLowerCase().trim();
    tableBody.querySelectorAll('tr').forEach(row => {
        row.style.display = (!q || row.innerText.toLowerCase().includes(q)) ? '' : 'none';
    });
}
