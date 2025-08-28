// Configuración global
const CONFIG = {
    whatsappNumber: '+5493816282866',
    googleSheetsUrl: '', // URL del Google Apps Script (a completar por el usuario)
    currency: 'ARS',
    country: 'Argentina'
};

// Estado global del formulario
let formState = {
    selectedPlatform: null,
    selectedDuration: null,
    selectedScreens: null,
    selectedRenewal: null,
    selectedPromotion: null,
    calculatedPrice: 0,
    formData: {}
};

// Elementos del DOM
let elements = {};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    setupFormValidation();
    console.log('🚀 StreamingARG Form initialized successfully!');
});

// Inicializar referencias a elementos del DOM
function initializeElements() {
    elements = {
        form: document.getElementById('streamingForm'),
        platformSelect: document.getElementById('platform'),
        platformDetails: document.getElementById('platform-details'),
        platformImg: document.getElementById('platform-img'),
        platformTitle: document.getElementById('platform-title'),
        platformDescription: document.getElementById('platform-description'),
        pricingOptions: document.getElementById('pricing-options'),
        planSelection: document.getElementById('plan-selection'),
        durationSelect: document.getElementById('duration'),
        screensSelect: document.getElementById('screens'),
        renewalRadios: document.querySelectorAll('input[name="renewal"]'),
        promotionsSection: document.getElementById('promotions-section'),
        availablePromotions: document.getElementById('available-promotions'),
        priceSummary: document.getElementById('price-summary'),
        summaryPlatform: document.getElementById('summary-platform'),
        summaryPlan: document.getElementById('summary-plan'),
        summaryScreens: document.getElementById('summary-screens'),
        summaryRenewal: document.getElementById('summary-renewal'),
        summaryPromotion: document.getElementById('summary-promotion'),
        promotionRow: document.getElementById('promotion-row'),
        totalPrice: document.getElementById('total-price'),
        submitBtn: document.getElementById('submit-btn'),
        nameInput: document.getElementById('name'),
        phoneInput: document.getElementById('phone'),
        successModal: document.getElementById('success-modal'),
        loadingOverlay: document.getElementById('loading-overlay'),
        modalSummary: document.getElementById('modal-summary')
    };
}

// Configurar event listeners
function setupEventListeners() {
    // Cambio de plataforma
    elements.platformSelect.addEventListener('change', handlePlatformChange);
    
    // Cambio de duración
    elements.durationSelect.addEventListener('change', handleDurationChange);
    
    // Cambio de pantallas
    elements.screensSelect.addEventListener('change', handleScreensChange);
    
    // Cambio de renovación
    elements.renewalRadios.forEach(radio => {
        radio.addEventListener('change', handleRenewalChange);
    });
    
    // Envío del formulario
    elements.form.addEventListener('submit', handleFormSubmit);
    
    // Validación en tiempo real
    elements.nameInput.addEventListener('input', validateName);
    elements.phoneInput.addEventListener('input', validatePhone);
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Configurar validación del formulario
function setupFormValidation() {
    const inputs = [elements.nameInput, elements.phoneInput, elements.platformSelect];
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
            checkFormValidity();
        });
    });
}

// Manejar cambio de plataforma
function handlePlatformChange() {
    const platformId = elements.platformSelect.value;
    
    if (!platformId) {
        hidePlatformDetails();
        return;
    }
    
    const platformData = getPlatformData(platformId);
    if (!platformData) {
        console.error('Platform data not found:', platformId);
        return;
    }
    
    formState.selectedPlatform = platformId;
    showPlatformDetails(platformData);
    populateDurationOptions(platformData);
    checkForPromotions(platformId);
    
    // Resetear selecciones posteriores
    resetSelections();
    checkFormValidity();
}

