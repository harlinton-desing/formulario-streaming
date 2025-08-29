/**
 * GESTION MOON - Sistema de Streaming Premium
 * JavaScript completo con funcionalidad de pestañas y formulario
 * Versión: 2.0
 */

// ===================================
// BASE DE DATOS DE PLATAFORMAS
// ===================================
const platformsData = {
    'chatgpt': {
        name: '🤖 ChatGPT Plus Oficial',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/19e33ab1-f6fb-45b0-99e3-84fa177cdd10.png',
        description: '1 dispositivo - 30 días de acceso completo a GPT-4',
        features: [
            '✅ Acceso a GPT-4 y GPT-4o',
            '✅ Respuestas más rápidas',
            '✅ Acceso prioritario en horas pico',
            '✅ Plugins y herramientas avanzadas'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 10000,
                        'sin-renovacion': 10000
                    }
                }
            }
        },
        promotions: []
    },
    
    'movies-app': {
        name: '📱 Aplicación de Películas y Series (Solo Android)',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e2925d4b-bc16-4edd-8e7a-1e561717219c.png',
        description: '30 días - Hasta 3 dispositivos Android',
        features: [
            '📱 Solo para dispositivos Android',
            '🎬 Miles de películas en HD',
            '📺 Series actualizadas diariamente',
            '🔄 Contenido en español y subtitulado'
        ],
        plans: {
            '1-month': {
                name: '30 días',
                screens: {
                    '3': {
                        'con-renovacion': 4000,
                        'sin-renovacion': 4000
                    }
                }
            }
        },
        promotions: []
    },
    
    'disney': {
        name: '🏰 Disney+ ESPN',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50b680cb-4514-4fe5-b64b-06b5bc6e35e2.png',
        description: 'Acceso completo a Disney+ y ESPN en vivo',
        features: [
            '🏰 Todo el contenido Disney',
            '⚽ ESPN deportes en vivo',
            '🎭 Marvel, Star Wars y Pixar',
            '📺 Contenido familiar premium'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 5000,
                        'sin-renovacion': 6500
                    }
                }
            }
        },
        promotions: []
    },
    
    'rakuten': {
        name: '🎌 Rakuten VikiViki – Perfil Privado',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/311271ee-f4e9-4e1c-9239-f694d849bd9a.png',
        description: 'Dramas asiáticos y contenido exclusivo con subtítulos',
        features: [
            '🎌 Dramas coreanos exclusivos',
            '🇯🇵 Contenido japonés premium',
            '🇨🇳 Series chinas populares',
            '🔒 Perfil completamente privado'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 6000,
                        'sin-renovacion': 6500
                    }
                }
            }
        },
        promotions: []
    },
    
    'crunchyroll': {
        name: '🎌 Crunchyroll Megafan',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/baf60cc1-c0af-4b21-8a4c-4dfe08901ca5.png',
        description: 'La mejor plataforma de anime del mundo',
        features: [
            '🎌 Miles de animes en simulcast',
            '📱 Descarga offline disponible',
            '🎭 Estrenos simultáneos con Japón',
            '🔊 Audio original japonés'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 4500,
                        'sin-renovacion': 5000
                    }
                }
            }
        },
        promotions: []
    },
    
    'max': {
        name: '🟣 Max (ex HBO Max)',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b79b68a-0f89-41dc-b091-2bc2f0393b90.png',
        description: 'Contenido premium de HBO y Warner Bros',
        features: [
            '🎬 Películas de estreno Warner',
            '📺 Series HBO exclusivas',
            '🦸 Universo DC completo',
            '🏆 Contenido premiado mundialmente'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 5000,
                        'sin-renovacion': 8000
                    },
                    '2': {
                        'con-renovacion': 9000,
                        'sin-renovacion': 12000
                    }
                }
            }
        },
        promotions: []
    },
    
    'prime': {
        name: '🚀 Prime Video',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb7db6aa-127a-4e21-a143-eba6ace057bb.png',
        description: 'Películas y series exclusivas de Amazon',
        features: [
            '🎬 Contenido original Amazon',
            '📦 Beneficios Prime incluidos',
            '🌍 Contenido global premium',
            '📱 Compatible con todos los dispositivos'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 4500,
                        'sin-renovacion': 5000
                    }
                }
            }
        },
        promotions: []
    },
    
    'paramount': {
        name: '🔵 Paramount+ – Perfil Privado',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91b6911a-cbb8-48fa-be32-471a40eff28a.png',
        description: 'Contenido de Paramount y CBS en vivo',
        features: [
            '🎬 Películas Paramount exclusivas',
            '📺 Series CBS en vivo',
            '⚽ Deportes y eventos especiales',
            '🔒 Perfil completamente privado'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 1500,
                        'sin-renovacion': 2000
                    }
                }
            }
        },
        promotions: []
    },
    
    'vix': {
        name: '📺 Vix Premium – Perfil Privado',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8273ae58-09d6-4ae0-8caf-ed2ec6fe883a.png',
        description: 'Contenido en español y deportes latinos',
        features: [
            '🇲🇽 Contenido mexicano premium',
            '📺 Telenovelas y series latinas',
            '⚽ Deportes latinos en vivo',
            '🔒 Perfil completamente privado'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 4500,
                        'sin-renovacion': 5500
                    }
                }
            }
        },
        promotions: []
    },
    
    'youtube': {
        name: '▶ YouTube Premium – Grupo Familiar',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83a68719-7eba-4337-9760-9dbe9fcd4e8b.png',
        description: 'Sin anuncios + YouTube Music incluido',
        features: [
            '🚫 Sin anuncios en YouTube',
            '🎵 YouTube Music Premium',
            '📱 Descarga offline ilimitada',
            '👨‍👩‍👧‍👦 Grupo familiar hasta 6 personas'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 4500,
                        'sin-renovacion': 4500
                    }
                }
            },
            '2-months': {
                name: '2 Meses',
                screens: {
                    '1': {
                        'con-renovacion': 8000,
                        'sin-renovacion': 8000
                    }
                }
            },
            '3-months': {
                name: '3 Meses',
                screens: {
                    '1': {
                        'con-renovacion': 12000,
                        'sin-renovacion': 12000
                    }
                }
            }
        },
        promotions: []
    },
    
    'netflix-premium': {
        name: '🎬 Netflix Premium 4K – Cuenta Compartida',
        image: 'https://placehold.co/300x200/E50914/FFFFFF?text=NETFLIX+PREMIUM',
        description: 'Calidad Ultra HD (4K) - Perfil privado con PIN',
        features: [
            '🛡️ Perfil privado con PIN personal',
            '📺 Calidad Ultra HD (4K) garantizada',
            '👥 Cuenta compartida estable',
            '🔄 Transferencia de perfil incluida'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 8000,
                        'sin-renovacion': 8500
                    },
                    '2': {
                        'con-renovacion': 14000,
                        'sin-renovacion': 15000
                    }
                }
            }
        },
        promotions: [],
        warning: '⚠️ ¿Qué pasa si aparece "Estoy de viaje" o "Actualizar hogar"? Tranquilo, nosotros transferimos tu perfil a otra cuenta para que sigas usando sin interrupciones.'
    },
    
    'netflix-standard': {
        name: '🟢 Netflix Estándar HD – Cuenta Compartida',
        image: 'https://placehold.co/300x200/E50914/FFFFFF?text=NETFLIX+HD',
        description: 'Calidad HD (1080p) - Perfil privado con PIN',
        features: [
            '🛡️ Perfil privado con PIN personal',
            '📺 Calidad HD (1080p) excelente',
            '👥 Cuenta compartida confiable',
            '✅ Sin mensajes si ambas pantallas están en el mismo Wi-Fi'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 7000,
                        'sin-renovacion': 7500
                    },
                    '2': {
                        'con-renovacion': 13000,
                        'sin-renovacion': 14000
                    }
                }
            }
        },
        promotions: [],
        warning: '📌 Cada 15 días puede aparecer en la TV el mensaje: "Estoy de viaje" o "Actualizar hogar". Nosotros transferimos tu perfil sin que pierdas acceso.'
    },
    
    'netflix-private': {
        name: '🔴 Netflix Extra Privado – Cuenta Individual',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18bb5ad0-550e-4489-9147-3973ab1b6a7c.png',
        description: 'Cuenta 100% privada y exclusiva para ti',
        features: [
            '✨ Cuenta 100% privada y exclusiva',
            '🔐 Sin mensajes ni bloqueos nunca',
            '📺 Calidad Ultra HD (4K) garantizada',
            '🏠 Sin restricciones de ubicación'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 8500,
                        'sin-renovacion': 9500
                    }
                }
            }
        },
        promotions: []
    },
    
    'canva': {
        name: '🎨 CANVA PRO – RENOVABLE',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b92b98d8-2bd9-407f-a615-0099bb0275dd.png',
        description: 'Herramientas de diseño profesional completas',
        features: [
            '🎨 Plantillas premium ilimitadas',
            '📸 Millones de fotos y elementos',
            '🔤 Fuentes exclusivas premium',
            '☁️ Almacenamiento en la nube ilimitado'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '1': {
                        'con-renovacion': 4000,
                        'sin-renovacion': 4000
                    }
                }
            },
            '3-months': {
                name: '3 Meses',
                screens: {
                    '1': {
                        'con-renovacion': 9000,
                        'sin-renovacion': 9000
                    }
                }
            },
            '6-months': {
                name: '6 Meses',
                screens: {
                    '1': {
                        'con-renovacion': 16000,
                        'sin-renovacion': 16000
                    }
                }
            },
            '12-months': {
                name: '12 Meses',
                screens: {
                    '1': {
                        'con-renovacion': 30000,
                        'sin-renovacion': 30000
                    }
                }
            }
        },
        promotions: []
    },
    
    'xtv': {
        name: '✅ XTV en Vivo',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fa3d523-bfcc-41f0-9538-841329b69404.png',
        description: '3 dispositivos - TV en vivo y deportes',
        features: [
            '📺 Canales en vivo HD',
            '⚽ Deportes premium en vivo',
            '🎬 Películas 24/7 rotativas',
            '📱 Hasta 3 dispositivos simultáneos'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '3': {
                        'con-renovacion': 5000,
                        'sin-renovacion': 5000
                    }
                }
            },
            '2-months': {
                name: '2 Meses',
                screens: {
                    '3': {
                        'con-renovacion': 9000,
                        'sin-renovacion': 9000
                    }
                }
            },
            '3-months': {
                name: '3 Meses',
                screens: {
                    '3': {
                        'con-renovacion': 15500,
                        'sin-renovacion': 15500
                    }
                }
            }
        },
        promotions: [
            {
                name: 'XTV Nuevos Clientes',
                description: 'Promoción especial solo para nuevos clientes - Precio reducido',
                plans: {
                    '1-month': {
                        screens: {
                            '1': {
                                'con-renovacion': 3500,
                                'sin-renovacion': 3500
                            }
                        }
                    },
                    '2-months': {
                        screens: {
                            '1': {
                                'con-renovacion': 4500,
                                'sin-renovacion': 4500
                            },
                            '2': {
                                'con-renovacion': 5500,
                                'sin-renovacion': 5500
                            }
                        }
                    },
                    '3-months': {
                        screens: {
                            '2': {
                                'con-renovacion': 7500,
                                'sin-renovacion': 7500
                            }
                        }
                    }
                }
            }
        ]
    },
    
    'tv-online': {
        name: '📡 TV Online Plus',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c21b0a61-2a08-4251-ad0b-904fed5360ff.png',
        description: '3 dispositivos - Canales premium internacionales',
        features: [
            '📺 Canales HD premium',
            '🌎 Contenido internacional variado',
            '⚽ Deportes en vivo exclusivos',
            '📱 Hasta 3 dispositivos simultáneos'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '3': {
                        'con-renovacion': 5500,
                        'sin-renovacion': 5500
                    }
                }
            },
            '2-months': {
                name: '2 Meses',
                screens: {
                    '3': {
                        'con-renovacion': 10000,
                        'sin-renovacion': 10000
                    }
                }
            },
            '3-months': {
                name: '3 Meses',
                screens: {
                    '3': {
                        'con-renovacion': 15500,
                        'sin-renovacion': 15500
                    }
                }
            }
        },
        promotions: [
            {
                name: 'TV Online Plus Promoción',
                description: 'Promoción única por cliente - Descuento especial en planes largos',
                plans: {
                    '3-months': {
                        screens: {
                            '3': {
                                'con-renovacion': 14500,
                                'sin-renovacion': 14500
                            }
                        }
                    },
                    '6-months': {
                        screens: {
                            '3': {
                                'con-renovacion': 29500,
                                'sin-renovacion': 29500
                            }
                        }
                    }
                }
            }
        ]
    },
    
    'tv-sg': {
        name: '📡 TV SG DIGITAL IPTV',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/237d928c-258f-447b-98b7-1b973db3dc6b.png',
        description: '3 dispositivos - IPTV premium con VOD',
        features: [
            '📺 IPTV de alta calidad',
            '🎬 VOD (Video On Demand) incluido',
            '⚽ Deportes premium exclusivos',
            '📱 Hasta 3 dispositivos simultáneos'
        ],
        plans: {
            '1-month': {
                name: '1 Mes',
                screens: {
                    '3': {
                        'con-renovacion': 5000,
                        'sin-renovacion': 5000
                    }
                }
            },
            '2-months': {
                name: '2 Meses',
                screens: {
                    '3': {
                        'con-renovacion': 9000,
                        'sin-renovacion': 9000
                    }
                }
            },
            '3-months': {
                name: '3 Meses',
                screens: {
                    '3': {
                        'con-renovacion': 12500,
                        'sin-renovacion': 12500
                    }
                }
            }
        },
        promotions: []
    }
};

