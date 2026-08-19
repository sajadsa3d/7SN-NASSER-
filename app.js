// Translations Dictionary (Arabic & English)
const TRANSLATIONS = {
    ar: {
        announcement_ship: '<i class="fas fa-truck-loading"></i> توصيل وتركيب مجاني لكافة المحافظات العراقية | شركة الطيف للأثاث العراقي والمستورد',
        announcement_wa: '<i class="fab fa-whatsapp"></i> الواتساب المباشر: <strong style="color: var(--accent-gold);">07838669228</strong>',
        brand_name: 'ألطيف <span>للأثاث</span>',
        nav_home: 'الرئيسية',
        nav_catalog: 'معرض الأثاث',
        nav_about: 'من نحن',
        nav_contact: 'تواصل معنا',
        nav_admin: 'لوحة الإدارة',
        lang_btn: 'English',
        theme_btn_light: '<i class="fas fa-moon"></i>',
        theme_btn_dark: '<i class="fas fa-sun"></i>',
        
        hero_tag: '<i class="fas fa-gem"></i> تشكيلة الطيف للأثاث العراقي والمستورد 2026',
        hero_title: 'فخامة الأثاث العراقي والمستورد <span>وتفاصيل تليق بيتك</span>',
        hero_desc: 'في <strong>شركة الطيف للأثاث العراقي والمستورد (Altief Furniture)</strong>، نختص بتصنيع وتفصيل واستيراد أحدث تخوم القنفات، غرف النوم الملكية، وطاولات الطعام بأجود خامات الخشب والتركيب المتقن حسب قياسات بيتك ورغبتك.',
        hero_search_ph: 'ابحث عن تخم قنفات، غرفة نوم، طاولة طعام، كونسول...',
        hero_search_btn: 'بحث',
        hero_wa_badge: '<i class="fab fa-whatsapp"></i> تواصل مباشر على الواتساب: 07838669228',
        hero_stat_num: '+1,000',
        hero_stat_lbl: 'زبون وثقوا بأثاث الطيف',
        
        feat_1_h: 'توصيل وتركيب لكافة المحافظات',
        feat_1_p: 'فريق فني متخصص لتركيب الأثاث في بيتك',
        feat_2_h: 'تفصيل وتصميم حسب القياس',
        feat_2_p: 'إمكانية اختيار الألوان والقياسات بالكامل',
        feat_3_h: 'ضمان حقيقي لمدة 5 سنوات',
        feat_3_p: 'ضمان متكامل على هيكل الخشب والتنجيد',
        feat_4_h: 'الدفع عند الاستلام والمعاينة',
        feat_4_p: 'ادفع بعد وصول الأثاث ومعاينته في بيتك',
        
        cat_sec_title: 'معرض الطيف للأثاث والديكور',
        cat_sec_sub: 'اختر القسم لمشاهدة الموديلات المتاحة مع إمكانية التعديل والتفصيل الخاص',
        cat_all: 'جميع المعروضات',
        cat_sofas: 'تخوم وقنفات الاستقبال',
        cat_bedrooms: 'غرف النوم والدواليب',
        cat_dining: 'طاولات الطعام والسفرة',
        cat_decor: 'طاولات الخدمة والكونسول',
        
        about_title: 'عن شركة الطيف للأثاث العراقي والمستورد',
        about_sub: 'خبرة عريقة في صناعة وتوفير الأثاث الفاخر في العراق وتصميم أجود قطع الأثاث العصري والملكـي',
        about_p1: 'تأسست شركة الطيف للأثاث لتكون العنوان الأول للفخامة والمتانة في العراق. نعتمد على كادر من أمهر الحرفيين والمهندسين لتنفيذ وتوريد تخوم القنفات وغرف النوم الملكية وطاولات الطعام بأحدث التصاميم العراقية والمستوردة وبأجود أنواع الخشب الطبيعي.',
        about_p2: 'نقدم خدمات التوصيل والتركيب لجميع المحافظات العراقية مع إمكانية تفصيل وتعديل القياسات والألوان حسب طلب ورغبة الزبون ليكون الأثاث متناسقاً تماماً مع منزله.',
        about_b1: '<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> أخشاب زان وروماني طبيعية 100%',
        about_b2: '<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> إمكانية التعديل والتفصيل الخاص',
        about_b3: '<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> كادر صيانة وتوصيل متمرس',
        
        contact_title: 'تواصل وحجز طلبك المباشر',
        contact_sub: 'يسعدنا استقبال استفساراتك وحجوزاتك طوال أيام الأسبوع',
        contact_wa_h: 'الواتساب وخدمة العملاء',
        contact_phone_h: 'اتصال مباشر',
        contact_loc_h: 'المقر والمشغل الرئيسي',
        contact_loc_desc: 'العراق - تتوفر خدمة التوصيل والشحن لكافة المحافظات العراقية',
        contact_form_name: 'الاسم الكامل',
        contact_form_phone: 'رقم الهاتف / الواتساب',
        contact_form_msg: 'رسالتك أو تفاصيل تفصيل الأثاث الذي ترغب به...',
        contact_form_btn: 'إرسال الاستفسار الآن',
        
        cart_title: 'سلة مشتريات الطيف',
        cart_empty_h: 'سلة تسوق الطيف للأثاث فارغة',
        cart_empty_p: 'تصفح المعروضات الفاخرة واختر قطع الأثاث المناسبة لمنزلك',
        cart_subtotal: 'المجموع الفرعي:',
        cart_discount: 'الخصم:',
        cart_total: 'المجموع النهائي:',
        coupon_ph: 'أدخل كود الخصم (مثال: ALTIEF10)',
        coupon_btn: 'تطبيق',
        checkout_wa: 'تأكيد وحجز الطلب عبر الواتساب',
        checkout_direct: 'إتمام حجز الطلب المباشر',
        
        quick_view_btn: '<i class="fas fa-eye"></i> معاينة سريعة',
        add_to_cart_btn: '<i class="fas fa-shopping-bag"></i> أضف للسلة',
        bestseller_badge: 'الأكثر مبيعاً',
        new_badge: 'جديد الحصريات',
        reviews_lbl: 'تقييم',
        
        ar_3d_btn: '<i class="fas fa-cube"></i> معاينة الأبعاد والمساحة (3D Fit)',
        materials_lbl: 'الخامات والجودة:',
        dimensions_lbl: 'المقاسات والأبعاد:',
        colors_lbl: 'الألوان المتاحة للتفصيل:',
        
        footer_desc: 'شركة الطيف للأثاث العراقي والمستورد (Altief Furniture) - العنوان الأول للأثاث الفاخر، غرف النوم الملكية، وتخوم القنفات مع التوصيل لكافة المحافظات.',
        footer_links_h: 'روابط السريعة',
        footer_social_h: 'تابعنا وتواصل معنا',
        footer_rights: '© 2026 شركة الطيف للأثاث العراقي والمستورد (Altief Furniture). جميع الحقوق محفوظة.',
        
        no_prod_h: 'أحدث تشكيلات أثاث 2026 قريباً لدى شركة الطيف للأثاث',
        no_prod_p: 'نعمل حالياً على رفع وتجهيز أحدث موديلات تخوم القنفات وغرف النوم الملكية وطاولات الطعام. يمكنك التواصل معنا مباشرة عبر الواتساب للاستفسار وحجز الطلبات وتفصيل أثاثك الخاص.',
        no_prod_btn: '<i class="fab fa-whatsapp"></i> تواصل مع كادر المبيعات والواتساب: 07838669228',
        
        toast_theme_dark: 'تم التغيير إلى الوضع الليلي',
        toast_theme_light: 'تم التغيير إلى الوضع النهاري',
        toast_curr: 'تم تغيير العملة المعروضة إلى',
        toast_added_cart: 'تمت إضافة "{name}" إلى سلة التسوق',
        toast_removed_cart: 'تمت إزالة "{name}" من السلة',
        toast_added_wish: 'تمت إضافة "{name}" إلى المفضلة ❤️',
        toast_removed_wish: 'تم إزالة "{name}" من المفضلة',
        toast_coupon_10: 'تم تطبيق خصم الطيف للأثاث 10% بنجاح! 🎉',
        toast_coupon_20: 'تم تطبيق خصم العملاء المميزين 20%! ✨',
        toast_coupon_inv: 'كوبون الخصم غير صالح! (جرب كود ALTIEF10)',
        toast_cart_empty: 'السلة فارغة!'
    },
    en: {
        announcement_ship: '<i class="fas fa-truck-loading"></i> Free Delivery & Assembly Across Iraq | Altief Furniture',
        announcement_wa: '<i class="fab fa-whatsapp"></i> Direct WhatsApp: <strong style="color: var(--accent-gold);">07838669228</strong>',
        brand_name: 'Altief <span>Furniture</span>',
        nav_home: 'Home',
        nav_catalog: 'Furniture Catalog',
        nav_about: 'About Us',
        nav_contact: 'Contact Us',
        nav_admin: 'Admin Dashboard',
        lang_btn: 'العربية',
        theme_btn_light: '<i class="fas fa-moon"></i> Theme',
        theme_btn_dark: '<i class="fas fa-sun"></i> Theme',
        
        hero_tag: '<i class="fas fa-gem"></i> Altief Furniture & Decor Collection 2026',
        hero_title: 'Luxury Iraqi Furniture <span>Crafted for Your Home</span>',
        hero_desc: 'At <strong>Altief Furniture</strong>, we specialize in manufacturing & customizing premium sofa sets, royal bedrooms, and dining tables with solid wood tailored to your space.',
        hero_search_ph: 'Search for sofa sets, bedroom, dining table, console...',
        hero_search_btn: 'Search',
        hero_wa_badge: '<i class="fab fa-whatsapp"></i> Direct WhatsApp Inquiry: 07838669228',
        hero_stat_num: '+1,000',
        hero_stat_lbl: 'Happy Clients Across Iraq',
        
        feat_1_h: 'Nationwide Delivery & Assembly',
        feat_1_p: 'Specialized technical team for home setup',
        feat_2_h: 'Custom Dimensions & Design',
        feat_2_p: 'Full selection of colors, fabrics & sizes',
        feat_3_h: '5-Year Real Warranty',
        feat_3_p: 'Comprehensive warranty on frame & upholstery',
        feat_4_h: 'Cash on Delivery & Inspection',
        feat_4_p: 'Pay after receiving and inspecting furniture',
        
        cat_sec_title: 'Altief Furniture & Decor Catalog',
        cat_sec_sub: 'Choose a category to browse models with full custom size and color modifications',
        cat_all: 'All Collections',
        cat_sofas: 'Living Room & Sofas',
        cat_bedrooms: 'Bedrooms & Wardrobes',
        cat_dining: 'Dining Tables & Sets',
        cat_decor: 'Consoles & Tables',
        
        about_title: 'About Altief Furniture',
        about_sub: 'Decades of expertise in luxury furniture manufacturing in Iraq, crafting modern and royal pieces.',
        about_p1: 'Altief Furniture was founded to be Iraq’s leading benchmark for luxury and durability. Powered by master craftsmen and design engineers, we deliver bespoke sofa sets, royal bedrooms, and dining sets crafted from natural solid wood.',
        about_p2: 'We offer professional delivery and installation across all Iraqi governorates with custom tailoring options for dimensions, fabrics, and finishes to fit your living space seamlessly.',
        about_b1: '<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> 100% Solid Natural Beech & Oak Wood',
        about_b2: '<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> Custom Size & Color Adjustments',
        about_b3: '<i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> Professional Delivery & Installation Crew',
        
        contact_title: 'Contact Us & Book Your Order',
        contact_sub: 'We are delighted to receive your inquiries and custom orders 7 days a week',
        contact_wa_h: 'WhatsApp & Customer Support',
        contact_phone_h: 'Direct Phone Line',
        contact_loc_h: 'Headquarters & Workshop',
        contact_loc_desc: 'Iraq - Nationwide delivery and shipping available for all governorates',
        contact_form_name: 'Full Name',
        contact_form_phone: 'Phone Number / WhatsApp',
        contact_form_msg: 'Your inquiry or custom furniture details...',
        contact_form_btn: 'Send Inquiry Now',
        
        cart_title: 'Altief Shopping Cart',
        cart_empty_h: 'Your Shopping Cart is Empty',
        cart_empty_p: 'Browse our luxury collection and select the finest furniture for your home',
        cart_subtotal: 'Subtotal:',
        cart_discount: 'Discount:',
        cart_total: 'Final Total:',
        coupon_ph: 'Enter promo code (e.g. ALTIEF10)',
        coupon_btn: 'Apply',
        checkout_wa: 'Confirm & Order via WhatsApp',
        checkout_direct: 'Complete Direct Order Booking',
        
        quick_view_btn: '<i class="fas fa-eye"></i> Quick View',
        add_to_cart_btn: '<i class="fas fa-shopping-bag"></i> Add to Cart',
        bestseller_badge: 'Bestseller',
        new_badge: 'New Arrival',
        reviews_lbl: 'reviews',
        
        ar_3d_btn: '<i class="fas fa-cube"></i> View Dimensions & 3D Fit',
        materials_lbl: 'Materials & Quality:',
        dimensions_lbl: 'Dimensions & Size:',
        colors_lbl: 'Available Custom Colors:',
        
        footer_desc: 'Altief Furniture - Iraq\'s premier brand for luxury furniture, royal bedroom suites, and sofa sets with nationwide delivery.',
        footer_links_h: 'Quick Links',
        footer_social_h: 'Follow & Connect',
        footer_rights: '© 2026 Altief Furniture Company. All Rights Reserved.',
        
        no_prod_h: 'Latest 2026 Altief Furniture Collections Coming Soon',
        no_prod_p: 'We are currently preparing the latest sofa sets, royal bedrooms, and dining models. Contact us directly on WhatsApp to inquire or place a custom order.',
        no_prod_btn: '<i class="fab fa-whatsapp"></i> Contact Sales & WhatsApp: 07838669228',
        
        toast_theme_dark: 'Switched to Dark Mode',
        toast_theme_light: 'Switched to Light Mode',
        toast_curr: 'Currency displayed changed to',
        toast_added_cart: 'Added "{name}" to shopping cart',
        toast_removed_cart: 'Removed "{name}" from cart',
        toast_added_wish: 'Added "{name}" to Wishlist ❤️',
        toast_removed_wish: 'Removed "{name}" from Wishlist',
        toast_coupon_10: 'Altief 10% Discount Applied! 🎉',
        toast_coupon_20: 'VIP 20% Customer Discount Applied! ✨',
        toast_coupon_inv: 'Invalid promo code! (Try code ALTIEF10)',
        toast_cart_empty: 'Cart is empty!'
    }
};