// Mostrar detalles de la plataforma
function showPlatformDetails(platformData) {
    elements.platformImg.src = platformData.image;
    elements.platformImg.alt = platformData.name;
    elements.platformTitle.textContent = platformData.name;
    elements.platformDescription.innerHTML = `
        <p>${platformData.description}</p>
        <div class="platform-features">
            ${platformData.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        ${platformData.warning ? `<div class="platform-warning">⚠️ ${platformData.warning}</div>` : ''}
    `;
    
    // Mostrar opciones de precios
    displayPricingOptions(platformData);
    
    elements.platformDetails.style.display = 'block';
    elements.platformDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Mostrar opciones de precios
function displayPricingOptions(platformData) {
    const pricingHTML = Object.entries(platformData.plans).map(([planKey, planData]) => {
        const screenOptions = Object.entries(planData.screens).map(([screens, prices]) => {
            const withRenewal = formatPrice(prices['con-renovacion']);
            const withoutRenewal = formatPrice(prices['sin-renovacion']);
            
            return `
                <div class="pricing-row">
                    <span>${screens} pantalla${screens > 1 ? 's' : ''}</span>
                    <div class="pricing-values">
                        <span class="price-renewal">Con renovación: ${withRenewal}</span>
                        <span class="price-no-renewal">Sin renovación: ${withoutRenewal}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="plan-pricing">
                <h4>${planData.name}</h4>
                ${screenOptions}
            </div>
        `;
    }).join('');
    
    elements.pricingOptions.innerHTML = pricingHTML;
}

// Ocultar detalles de la plataforma
function hidePlatformDetails() {
    elements.platformDetails.style.display = 'none';
    elements.planSelection.style.display = 'none';
    elements.promotionsSection.style.display = 'none';
    elements.priceSummary.style.display = 'none';
}

// Poblar opciones de duración
function populateDurationOptions(platformData) {
    elements.durationSelect.innerHTML = '<option value="">-- Seleccione duración --</option>';
    
    Object.entries(platformData.plans).forEach(([planKey, planData]) => {
        const option = document.createElement('option');
        option.value = planKey;
        option.textContent = planData.name;
        elements.durationSelect.appendChild(option);
    });
    
    elements.planSelection.style.display = 'block';
}

// Manejar cambio de duración
function handleDurationChange() {
    const duration = elements.durationSelect.value;
    
    if (!duration || !formState.selectedPlatform) {
        return;
    }
    
    formState.selectedDuration = duration;
    populateScreensOptions();
    resetPriceCalculation();
    checkFormValidity();
}

// Poblar opciones de pantallas
function populateScreensOptions() {
    const platformData = getPlatformData(formState.selectedPlatform);
    const planData = platformData.plans[formState.selectedDuration];
    
    elements.screensSelect.innerHTML = '<option value="">-- Seleccione pantallas --</option>';
    
    Object.keys(planData.screens).forEach(screens => {
        const option = document.createElement('option');
        option.value = screens;
        option.textContent = `${screens} pantalla${screens > 1 ? 's' : ''}`;
        elements.screensSelect.appendChild(option);
    });
}

// Manejar cambio de pantallas
function handleScreensChange() {
    const screens = elements.screensSelect.value;
    
    if (!screens) {
        return;
    }
    
    formState.selectedScreens = screens;
    resetPriceCalculation();
    checkFormValidity();
}

// Manejar cambio de renovación
function handleRenewalChange() {
    const selectedRenewal = document.querySelector('input[name="renewal"]:checked');
    
    if (!selectedRenewal) {
        return;
    }
    
    formState.selectedRenewal = selectedRenewal.value;
    calculatePrice();
    updatePriceSummary();
    checkFormValidity();
}

// Verificar promociones disponibles
function checkForPromotions(platformId) {
    const promotions = getPlatformPromotions(platformId);
    
    if (promotions.length > 0) {
        displayPromotions(promotions);
        elements.promotionsSection.style.display = 'block';
    } else {
        elements.promotionsSection.style.display = 'none';
    }
}

// Mostrar promociones disponibles
function displayPromotions(promotions) {
    const promotionsHTML = promotions.map(promotion => `
        <div class="promotion-item">
            <label class="promotion-label">
                <input type="radio" name="promotion" value="${promotion.name}">
                <span class="promotion-custom"></span>
                <div class="promotion-info">
                    <h4>${promotion.name}</h4>
                    <p>${promotion.description}</p>
                </div>
            </label>
        </div>
    `).join('');
    
    elements.availablePromotions.innerHTML = promotionsHTML;
    
    // Agregar event listeners a las promociones
    const promotionRadios = elements.availablePromotions.querySelectorAll('input[name="promotion"]');
    promotionRadios.forEach(radio => {
        radio.addEventListener('change', handlePromotionChange);
    });
}

// Manejar cambio de promoción
function handlePromotionChange() {
    const selectedPromotion = document.querySelector('input[name="promotion"]:checked');
    formState.selectedPromotion = selectedPromotion ? selectedPromotion.value : null;
    
    calculatePrice();
    updatePriceSummary();
}

// Calcular precio
function calculatePrice() {
    if (!formState.selectedPlatform || !formState.selectedDuration || 
        !formState.selectedScreens || !formState.selectedRenewal) {
        return;
    }
    
    let price = 0;
    
    if (formState.selectedPromotion) {
        price = calculatePromotionPrice(
            formState.selectedPlatform,
            formState.selectedDuration,
            formState.selectedScreens,
            formState.selectedRenewal,
            formState.selectedPromotion
        );
    }
    
    if (!price) {
        price = getRegularPrice(
            formState.selectedPlatform,
            formState.selectedDuration,
            formState.selectedScreens,
            formState.selectedRenewal
        );
    }
    
    formState.calculatedPrice = price || 0;
}

// Actualizar resumen de precios
function updatePriceSummary() {
    if (formState.calculatedPrice === 0) {
        elements.priceSummary.style.display = 'none';
        return;
    }
    
    const platformData = getPlatformData(formState.selectedPlatform);
    const planData = platformData.plans[formState.selectedDuration];
    
    elements.summaryPlatform.textContent = platformData.name;
    elements.summaryPlan.textContent = planData.name;
    elements.summaryScreens.textContent = `${formState.selectedScreens} pantalla${formState.selectedScreens > 1 ? 's' : ''}`;
    elements.summaryRenewal.textContent = formState.selectedRenewal === 'con-renovacion' ? 'Con Renovación' : 'Sin Renovación';
    
    if (formState.selectedPromotion) {
        elements.summaryPromotion.textContent = formState.selectedPromotion;
        elements.promotionRow.style.display = 'flex';
    } else {
        elements.promotionRow.style.display = 'none';
    }
    
    elements.totalPrice.textContent = formatPrice(formState.calculatedPrice);
    elements.priceSummary.style.display = 'block';
    
    // Scroll suave al resumen
    elements.priceSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Resetear selecciones
function resetSelections() {
    formState.selectedDuration = null;
    formState.selectedScreens = null;
    formState.selectedRenewal = null;
    formState.selectedPromotion = null;
    formState.calculatedPrice = 0;
    
    elements.durationSelect.value = '';
    elements.screensSelect.value = '';
    elements.renewalRadios.forEach(radio => radio.checked = false);
    
    const promotionRadios = document.querySelectorAll('input[name="promotion"]');
    promotionRadios.forEach(radio => radio.checked = false);
}

// Resetear cálculo de precio
function resetPriceCalculation() {
    formState.selectedRenewal = null;
    formState.selectedPromotion = null;
    formState.calculatedPrice = 0;
    
    elements.renewalRadios.forEach(radio => radio.checked = false);
    elements.priceSummary.style.display = 'none';
    
    const promotionRadios = document.querySelectorAll('input[name="promotion"]');
    promotionRadios.forEach(radio => radio.checked = false);
}

// Validar campo individual
function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    
    switch (fieldName) {
        case 'name':
            return validateName();
        case 'phone':
            return validatePhone();
        case 'platform':
            return validatePlatform();
        default:
            return true;
    }
}

// Validar nombre
function validateName() {
    const name = elements.nameInput.value.trim();
    const errorElement = document.getElementById('name-error');
    
    if (name.length < 2) {
        showFieldError(elements.nameInput, errorElement, 'El nombre debe tener al menos 2 caracteres');
        return false;
    }
    
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
        showFieldError(elements.nameInput, errorElement, 'El nombre solo puede contener letras y espacios');
        return false;
    }
    
    clearFieldError(elements.nameInput, errorElement);
    return true;
}

// Validar teléfono
function validatePhone() {
    const phone = elements.phoneInput.value.trim();
    const errorElement = document.getElementById('phone-error');
    
    // Patrón para teléfonos argentinos
    const phonePattern = /^(\+54\s?)?(\d{2,4}\s?)?\d{6,8}$/;
    
    if (!phonePattern.test(phone.replace(/[\s-]/g, ''))) {
        showFieldError(elements.phoneInput, errorElement, 'Ingrese un número de teléfono válido argentino');
        return false;
    }
    
    clearFieldError(elements.phoneInput, errorElement);
    return true;
}

// Validar plataforma
function validatePlatform() {
    const platform = elements.platformSelect.value;
    const errorElement = document.getElementById('platform-error');
    
    if (!platform) {
        showFieldError(elements.platformSelect, errorElement, 'Debe seleccionar una plataforma');
        return false;
    }
    
    clearFieldError(elements.platformSelect, errorElement);
    return true;
}

// Mostrar error de campo
function showFieldError(field, errorElement, message) {
    field.style.borderColor = 'var(--error-color)';
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Limpiar error de campo
function clearFieldError(field, errorElement = null) {
    field.style.borderColor = '';
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

// Verificar validez del formulario
function checkFormValidity() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isPlatformValid = validatePlatform();
    const isPlanComplete = formState.calculatedPrice > 0;
    
    const isFormValid = isNameValid && isPhoneValid && isPlatformValid && isPlanComplete;
    
    elements.submitBtn.disabled = !isFormValid;
    
    if (isFormValid) {
        elements.submitBtn.classList.add('ready');
    } else {
        elements.submitBtn.classList.remove('ready');
    }
    
    return isFormValid;
}

// Manejar envío del formulario
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!checkFormValidity()) {
        showNotification('Por favor complete todos los campos correctamente', 'error');
        return;
    }
    
    // Recopilar datos del formulario
    const formData = {
        nombre: elements.nameInput.value.trim(),
        telefono: elements.phoneInput.value.trim(),
        plataforma: getPlatformData(formState.selectedPlatform).name,
        plan: getPlatformData(formState.selectedPlatform).plans[formState.selectedDuration].name,
        pantallas: formState.selectedScreens,
        renovacion: formState.selectedRenewal === 'con-renovacion' ? 'Con Renovación' : 'Sin Renovación',
        promocion: formState.selectedPromotion || 'Ninguna',
        precio: formState.calculatedPrice,
        fecha: new Date().toLocaleString('es-AR'),
        pais: CONFIG.country
    };
    
    formState.formData = formData;
    
    // Mostrar loading
    showLoading();
    
    try {
        // Enviar a Google Sheets (si está configurado)
        if (CONFIG.googleSheetsUrl) {
            await sendToGoogleSheets(formData);
        }
        
        // Mostrar modal de éxito
        hideLoading();
        showSuccessModal();
        
    } catch (error) {
        console.error('Error al enviar formulario:', error);
        hideLoading();
        showNotification('Error al procesar el pedido. Será redirigido a WhatsApp.', 'warning');
        
        // Redirigir a WhatsApp después de 2 segundos
        setTimeout(() => {
            openWhatsAppWithOrder();
        }, 2000);
    }
}

// Enviar datos a Google Sheets
async function sendToGoogleSheets(data) {
    if (!CONFIG.googleSheetsUrl) {
        throw new Error('Google Sheets URL not configured');
    }
    
    const response = await fetch(CONFIG.googleSheetsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

// Mostrar loading
function showLoading() {
    elements.loadingOverlay.style.display = 'flex';
    elements.submitBtn.disabled = true;
    elements.submitBtn.querySelector('.btn-text').style.display = 'none';
    elements.submitBtn.querySelector('.btn-loader').style.display = 'flex';
}

// Ocultar loading
function hideLoading() {
    elements.loadingOverlay.style.display = 'none';
    elements.submitBtn.disabled = false;
    elements.submitBtn.querySelector('.btn-text').style.display = 'block';
    elements.submitBtn.querySelector('.btn-loader').style.display = 'none';
}

// Mostrar modal de éxito
function showSuccessModal() {
    const summaryHTML = `
        <div class="order-summary">
            <h4>Detalles del Pedido:</h4>
            <p><strong>Cliente:</strong> ${formState.formData.nombre}</p>
            <p><strong>Teléfono:</strong> ${formState.formData.telefono}</p>
            <p><strong>Plataforma:</strong> ${formState.formData.plataforma}</p>
            <p><strong>Plan:</strong> ${formState.formData.plan}</p>
            <p><strong>Pantallas:</strong> ${formState.formData.pantallas}</p>
            <p><strong>Renovación:</strong> ${formState.formData.renovacion}</p>
            ${formState.formData.promocion !== 'Ninguna' ? `<p><strong>Promoción:</strong> ${formState.formData.promocion}</p>` : ''}
            <p class="total-price"><strong>Total: ${formatPrice(formState.formData.precio)}</strong></p>
        </div>
    `;
    
    elements.modalSummary.innerHTML = summaryHTML;
    elements.successModal.style.display = 'flex';
    
    // Auto-redirigir a WhatsApp después de 3 segundos
    setTimeout(() => {
        openWhatsAppWithOrder();
    }, 3000);
}

// Cerrar modal
function closeModal() {
    elements.successModal.style.display = 'none';
}

// Abrir WhatsApp con el pedido
function openWhatsAppWithOrder() {
    const data = formState.formData;
    const message = `🎬 *NUEVO PEDIDO - STREAMING ARGENTINA*

👤 *Cliente:* ${data.nombre}
📱 *Teléfono:* ${data.telefono}

🎯 *DETALLES DEL PEDIDO:*
• *Plataforma:* ${data.plataforma}
• *Plan:* ${data.plan}
• *Pantallas:* ${data.pantallas}
• *Renovación:* ${data.renovacion}
${data.promocion !== 'Ninguna' ? `• *Promoción:* ${data.promocion}` : ''}

💰 *TOTAL A PAGAR: ${formatPrice(data.precio)}*

📅 *Fecha:* ${data.fecha}

¡Gracias por elegir StreamingARG! 🚀`;

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Cerrar modal después de abrir WhatsApp
    setTimeout(() => {
        closeModal();
        resetForm();
    }, 1000);
}

// Abrir WhatsApp general
function openWhatsApp() {
    const message = `¡Hola! Me interesa conocer más sobre las plataformas streaming disponibles. 🎬`;
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Seleccionar plataforma desde las cards
function selectPlatform(platformId) {
    elements.platformSelect.value = platformId;
    handlePlatformChange();
    
    // Scroll al formulario
    elements.form.scrollIntoView({ behavior: 'smooth' });
}

// Resetear formulario
function resetForm() {
    elements.form.reset();
    formState = {
        selectedPlatform: null,
        selectedDuration: null,
        selectedScreens: null,
        selectedRenewal: null,
        selectedPromotion: null,
        calculatedPrice: 0,
        formData: {}
    };
    
    hidePlatformDetails();
    elements.submitBtn.disabled = true;
    
    // Limpiar errores
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
    
    // Limpiar estilos de error
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Agregar estilos si no existen
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            .notification-info { background: var(--accent-blue); }
            .notification-success { background: var(--success-color); }
            .notification-warning { background: var(--warning-color); }
            .notification-error { background: var(--error-color); }
            .notification button {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Funciones globales para uso en HTML
window.openWhatsApp = openWhatsApp;
window.openWhatsAppWithOrder = openWhatsAppWithOrder;
window.selectPlatform = selectPlatform;
window.closeModal = closeModal;

// Debug: Exponer funciones para testing
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.formState = formState;
    window.CONFIG = CONFIG;
    window.resetForm = resetForm;
    console.log('🔧 Debug mode enabled. Access formState and CONFIG from console.');
}
