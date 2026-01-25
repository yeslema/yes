// Translations
const translations = {
  fr: {
    pageTitle: "Coffee Coup | Menu Moderne",
    logo: "Coffee Coup",
    tagline: "L'art du café",
    menuTitle: "Notre Carte",
    footerText: "Tous droits réservés &copy; 2026 Coffee Coup",
    scanQr: "Scannez pour emporter",
    // Categories
    all: "Tout",
    coffee: "Café",
    iced: "Iced Coffee",
    juice: "Jus",
    milkshake: "Milkshake",
    mojito: "Mojito",
    Dessert: "Dessert",
    Gratin: "Gratin"
  },
  ar: {
    pageTitle: "Coffee Coup | قائمة القهوة",
    logo: "Coffee Coup",
    tagline: "فن القهوة",
    menuTitle: "قائمتنا",
    footerText: "جميع الحقوق محفوظة &copy; 2026 Coffee Coup",
    scanQr: "امسح الكود",
    // Categories
    all: "الكل",
    coffee: "قهوة",
    iced: "قهوة مثلجة",
    juice: "عصائر",
    milkshake: "ميلك شيك",
    mojito: "موهيتو",
    Dessert: "Dessert",
    Gratin: "Gratin"
  },
  en: {
    pageTitle: "Coffee Coup | Modern Menu",
    logo: "Coffee Coup",
    tagline: "The Art of Coffee",
    menuTitle: "Our Menu",
    footerText: "All Rights Reserved &copy; 2026 Coffee Coup",
    scanQr: "Scan Menu",
    // Categories
    all: "All",
    coffee: "Coffee",
    iced: "Iced Coffee",
    juice: "Juices",
    milkshake: "Milkshake",
    mojito: "Mojito",
    Dessert: "Dessert",
    Gratin: "Gratin"
  }
};

