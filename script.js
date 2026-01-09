// Translations
const translations = {
  fr: {
    pageTitle: "Coffee Bliss | Menu Moderne",
    logo: "Coffee Bliss",
    tagline: "L'art du café",
    menuTitle: "Notre Carte",
    footerText: "Tous droits réservés &copy; 2024 Coffee Bliss",
    scanQr: "Scannez pour emporter",
    // Categories
    all: "Tout",
    coffee: "Café",
    iced: "Iced Coffee",
    juice: "Jus",
    milkshake: "Milkshake",
    mojito: "Mojito"
  },
  ar: {
    pageTitle: "Coffee Bliss | قائمة القهوة",
    logo: "Coffee Bliss",
    tagline: "فن القهوة",
    menuTitle: "قائمتنا",
    footerText: "جميع الحقوق محفوظة &copy; 2024 Coffee Bliss",
    scanQr: "امسح الكود",
    // Categories
    all: "الكل",
    coffee: "قهوة",
    iced: "قهوة مثلجة",
    juice: "عصائر",
    milkshake: "ميلك شيك",
    mojito: "موهيتو"
  },
  en: {
    pageTitle: "Coffee Bliss | Modern Menu",
    logo: "Coffee Bliss",
    tagline: "The Art of Coffee",
    menuTitle: "Our Menu",
    footerText: "All Rights Reserved &copy; 2024 Coffee Bliss",
    scanQr: "Scan Menu",
    // Categories
    all: "All",
    coffee: "Coffee",
    iced: "Iced Coffee",
    juice: "Juices",
    milkshake: "Milkshake",
    mojito: "Mojito"
  }
};

