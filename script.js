// Configuración de Google Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Datos de plataformas de streaming
const STREAMING_PLATFORMS = [
    {
        id: 'chatgpt-plus',
        name: 'ChatGPT Plus Oficial',
        category: 'AI',
        description: '🤖 Acceso a GPT-4, respuestas más rápidas y nuevas funciones',
        image: 'https://placehold.co/80x80?text=ChatGPT+Logo+Green+Background',
        plans: [
            {
                id: 'chatgpt-basic',
                name: 'Plan Básico',
                screens: 1,
                duration: '30 días',
                renewalPrice: 10000,
                nonRenewalPrice: 10000,
                features: ['Acceso a GPT-4', 'Respuestas prioritarias', 'Nuevas funciones']
            }
        ]
    },
    {
        id: 'movies-series-android',
        name: 'Aplicación de Películas y Series (Solo Android)',
        category: 'Streaming',
        description: '📱 Miles de películas y series en tu dispositivo Android',
        image: 'https://placehold.co/80x80?text=Movies+App+Orange+Background',
        plans: [
            {
                id: 'movies-basic',
                name: 'Plan Básico',
                screens: 3,
                duration: '30 días',
                renewalPrice: 4000,
                nonRenewalPrice: 4000,
                features: ['Hasta 3 dispositivos', 'Contenido HD', 'Sin anuncios'],
                restrictions: ['Solo Android']
            }
        ]
    },
    {
        id: 'disney-espn',
        name: 'Disney+ ESPN',
        category: 'Streaming',
        description: '🏰 Contenido familiar de Disney + deportes en vivo de ESPN',
        image: 'https://placehold.co/80x80?text=Disney+Logo+Blue+Background',
        plans: [
            {
                id: 'disney-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 5000,
                nonRenewalPrice: 6500,
                features: ['Contenido Disney', 'ESPN en vivo', 'Calidad 4K']
            }
        ]
    },
    {
        id: 'rakuten-viki',
        name: '🎌 Rakuten VikiViki – Perfil Privado',
        category: 'Streaming',
        description: '🎭 Dramas asiáticos y contenido internacional con subtítulos',
        image: 'https://placehold.co/80x80?text=Viki+Logo+Purple+Background',
        plans: [
            {
                id: 'viki-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 6000,
                nonRenewalPrice: 6500,
                features: ['Perfil privado', 'Sin anuncios', 'Subtítulos múltiples']
            }
        ]
    },
    {
        id: 'crunchyroll',
        name: 'Crunchyroll Megafan',
        category: 'Streaming',
        description: '🍜 La mejor plataforma de anime con contenido exclusivo',
        image: 'https://placehold.co/80x80?text=Crunchyroll+Orange+Background',
        plans: [
            {
                id: 'crunchyroll-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 4500,
                nonRenewalPrice: 5000,
                features: ['Anime sin anuncios', 'Simulcasts', 'Manga premium']
            }
        ]
    },
    {
        id: 'max-hbo',
        name: '🟣 Max (ex HBO Max)',
        category: 'Streaming',
        description: '🎬 Contenido premium de HBO, Warner Bros y más',
        image: 'https://placehold.co/80x80?text=HBO+Max+Purple+Background',
        plans: [
            {
                id: 'max-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 5000,
                nonRenewalPrice: 8000,
                features: ['Contenido HBO', 'Estrenos Warner', 'Calidad 4K']
            },
            {
                id: 'max-2-screen',
                name: '2 Pantallas',
                screens: 2,
                duration: '30 días',
                renewalPrice: 9000,
                nonRenewalPrice: 12000,
                features: ['Contenido HBO', 'Estrenos Warner', 'Calidad 4K', '2 pantallas simultáneas']
            }
        ]
    },
    {
        id: 'prime-video',
        name: '🚀 Prime Video',
        category: 'Streaming',
        description: '📦 Películas, series exclusivas y beneficios de Amazon Prime',
        image: 'https://placehold.co/80x80?text=Prime+Video+Blue+Background',
        plans: [
            {
                id: 'prime-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 4500,
                nonRenewalPrice: 5000,
                features: ['Series Amazon Originals', 'Películas exclusivas', 'Calidad 4K']
            }
        ]
    },
    {
        id: 'paramount-plus',
        name: '🔵 Paramount+ – Perfil Privado',
        category: 'Streaming',
        description: '⭐ Contenido de Paramount, CBS, Nickelodeon y más',
        image: 'https://placehold.co/80x80?text=Paramount+Blue+Background',
        plans: [
            {
                id: 'paramount-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 1500,
                nonRenewalPrice: 2000,
                features: ['Perfil privado', 'Contenido CBS', 'Shows de Nickelodeon']
            }
        ]
    },
    {
        id: 'vix-premium',
        name: '📺 Vix Premium – Perfil Privado',
        category: 'Streaming',
        description: '🌟 Contenido en español, novelas, deportes y entretenimiento',
        image: 'https://placehold.co/80x80?text=Vix+Premium+Orange+Background',
        plans: [
            {
                id: 'vix-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 4500,
                nonRenewalPrice: 5500,
                features: ['Perfil privado', 'Contenido en español', 'Deportes en vivo']
            }
        ]
    },
    {
        id: 'youtube-premium',
        name: '▶ YouTube Premium – Grupo Familiar',
        category: 'Streaming',
        description: '🎵 YouTube sin anuncios + YouTube Music incluido',
        image: 'https://placehold.co/80x80?text=YouTube+Red+Background',
        plans: [
            {
                id: 'youtube-1-month',
                name: '1 Mes',
                screens: 1,
                duration: '1 mes',
                renewalPrice: 4500,
                nonRenewalPrice: 4500,
                features: ['Sin anuncios', 'YouTube Music', 'Descargas offline']
            },
            {
                id: 'youtube-2-months',
                name: '2 Meses',
                screens: 1,
                duration: '2 meses',
                renewalPrice: 8000,
                nonRenewalPrice: 8000,
                features: ['Sin anuncios', 'YouTube Music', 'Descargas offline']
            },
            {
                id: 'youtube-3-months',
                name: '3 Meses',
                screens: 1,
                duration: '3 meses',
                renewalPrice: 12000,
                nonRenewalPrice: 12000,
                features: ['Sin anuncios', 'YouTube Music', 'Descargas offline']
            }
        ]
    },
    {
        id: 'netflix-premium-4k',
        name: '🔵 Netflix Premium 4K – Cuenta Compartida',
        category: 'Streaming',
        description: '🛡️ Perfil privado con PIN, 📺 Calidad Ultra HD (4K), 👥 Cuenta compartida',
        image: 'https://placehold.co/80x80?text=Netflix+Red+Background',
        plans: [
            {
                id: 'netflix-premium-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 8000,
                nonRenewalPrice: 8500,
                features: ['Perfil privado con PIN', 'Calidad Ultra HD (4K)', 'Cuenta compartida']
            },
            {
                id: 'netflix-premium-2-screens',
                name: '2 Pantallas',
                screens: 2,
                duration: '30 días',
                renewalPrice: 14000,
                nonRenewalPrice: 15000,
                features: ['Perfil privado con PIN', 'Calidad Ultra HD (4K)', 'Cuenta compartida']
            }
        ]
    },
    {
        id: 'netflix-standard-hd',
        name: '🟢 Netflix Estándar HD – Cuenta Compartida',
        category: 'Streaming',
        description: '🛡️ Perfil privado con PIN, 📺 Calidad HD (1080p), 👥 Cuenta compartida',
        image: 'https://placehold.co/80x80?text=Netflix+Green+Background',
        plans: [
            {
                id: 'netflix-standard-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 7000,
                nonRenewalPrice: 7500,
                features: ['Perfil privado con PIN', 'Calidad HD (1080p)', 'Cuenta compartida']
            },
            {
                id: 'netflix-standard-2-screens',
                name: '2 Pantallas',
                screens: 2,
                duration: '30 días',
                renewalPrice: 13000,
                nonRenewalPrice: 14000,
                features: ['Perfil privado con PIN', 'Calidad HD (1080p)', 'Cuenta compartida']
            }
        ]
    },
    {
        id: 'netflix-extra-private',
        name: '🔴 Netflix Extra Privado – Cuenta Individual',
        category: 'Streaming',
        description: '✨ Cuenta 100% privada y exclusiva, 🔐 Sin mensajes ni bloqueos, 📺 Calidad Ultra HD (4K)',
        image: 'https://placehold.co/80x80?text=Netflix+Black+Background',
        plans: [
            {
                id: 'netflix-extra-1-screen',
                name: '1 Pantalla',
                screens: 1,
                duration: '30 días',
                renewalPrice: 8500,
                nonRenewalPrice: 9500,
                features: ['Cuenta 100% privada', 'Sin mensajes ni bloqueos', 'Calidad Ultra HD (4K)']
            }
        ]
    },
    {
        id: 'canva-pro',
        name: '🎨 CANVA PRO – RENOVABLE',
        category: 'Diseño',
        description: '🎨 Herramienta de diseño profesional con plantillas premium',
        image: 'https://placehold.co/80x80?text=Canva+Purple+Background',
        plans: [
            {
                id: 'canva-1-month',
                name: '1 Mes',
                screens: 1,
                duration: '1 mes',
                renewalPrice: 4000,
                nonRenewalPrice: 4000,
                features: ['Plantillas premium', 'Elementos pro', 'Fondos transparentes']
            },
            {
                id: 'canva-3-months',
                name: '3 Meses',
                screens: 1,
                duration: '3 meses',
                renewalPrice: 9000,
                nonRenewalPrice: 9000,
                features: ['Plantillas premium', 'Elementos pro', 'Fondos transparentes']
            },
            {
                id: 'canva-6-months',
                name: '6 Meses',
                screens: 1,
                duration: '6 meses',
                renewalPrice: 16000,
                nonRenewalPrice: 16000,
                features: ['Plantillas premium', 'Elementos pro', 'Fondos transparentes']
            },
            {
                id: 'canva-12-months',
                name: '12 Meses',
                screens: 1,
                duration: '12 meses',
                renewalPrice: 30000,
                nonRenewalPrice: 30000,
                features: ['Plantillas premium', 'Elementos pro', 'Fondos transparentes']
            }
        ]
    }
];