// ===================================
// CONFIGURACIÓN GLOBAL
// ===================================
const CONFIG = {
    whatsappNumber: '+5493816282866',
    googleSheetsUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec',
    currency: 'ARS',
    country: 'Argentina',
    autoCarouselInterval: 4000,
    autoRedirectDelay: 3000,
    toastDuration: 5000
};

// ===================================
// ESTADO GLOBAL
// ===================================
let appState = {
    currentTab: 'streaming',
    currentSlide: 0,
    carouselInterval: null,
    totalSlides: 6,
    selectedPlatform: null,
    selectedDuration: null,
    selectedScreens: null,
    selectedRenewal: null,
    selectedPromotion: null,
    calculatedPrice: 0,
    formData: {},
    isLoading: false,
    isModalOpen: false
};

// ===================================
// ELEMENTOS DEL DOM
// ===================================
let elements = {};

// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando GESTION MOON...');
    
    try {
        initializeElements();
        setupEventListeners();
        initializeCarousel();
        initializeTabs();
        setupFormValidation();
        
        console.log('✅ GESTION MOON inicializado correctamente!');
        showToast('¡Bienvenido a GESTION MOON! 🎬', 'success');
    } catch (error) {
        console.error('❌ Error al inicializar:', error);
        showToast('Error al cargar la aplicación', 'error');
    }
});