// Menu Data
const defaultMenu = [
  // --- COFFEE (First as requested) ---
  {
    id: 1,
    category: "coffee",
    price: "80",
    translations: {
      fr: { title: "Espresso" },
      ar: { title: "إسبريسو" },
      en: { title: "Espresso" }
    }
  },
  {
    id: 2,
    category: "coffee",
    price: "100",
    translations: {
      fr: { title: "Cappuccino" },
      ar: { title: "كابتشينو" },
      en: { title: "Cappuccino" }
    }
  },
  {
    id: 3,
    category: "coffee",
    price: "80",
    translations: {
      fr: { title: "Café au lait" },
      ar: { title: "قهوة بالحليب" },
      en: { title: "Café au lait" }
    }
  },
  {
    id: 4,
    category: "coffee",
    price: "100",
    translations: {
      fr: { title: "Café crème" },
      ar: { title: "كافية كريم" },
      en: { title: "Café crème" }
    }
  },
  {
    id: 5,
    category: "coffee",
    price: "130",
    translations: {
      fr: { title: "Coup" },
      ar: { title: "كو" },
      en: { title: "Coup" }
    }
  },

  // --- ICED COFFEE (Second) ---
  {
    id: 6,
    category: "iced",
    price: "120",
    translations: {
      fr: { title: "Iced Latte" },
      ar: { title: "آيس لاتي" },
      en: { title: "Iced Latte" }
    }
  },
  {
    id: 7,
    category: "iced",
    price: "130",
    translations: {
      fr: { title: "Spanish Latte", desc: "Espresso avec lait condensé sucré et glace." },
      ar: { title: "سبانيش لاتيه", desc: "إسبريسو مع حليب مكثف محلى وثلج." },
      en: { title: "Spanish Latte", desc: "Espresso with sweetened condensed milk and ice." }
    }
  },
  {
    id: 8,
    category: "iced",
    price: "130",
    translations: {
      fr: { title: "Iced Caramel latte", desc: "La version glacée et mousseuse du cappuccino." },
      ar: { title: " آيس كاراميل لاتي", desc: "النسخة المثلجة والرغوية من الكابتشينو." },
      en: { title: "Iced Caramel latte", desc: "The icy and frothy version of the cappuccino." }
    }
  },
  {
    id: 9,
    category: "iced",
    price: "150",
    translations: {
      fr: { title: "iced Coup" },
      ar: { title: "آيس كو " },
      en: { title: "iced Coup" }
    }
  },
  // --- JUICES (Third) ---
  {
    id: 10,
    category: "juice",
    price: "100",
    translations: {
      fr: { title: "Orange", },
      ar: { title: " برتقال ", },
      en: { title: "Orange", }
    }
  },
  {
    id: 11,
    category: "juice",
    price: "100",
    translations: {
      fr: { title: "Queen's Fruit ", desc: "Mélange tropical orange et ananas." },
      ar: { title: "كوينز فرويت", desc: "مزيج استوائي من البرتقال والأناناس." },
      en: { title: "Queen's Fruit", desc: "Tropical mix of orange and pineapple." }
    }
  },
  {
    id: 12,
    category: "juice",
    price: "120",
    translations: {
      fr: { title: "Humangosaur", desc: "Cocktail d'agrumes vitaminé." },
      ar: { title: "هيومانجوسور", desc: "كوكتيل حمضيات غني بالفيتامينات." },
      en: { title: "Humangosaur", desc: "Vitamin-rich citrus cocktail." }
    }
  },
  {
    id: 13,
    category: "juice",
    price: "100",
    translations: {
      fr: { title: "Mangue", desc: "Mangue fraîche de saison, onctueuse et sucrée." },
      ar: { title: " مانجو", desc: "مانجو موسمية طازجة، كريمية وحلوة." },
      en: { title: "Mango ", desc: "Fresh seasonal mango, creamy and sweet." }
    }
  },
  {
    id: 14,
    category: "juice",
    price: "130",
    translations: {
      fr: { title: "Avocat (Banane,Date)", desc: "Avocat riche mixé avec banane ou ananas au choix." },
      ar: { title: "أفوكادو (موز و تمر )", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." },
      en: { title: "Avocado (Banana,Date)", desc: "Rich avocado blended with your choice of banana or pineapple." }
    }
  },
  {
    id: 15,
    category: "juice",
    price: "150",
    translations: {
      fr: { title: "Lassi", desc: "Boisson traditionnelle au yaourt, fraîche et légère." },
      ar: { title: "لاسي", desc: "مشروب زبادي تقليدي، منعش وخفيف." },
      en: { title: "Lassi", desc: "Traditional yogurt drink, fresh and light." }
    }
  },

  {
    id: 16,
    category: "juice",
    price: "100",
    translations: {
      fr: { title: "Avocat (Date)", desc: "Avocat riche mixé avec banane ou ananas au choix." },
      ar: { title: "أفوكادو (التمر)", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." },
      en: { title: "Avocado (Date)", desc: "Rich avocado blended with your choice of banana or pineapple." }
    }
  },
  {
    id: 25,
    category: "juice",
    price: "100",
    translations: {
      fr: { title: "Secret Orange", desc: "Avocat riche mixé avec banane ou ananas au choix." },
      ar: { title: "سيكريت اورينج", desc: "كوكتيل حمضيات غني بالفيتامينات." },
      en: { title: "Secret Orange", desc: "Rich avocado blended with your choice of banana or pineapple." }
    }
  },
  {
    id: 26,
    category: "juice",
    price: "100",
    translations: {
      fr: { title: "pasteque", desc: "Avocat riche mixé avec banane ou ananas au choix." },
      ar: { title: "البطيخ", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." },
      en: { title: "watermelon", desc: "Rich avocado blended with your choice of banana or pineapple." }
    }
  },

  // --- MILKSHAKE (Fourth) ---
  {
    id: 17,
    category: "milkshake",
    price: "150",
    translations: {
      fr: { title: "Milkshake Chocolat", desc: "Crème glacée chocolat, lait frais et coulis chocolat." },
      ar: { title: "ميلك شيك شوكولاتة", desc: "آيس كريم شوكولاتة، حليب طازج وصوص الشوكولاتة." },
      en: { title: "Chocolate Milkshake", desc: "Chocolate ice cream, fresh milk, and chocolate sauce." }
    }
  },
  {
    id: 18,
    category: "milkshake",
    price: "150",
    translations: {
      fr: { title: "Milkshake Fraise", desc: "Fraises fraîches mixées avec glace vanille." },
      ar: { title: "ميلك شيك فراولة", desc: "فراولة طازجة ممزوجة مع آيس كريم فانيليا." },
      en: { title: "Strawberry Milkshake", desc: "Fresh strawberries blended with vanilla ice cream." }
    }
  },
  {
    id: 19,
    category: "milkshake",
    price: "150",
    translations: {
      fr: { title: "Milkshake Vanilla" },
      ar: { title: "ميلك شيك فانيليا" },
      en: { title: "Vanilla Milkshake" }
    }
  },

  // --- MOJITO (Last) ---
  {
    id: 20,
    category: "mojito",
    price: "100",
    translations: {
      fr: { title: "Mojito " },
      ar: { title: "موهيتو " },
      en: { title: " Mojito" }
    }
  },
  {
    id: 21,
    category: "mojito",
    price: "120",
    translations: {
      fr: { title: "Mojito Mangue" },
      ar: { title: "موهيتو مانجو" },
      en: { title: "Mango Mojito" }
    }
  },
  {
    id: 22,
    category: "mojito",
    price: "100",
    translations: {
      fr: { title: "Mojito Blue" },
      ar: { title: "موهيتو أزرق" },
      en: { title: "Blue Mojito" }
    }
  },

  {
    id: 23,
    category: "Dessert",
    price: "80",
    translations: {
      fr: { title: "Dessert jenga", desc: "Avocat riche mixé avec banane ou ananas au choix." },
      ar: { title: "حلوى جينجا", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." },
      en: { title: "Dessert jenga", desc: "Rich avocado blended with your choice of banana or pineapple." }
    }
  },
  {
    id: 24,
    category: "Gratin",
    price: "150",
    translations: {
      fr: { title: "Mini Gratin" },
      ar: { title: "جراتين صغيرة" },
      en: { title: "Mini Gratin" }
    }
  },
  {
    id: 25,
    category: "Gratin",
    price: "250",
    translations: {
      fr: { title: "Grande Gratin" },
      ar: { title: "جراتين كبير" },
      en: { title: "Gr Gratin" }
    }
  },
  {
    id: 27,
    category: "Dessert",
    price: "150",
    translations: {
      fr: { title: "Dessert ganacho" },
      ar: { title: "حلوى جاناتسو" },
      en: { title: "Dessert ganacho" }
    }
  }
];

// Load from LocalStorage or use default
let menu = JSON.parse(localStorage.getItem('restaurantMenuItems')) || defaultMenu;

// Save if not exists (first load)
if (!localStorage.getItem('restaurantMenuItems')) {
  localStorage.setItem('restaurantMenuItems', JSON.stringify(menu));
}

// App State
let currentLang = 'fr'; // Default requested by user
let currentCategory = 'all';

// DOM Elements
const sectionCenter = document.getElementById("menu-container");
const buttonContainer = document.getElementById("btn-container");
const qrBtn = document.getElementById("qr-btn");
const qrModal = document.getElementById("qr-modal");
const closeModal = document.querySelector(".close-modal");

// Initialization
window.addEventListener("DOMContentLoaded", function () {
  setLanguage(currentLang);
  setupModal();
});

// Language Logic
function setLanguage(lang) {
  currentLang = lang;

  // HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Active Button State
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.innerText.toLowerCase() === lang ||
      (lang === 'fr' && btn.innerText === 'FR') ||
      (lang === 'ar' && btn.innerText === 'AR') ||
      (lang === 'en' && btn.innerText === 'EN')) {
      btn.classList.add('active');
    }
  });

  // Translate Static Text
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Re-render
  displayMenuButtons();
  displayMenuItems(menu);
}

// Menu Display
function displayMenuItems(menuItems) {
  let itemsToDisplay = menuItems;
  if (currentCategory !== 'all') {
    itemsToDisplay = menuItems.filter(item => item.category === currentCategory);
  }

  let displayMenu = itemsToDisplay.map(function (item) {
    const info = item.translations[currentLang];
    const itemNum = String(item.id).padStart(2, '0');

    return `<article class="menu-item fade-in ${item.isSeasonier ? 'seasonier-active' : ''}">
          <div class="item-info">
            <header class="item-header">
              <h4>
                <span class="item-num">${itemNum}.</span> 
                ${info.title}
                ${item.isSeasonier ? '<span class="seasonier-badge">Seasonier</span>' : ''}
              </h4>
              <h4 class="price">${item.price} <span class="currency">MRU</span></h4>
            </header>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Default Categories
const defaultCategories = [
  { id: 'all', fr: "Tout", ar: "الكل", en: "All" },
  { id: 'coffee', fr: "Café", ar: "قهوة", en: "Coffee" },
  { id: 'iced', fr: "Iced Coffee", ar: "قهوة مثلجة", en: "Iced Coffee" },
  { id: 'juice', fr: "Jus", ar: "عصائر", en: "Juices" },
  { id: 'milkshake', fr: "Milkshake", ar: "ميلك شيك", en: "Milkshake" },
  { id: 'mojito', fr: "Mojito", ar: "موهيتو", en: "Mojito" },
  { id: 'Dessert', fr: "Dessert", ar: "Dessert", en: "Dessert" },
  { id: 'Gratin', fr: "Gratin", ar: "Gratin", en: "Gratin" }
];

// Load Categories
let categoriesList = JSON.parse(localStorage.getItem('restaurantCategories')) || defaultCategories;
if (!localStorage.getItem('restaurantCategories')) {
  localStorage.setItem('restaurantCategories', JSON.stringify(categoriesList));
}


// Category Buttons
function displayMenuButtons() {
  const categoryBtns = categoriesList
    .map(function (cat) {
      // Use helper to safely get translation or fallback
      const categoryName = cat[currentLang] || cat.fr || cat.id;
      return `<button type="button" class="filter-btn" data-id="${cat.id}">
          ${categoryName}
        </button>`;
    })
    .join("");

  buttonContainer.innerHTML = categoryBtns;

  const filterBtns = buttonContainer.querySelectorAll(".filter-btn");

  // Set active class
  filterBtns.forEach(btn => {
    if (btn.dataset.id === currentCategory) {
      btn.classList.add('active');
    }

    btn.addEventListener("click", function (e) {
      currentCategory = e.currentTarget.dataset.id;

      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      displayMenuItems(menu);
    });
  });
}

// Modal Logic
function setupModal() {
  if (qrBtn) {
    qrBtn.addEventListener('click', () => {
      qrModal.style.display = "block";
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      qrModal.style.display = "none";
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target == qrModal) {
      qrModal.style.display = "none";
    }
  });
}