// Promociones disponibles
const PROMOTIONS = [
    {
        id: 'tv-online-plus-promo-3m',
        name: 'TV Online Plus - 3 meses',
        description: 'Promoción única por cliente',
        price: 14500,
        duration: '3 meses',
        screens: 3,
        restrictions: ['Solo una vez por cliente en contratación y renovación']
    },
    {
        id: 'tv-online-plus-promo-6m',
        name: 'TV Online Plus - 6 meses',
        description: 'Promoción única por cliente',
        price: 29500,
        duration: '6 meses',
        screens: 3,
        restrictions: ['Solo una vez por cliente en contratación y renovación']
    },
    {
        id: 'nebula-promo-3m',
        name: 'Nebula - 3 meses',
        description: 'Promoción única por cliente',
        price: 14700,
        duration: '3 meses',
        screens: 3,
        restrictions: ['Solo una vez por cliente en contratación y renovación']
    },
    {
        id: 'nebula-promo-6m',
        name: 'Nebula - 6 meses',
        description: 'Promoción única por cliente',
        price: 29500,
        duration: '6 meses',
        screens: 3,
        restrictions: ['Solo una vez por cliente en contratación y renovación']
    },
    {
        id: 'xtv-new-1m',
        name: 'XTV en Vivo - 1 mes (nuevos)',
        description: 'Solo para nuevos clientes',
        price: 3500,
        duration: '1 mes',
        screens: 1,
        restrictions: ['Solo nuevos clientes']
    },
    {
        id: 'xtv-new-2m-1screen',
        name: 'XTV en Vivo - 2 meses (1 dispositivo)',
        description: 'Solo para nuevos clientes',
        price: 4500,
        duration: '2 meses',
        screens: 1,
        restrictions: ['Solo nuevos clientes']
    },
    {
        id: 'xtv-new-2m-2screens',
        name: 'XTV en Vivo - 2 meses (2 dispositivos)',
        description: 'Solo para nuevos clientes',
        price: 5500,
        duration: '2 meses',
        screens: 2,
        restrictions: ['Solo nuevos clientes']
    },
    {
        id: 'xtv-new-3m-2screens',
        name: 'XTV en Vivo - 3 meses (2 dispositivos)',
        description: 'Solo para nuevos clientes',
        price: 7500,
        duration: '3 meses',
        screens: 2,
        restrictions: ['Solo nuevos clientes']
    }
];