function initializeElements() {
    elements = {
        tabButtons: document.querySelectorAll('.tab-btn'),
        tabContents: document.querySelectorAll('.tab-content'),
        carouselTrack: document.getElementById('carousel-track'),
        carouselIndicators: document.getElementById('carousel-indicators'),
        carouselSlides: document.querySelectorAll('.carousel-slide'),
        form: document.getElementById('streamingForm'),
        platformSelect: document.getElementById('platform'),
        platformDetails: document.getElementById('platform-details'),
        platformImg: document.getElementById('platform-img'),
        platformTitle: document.getElementById('platform-title'),
        platformDescription: document.getElementById('platform-description'),
        pricingPreview: document.getElementById('pricing-preview'),
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
        nameInput: document.getElementById('name'),
        phoneInput: document.getElementById('phone'),
        submitBtn: document.getElementById('submit-btn'),
        successModal: document.getElementById('success-modal'),
        loadingOverlay: document.getElementById('loading-overlay'),
        modalSummary: document.getElementById('modal-summary'),
        toastContainer: document.getElementById('toast-container')
    };
    
    const criticalElements = ['form', 'platformSelect', 'tabButtons', 'carouselTrack'];
    criticalElements.forEach(key => {
        if (!elements[key] || (Array.isArray(elements[key]) && elements[key].length === 0)) {
            throw new Error(`Elemento crítico no encontrado: ${key}`);
        }
    });
}