// Menu Data
const menu = [
  // --- COFFEE (First as requested) ---
  {
    id: 1,
    category: "coffee",
    price: "80",
    translations: {
      fr: { title: "Espresso", desc: "L'essence pure du café, intense et aromatique." },
      ar: { title: "إسبريسو", desc: "جوهر القهوة النقي، قوي وغني بالنكهة." },
      en: { title: "Espresso", desc: "The pure essence of coffee, intense and aromatic." }
    }
  },
  {
    id: 2,
    category: "coffee",
    price: "120",
    translations: {
      fr: { title: "Cappuccino", desc: "Espresso équilibré avec lait chaud et mousse onctueuse." },
      ar: { title: "كابتشينو", desc: "إسبريسو متوازن مع حليب ساخن ورغوة كريمية." },
      en: { title: "Cappuccino", desc: "Balanced espresso with hot milk and creamy foam." }
    }
  },
  {
    id: 3,
    category: "coffee",
    price: "100",
    translations: {
      fr: { title: "Café au lait", desc: "Café filtre corsé adouci par du lait chaud." },
      ar: { title: "قهوة بالحليب", desc: "قهوة مفلترة قوية مخففة بالحليب الساخن." },
      en: { title: "Café au lait", desc: "Bold drip coffee softened with hot milk." }
    }
  },
  {
    id: 4,
    category: "coffee",
    price: "110",
    translations: {
      fr: { title: "Café crème", desc: "Un grand classique, doux et velouté." },
      ar: { title: "كافية كريم", desc: "كلاسيكي عظيم، ناعم ومخملي." },
      en: { title: "Café crème", desc: "A grand classic, smooth and velvety." }
    }
  },

  // --- ICED COFFEE (Second) ---
  {
    id: 5,
    category: "iced",
    price: "140",
    translations: {
      fr: { title: "Iced Latte", desc: "Classique, Caramel ou Chocolat. Rafraîchissant." },
      ar: { title: "لاتيه مثلج", desc: "كلاسيك، كراميل أو شوكولاتة. منعش." },
      en: { title: "Iced Latte", desc: "Classic, Caramel, or Chocolate. Refreshing." }
    }
  },
  {
    id: 6,
    category: "iced",
    price: "160",
    translations: {
      fr: { title: "Spanish Latte", desc: "Espresso avec lait condensé sucré et glace." },
      ar: { title: "سبانيش لاتيه", desc: "إسبريسو مع حليب مكثف محلى وثلج." },
      en: { title: "Spanish Latte", desc: "Espresso with sweetened condensed milk and ice." }
    }
  },
  {
    id: 7,
    category: "iced",
    price: "150",
    translations: {
      fr: { title: "Iced Cappuccino", desc: "La version glacée et mousseuse du cappuccino." },
      ar: { title: "كابتشينو مثلج", desc: "النسخة المثلجة والرغوية من الكابتشينو." },
      en: { title: "Iced Cappuccino", desc: "The icy and frothy version of the cappuccino." }
    }
  },

  // --- JUICES (Third) ---
  {
    id: 8,
    category: "juice",
    price: "150",
    translations: {
      fr: { title: "Jus d'Orange - Classique", desc: "Oranges fraîchement pressées." },
      ar: { title: "عصير برتقال - كلاسيك", desc: "برتقال طازج معصور." },
      en: { title: "Orange Juice - Classic", desc: "Freshly squeezed oranges." }
    }
  },
  {
    id: 9,
    category: "juice",
    price: "180",
    translations: {
      fr: { title: "Jus d'Orange - Ananas", desc: "Mélange tropical orange et ananas." },
      ar: { title: "عصير برتقال - أناناس", desc: "مزيج استوائي من البرتقال والأناناس." },
      en: { title: "Orange Juice - Pineapple", desc: "Tropical mix of orange and pineapple." }
    }
  },
  {
    id: 10,
    category: "juice",
    price: "180",
    translations: {
      fr: { title: "Jus d'Orange - Mix", desc: "Cocktail d'agrumes vitaminé." },
      ar: { title: "عصير برتقال - ميكس", desc: "كوكتيل حمضيات غني بالفيتامينات." },
      en: { title: "Orange Juice - Mix", desc: "Vitamin-rich citrus cocktail." }
    }
  },
  {
    id: 11,
    category: "juice",
    price: "200",
    translations: {
      fr: { title: "Jus de Mangue", desc: "Mangue fraîche de saison, onctueuse et sucrée." },
      ar: { title: "عصير مانجو", desc: "مانجو موسمية طازجة، كريمية وحلوة." },
      en: { title: "Mango Juice", desc: "Fresh seasonal mango, creamy and sweet." }
    }
  },
  {
    id: 12,
    category: "juice",
    price: "220",
    translations: {
      fr: { title: "Avocat (Banane ou Ananas)", desc: "Avocat riche mixé avec banane ou ananas au choix." },
      ar: { title: "أفوكادو (موز أو أناناس)", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." },
      en: { title: "Avocado (Banana or Pineapple)", desc: "Rich avocado blended with your choice of banana or pineapple." }
    }
  },
  {
    id: 13,
    category: "juice",
    price: "150",
    translations: {
      fr: { title: "Lassi", desc: "Boisson traditionnelle au yaourt, fraîche et légère." },
      ar: { title: "لاسي", desc: "مشروب زبادي تقليدي، منعش وخفيف." },
      en: { title: "Lassi", desc: "Traditional yogurt drink, fresh and light." }
    }
  },

  // --- MILKSHAKE (Fourth) ---
  {
    id: 14,
    category: "milkshake",
    price: "180",
    translations: {
      fr: { title: "Milkshake Chocolat", desc: "Crème glacée chocolat, lait frais et coulis chocolat." },
      ar: { title: "ميلك شيك شوكولاتة", desc: "آيس كريم شوكولاتة، حليب طازج وصوص الشوكولاتة." },
      en: { title: "Chocolate Milkshake", desc: "Chocolate ice cream, fresh milk, and chocolate sauce." }
    }
  },
  {
    id: 15,
    category: "milkshake",
    price: "190",
    translations: {
      fr: { title: "Milkshake Fraise", desc: "Fraises fraîches mixées avec glace vanille." },
      ar: { title: "ميلك شيك فراولة", desc: "فراولة طازجة ممزوجة مع آيس كريم فانيليا." },
      en: { title: "Strawberry Milkshake", desc: "Fresh strawberries blended with vanilla ice cream." }
    }
  },
  {
    id: 16,
    category: "milkshake",
    price: "200",
    translations: {
      fr: { title: "Milkshake Meringue", desc: "Onctueux avec des éclats de meringue croquante." },
      ar: { title: "ميلك شيك مرانج", desc: "كريمي مع قطع الميرانغ المقرمشة." },
      en: { title: "Meringue Milkshake", desc: "Creamy with crunchy meringue shards." }
    }
  },

  // --- MOJITO (Last) ---
  {
    id: 17,
    category: "mojito",
    price: "130",
    translations: {
      fr: { title: "Mojito Classique", desc: "Citron vert, menthe fraîche et soda pétillant." },
      ar: { title: "موهيتو كلاسيك", desc: "ليمون أخضر، نعناع طازج وصودا فوارة." },
      en: { title: "Classic Mojito", desc: "Lime, fresh mint, and sparkling soda." }
    }
  },
  {
    id: 18,
    category: "mojito",
    price: "140",
    translations: {
      fr: { title: "Mojito Fraise", desc: "La fraîcheur du mojito avec une touche de fraise." },
      ar: { title: "موهيتو فراولة", desc: "انتعاش الموهيتو مع لمسة من الفراولة." },
      en: { title: "Strawberry Mojito", desc: "Mojito freshness with a touch of strawberry." }
    }
  },
  {
    id: 19,
    category: "mojito",
    price: "140",
    translations: {
      fr: { title: "Mojito Mangue", desc: "Exotique et parfumé." },
      ar: { title: "موهيتو مانجو", desc: "غريب ومعطر." },
      en: { title: "Mango Mojito", desc: "Exotic and aromatic." }
    }
  },
  {
    id: 20,
    category: "mojito",
    price: "150",
    translations: {
      fr: { title: "Mojito Blue", desc: "Un océan de fraîcheur au sirop de curaçao bleu." },
      ar: { title: "موهيتو أزرق", desc: "محيط من الانتعاش مع شراب الكوراساو الأزرق." },
      en: { title: "Blue Mojito", desc: "An ocean of freshness with blue curacao syrup." }
    }
  }
];

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

    return `<article class="menu-item fade-in">
          <div class="item-info">
            <header class="item-header">
              <h4><span class="item-num">${itemNum}.</span> ${info.title}</h4>
              <h4 class="price">${item.price} <span class="currency">MRU</span></h4>
            </header>
            <p class="item-text">
              ${info.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Category Buttons
function displayMenuButtons() {
  const categories = ["all", "coffee", "iced", "juice", "milkshake", "mojito"];

  const categoryBtns = categories
    .map(function (category) {
      const categoryName = translations[currentLang][category];
      return `<button type="button" class="filter-btn" data-id="${category}">
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