// Variables globales
let selectedPlatform = null;
let selectedPlan = null;
let currentRenewalType = 'renewal';

// Formatear precio en pesos colombianos
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
    loadPromotions();
});

// Inicializar formulario
function initializeForm() {
    populatePlatformSelect();
    setupSmoothScrolling();
}

// Configurar smooth scrolling para los enlaces de navegación
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Poblar el select de plataformas
function populatePlatformSelect() {
    const platformSelect = document.getElementById('plataforma');
    
    STREAMING_PLATFORMS.forEach(platform => {
        const option = document.createElement('option');
        option.value = platform.id;
        option.textContent = platform.name;
        option.dataset.category = platform.category;
        platformSelect.appendChild(option);
    });
}

// Configurar event listeners
function setupEventListeners() {
    const form = document.getElementById('streamingForm');
    const platformSelect = document.getElementById('plataforma');
    const planSelect = document.getElementById('plan');
    const renewalRadios = document.querySelectorAll('input[name="tipoRenovacion"]');
    const newRequestBtn = document.getElementById('new-request');

    // Cambio de plataforma
    platformSelect.addEventListener('change', handlePlatformChange);
    
    // Cambio de plan
    planSelect.addEventListener('change', handlePlanChange);
    
    // Cambio de tipo de renovación
    renewalRadios.forEach(radio => {
        radio.addEventListener('change', handleRenewalTypeChange);
    });
    
    // Envío del formulario
    form.addEventListener('submit', handleFormSubmit);
    
    // Nueva solicitud
    newRequestBtn.addEventListener('click', resetForm);
    
    // Validación en tiempo real
    setupRealTimeValidation();
}

