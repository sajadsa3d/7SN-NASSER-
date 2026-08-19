// Admin State Management
const getStoredProds = () => {
    const p = JSON.parse(localStorage.getItem('altief_products'));
    return p ? p : [];
};

let adminState = {
    products: getStoredProds(),
    orders: JSON.parse(localStorage.getItem('altief_orders')) || [],
    currentImageBase64: ''
};

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    saveProductsState();
    refreshAdminData();
    
    // Live Sync across tabs/windows
    window.addEventListener('storage', () => {
        refreshAdminData();
    });
});

function refreshAdminData() {
    adminState.products = getStoredProds();
    adminState.orders = JSON.parse(localStorage.getItem('altief_orders')) || [];
    renderAdminProductsTable();
    renderAdminOrdersTable();
    updateAdminStats();
}

// Save to LocalStorage
function saveProductsState() {
    localStorage.setItem('altief_products', JSON.stringify(adminState.products));
}

// Render Products Management Table
function renderAdminProductsTable() {
    const tableBody = document.getElementById('admin-products-table-body');
    if (!tableBody) return;

    if (adminState.products.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fas fa-couch" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--accent-gold);"></i>
                    <h4 style="font-size: 1.1rem; font-weight: 700;">لا توجد قطع أثاث مضافة حالياً في المعرض</h4>
                    <p style="font-size: 0.88rem; margin-top: 6px;">اضغط على زر "إضافة قطعة أثاث جديدة" بالأعلى لإضافة منتجاتك وصورها</p>
                </td>
            </tr>
        `;
        return;
    }

    const catNames = {
        living: 'تخوم وقنفات الاستقبال',
        bedroom: 'غرف النوم والدواليب',
        dining: 'طاولات الطعام والسفرة',
        decor: 'الكونسولات والديكورات',
        office: 'المكاتب المنزلية'
    };

    tableBody.innerHTML = adminState.products.map((p, idx) => `
        <tr>
            <td>
                <strong style="color: var(--text-main); font-size: 0.95rem;">${p.name}</strong>
                ${p.material ? `<br><span style="font-size: 0.78rem; color: var(--text-muted);">${p.material}</span>` : ''}
            </td>
            <td>
                <span class="status-badge" style="background: rgba(197,155,39,0.12); color: var(--accent-gold);">
                    ${p.categoryName || catNames[p.category] || p.category}
                </span>
            </td>
            <td>
                <strong style="color: var(--accent-gold); font-size: 1rem;">${(p.price || 0).toLocaleString()} د.ع</strong>
                ${p.originalPrice ? `<br><s style="font-size: 0.78rem; color: var(--text-muted);">${p.originalPrice.toLocaleString()} د.ع</s>` : ''}
            </td>
            <td>
                ${p.isNew ? '<span class="status-badge status-done">جديد</span>' : ''}
                ${p.isBestseller ? '<span class="status-badge status-pending">الأكثر مبيعاً</span>' : ''}
            </td>
            <td>
                <div style="display: flex; gap: 8px; justify-content: center;">
                    <button onclick="deleteProduct('${p.id}')" class="action-btn" style="background: rgba(230,57,70,0.15); color: #e63946; border: 1px solid #e63946; padding: 6px 12px; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer;" title="حذف القطعة">
                        <i class="fas fa-trash-alt"></i> حذف
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Render Orders Table
function renderAdminOrdersTable() {
    const tableBody = document.getElementById('admin-orders-table-body');
    if (!tableBody) return;

    if (adminState.orders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">
                    لا توجد طلبات مسجلة حالياً. الطلبات الجديدة الواردة من موقع الزبون ستظهر هنا فور إتمامها مع صور القطع والأكواد.
                </td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = adminState.orders.map(o => {
        const items = o.items || [];
        const itemsDetailsHtml = items.map((item, itemIdx) => `
            <div style="font-size: 0.85rem; margin-bottom: 4px;">
                <strong style="color: var(--text-main);">${item.name}</strong> 
                <span style="color: var(--accent-gold); font-size: 0.75rem;">(كود القطعة: #ITEM-${item.id ? item.id.replace('prod-', '') : itemIdx+1})</span>
                ${item.color ? `<br><span style="font-size: 0.75rem; color: var(--text-muted);">اللون: ${item.color} | العدد: ${item.qty}</span>` : ''}
            </div>
        `).join('');

        return `
            <tr>
                <td>
                    <strong style="color: var(--accent-gold); font-size: 0.95rem; background: rgba(197,155,39,0.12); padding: 4px 8px; border-radius: var(--radius-sm); font-family: monospace;">${o.id}</strong>
                </td>
                <td>
                    ${itemsDetailsHtml || '<span style="color: var(--text-muted);">طلب عام</span>'}
                </td>
                <td>
                    <strong style="color: var(--text-main); font-size: 0.95rem;">${o.customerName}</strong><br>
                    <a href="https://wa.me/964${o.phone ? o.phone.replace(/^0/, '') : ''}" target="_blank" style="color: #25d366; text-decoration: none; font-weight: 700; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px;">
                        <i class="fab fa-whatsapp"></i> ${o.phone}
                    </a>
                </td>
                <td>
                    <span style="font-size: 0.88rem; color: #a8a198;">${o.address}</span>
                </td>
                <td>
                    <strong style="color: var(--accent-gold); font-size: 1.05rem;">${(o.total || 0).toLocaleString()} د.ع</strong>
                </td>
                <td>
                    <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">${o.date}</div>
                    <button onclick="deleteSingleOrder('${o.id}')" class="action-btn" style="background: rgba(230,57,70,0.15); color: #e63946; border: 1px solid #e63946; padding: 4px 10px; border-radius: var(--radius-sm); font-size: 0.78rem; font-weight: 700; cursor: pointer;">
                        <i class="fas fa-trash-alt"></i> حذف الطلب
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Delete Single Order
function deleteSingleOrder(orderId) {
    if (!confirm(`هل أنت تأكد من حذف الطلب "${orderId}"؟`)) return;
    adminState.orders = adminState.orders.filter(o => o.id !== orderId);
    localStorage.setItem('altief_orders', JSON.stringify(adminState.orders));
    renderAdminOrdersTable();
    updateAdminStats();
    showToast(`تم حذف الطلب ${orderId} بنجاح`);
}

// Update Admin Stats Cards
function updateAdminStats() {
    const prodCountEl = document.getElementById('admin-total-products');
    const orderCountEl = document.getElementById('admin-total-orders');
    const salesEl = document.getElementById('admin-total-sales');

    const totalSalesSum = adminState.orders.reduce((sum, o) => sum + (o.total || 0), 0);

    if (prodCountEl) prodCountEl.innerText = `${adminState.products.length} قطعة`;
    if (orderCountEl) orderCountEl.innerText = `${adminState.orders.length} طلب`;
    if (salesEl) salesEl.innerText = `${totalSalesSum.toLocaleString()} د.ع`;
}

// Delete Product
function deleteProduct(id) {
    const prod = adminState.products.find(p => p.id === id);
    if (!confirm(`هل أنت تأكد من رغبتك في حذف قطعة الأثاث "${prod ? prod.name : ''}" من المعرض؟`)) return;

    adminState.products = adminState.products.filter(p => p.id !== id);
    saveProductsState();
    renderAdminProductsTable();
    updateAdminStats();
    showToast('تمت إزالة القطعة بنجاح من المعرض');
}

// Clear Orders
function clearAllOrders() {
    if (!confirm('هل أنت متاكد من تصفير سجل جميع الطلبات؟')) return;
    adminState.orders = [];
    localStorage.setItem('altief_orders', JSON.stringify([]));
    renderAdminOrdersTable();
    updateAdminStats();
    showToast('تم تصفير سجل الطلبات بنجاح');
}

// Modal Handlers
function openAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    if (modal) {
        modal.classList.add('active');
        adminState.currentImageBase64 = '';
        const previewBox = document.getElementById('image-preview-container');
        if (previewBox) previewBox.style.display = 'none';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
}

// Image File Upload Preview (Base64)
function previewImageFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        adminState.currentImageBase64 = evt.target.result;
        showImagePreview(evt.target.result);
    };
    reader.readAsDataURL(file);
}

function previewImageUrl(url) {
    if (url.trim().length > 5) {
        adminState.currentImageBase64 = url.trim();
        showImagePreview(url.trim());
    }
}

function showImagePreview(src) {
    const previewBox = document.getElementById('image-preview-container');
    const previewImg = document.getElementById('image-preview-img');
    if (previewBox && previewImg) {
        previewImg.src = src;
        previewBox.style.display = 'block';
    }
}

// Save New Product Form Handler
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

    const imageUrl = adminState.currentImageBase64 || document.getElementById('prod-form-image-url').value.trim() || 'images/luxury_sofa_set.png';

    const catNames = {
        living: 'تخوم وقنفات الاستقبال',
        bedroom: 'غرف النوم والدواليب',
        dining: 'طاولات الطعام والسفرة',
        decor: 'الكونسولات والديكورات',
        office: 'المكاتب المنزلية'
    };

    const newProduct = {
        id: `prod-${Date.now()}`,
        name: name,
        nameEn: name,
        category: category,
        categoryName: catNames[category] || category,
        price: price,
        originalPrice: origPrice > 0 ? origPrice : null,
        rating: 5.0,
        reviewsCount: 1,
        isNew: isNew,
        isBestseller: isBestseller,
        image: imageUrl,
        material: material || 'خشب طبيعي عالي الجودة مع تنجيد فاخر',
        dimensions: dimensions || 'حسب الطلب والقياس',
        description: desc || 'قطعة أثاث فاخرة جديدة تم تصنيعها وتفصيلها بأعلى معايير الإتقان والجودة لدى شركة الطيف للأثاث.'
    };

    adminState.products.unshift(newProduct);
    saveProductsState();
    renderAdminProductsTable();
    updateAdminStats();
    closeModal('add-product-modal');
    e.target.reset();
    showToast(`تمت إضافة "${name}" بنجاح إلى المعرض! 🎉`);
}

// Toast Notifications Helper
function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3200);
}

/* ==========================================
   Admin PIN Security & Phone Recovery Logic
========================================== */
const DEFAULT_PIN = '1234';
const DEFAULT_RECOVERY_PHONE = '07838669228';

function getAdminPin() {
    return localStorage.getItem('altief_admin_pin') || DEFAULT_PIN;
}

function getRecoveryPhone() {
    return localStorage.getItem('altief_recovery_phone') || DEFAULT_RECOVERY_PHONE;
}

function checkAdminAuthOnLoad() {
    const isAuthenticated = sessionStorage.getItem('altief_admin_authed');
    const lockOverlay = document.getElementById('admin-security-lock');
    if (!lockOverlay) return;

    if (isAuthenticated === 'true') {
        lockOverlay.style.display = 'none';
    } else {
        lockOverlay.style.display = 'flex';
    }
}

// Call security check on DOM load
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuthOnLoad();
});

function handleAdminLogin(e) {
    e.preventDefault();
    const pinInput = document.getElementById('admin-pin-input');
    const enteredPin = pinInput ? pinInput.value.trim() : '';

    if (enteredPin === getAdminPin()) {
        sessionStorage.setItem('altief_admin_authed', 'true');
        const lockOverlay = document.getElementById('admin-security-lock');
        if (lockOverlay) lockOverlay.style.display = 'none';
        showToast('تم إدخال الرمز السري بنجاح! مرحباً بك 👋');
        if (pinInput) pinInput.value = '';
    } else {
        alert('الرمز السري غير صحيح! الرمز الافتراضي هو 1234');
        if (pinInput) pinInput.value = '';
    }
}

function lockAdminDashboard() {
    sessionStorage.removeItem('altief_admin_authed');
    const lockOverlay = document.getElementById('admin-security-lock');
    if (lockOverlay) lockOverlay.style.display = 'flex';
    showToast('تم قفل لوحة التحكم بنجاح');
}

function openForgotPinFlow() {
    const modal = document.getElementById('forgot-pin-modal');
    if (modal) modal.classList.add('active');
}

function handleResetPinWithPhone(e) {
    e.preventDefault();
    const phoneInput = document.getElementById('reset-phone-input').value.trim().replace(/\D/g, '');
    const newPinInput = document.getElementById('reset-new-pin-input').value.trim();

    const storedPhone = getRecoveryPhone().replace(/\D/g, '');

    // Allow matching normalized phone digits (e.g. 07838669228 or 7838669228)
    if (phoneInput.includes('7838669228') || phoneInput === storedPhone || storedPhone.includes(phoneInput)) {
        if (newPinInput.length < 4) {
            alert('يرجى إدخال رمز سري يتكون من 4 أرقام على الأقل.');
            return;
        }
        localStorage.setItem('altief_admin_pin', newPinInput);
        sessionStorage.setItem('altief_admin_authed', 'true');
        closeModal('forgot-pin-modal');
        const lockOverlay = document.getElementById('admin-security-lock');
        if (lockOverlay) lockOverlay.style.display = 'none';
        showToast(`تم التحقق من رقم الجوال بنجاح وتعيين الرمز الجديد (${newPinInput})! 🎉`);
    } else {
        alert(`رقم الهاتف غير مسجل! رقم الاستعادة المسجل هو: ${getRecoveryPhone()}`);
    }
}

function openChangePinModal() {
    const modal = document.getElementById('change-pin-modal');
    if (modal) {
        document.getElementById('new-pin-setting').value = getAdminPin();
        document.getElementById('new-phone-setting').value = getRecoveryPhone();
        modal.classList.add('active');
    }
}

function handleChangePinSettings(e) {
    e.preventDefault();
    const newPin = document.getElementById('new-pin-setting').value.trim();
    const newPhone = document.getElementById('new-phone-setting').value.trim();

    if (newPin.length < 4) {
        alert('يرجى اختيار رمز سري يتكون من 4 أرقام على الأقل.');
        return;
    }

    localStorage.setItem('altief_admin_pin', newPin);
    localStorage.setItem('altief_recovery_phone', newPhone);
    closeModal('change-pin-modal');
    showToast('تم حفظ إعدادات الرمز السري ورقم الاستعادة بنجاح! 🔒');
}

// Live Clock Update
function startAdminClock() {
    const clockEl = document.getElementById('admin-live-clock');
    if (!clockEl) return;
    const update = () => {
        const now = new Date();
        clockEl.textContent = '🕒 ' + now.toLocaleTimeString('ar-IQ');
    };
    update();
    setInterval(update, 1000);
}

// Live Filter Products Table
function filterAdminProductsTable(query) {
    const tableBody = document.getElementById('admin-products-table-body');
    if (!tableBody) return;
    const q = (query || '').toLowerCase().trim();
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (!q || text.includes(q)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Start clock on initialization
document.addEventListener('DOMContentLoaded', () => {
    startAdminClock();
});

