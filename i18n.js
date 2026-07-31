// Internationalization (i18n) System
const i18n = {
    currentLang: localStorage.getItem('lang') || 'ar',
    
    translations: {
        ar: {
            // Header
            appTitle: 'مصمم الديكور الذكي',
            appSubtitle: 'مدعوم بـ AI | أسعار حقيقية | عرض 3D',
            
            // Tabs
            tabDesign: '🎨 تصميم',
            tabCamera: '📷 AI',
            tabStores: '🛒 متاجر',
            tab3D: '🧊 3D',
            tabCost: '💰 تكلفة',
            
            // Design Tab
            roomType: '🚪 نوع الغرفة',
            living: 'معيشة',
            bedroom: 'نوم',
            kids: 'أطفال',
            guest: 'ضيوف',
            kitchen: 'مطبخ',
            office: 'مكتب',
            
            // Dimensions
            dimensions: '📐 أبعاد الغرفة',
            length: 'الطول',
            width: 'العرض',
            area: 'المساحة',
            
            // Colors
            colors: '🎨 الألوان',
            warm: 'بيج دافئ: يعطي إحساساً بالدفء',
            cream: 'كريمي: لون كلاسيكي',
            taupe: 'توب: لون عصري',
            sage: 'أخضر مريمي: يجلب الطبيعة',
            lavender: 'لافندر: لون ناعم',
            blush: 'وردي باهت: لون دافئ',
            
            // Lighting
            lighting: '💡 الإضاءة',
            mainChandelier: '💡 ثريا رئيسية',
            sideLamps: '🛋️ أباجورات جانبية',
            ledLighting: '✨ إضاءة LED',
            backLighting: '📺 إضاءة خلفية',
            dimmingLight: '🌙 إضاءة خافتة',
            nightLamps: '🛏️ أباجورات',
            hiddenLighting: '✨ إضاءة مخفية',
            mirrorLight: '🪞 إضاءة مرآة',
            
            // Camera
            cameraTitle: '📷 تحليل AI',
            takePicture: 'التقط صورة للغرفة',
            
            // Stores
            storesTitle: '🛒 منتجات من المتاجر',
            
            // 3D
            view3D: '🧊 عرض ثلاثي الأبعاد',
            
            // Cost
            country: '🌍 الدولة',
            furniture: '🛋️ المفروشات',
            calculateCost: '📊 احسب التكلفة',
            details: '📋 التفاصيل',
            total: 'الإجمالي',
            
            // Countries
            saudi: '🇸🇦 السعودية',
            emirates: '🇦🇪 الإمارات',
            kuwait: '🇰🇼 الكويت',
            egypt: '🇪🇬 مصر',
            
            // Furniture items
            sofa3: 'كنبة 3 مقاعد',
            sofa2: 'كنبة 2 مقاعد',
            coffeeTable: 'طاولة قهوة',
            rug: 'سجادة',
            curtains: 'ستائر',
            lamp: 'أباجورة',
            ceilingLight: 'إضاءة سقفية',
            tvTable: 'طاولة تلفاز',
            doubleBed: 'سرير مزدوج',
            wardrobe: 'خزانة ملابس',
            dresser: 'تسريحة',
            nightstand: 'كومودينو',
            blackoutCurtains: 'ستائر blackout',
            
            // Store products
            ektorp: 'كنبة EKTORP',
            malmBed: 'سرير MALM',
            stockholmRug: 'سجادة STOCKHOLM',
            ledChandelier: 'ثريا LED',
            ikea: 'ايكيا',
            
            // Language selector
            language: 'اللغة',
            arabic: 'العربية',
            english: 'English',
            french: 'Français'
        },
        en: {
            // Header
            appTitle: 'Smart Decoration Designer',
            appSubtitle: 'Powered by AI | Real Prices | 3D View',
            
            // Tabs
            tabDesign: '🎨 Design',
            tabCamera: '📷 AI',
            tabStores: '🛒 Stores',
            tab3D: '🧊 3D',
            tabCost: '💰 Cost',
            
            // Design Tab
            roomType: '🚪 Room Type',
            living: 'Living',
            bedroom: 'Bedroom',
            kids: 'Kids',
            guest: 'Guest',
            kitchen: 'Kitchen',
            office: 'Office',
            
            // Dimensions
            dimensions: '📐 Room Dimensions',
            length: 'Length',
            width: 'Width',
            area: 'Area',
            
            // Colors
            colors: '🎨 Colors',
            warm: 'Warm Beige: Gives a warm feeling',
            cream: 'Cream: Classic color',
            taupe: 'Taupe: Modern color',
            sage: 'Sage Green: Brings nature',
            lavender: 'Lavender: Soft color',
            blush: 'Blush Pink: Warm color',
            
            // Lighting
            lighting: '💡 Lighting',
            mainChandelier: '💡 Main Chandelier',
            sideLamps: '🛋️ Side Lamps',
            ledLighting: '✨ LED Lighting',
            backLighting: '📺 Back Lighting',
            dimmingLight: '🌙 Dimming Light',
            nightLamps: '🛏️ Night Lamps',
            hiddenLighting: '✨ Hidden Lighting',
            mirrorLight: '🪞 Mirror Lighting',
            
            // Camera
            cameraTitle: '📷 AI Analysis',
            takePicture: 'Take a picture of the room',
            
            // Stores
            storesTitle: '🛒 Store Products',
            
            // 3D
            view3D: '🧊 3D View',
            
            // Cost
            country: '🌍 Country',
            furniture: '🛋️ Furniture',
            calculateCost: '📊 Calculate Cost',
            details: '📋 Details',
            total: 'Total',
            
            // Countries
            saudi: '🇸🇦 Saudi Arabia',
            emirates: '🇦🇪 UAE',
            kuwait: '🇰🇼 Kuwait',
            egypt: '🇪🇬 Egypt',
            
            // Furniture items
            sofa3: '3-Seater Sofa',
            sofa2: '2-Seater Sofa',
            coffeeTable: 'Coffee Table',
            rug: 'Rug',
            curtains: 'Curtains',
            lamp: 'Lamp',
            ceilingLight: 'Ceiling Light',
            tvTable: 'TV Table',
            doubleBed: 'Double Bed',
            wardrobe: 'Wardrobe',
            dresser: 'Dresser',
            nightstand: 'Nightstand',
            blackoutCurtains: 'Blackout Curtains',
            
            // Store products
            ektorp: 'EKTORP Sofa',
            malmBed: 'MALM Bed',
            stockholmRug: 'STOCKHOLM Rug',
            ledChandelier: 'LED Chandelier',
            ikea: 'IKEA',
            
            // Language selector
            language: 'Language',
            arabic: 'العربية',
            english: 'English',
            french: 'Français'
        },
        fr: {
            // Header
            appTitle: 'Concepteur de Décoration Intelligente',
            appSubtitle: 'Alimenté par l\'IA | Prix Réels | Vue 3D',
            
            // Tabs
            tabDesign: '🎨 Conception',
            tabCamera: '📷 IA',
            tabStores: '🛒 Magasins',
            tab3D: '🧊 3D',
            tabCost: '💰 Coût',
            
            // Design Tab
            roomType: '🚪 Type de Pièce',
            living: 'Salon',
            bedroom: 'Chambre',
            kids: 'Enfants',
            guest: 'Invités',
            kitchen: 'Cuisine',
            office: 'Bureau',
            
            // Dimensions
            dimensions: '📐 Dimensions de la Pièce',
            length: 'Longueur',
            width: 'Largeur',
            area: 'Surface',
            
            // Colors
            colors: '🎨 Couleurs',
            warm: 'Beige Chaud: Crée une sensation chaleureuse',
            cream: 'Crème: Couleur classique',
            taupe: 'Taupe: Couleur moderne',
            sage: 'Vert Sauge: Apporte la nature',
            lavender: 'Lavande: Couleur douce',
            blush: 'Rose Poudré: Couleur chaleureuse',
            
            // Lighting
            lighting: '💡 Éclairage',
            mainChandelier: '💡 Lustre Principal',
            sideLamps: '🛋️ Lampes Latérales',
            ledLighting: '✨ Éclairage LED',
            backLighting: '📺 Rétro-éclairage',
            dimmingLight: '🌙 Éclairage Tamisé',
            nightLamps: '🛏️ Lampes de Nuit',
            hiddenLighting: '✨ Éclairage Caché',
            mirrorLight: '🪞 Éclairage Miroir',
            
            // Camera
            cameraTitle: '📷 Analyse IA',
            takePicture: 'Prenez une photo de la pièce',
            
            // Stores
            storesTitle: '🛒 Produits des Magasins',
            
            // 3D
            view3D: '🧊 Vue 3D',
            
            // Cost
            country: '🌍 Pays',
            furniture: '🛋️ Mobilier',
            calculateCost: '📊 Calculer le Coût',
            details: '📋 Détails',
            total: 'Total',
            
            // Countries
            saudi: '🇸🇦 Arabie Saoudite',
            emirates: '🇦🇪 Émirats',
            kuwait: '🇰🇼 Koweït',
            egypt: '🇪🇬 Égypte',
            
            // Furniture items
            sofa3: 'Canapé 3 Places',
            sofa2: 'Canapé 2 Places',
            coffeeTable: 'Table Basse',
            rug: 'Tapis',
            curtains: 'Rideaux',
            lamp: 'Lampe',
            ceilingLight: 'Luminaire de Plafond',
            tvTable: 'Table TV',
            doubleBed: 'Lit Double',
            wardrobe: 'Armoire',
            dresser: 'Commode',
            nightstand: 'Table de Nuit',
            blackoutCurtains: 'Rideaux Occultants',
            
            // Store products
            ektorp: 'Canapé EKTORP',
            malmBed: 'Lit MALM',
            stockholmRug: 'Tapis STOCKHOLM',
            ledChandelier: 'Lustre LED',
            ikea: 'IKEA',
            
            // Language selector
            language: 'Langue',
            arabic: 'العربية',
            english: 'English',
            french: 'Français'
        }
    },
    
    t(key) {
        return this.translations[this.currentLang]?.[key] || this.translations.ar[key] || key;
    },
    
    setLanguage(lang) {
        if (['ar', 'en', 'fr'].includes(lang)) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.updatePage();
        }
    },
    
    updatePage() {
        const dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = this.currentLang;
        document.dispatchEvent(new CustomEvent('languageChanged'));
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    i18n.updatePage();
});