// Manejar cambio de plataforma
function handlePlatformChange(e) {
    const platformId = e.target.value;
    
    if (!platformId) {
        hidePlatformInfo();
        hidePlanSelection();
        hideRenewalSection();
        hidePlanFeatures();
        updatePlanValue(0);
        return;
    }
    
    selectedPlatform = STREAMING_PLATFORMS.find(p => p.id === platformId);
    
    if (selectedPlatform) {
        showPlatformInfo(selectedPlatform);
        populatePlanSelect(selectedPlatform.plans);
        showPlanSelection();
    }
}

// Mostrar información de la plataforma
function showPlatformInfo(platform) {
    const platformInfo = document.getElementById('platform-info');
    const platformImage = document.getElementById('platform-image');
    const platformTitle = document.getElementById('platform-title');
    const platformDescription = document.getElementById('platform-description');
    
    platformImage.src = platform.image;
    platformImage.alt = platform.name;
    platformTitle.textContent = platform.name;
    platformDescription.textContent = platform.description;
    
    platformInfo.style.display = 'block';
}

// Ocultar información de la plataforma
function hidePlatformInfo() {
    document.getElementById('platform-info').style.display = 'none';
}

// Poblar el select de planes
function populatePlanSelect(plans) {
    const planSelect = document.getElementById('plan');
    
    // Limpiar opciones existentes
    planSelect.innerHTML = '<option value="">Seleccione un plan</option>';
    
    plans.forEach(plan => {
        const option = document.createElement('option');
        option.value = plan.id;
        option.textContent = `${plan.name} - ${plan.screens} pantalla${plan.screens > 1 ? 's' : ''} • ${plan.duration}`;
        planSelect.appendChild(option);
    });
}