// Helper function to safely get initial products with fallbacks
function getInitialProducts() {
    // Force clear products cache (v6.0)
    if (localStorage.getItem('altief_cache_v') !== '6.0') {
        localStorage.removeItem('altief_products');
        localStorage.setItem('altief_cache_v', '6.0');
    }

    const defaultData = (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA) && PRODUCTS_DATA.length > 0) ? PRODUCTS_DATA : [];
    if (defaultData.length === 0) {
        localStorage.removeItem('altief_products');
        return [];
    }
    const stored = JSON.parse(localStorage.getItem('altief_products'));
    return stored || defaultData;
}

// Initial App State
let state = {
    products: getInitialProducts(),
    filteredProducts: [],
    cart: JSON.parse(localStorage.getItem('altief_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('altief_wishlist')) || [],
    currentCategory: 'all',
    searchQuery: '',
    discountCode: null,
    discountPercent: 0,
    currency: localStorage.getItem('altief_currency') || 'IQD',
    theme: localStorage.getItem('altief_theme') || 'light',
    lang: localStorage.getItem('altief_lang') || 'ar',
    currentView: 'store'
};

state.filteredProducts = state.products;

// Currency Rates
const CURRENCY_RATES = {
    IQD: { symbol: 'د.ع', symbolEn: 'IQD', rate: 1 },
    USD: { symbol: '$', symbolEn: '$', rate: 0.00067 }
};

// Translation Helper Function
function t(key) {
    const langDict = TRANSLATIONS[state.lang] || TRANSLATIONS.ar;
    return langDict[key] || (TRANSLATIONS.ar[key] || key);
}

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
    // Ensure products are populated
    if (!state.products || state.products.length === 0) {
        state.products = getInitialProducts();
        state.filteredProducts = state.products;
    }

    initLanguage();
    initTheme();
    initCurrency();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
    renderAdminStats();
});