function setupEventListeners() {
    elements.tabButtons.forEach(button => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });
    
    const indicators = elements.carouselIndicators.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    elements.platformSelect.addEventListener('change', handlePlatformChange);
    elements.durationSelect.addEventListener('change', handleDurationChange);
    elements.screensSelect.addEventListener('change', handleScreensChange);
    
    elements.renewalRadios.forEach(radio => {
        radio.addEventListener('change', handleRenewalChange);
    });
    
    elements.form.addEventListener('submit', handleFormSubmit);
    elements.nameInput.addEventListener('input', validateName);
    elements.phoneInput.addEventListener('input', validatePhone);
    
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', pauseCarousel);
        carouselContainer.addEventListener('mouseleave', resumeCarousel);
    }
}

// ===================================
// SISTEMA DE PESTAÑAS
// ===================================
function initializeTabs() {
    switchTab('streaming');
}

function switchTab(tabId) {
    appState.currentTab = tabId;
    
    elements.tabButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.tab === tabId);
    });
    
    elements.tabContents.forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tabId}`);
    });
    
    const targetContent = document.getElementById(`tab-${tabId}`);
    if (targetContent) {
        targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    console.log(`📊 Pestaña cambiada a: ${tabId}`);
}

// ===================================
// SISTEMA DE CARRUSEL
// ===================================
function initializeCarousel() {
    startCarousel();
    updateCarouselIndicators();
}

function startCarousel() {
    if (appState.carouselInterval) {
        clearInterval(appState.carouselInterval);
    }
    
    appState.carouselInterval = setInterval(() => {
        nextSlide();
    }, CONFIG.autoCarouselInterval);
}

function pauseCarousel() {
    if (appState.carouselInterval) {
        clearInterval(appState.carouselInterval);
        appState.carouselInterval = null;
    }
}

function resumeCarousel() {
    if (!appState.carouselInterval) {
        startCarousel();
    }
}

function goToSlide(slideIndex) {
    appState.currentSlide = slideIndex;
    
    const translateX = -(slideIndex * (100 / appState.totalSlides));
    elements.carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    updateCarouselIndicators();
}

function nextSlide() {
    appState.currentSlide = (appState.currentSlide + 1) % appState.totalSlides;
    goToSlide(appState.currentSlide);
}

function previousSlide() {
    appState.currentSlide = (appState.currentSlide - 1 + appState.totalSlides) % appState.totalSlides;
    goToSlide(appState.currentSlide);
}

function updateCarouselIndicators() {
    const indicators = elements.carouselIndicators.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === appState.currentSlide);
    });
}

// ===================================
// VALIDACIÓN DE FORMULARIO
// ===================================
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

function validateField(field) {
    const fieldName = field.name || field.id;
    
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

function validatePhone() {
    const phone = elements.phoneInput.value.trim();
    const errorElement = document.getElementById('phone-error');
    
    const phonePattern = /^(\+54\s?)?(\d{2,4}\s?)?\d{6,8}$/;
    
    if (!phonePattern.test(phone.replace(/[\s-]/g, ''))) {
        showFieldError(elements.phoneInput, errorElement, 'Ingrese un número de teléfono válido argentino');
        return false;
    }
    
    clearFieldError(elements.phoneInput, errorElement);
    return true;
}

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

function showFieldError(field, errorElement, message) {
    field.style.borderColor = 'var(--error-color)';
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearFieldError(field, errorElement = null) {
    field.style.borderColor = '';
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

function checkFormValidity() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isPlatformValid = validatePlatform();
    const isPlanComplete = appState.calculatedPrice > 0;
    
    const isFormValid = isNameValid && isPhoneValid && isPlatformValid && isPlanComplete;
    
    elements.submitBtn.disabled = !isFormValid;
    
    if (isFormValid) {
        elements.submitBtn.classList.add('ready');
    } else {
        elements.submitBtn.classList.remove('ready');
    }
    
    return isFormValid;
}

// ===================================
// MANEJO DE PLATAFORMAS
// ===================================
function handlePlatformChange() {
    const platformId = elements.platformSelect.value;
    
    if (!platformId) {
        hidePlatformDetails();
        return;
    }
    
    const platformData = getPlatformData(platformId);
    if (!platformData) {
        console.error('Platform data not found:', platformId);
        showToast('Error: Plataforma no encontrada', 'error');
        return;
    }
    
    appState.selectedPlatform = platformId;
    showPlatformDetails(platformData);
    populateDurationOptions(platformData);
    checkForPromotions(platformId);
    
    resetSelections();
    checkFormValidity();
    
    if (appState.currentTab !== 'formulario') {
        switchTab('formulario');
    }
}

function showPlatformDetails(platformData) {
    elements.platformImg.src = platformData.image;
    elements.platformImg.alt = platformData.name;
    elements.platformTitle.textContent = platformData.name;
    
    const descriptionHTML = `
        <p class="platform-desc">${platformData.description}</p>
        <div class="platform-features-list">
            ${platformData.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        ${platformData.warning ? `<div class="platform-warning">⚠️ ${platformData.warning}</div>` : ''}
    `;
    
    elements.platformDescription.innerHTML = descriptionHTML;
    displayPricingPreview(platformData);
    
    elements.platformDetails.style.display = 'block';
    elements.platformDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function displayPricingPreview(platformData) {
    const pricingHTML = Object.entries(platformData.plans).map(([planKey, planData]) => {
        const screenOptions = Object.entries(planData.screens).map(([screens, prices]) => {
            const withRenewal = formatPrice(prices['con-renovacion']);
            const withoutRenewal = formatPrice(prices['sin-renovacion']);
            
            return `
                <div class="pricing-row">
                    <span class="screens-info">${screens} pantalla${screens > 1 ? 's' : ''}</span>
                    <div class="pricing-values">
                        <span class="price-renewal">Con renovación: ${withRenewal}</span>
                        <span class="price-no-renewal">Sin renovación: ${withoutRenewal}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="plan-pricing-preview">
                <h4>${planData.name}</h4>
                ${screenOptions}
            </div>
        `;
    }).join('');
    
    elements.pricingPreview.innerHTML = pricingHTML;
}

function hidePlatformDetails() {
    elements.platformDetails.style.display = 'none';
    elements.planSelection.style.display = 'none';
    elements.promotionsSection.style.display = 'none';
    elements.priceSummary.style.display = 'none';
}

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

function handleDurationChange() {
    const duration = elements.durationSelect.value;
    
    if (!duration || !appState.selectedPlatform) {
        return;
    }
    
    appState.selectedDuration = duration;
    populateScreensOptions();
    resetPriceCalculation();
    checkFormValidity();
}

function populateScreensOptions() {
    const platformData = getPlatformData(appState.selectedPlatform);
    const planData = platformData.plans[appState.selectedDuration];
    
    elements.screensSelect.innerHTML = '<option value="">-- Seleccione pantallas --</option>';
    
    Object.keys(planData.screens).forEach(screens => {
        const option = document.createElement('option');
        option.value = screens;
        option.textContent = `${screens} pantalla${screens > 1 ? 's' : ''}`;
        elements.screensSelect.appendChild(option);
    });
}

function handleScreensChange() {
    const screens = elements.screensSelect.value;
    
    if (!screens) {
        return;
    }
    
    appState.selectedScreens = screens;
    resetPriceCalculation();
    checkFormValidity();
}

function handleRenewalChange() {
    const selectedRenewal = document.querySelector('input[name="renewal"]:checked');
    
    if (!selectedRenewal) {
        return;
    }
    
    appState.selectedRenewal = selectedRenewal.value;
    calculatePrice();
    updatePriceSummary();
    checkFormValidity();
}

// ===================================
// SISTEMA DE PROMOCIONES
// ===================================
function checkForPromotions(platformId) {
    const promotions = getPlatformPromotions(platformId);
    
    if (promotions.length > 0) {
        displayPromotions(promotions);
        elements.promotionsSection.style.display = 'block';
    } else {
        elements.promotionsSection.style.display = 'none';
    }
}

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
    
    const promotionRadios = elements.availablePromotions.querySelectorAll('input[name="promotion"]');
    promotionRadios.forEach(radio => {
        radio.addEventListener('change', handlePromotionChange);
    });
}

function handlePromotionChange() {
    const selectedPromotion = document.querySelector('input[name="promotion"]:checked');
    appState.selectedPromotion = selectedPromotion ? selectedPromotion.value : null;
    
    calculatePrice();
    updatePriceSummary();
}

// ===================================
// CÁLCULO DE PRECIOS
// ===================================
function calculatePrice() {
    if (!appState.selectedPlatform || !appState.selectedDuration || 
        !appState.selectedScreens || !appState.selectedRenewal) {
        return;
    }
    
    let price = 0;
    
    if (appState.selectedPromotion) {
        price = calculatePromotionPrice(
            appState.selectedPlatform,
            appState.selectedDuration,
            appState.selectedScreens,
            appState.selectedRenewal,
            appState.selectedPromotion
        );
    }
    
    if (!price) {
        price = getRegularPrice(
            appState.selectedPlatform,
            appState.selectedDuration,
            appState.selectedScreens,
            appState.selectedRenewal
        );
    }
    
    appState.calculatedPrice = price || 0;
}

function updatePriceSummary() {
    if (appState.calculatedPrice === 0) {
        elements.priceSummary.style.display = 'none';
        return;
    }
    
    const platformData = getPlatformData(appState.selectedPlatform);
    const planData = platformData.plans[appState.selectedDuration];
    
    elements.summaryPlatform.textContent = platformData.name;
    elements.summaryPlan.textContent = planData.name;
    elements.summaryScreens.textContent = `${appState.selectedScreens} pantalla${appState.selectedScreens > 1 ? 's' : ''}`;
    elements.summaryRenewal.textContent = appState.selectedRenewal === 'con-renovacion' ? 'Con Renovación' : 'Sin Renovación';
    
    if (appState.selectedPromotion) {
        elements.summaryPromotion.textContent = appState.selectedPromotion;
        elements.promotionRow.style.display = 'flex';
    } else {
        elements.promotionRow.style.display = 'none';
    }
    
    elements.totalPrice.textContent = formatPrice(appState.calculatedPrice);
    elements.priceSummary.style.display = 'block';
    
    elements.priceSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetSelections() {
    appState.selectedDuration = null;
    appState.selectedScreens = null;
    appState.selectedRenewal = null;
    appState.selectedPromotion = null;
    appState.calculatedPrice = 0;
    
    elements.durationSelect.value = '';
    elements.screensSelect.value = '';
    elements.renewalRadios.forEach(radio => radio.checked = false);
    
    const promotionRadios = document.querySelectorAll('input[name="promotion"]');
    promotionRadios.forEach(radio => radio.checked = false);
}

function resetPriceCalculation() {
    appState.selectedRenewal = null;
    appState.selectedPromotion = null;
    appState.calculatedPrice = 0;
    
    elements.renewalRadios.forEach(radio => radio.checked = false);
    elements.priceSummary.style.display = 'none';
    
    const promotionRadios = document.querySelectorAll('input[name="promotion"]');
    promotionRadios.forEach(radio => radio.checked = false);
}

// ===================================
// ENVÍO DE FORMULARIO
// ===================================
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!checkFormValidity()) {
        showToast('Por favor complete todos los campos correctamente', 'error');
        return;
    }
    
    const formData = {
        nombre: elements.nameInput.value.trim(),
        telefono: elements.phoneInput.value.trim(),
        plataforma: getPlatformData(appState.selectedPlatform).name,
        plan: getPlatformData(appState.selectedPlatform).plans[appState.selectedDuration].name,
        pantallas: appState.selectedScreens,
        renovacion: appState.selectedRenewal === 'con-renovacion' ? 'Con Renovación' : 'Sin Renovación',
        promocion: appState.selectedPromotion || 'Ninguna',
        precio: appState.calculatedPrice,
        fecha: new Date().toLocaleString('es-AR'),
        pais: CONFIG.country,
        valorPlan: appState.calculatedPrice,
        tipoRenovacion: appState.selectedRenewal
    };
    
    appState.formData = formData;
    
    showLoading();
    
    try {
        const response = await sendToGoogleSheets(formData);
        console.log('✅ Respuesta de Google Sheets:', response);
        
        hideLoading();
        showSuccessModal();
        
    } catch (error) {
        console.error('❌ Error al enviar formulario:', error);
        hideLoading();
        showToast('Error al guardar datos. Será redirigido a WhatsApp.', 'warning');
        
        setTimeout(() => {
            openWhatsAppWithOrder();
        }, 2000);
    }
}

async function sendToGoogleSheets(data) {
    try {
        if (!CONFIG.googleSheetsUrl || CONFIG.googleSheetsUrl.includes('YOUR_SCRIPT_ID_HERE')) {
            console.warn('⚠️ Google Sheets URL no configurada correctamente');
            return { success: false, message: 'URL no configurada' };
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
    } catch (error) {
        console.error('❌ Error al enviar a Google Sheets:', error);
        throw error;
    }
}

// ===================================
// UI Y MODALES
// ===================================
function showLoading() {
    appState.isLoading = true;
    elements.loadingOverlay.style.display = 'flex';
    elements.submitBtn.disabled = true;
    elements.submitBtn.querySelector('.btn-text').style.display = 'none';
    elements.submitBtn.querySelector('.btn-loader').style.display = 'flex';
}

function hideLoading() {
    appState.isLoading = false;
    elements.loadingOverlay.style.display = 'none';
    elements.submitBtn.disabled = false;
    elements.submitBtn.querySelector('.btn-text').style.display = 'block';
    elements.submitBtn.querySelector('.btn-loader').style.display = 'none';
}

function showSuccessModal() {
    const summaryHTML = `
        <div class="order-summary">
            <h4>📋 Detalles del Pedido:</h4>
            <p><strong>Cliente:</strong> ${appState.formData.nombre}</p>
            <p><strong>Teléfono:</strong> ${appState.formData.telefono}</p>
            <p><strong>Plataforma:</strong> ${appState.formData.plataforma}</p>
            <p><strong>Plan:</strong> ${appState.formData.plan}</p>
            <p><strong>Pantallas:</strong> ${appState.formData.pantallas}</p>
            <p><strong>Renovación:</strong> ${appState.formData.renovacion}</p>
            ${appState.formData.promocion !== 'Ninguna' ? `<p><strong>Promoción:</strong> ${appState.formData.promocion}</p>` : ''}
            <p class="total-price"><strong>💰 Total: ${formatPrice(appState.formData.precio)}</strong></p>
        </div>
    `;
    
    elements.modalSummary.innerHTML = summaryHTML;
    elements.successModal.style.display = 'flex';
    appState.isModalOpen = true;
    
    setTimeout(() => {
        if (appState.isModalOpen) {
            openWhatsAppWithOrder();
        }
    }, CONFIG.autoRedirectDelay);
}

function closeModal() {
    elements.successModal.style.display = 'none';
    appState.isModalOpen = false;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, CONFIG.toastDuration);
}

// ===================================
// WHATSAPP INTEGRATION
// ===================================
function openWhatsAppWithOrder() {
    const data = appState.formData;
    const message = `🎬 *NUEVO PEDIDO - GESTION MOON*

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

¡Gracias por elegir GESTION MOON! 🚀

_Mensaje generado automáticamente desde nuestro formulario web_`;

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
        closeModal();
        resetForm();
        showToast('¡Pedido enviado! Revisa WhatsApp para continuar.', 'success');
    }, 1000);
}

function openWhatsApp() {
    const message = `¡Hola! 👋 

Me interesa conocer más sobre las plataformas streaming disponibles en GESTION MOON. 🎬

¿Podrían ayudarme con información sobre precios y disponibilidad?

¡Gracias!`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ===================================
// FUNCIONES DE SELECCIÓN
// ===================================
function selectPlatform(platformId) {
    elements.platformSelect.value = platformId;
    handlePlatformChange();
    
    switchTab('formulario');
    
    setTimeout(() => {
        elements.form.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

function selectPlatformFromCarousel(platformId) {
    selectPlatform(platformId);
    showToast('Plataforma seleccionada. Complete el formulario.', 'info');
}

// ===================================
// UTILIDADES
// ===================================
function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function getPlatformData(platformId) {
    return platformsData[platformId] || null;
}

function getAllPlatforms() {
    return platformsData;
}

function getPlatformPromotions(platformId) {
    const platform = platformsData[platformId];
    if (!platform) return [];
    
    return platform.promotions || [];
}

function calculatePromotionPrice(platformId, duration, screens, renewal, promotionId) {
    const promotions = getPlatformPromotions(platformId);
    const promotion = promotions.find(p => p.name === promotionId);
    
    if (!promotion) return null;
    
    const planData = promotion.plans[duration];
    if (!planData) return null;
    
    const screenData = planData.screens[screens];
    if (!screenData) return null;
    
    return screenData[renewal] || null;
}

function getRegularPrice(platformId, duration, screens, renewal) {
    const platform = platformsData[platformId];
    if (!platform) return null;
    
    const planData = platform.plans[duration];
    if (!planData) return null;
    
    const screenData = planData.screens[screens];
    if (!screenData) return null;
    
    return screenData[renewal] || null;
}

function resetForm() {
    elements.form.reset();
    appState.selectedPlatform = null;
    appState.selectedDuration = null;
    appState.selectedScreens = null;
    appState.selectedRenewal = null;
    appState.selectedPromotion = null;
    appState.calculatedPrice = 0;
    appState.formData = {};
    
    hidePlatformDetails();
    elements.submitBtn.disabled = true;
    elements.submitBtn.classList.remove('ready');
    
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
    
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// ===================================
// EVENTOS GLOBALES
// ===================================
function handleKeyDown(e) {
    if (e.key === 'Escape' && appState.isModalOpen) {
        closeModal();
    }
    
    if (e.key === 'ArrowLeft') {
        previousSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
}

function handleBeforeUnload(e) {
    if (appState.selectedPlatform && !appState.isModalOpen) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir? Se perderán los datos del formulario.';
        return e.returnValue;
    }
}

// ===================================
// FUNCIONES GLOBALES PARA HTML
// ===================================
window.openWhatsApp = openWhatsApp;
window.openWhatsAppWithOrder = openWhatsAppWithOrder;
window.selectPlatform = selectPlatform;
window.selectPlatformFromCarousel = selectPlatformFromCarousel;
window.closeModal = closeModal;
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide;
window.switchTab = switchTab;

// ===================================
// DEBUG Y DESARROLLO
// ===================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.appState = appState;
    window.CONFIG = CONFIG;
    window.platformsData = platformsData;
    window.resetForm = resetForm;
    window.showToast = showToast;
    
    console.log('🔧 Modo debug activado. Variables disponibles en window:', {
        appState: 'Estado de la aplicación',
        CONFIG: 'Configuración global',
        platformsData: 'Base de datos de plataformas',
        resetForm: 'Función para resetear formulario',
        showToast: 'Función para mostrar notificaciones'
    });
}

console.log('🎬 GESTION MOON Script cargado correctamente - v2.0');