// Mostrar selección de plan
function showPlanSelection() {
    document.getElementById('plan-group').style.display = 'block';
}

// Ocultar selección de plan
function hidePlanSelection() {
    document.getElementById('plan-group').style.display = 'none';
    document.getElementById('plan').value = '';
}

// Manejar cambio de plan
function handlePlanChange(e) {
    const planId = e.target.value;
    
    if (!planId || !selectedPlatform) {
        hideRenewalSection();
        hidePlanFeatures();
        updatePlanValue(0);
        return;
    }
    
    selectedPlan = selectedPlatform.plans.find(p => p.id === planId);
    
    if (selectedPlan) {
        showRenewalSection(selectedPlan);
        showPlanFeatures(selectedPlan);
        updatePlanValue(selectedPlan[currentRenewalType + 'Price']);
    }
}

// Mostrar sección de renovación
function showRenewalSection(plan) {
    const renewalSection = document.getElementById('renewal-section');
    const renewalPrice = document.getElementById('renewal-price');
    const nonRenewalPrice = document.getElementById('non-renewal-price');
    
    renewalPrice.textContent = formatPrice(plan.renewalPrice);
    nonRenewalPrice.textContent = formatPrice(plan.nonRenewalPrice);
    
    renewalSection.style.display = 'block';
}

// Ocultar sección de renovación
function hideRenewalSection() {
    document.getElementById('renewal-section').style.display = 'none';
}

// Mostrar características del plan
function showPlanFeatures(plan) {
    if (!plan.features || plan.features.length === 0) {
        hidePlanFeatures();
        return;
    }
    
    const planFeatures = document.getElementById('plan-features');
    const featuresList = document.getElementById('features-list');
    
    featuresList.innerHTML = '';
    plan.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    planFeatures.style.display = 'block';
}

// Ocultar características del plan
function hidePlanFeatures() {
    document.getElementById('plan-features').style.display = 'none';
}

// Manejar cambio de tipo de renovación
function handleRenewalTypeChange(e) {
    currentRenewalType = e.target.value;
    
    if (selectedPlan) {
        const price = selectedPlan[currentRenewalType + 'Price'];
        updatePlanValue(price);
    }
    
    // Actualizar estilos visuales
    updateRenewalCardStyles();
}

// Actualizar estilos de las tarjetas de renovación
function updateRenewalCardStyles() {
    const renewalCard = document.getElementById('renewal-card');
    const nonRenewalCard = document.getElementById('non-renewal-card');
    
    renewalCard.classList.toggle('selected', currentRenewalType === 'renewal');
    nonRenewalCard.classList.toggle('selected', currentRenewalType === 'non-renewal');
}

// Actualizar valor del plan
function updatePlanValue(price) {
    const valorPlanInput = document.getElementById('valorPlan');
    valorPlanInput.value = formatPrice(price);
}

// Cargar promociones
function loadPromotions() {
    const promocionesContainer = document.getElementById('promociones-container');
    
    PROMOTIONS.forEach(promotion => {
        const promocionCard = createPromotionCard(promotion);
        promocionesContainer.appendChild(promocionCard);
    });
}

// Crear tarjeta de promoción
function createPromotionCard(promotion) {
    const card = document.createElement('div');
    card.className = 'promocion-card';
    card.innerHTML = `
        <div class="promocion-header">
            <input type="checkbox" id="promo-${promotion.id}" name="promociones" value="${promotion.id}" class="promocion-checkbox">
            <div class="promocion-content">
                <h4>${promotion.name}</h4>
                <p class="promocion-description">${promotion.description}</p>
                <div class="promocion-details">
                    <span class="promocion-price">${formatPrice(promotion.price)}</span>
                    <span class="promocion-badge">${promotion.screens} pantalla${promotion.screens > 1 ? 's' : ''} • ${promotion.duration}</span>
                </div>
                ${promotion.restrictions ? `<p class="promocion-restrictions">${promotion.restrictions.join(', ')}</p>` : ''}
            </div>
        </div>
    `;
    
    // Agregar event listener para el checkbox
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        card.classList.toggle('selected', this.checked);
    });
    
    return card;
}

