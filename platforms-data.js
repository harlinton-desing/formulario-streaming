// Base de datos de plataformas streaming para Argentina
const platformsData = {
    'chatgpt': {
        name: 'ChatGPT Plus Oficial',
        image: 'https://via.placeholder.com/300x200/10A37F/FFFFFF?text=ChatGPT',
        description: '1 dispositivo - 30 días de acceso completo',
        features: [
            '✅ Acceso a GPT-4',
            '✅ Respuestas más rápidas',
            '✅ Acceso prioritario',
            '✅ Plugins disponibles'
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
        name: 'Aplicación de Películas y Series (Solo Android)',
        image: 'https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=MOVIES',
        description: '30 días - Hasta 3 dispositivos Android',
        features: [
            '📱 Solo para Android',
            '🎬 Miles de películas',
            '📺 Series actualizadas',
            '🔄 Contenido en español'
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
        name: 'Disney+ ESPN',
        image: 'https://via.placeholder.com/300x200/113CCF/FFFFFF?text=DISNEY+',
        description: 'Acceso completo a Disney+ y ESPN',
        features: [
            '🏰 Contenido Disney',
            '⚽ ESPN deportes',
            '🎭 Marvel y Star Wars',
            '📺 Contenido familiar'
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
        image: 'https://via.placeholder.com/300x200/FF6B9D/FFFFFF?text=VIKI',
        description: 'Dramas asiáticos y contenido exclusivo',
        features: [
            '🎌 Dramas coreanos',
            '🇯🇵 Contenido japonés',
            '🇨🇳 Series chinas',
            '🔒 Perfil privado'
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
        name: 'Crunchyroll Megafan',
        image: 'https://via.placeholder.com/300x200/FF6500/FFFFFF?text=CRUNCHYROLL',
        description: 'La mejor plataforma de anime',
        features: [
            '🎌 Miles de animes',
            '📱 Descarga offline',
            '🎭 Simulcast',
            '🔊 Audio original'
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
        image: 'https://via.placeholder.com/300x200/7B2CBF/FFFFFF?text=MAX',
        description: 'Contenido premium de HBO y Warner',
        features: [
            '🎬 Películas de estreno',
            '📺 Series HBO',
            '🦸 DC Comics',
            '🏆 Contenido premiado'
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
        image: 'https://via.placeholder.com/300x200/00A8E1/FFFFFF?text=PRIME',
        description: 'Películas y series exclusivas de Amazon',
        features: [
            '🎬 Contenido original',
            '📦 Beneficios Prime',
            '🌍 Contenido global',
            '📱 Múltiples dispositivos'
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
        image: 'https://via.placeholder.com/300x200/0066CC/FFFFFF?text=PARAMOUNT',
        description: 'Contenido de Paramount y CBS',
        features: [
            '🎬 Películas Paramount',
            '📺 Series CBS',
            '⚽ Deportes en vivo',
            '🔒 Perfil privado'
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
        image: 'https://via.placeholder.com/300x200/FF4B4B/FFFFFF?text=VIX',
        description: 'Contenido en español y latino',
        features: [
            '🇲🇽 Contenido mexicano',
            '📺 Telenovelas',
            '⚽ Deportes latinos',
            '🔒 Perfil privado'
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
        image: 'https://via.placeholder.com/300x200/FF0000/FFFFFF?text=YOUTUBE',
        description: 'Sin anuncios + YouTube Music',
        features: [
            '🚫 Sin anuncios',
            '🎵 YouTube Music',
            '📱 Descarga offline',
            '👨‍👩‍👧‍👦 Grupo familiar'
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
        image: 'https://via.placeholder.com/300x200/E50914/FFFFFF?text=NETFLIX',
        description: 'Calidad Ultra HD (4K) - Perfil privado con PIN',
        features: [
            '🛡️ Perfil privado con PIN',
            '📺 Calidad Ultra HD (4K)',
            '👥 Cuenta compartida',
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
        image: 'https://via.placeholder.com/300x200/E50914/FFFFFF?text=NETFLIX+HD',
        description: 'Calidad HD (1080p) - Perfil privado con PIN',
        features: [
            '🛡️ Perfil privado con PIN',
            '📺 Calidad HD (1080p)',
            '👥 Cuenta compartida',
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
        image: 'https://via.placeholder.com/300x200/E50914/FFFFFF?text=NETFLIX+PRIVATE',
        description: 'Cuenta 100% privada y exclusiva',
        features: [
            '✨ Cuenta 100% privada y exclusiva',
            '🔐 Sin mensajes ni bloqueos',
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
        image: 'https://via.placeholder.com/300x200/00C4CC/FFFFFF?text=CANVA',
        description: 'Herramientas de diseño profesional',
        features: [
            '🎨 Plantillas premium',
            '📸 Millones de fotos',
            '🔤 Fuentes exclusivas',
            '☁️ Almacenamiento ilimitado'
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
        image: 'https://via.placeholder.com/300x200/00FF00/000000?text=XTV',
        description: '3 dispositivos - TV en vivo',
        features: [
            '📺 Canales en vivo',
            '⚽ Deportes premium',
            '🎬 Películas 24/7',
            '📱 3 dispositivos'
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
                description: 'Promoción especial solo para nuevos clientes',
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
        image: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=TV+ONLINE',
        description: '3 dispositivos - Canales premium',
        features: [
            '📺 Canales HD',
            '🌎 Contenido internacional',
            '⚽ Deportes en vivo',
            '📱 3 dispositivos'
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
                description: 'Promoción única por cliente',
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
        image: 'https://via.placeholder.com/300x200/FF8C00/FFFFFF?text=TV+SG',
        description: '3 dispositivos - IPTV premium',
        features: [
            '📺 IPTV de calidad',
            '🎬 VOD incluido',
            '⚽ Deportes premium',
            '📱 3 dispositivos'
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

// Promociones globales especiales
const globalPromotions = [
    {
        name: 'Nebula Promoción Única',
        description: 'Solo una vez por cliente en contratación y renovación',
        platforms: ['nebula'],
        plans: {
            '3-months': {
                screens: {
                    '3': {
                        'con-renovacion': 14700,
                        'sin-renovacion': 14700
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
];

// Función para formatear precios en pesos argentinos
function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Función para obtener datos de una plataforma
function getPlatformData(platformId) {
    return platformsData[platformId] || null;
}

// Función para obtener todas las plataformas
function getAllPlatforms() {
    return platformsData;
}

// Función para obtener promociones de una plataforma
function getPlatformPromotions(platformId) {
    const platform = platformsData[platformId];
    if (!platform) return [];
    
    const platformPromotions = platform.promotions || [];
    const globalPlatformPromotions = globalPromotions.filter(promo => 
        promo.platforms.includes(platformId)
    );
    
    return [...platformPromotions, ...globalPlatformPromotions];
}

// Función para calcular el precio con promoción
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

// Función para obtener el precio regular
function getRegularPrice(platformId, duration, screens, renewal) {
    const platform = platformsData[platformId];
    if (!platform) return null;
    
    const planData = platform.plans[duration];
    if (!planData) return null;
    
    const screenData = planData.screens[screens];
    if (!screenData) return null;
    
    return screenData[renewal] || null;
}

// Exportar funciones para uso global
window.platformsData = platformsData;
window.formatPrice = formatPrice;
window.getPlatformData = getPlatformData;
window.getAllPlatforms = getAllPlatforms;
window.getPlatformPromotions = getPlatformPromotions;
window.calculatePromotionPrice = calculatePromotionPrice;
window.getRegularPrice = getRegularPrice;