// Language Initialization & Toggle
function initLanguage() {
    setLanguage(state.lang, false);
}

function toggleLanguage() {
    const newLang = state.lang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang, true);
}

function setLanguage(lang, reloadUI = true) {
    state.lang = lang;
    localStorage.setItem('altief_lang', lang);

    // Set HTML Dir and Lang
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Update placeholders with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        const translation = t(key);
        if (translation) {
            el.setAttribute('placeholder', translation);
        }
    });

    // Update Lang Toggle Button Text
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.innerText = lang === 'ar' ? 'English' : 'العربية';
    }

    if (reloadUI) {
        renderProducts();
        updateCartUI();
    }
}

// Theme Control
function initTheme() {
    document.body.setAttribute('data-theme', state.theme);
    const modeBtn = document.getElementById('theme-toggle-btn');
    if (modeBtn) {
        modeBtn.innerHTML = state.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        const tooltip = state.lang === 'ar' ? (state.theme === 'dark' ? 'تغيير للوضع المضيء' : 'تغيير للوضع المظلم') : (state.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        modeBtn.setAttribute('title', tooltip);
        modeBtn.setAttribute('aria-label', tooltip);
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('altief_theme', state.theme);
    initTheme();
    showToast(state.theme === 'dark' ? t('toast_theme_dark') : t('toast_theme_light'));
}

// Currency Control
function initCurrency() {
    const picker = document.getElementById('currency-select');
    if (picker) picker.value = state.currency;
}

function changeCurrency(curr) {
    if (CURRENCY_RATES[curr]) {
        state.currency = curr;
        localStorage.setItem('altief_currency', curr);
        renderProducts();
        updateCartUI();
        const sym = state.lang === 'en' ? CURRENCY_RATES[curr].symbolEn : CURRENCY_RATES[curr].symbol;
        showToast(`${t('toast_curr')} (${sym})`);
    }
}

function formatPrice(amountIQD) {
    const info = CURRENCY_RATES[state.currency] || CURRENCY_RATES.IQD;
    const converted = Math.round(amountIQD * info.rate);
    const sym = state.lang === 'en' ? info.symbolEn : info.symbol;
    return `${converted.toLocaleString()} ${sym}`;
}

function getCategoryIcon(cat) {
    switch (cat) {
        case 'sofas': return 'fa-couch';
        case 'bedrooms': return 'fa-bed';
        case 'dining': return 'fa-utensils';
        case 'decor': return 'fa-layer-group';
        default: return 'fa-couch';
    }
}

// Render Products Grid
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const isEn = state.lang === 'en';

    // Ensure we have products loaded
    if (!state.products || state.products.length === 0) {
        state.products = getInitialProducts();
    }

    let items = state.products.filter(p => {
        const matchesCategory = state.currentCategory === 'all' || p.category === state.currentCategory;
        const pName = (isEn && p.nameEn ? p.nameEn : p.name) || '';
        const pDesc = (isEn && p.descriptionEn ? p.descriptionEn : p.description) || '';
        const matchesSearch = pName.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                              pDesc.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    state.filteredProducts = items;

    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 70px 20px; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-color); margin: 30px 0;">
                <i class="fas fa-couch" style="font-size: 3.8rem; margin-bottom: 16px; color: var(--accent-gold);"></i>
                <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main);">${t('no_prod_h')}</h3>
                <p style="margin-top: 8px; font-size: 0.95rem; max-width: 550px; margin-left: auto; margin-right: auto; line-height: 1.7;">
                    ${t('no_prod_p')}
                </p>
                <a href="https://wa.me/9647838669228" target="_blank" class="hero-search-btn" style="margin-top: 20px; background: #25d366; color: #fff; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                    ${t('no_prod_btn')}
                </a>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(p => {
        const isWishlisted = state.wishlist.some(w => w.id === p.id);
        const name = isEn && p.nameEn ? p.nameEn : p.name;
        const catName = isEn && p.categoryNameEn ? p.categoryNameEn : p.categoryName;

        return `
            <div class="product-card">
                <div class="product-details">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 8px;">
                        <span class="product-category-label">${catName}</span>
                        <div style="display: flex; align-items: center; gap: 6px;">
                            ${p.isNew ? `<span class="badge-tag new" style="position: static; font-size: 0.7rem; padding: 2px 8px;">${t('new_badge')}</span>` : ''}
                            ${p.isBestseller && !p.isNew ? `<span class="badge-tag bestseller" style="position: static; font-size: 0.7rem; padding: 2px 8px;">${t('bestseller_badge')}</span>` : ''}
                            <button class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}')" style="position: static; width: 32px; height: 32px; font-size: 0.95rem; background: var(--bg-surface); border: 1px solid var(--border-color);">
                                <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    
                    <h3 class="product-title" style="font-size: 1.15rem; font-weight: 800; margin-bottom: 10px;">${name}</h3>
                    
                    ${p.material ? `<p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 500;"><i class="fas fa-hammer" style="color: var(--accent-gold); margin-left: 4px;"></i> ${isEn && p.materialEn ? p.materialEn : p.material}</p>` : ''}
                    ${p.dimensions ? `<p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px; font-weight: 500;"><i class="fas fa-ruler-combined" style="color: var(--accent-gold); margin-left: 4px;"></i> ${isEn && p.dimensionsEn ? p.dimensionsEn : p.dimensions}</p>` : ''}

                    <div class="product-rating" style="margin-bottom: 14px;">
                        <span class="stars-ic"><i class="fas fa-star"></i> ${p.rating}</span>
                        <span>(${p.reviewsCount} ${t('reviews_lbl')})</span>
                    </div>
                    
                    <div class="product-footer">
                        <div class="price-wrap">
                            <span class="price-current">${formatPrice(p.price)}</span>
                            ${p.originalPrice ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ''}
                        </div>
                        
                        <div style="display: flex; gap: 8px;">
                            <button class="action-btn" onclick="openQuickView('${p.id}')" title="معاينة التفاصيل" style="border-radius: var(--radius-md); font-size: 0.9rem; width: 38px; height: 38px;">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="add-cart-btn" onclick="addToCart('${p.id}')">
                                ${t('add_to_cart_btn')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Category & Search Filter Handlers
function filterCategory(cat, btn) {
    state.currentCategory = cat;
    document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProducts();
}

function handleSearchInput(query) {
    state.searchQuery = query.trim();
    renderProducts();
}

// Cart Functionality
function addToCart(productId, qty = 1, color = null) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const isEn = state.lang === 'en';
    const prodName = isEn && product.nameEn ? product.nameEn : product.name;

    const existingIndex = state.cart.findIndex(item => item.id === productId && item.color === color);
    
    if (existingIndex > -1) {
        state.cart[existingIndex].qty += qty;
    } else {
        state.cart.push({
            id: product.id,
            name: prodName,
            nameEn: product.nameEn || product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            color: color || (product.colors && product.colors[0] ? product.colors[0].name : null),
            qty: qty
        });
    }

    saveCart();
    updateCartUI();
    const msg = t('toast_added_cart').replace('{name}', prodName);
    showToast(msg);
}

function updateCartQty(index, change) {
    state.cart[index].qty += change;
    if (state.cart[index].qty <= 0) {
        state.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    const item = state.cart[index];
    const isEn = state.lang === 'en';
    const name = isEn && item.nameEn ? item.nameEn : item.name;
    state.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    const msg = t('toast_removed_cart').replace('{name}', name);
    showToast(msg);
}

function saveCart() {
    localStorage.setItem('altief_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const drawerBody = document.getElementById('cart-drawer-body');
    const drawerFooter = document.getElementById('cart-drawer-footer');
    const isEn = state.lang === 'en';

    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountVal = subtotal * (state.discountPercent / 100);
    const finalTotal = subtotal - discountVal;

    if (badge) badge.innerText = totalCount;
    if (!drawerBody) return;

    if (state.cart.length === 0) {
        drawerBody.innerHTML = `
            <div style="text-align: center; padding: 60px 0; color: var(--text-muted);">
                <i class="fas fa-shopping-basket" style="font-size: 3.5rem; color: var(--accent-gold); margin-bottom: 16px;"></i>
                <h4 style="font-size: 1.2rem; font-weight: 800;">${t('cart_empty_h')}</h4>
                <p style="font-size: 0.9rem; margin-top: 6px;">${t('cart_empty_p')}</p>
            </div>
        `;
        if (drawerFooter) drawerFooter.style.display = 'none';
        return;
    }

    if (drawerFooter) drawerFooter.style.display = 'block';

    drawerBody.innerHTML = state.cart.map((item, idx) => {
        const name = isEn && item.nameEn ? item.nameEn : item.name;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${name}</h4>
                    ${item.color ? `<span style="font-size: 0.75rem; color: var(--text-muted);">${isEn?'Color':'اللون'}: ${item.color}</span>` : ''}
                    <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
                </div>
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
                    <span style="font-weight: 700; font-size: 0.9rem;">${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
                </div>
                <button onclick="removeFromCart(${idx})" style="background: none; border: none; color: #e63946; cursor: pointer; padding: 4px;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    }).join('');

    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.innerText = formatPrice(subtotal);
    if (discountEl) discountEl.innerText = `-${formatPrice(discountVal)}`;
    if (totalEl) totalEl.innerText = formatPrice(finalTotal);
}

function applyCoupon() {
    const input = document.getElementById('coupon-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'ALTIEF10' || code === 'AURA10') {
        state.discountPercent = 10;
        state.discountCode = 'ALTIEF10';
        showToast(t('toast_coupon_10'));
    } else if (code === 'VIP20') {
        state.discountPercent = 20;
        state.discountCode = 'VIP20';
        showToast(t('toast_coupon_20'));
    } else {
        showToast(t('toast_coupon_inv'));
    }
    updateCartUI();
}

function orderViaWhatsApp() {
    if (state.cart.length === 0) {
        showToast(t('toast_cart_empty'));
        return;
    }

    const isEn = state.lang === 'en';
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountVal = subtotal * (state.discountPercent / 100);
    const finalTotal = subtotal - discountVal;

    let itemsText = state.cart.map((item, i) => {
        const name = isEn && item.nameEn ? item.nameEn : item.name;
        return `${i+1}. *${name}* (${isEn?'Qty':'العدد'}: ${item.qty}) - ${formatPrice(item.price * item.qty)}`;
    }).join('%0A');
    
    let msg = isEn
        ? `Hello Altief Furniture 👋%0AI would like to confirm the following order:%0A%0A${itemsText}%0A%0A*Total Amount:* ${formatPrice(finalTotal)}%0A%0APlease provide delivery details and timeframe.`
        : `مرحباً شركة الطيف للأثاث 👋%0Aأود تأكيد طلب الأثاث التالي عبر الموقع:%0A%0A${itemsText}%0A%0A*الإجمالي:* ${formatPrice(finalTotal)}%0A%0Aيرجى تزويدي بالتفاصيل وموعد التوصيل.`;

    const whatsappUrl = `https://wa.me/9647838669228?text=${msg}`;
    window.open(whatsappUrl, '_blank');
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (!drawer || !backdrop) return;
    drawer.classList.toggle('active');
    backdrop.classList.toggle('active');
}

// Wishlist Control
function toggleWishlist(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    const isEn = state.lang === 'en';
    const name = isEn && product.nameEn ? product.nameEn : product.name;

    const idx = state.wishlist.findIndex(w => w.id === productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast(t('toast_removed_wish').replace('{name}', name));
    } else {
        state.wishlist.push(product);
        showToast(t('toast_added_wish').replace('{name}', name));
    }
    localStorage.setItem('altief_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlist-badge');
    if (badge) badge.innerText = state.wishlist.length;
}

// Quick View Modal
function openQuickView(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');
    if (!modal || !content) return;

    const isEn = state.lang === 'en';
    const name = isEn && product.nameEn ? product.nameEn : product.name;
    const catName = isEn && product.categoryNameEn ? product.categoryNameEn : product.categoryName;
    const desc = isEn && product.descriptionEn ? product.descriptionEn : product.description;
    const mat = isEn && product.materialEn ? product.materialEn : product.material;
    const dim = isEn && product.dimensionsEn ? product.dimensionsEn : product.dimensions;

    content.innerHTML = `
        <div style="display: flex; flex-direction: column; justify-content: space-between; padding: 10px;">
            <div>
                <span class="product-category-label">${catName}</span>
                <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 10px;">${name}</h2>
                    
                    <div class="product-rating" style="margin-bottom: 16px;">
                        <span class="stars-ic"><i class="fas fa-star"></i> ${product.rating}</span>
                        <span>(${product.reviewsCount} ${t('reviews_lbl')})</span>
                    </div>

                    <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 16px;">
                        ${formatPrice(product.price)}
                    </div>

                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.7;">
                        ${desc}
                    </p>

                    <div style="margin-bottom: 14px;">
                        <strong>${t('materials_lbl')}</strong> <span style="color: var(--text-muted);">${mat}</span>
                    </div>

                    <div style="margin-bottom: 14px;">
                        <strong>${t('dimensions_lbl')}</strong> <span style="color: var(--text-muted);">${dim}</span>
                    </div>

                    ${product.colors ? `
                        <div>
                            <strong>${t('colors_lbl')}</strong>
                            <div class="color-swatch-list">
                                ${product.colors.map((c, i) => `
                                    <div class="color-swatch ${i===0?'selected':''}" style="background: ${c.hex};" title="${c.name}"></div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>

                <div style="display: flex; gap: 12px; margin-top: 24px;">
                    <button class="checkout-btn" onclick="addToCart('${product.id}'); closeModal('quick-view-modal');">
                        ${t('add_to_cart_btn')}
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function toggleFaq(btn) {
    const item = btn.parentElement;
    item.classList.toggle('active');
}

function handleContactSubmit(e) {
    e.preventDefault();
    const isEn = state.lang === 'en';
    showToast(isEn ? 'Thank you for reaching Altief Furniture! We will reply via WhatsApp.' : 'شكراً لتواصلك مع مفروشات ألطيف! سيتم الرد عليك فوراً عبر الواتساب.');
    e.target.reset();
}

function openRoomVisualizer(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('ar-visualizer-modal');
    const body = document.getElementById('ar-modal-body');
    if (!modal || !body) return;

    const isEn = state.lang === 'en';
    const name = isEn && product.nameEn ? product.nameEn : product.name;
    const dim = isEn && product.dimensionsEn ? product.dimensionsEn : product.dimensions;

    body.innerHTML = `
                <div style="color: var(--accent-gold); font-size: 3rem;">
                    <i class="fas fa-cube"></i>
                </div>
                
                <div style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.75); color: #fff; padding: 6px 14px; border-radius: var(--radius-full); font-size: 0.8rem;">
                    <i class="fas fa-camera"></i> ${isEn ? '3D Fit & Dimension Simulation' : 'وضع محاكاة الأبعاد ثلاثية الأبعاد'}
                </div>

                <div style="position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.9); color: #1c1917; padding: 8px 16px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
                    ${isEn ? 'Realistic Dimensions:' : 'الأبعاد الواقعية:'} ${dim}
                </div>
            </div>
            <p style="margin-top: 16px; color: var(--text-muted); font-size: 0.9rem;">
                ${isEn ? 'Verify furniture proportions for your room before placing or customizing your order.' : 'يمكنك التأكد من تناسق مساحة قطعة الأثاث قبل إتمام الطلب أو التفصيل.'}
            </p>
        </div>
    `;

    modal.classList.add('active');
}

function openCheckout() {
    if (state.cart.length === 0) {
        showToast(t('toast_cart_empty'));
        return;
    }
    toggleCartDrawer();
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.classList.add('active');
}

function processOrder(e) {
    e.preventDefault();
    const isEn = state.lang === 'en';
    const form = e.target;
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"]');
    const customerName = inputs[0] ? inputs[0].value.trim() : (isEn ? 'Valued Client' : 'زبون كريم');
    const phone = inputs[1] ? inputs[1].value.trim() : '07838669228';
    const address = inputs[2] ? inputs[2].value.trim() : (isEn ? 'Iraq' : 'العراق');

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountVal = subtotal * (state.discountPercent / 100);
    const finalTotal = subtotal - discountVal;

    const orderId = `#ALTIEF-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder = {
        id: orderId,
        customerName: customerName,
        phone: phone,
        address: address,
        total: finalTotal,
        items: [...state.cart],
        date: new Date().toLocaleDateString(isEn ? 'en-US' : 'ar-IQ', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    let existingOrders = JSON.parse(localStorage.getItem('altief_orders')) || [];
    existingOrders.unshift(newOrder);
    localStorage.setItem('altief_orders', JSON.stringify(existingOrders));

    const modalContent = document.getElementById('checkout-modal-content');
    if (modalContent) {
        modalContent.innerHTML = `
            <div style="text-align: center; padding: 50px 30px;">
                <div style="width: 80px; height: 80px; background: var(--accent-emerald); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px;">
                    <i class="fas fa-check"></i>
                </div>
                <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main);">${isEn ? 'Your order has been placed with Altief Furniture! 🎉' : 'تم تسجيل طلبك لدى شركة الطيف للأثاث! 🎉'}</h2>
                <p style="color: var(--text-muted); margin-top: 10px; font-size: 1rem;">
                    ${isEn ? 'Order Reference:' : 'رقم الطلب:'} <strong style="color: var(--accent-gold);">${orderId}</strong>
                </p>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">
                    ${isEn ? 'We will contact you via phone and WhatsApp to confirm schedule and delivery.' : 'سيتم التواصل معك عبر الهاتف والواتساب لتأكيد الموعد والتفاصيل.'}
                </p>
                <button onclick="closeModal('checkout-modal'); location.reload();" class="checkout-btn" style="margin-top: 30px; max-width: 250px;">
                    ${isEn ? 'Return to Store' : 'العودة للمتجر'}
                </button>
            </div>
        `;
    }
    state.cart = [];
    saveCart();
    updateCartUI();
}

function renderAdminStats() {
    const totalSalesEl = document.getElementById('admin-total-sales');
    const totalProductsEl = document.getElementById('admin-total-products');
    
    if (totalSalesEl) totalSalesEl.innerText = formatPrice(0);
    if (totalProductsEl) totalProductsEl.innerText = state.products ? state.products.length : 0;
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--accent-gold);"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3200);
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    }
}