// Configurar validación en tiempo real
function setupRealTimeValidation() {
    const inputs = document.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

// Validar campo individual
function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Validación por tipo de campo
    switch (fieldName) {
        case 'nombre':
            if (!value) {
                isValid = false;
                errorMessage = 'El nombre es requerido';
            } else if (value.length < 2) {
                isValid = false;
                errorMessage = 'El nombre debe tener al menos 2 caracteres';
            }
            break;
            
        case 'telefono':
            if (!value) {
                isValid = false;
                errorMessage = 'El teléfono es requerido';
            } else if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) {
                isValid = false;
                errorMessage = 'El teléfono debe tener 10 dígitos';
            }
            break;
            
        case 'plataforma':
            if (!value) {
                isValid = false;
                errorMessage = 'Debe seleccionar una plataforma';
            }
            break;
            
        case 'plan':
            if (!value) {
                isValid = false;
                errorMessage = 'Debe seleccionar un plan';
            }
            break;
    }
    
    // Mostrar/ocultar mensaje de error
    showFieldError(field, isValid, errorMessage);
    
    return isValid;
}

// Mostrar error de campo
function showFieldError(field, isValid, errorMessage) {
    const errorElement = document.getElementById(field.name + '-error');
    
    if (isValid) {
        field.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    } else {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
    }
}

// Validar formulario completo
function validateForm() {
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Manejar envío del formulario
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        showNotification('Por favor, corrija los errores en el formulario', 'error');
        return;
    }
    
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const loadingSpinner = document.getElementById('loading-spinner');
    
    // Mostrar estado de carga
    submitBtn.disabled = true;
    submitText.textContent = 'Enviando...';
    loadingSpinner.style.display = 'inline-block';
    
    try {
        const formData = collectFormData();
        const response = await submitToGoogleSheets(formData);
        
        if (response.result === 'success') {
            showSuccessMessage();
        } else {
            throw new Error(response.message || 'Error al enviar el formulario');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error al enviar el formulario. Por favor, intente nuevamente.', 'error');
    } finally {
        // Restaurar estado del botón
        submitBtn.disabled = false;
        submitText.textContent = 'Enviar Solicitud';
        loadingSpinner.style.display = 'none';
    }
}

// Recopilar datos del formulario
function collectFormData() {
    const formData = {
        nombre: document.getElementById('nombre').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        plataforma: selectedPlatform ? selectedPlatform.name : '',
        plan: selectedPlan ? selectedPlan.name : '',
        valorPlan: selectedPlan ? selectedPlan[currentRenewalType + 'Price'] : 0,
        tipoRenovacion: currentRenewalType,
        promociones: []
    };
    
    // Recopilar promociones seleccionadas
    const selectedPromotions = document.querySelectorAll('input[name="promociones"]:checked');
    selectedPromotions.forEach(checkbox => {
        const promotion = PROMOTIONS.find(p => p.id === checkbox.value);
        if (promotion) {
            formData.promociones.push(promotion.name);
        }
    });
    
    return formData;
}

// Enviar datos a Google Sheets
async function submitToGoogleSheets(formData) {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    const form = document.getElementById('streamingForm');
    const successMessage = document.getElementById('success-message');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Scroll al mensaje de éxito
    successMessage.scrollIntoView({ behavior: 'smooth' });
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
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
                z-index: 1000;
                max-width: 400px;
                padding: 16px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                animation: slideIn 0.3s ease-out;
            }
            
            .notification-success {
                background: #10b981;
                color: white;
            }
            
            .notification-error {
                background: #ef4444;
                color: white;
            }
            
            .notification-info {
                background: #2563eb;
                color: white;
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                margin-left: 12px;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Configurar cierre automático
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            removeNotification(notification);
        }
    }, 5000);
}

// Remover notificación
function removeNotification(notification) {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Resetear formulario
function resetForm() {
    const form = document.getElementById('streamingForm');
    const successMessage = document.getElementById('success-message');
    
    // Limpiar formulario
    form.reset();
    
    // Resetear variables globales
    selectedPlatform = null;
    selectedPlan = null;
    currentRenewalType = 'renewal';
    
    // Ocultar secciones
    hidePlatformInfo();
    hidePlanSelection();
    hideRenewalSection();
    hidePlanFeatures();
    updatePlanValue(0);
    
    // Limpiar errores
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
    
    // Desmarcar promociones
    const promotionCards = document.querySelectorAll('.promocion-card');
    promotionCards.forEach(card => {
        card.classList.remove('selected');
    });
    
    const promotionCheckboxes = document.querySelectorAll('input[name="promociones"]');
    promotionCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Mostrar formulario y ocultar mensaje de éxito
    form.style.display = 'block';
    successMessage.style.display = 'none';
    
    // Scroll al formulario
    form.scrollIntoView({ behavior: 'smooth' });
    
    showNotification('Formulario reiniciado. Puede realizar una nueva solicitud.', 'info');
}

// Funciones de utilidad adicionales

// Validar número de teléfono colombiano
function validateColombianPhone(phone) {
    const cleanPhone = phone.replace(/\s/g, '');
    // Acepta números de 10 dígitos que empiecen con 3 (móviles) o números fijos
    return /^[3][0-9]{9}$/.test(cleanPhone) || /^[1-8][0-9]{6,7}$/.test(cleanPhone);
}

// Formatear número de teléfono
function formatPhoneNumber(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length === 10) {
        return cleanPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    }
    return phone;
}

// Detectar dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Configurar comportamiento específico para móviles
function setupMobileBehavior() {
    if (isMobileDevice()) {
        // Agregar clase para estilos específicos de móvil
        document.body.classList.add('mobile-device');
        
        // Mejorar experiencia táctil
        const cards = document.querySelectorAll('.platform-card, .promocion-card, .renewal-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
}

// Configurar lazy loading para imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[src*="placehold.co"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Configurar analytics (opcional)
function trackEvent(eventName, eventData = {}) {
    // Aquí puedes integrar con Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Ejemplo para Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Configurar eventos de analytics
function setupAnalytics() {
    // Tracking de selección de plataforma
    document.getElementById('plataforma').addEventListener('change', function(e) {
        if (e.target.value) {
            trackEvent('platform_selected', {
                platform: e.target.value,
                platform_name: selectedPlatform?.name
            });
        }
    });
    
    // Tracking de selección de plan
    document.getElementById('plan').addEventListener('change', function(e) {
        if (e.target.value) {
            trackEvent('plan_selected', {
                plan: e.target.value,
                plan_name: selectedPlan?.name,
                platform: selectedPlatform?.id
            });
        }
    });
    
    // Tracking de envío de formulario
    document.getElementById('streamingForm').addEventListener('submit', function() {
        trackEvent('form_submitted', {
            platform: selectedPlatform?.id,
            plan: selectedPlan?.id,
            renewal_type: currentRenewalType
        });
    });
}

// Inicializar funcionalidades adicionales
document.addEventListener('DOMContentLoaded', function() {
    setupMobileBehavior();
    setupLazyLoading();
    setupAnalytics();
    
    // Configurar formato automático de teléfono
    const phoneInput = document.getElementById('telefono');
    phoneInput.addEventListener('input', function(e) {
        const formatted = formatPhoneNumber(e.target.value);
        if (formatted !== e.target.value) {
            e.target.value = formatted;
        }
    });
    
    // Prevenir envío accidental del formulario
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.type !== 'submit') {
            e.preventDefault();
        }
    });
});

// Manejar errores globales
window.addEventListener('error', function(e) {
    console.error('Error global:', e.error);
    showNotification('Ha ocurrido un error inesperado. Por favor, recargue la página.', 'error');
});

// Manejar errores de promesas no capturadas
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rejection no manejada:', e.reason);
    showNotification('Error de conexión. Por favor, verifique su conexión a internet.', 'error');
});
