// Auth Check
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Data Initialization
const defaultMenu = [
    // --- COFFEE (First as requested) ---
    { id: 1, category: "coffee", price: "80", translations: { fr: { title: "Espresso" }, ar: { title: "إسبريسو" }, en: { title: "Espresso" } } },
    { id: 2, category: "coffee", price: "100", translations: { fr: { title: "Cappuccino" }, ar: { title: "كابتشينو" }, en: { title: "Cappuccino" } } },
    { id: 3, category: "coffee", price: "80", translations: { fr: { title: "Café au lait" }, ar: { title: "قهوة بالحليب" }, en: { title: "Café au lait" } } },
    { id: 4, category: "coffee", price: "100", translations: { fr: { title: "Café crème" }, ar: { title: "كافية كريم" }, en: { title: "Café crème" } } },
    { id: 5, category: "coffee", price: "130", translations: { fr: { title: "Coup" }, ar: { title: "كو" }, en: { title: "Coup" } } },

    // --- ICED COFFEE (Second) ---
    { id: 6, category: "iced", price: "120", translations: { fr: { title: "Iced Latte" }, ar: { title: "آيس لاتي" }, en: { title: "Iced Latte" } } },
    { id: 7, category: "iced", price: "130", translations: { fr: { title: "Spanish Latte", desc: "Espresso avec lait condensé sucré et glace." }, ar: { title: "سبانيش لاتيه", desc: "إسبريسو مع حليب مكثف محلى وثلج." }, en: { title: "Spanish Latte", desc: "Espresso with sweetened condensed milk and ice." } } },
    { id: 8, category: "iced", price: "130", translations: { fr: { title: "Iced Caramel latte", desc: "La version glacée et mousseuse du cappuccino." }, ar: { title: " آيس كاراميل لاتي", desc: "النسخة المثلجة والرغوية من الكابتشينو." }, en: { title: "Iced Caramel latte", desc: "The icy and frothy version of the cappuccino." } } },
    { id: 9, category: "iced", price: "150", translations: { fr: { title: "iced Coup" }, ar: { title: "آيس كو " }, en: { title: "iced Coup" } } },
    // --- JUICES (Third) ---
    { id: 10, category: "juice", price: "100", translations: { fr: { title: "Orange", }, ar: { title: " برتقال ", }, en: { title: "Orange", } } },
    { id: 11, category: "juice", price: "100", translations: { fr: { title: "Queen's Fruit ", desc: "Mélange tropical orange et ananas." }, ar: { title: "كوينز فرويت", desc: "مزيج استوائي من البرتقال والأناناس." }, en: { title: "Queen's Fruit", desc: "Tropical mix of orange and pineapple." } } },
    { id: 12, category: "juice", price: "120", translations: { fr: { title: "Humangosaur", desc: "Cocktail d'agrumes vitaminé." }, ar: { title: "هيومانجوسور", desc: "كوكتيل حمضيات غني بالفيتامينات." }, en: { title: "Humangosaur", desc: "Vitamin-rich citrus cocktail." } } },
    { id: 13, category: "juice", price: "100", translations: { fr: { title: "Mangue", desc: "Mangue fraîche de saison, onctueuse et sucrée." }, ar: { title: " مانجو", desc: "مانجو موسمية طازجة، كريمية وحلوة." }, en: { title: "Mango ", desc: "Fresh seasonal mango, creamy and sweet." } } },
    { id: 14, category: "juice", price: "130", translations: { fr: { title: "Avocat (Banane,Date)", desc: "Avocat riche mixé avec banane ou ananas au choix." }, ar: { title: "أفوكادو (موز و تمر )", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." }, en: { title: "Avocado (Banana,Date)", desc: "Rich avocado blended with your choice of banana or pineapple." } } },
    { id: 15, category: "juice", price: "150", translations: { fr: { title: "Lassi", desc: "Boisson traditionnelle au yaourt, fraîche et légère." }, ar: { title: "لاسي", desc: "مشروب زبادي تقليدي، منعش وخفيف." }, en: { title: "Lassi", desc: "Traditional yogurt drink, fresh and light." } } },

    { id: 16, category: "juice", price: "100", translations: { fr: { title: "Avocat (Date)", desc: "Avocat riche mixé avec banane ou ananas au choix." }, ar: { title: "أفوكادو (التمر)", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." }, en: { title: "Avocado (Date)", desc: "Rich avocado blended with your choice of banana or pineapple." } } },
    { id: 25, category: "juice", price: "100", translations: { fr: { title: "Secret Orange", desc: "Avocat riche mixé avec banane ou ananas au choix." }, ar: { title: "سيكريت اورينج", desc: "كوكتيل حمضيات غني بالفيتامينات." }, en: { title: "Secret Orange", desc: "Rich avocado blended with your choice of banana or pineapple." } } },
    { id: 26, category: "juice", price: "100", translations: { fr: { title: "pasteque", desc: "Avocat riche mixé avec banane ou ananas au choix." }, ar: { title: "البطيخ", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." }, en: { title: "watermelon", desc: "Rich avocado blended with your choice of banana or pineapple." } } },

    // --- MILKSHAKE (Fourth) ---
    { id: 17, category: "milkshake", price: "150", translations: { fr: { title: "Milkshake Chocolat", desc: "Crème glacée chocolat, lait frais et coulis chocolat." }, ar: { title: "ميلك شيك شوكولاتة", desc: "آيس كريم شوكولاتة، حليب طازج وصوص الشوكولاتة." }, en: { title: "Chocolate Milkshake", desc: "Chocolate ice cream, fresh milk, and chocolate sauce." } } },
    { id: 18, category: "milkshake", price: "150", translations: { fr: { title: "Milkshake Fraise", desc: "Fraises fraîches mixées avec glace vanille." }, ar: { title: "ميلك شيك فراولة", desc: "فراولة طازجة ممزوجة مع آيس كريم فانيليا." }, en: { title: "Strawberry Milkshake", desc: "Fresh strawberries blended with vanilla ice cream." } } },
    { id: 19, category: "milkshake", price: "150", translations: { fr: { title: "Milkshake Vanilla" }, ar: { title: "ميلك شيك فانيليا" }, en: { title: "Vanilla Milkshake" } } },

    // --- MOJITO (Last) ---
    { id: 20, category: "mojito", price: "100", translations: { fr: { title: "Mojito " }, ar: { title: "موهيتو " }, en: { title: " Mojito" } } },
    { id: 21, category: "mojito", price: "120", translations: { fr: { title: "Mojito Mangue" }, ar: { title: "موهيتو مانجو" }, en: { title: "Mango Mojito" } } },
    { id: 22, category: "mojito", price: "100", translations: { fr: { title: "Mojito Blue" }, ar: { title: "موهيتو أزرق" }, en: { title: "Blue Mojito" } } },

    { id: 23, category: "Dessert", price: "80", translations: { fr: { title: "Dessert jenga", desc: "Avocat riche mixé avec banane ou ananas au choix." }, ar: { title: "حلوى جينجا", desc: "أفوكادو غني ممزوج مع الموز أو الأناناس حسب الاختيار." }, en: { title: "Dessert jenga", desc: "Rich avocado blended with your choice of banana or pineapple." } } },
    { id: 24, category: "Gratin", price: "150", translations: { fr: { title: "Mini Gratin" }, ar: { title: "جراتين صغيرة" }, en: { title: "Mini Gratin" } } },
    { id: 25, category: "Gratin", price: "250", translations: { fr: { title: "Grande Gratin" }, ar: { title: "جراتين كبير" }, en: { title: "Gr Gratin" } } },
    { id: 27, category: "Dessert", price: "150", translations: { fr: { title: "Dessert ganacho" }, ar: { title: "حلوى جاناتسو" }, en: { title: "Dessert ganacho" } } }
];

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

// Load Data
let menu = JSON.parse(localStorage.getItem('restaurantMenuItems')) || defaultMenu;
let categories = JSON.parse(localStorage.getItem('restaurantCategories')) || defaultCategories;

if (!localStorage.getItem('restaurantMenuItems')) localStorage.setItem('restaurantMenuItems', JSON.stringify(menu));
if (!localStorage.getItem('restaurantCategories')) localStorage.setItem('restaurantCategories', JSON.stringify(categories));

// DOM Elements
const productTableBody = document.getElementById('product-table-body');
const categoryTableBody = document.getElementById('category-table-body');
const saveBanner = document.getElementById('save-banner');

// Modals
const productModal = document.getElementById('product-modal');
const categoryModal = document.getElementById('category-modal');
const productForm = document.getElementById('product-form');
const categoryForm = document.getElementById('category-form');

// --- TABS LOGIC ---
function switchTab(tab) {
    document.querySelectorAll('.section-view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(`view-${tab}`).classList.add('active');
    // Simple check for button active state
    event.target.classList.add('active');

    if (tab === 'categories') renderCategories();
    else renderProducts();
}

// --- RENDER FUNCTIONS ---
function renderProducts() {
    productTableBody.innerHTML = '';
    menu.forEach((item, index) => {
        // Determine category Name
        const catObj = categories.find(c => c.id === item.category);
        const catName = catObj ? catObj.fr : item.category;

        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td onclick="openProductModal(${index})" style="cursor:pointer; color:var(--clr-primary); font-weight:bold;">
        ${item.translations.fr.title} <small>✎</small>
      </td>
      <td>${item.price} MRU</td>
      <td>${catName}</td>
      <td>
        <input type="checkbox" ${item.isSeasonier ? 'checked' : ''} onchange="toggleSeasonier(${index})">
      </td>
      <td>
        <button class="btn-icon btn-delete" onclick="deleteProduct(${index})">🗑</button>
      </td>
    `;
        productTableBody.appendChild(tr);
    });
}

function renderCategories() {
    categoryTableBody.innerHTML = '';
    categories.forEach((cat, index) => {
        // Hide 'all' from deletion if critical, but user might want control
        const isProtected = cat.id === 'all';

        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td>${cat.id}</td>
      <td>${cat.fr}</td>
      <td>${cat.ar}</td>
      <td>
        ${!isProtected ? `<button class="btn-icon btn-delete" onclick="deleteCategory(${index})">🗑</button>` : ''}
      </td>
    `;
        categoryTableBody.appendChild(tr);
    });
}

// --- PRODUCT ACTIONS ---
let editingProductIndex = -1;

function openProductModal(index = -1) {
    editingProductIndex = index;
    const select = document.getElementById('p-category');
    select.innerHTML = categories.filter(c => c.id !== 'all').map(c => `<option value="${c.id}">${c.fr}</option>`).join('');

    if (index > -1) {
        // Edit Mode
        const item = menu[index];
        document.getElementById('product-modal-title').textContent = "Edit Product";
        document.getElementById('p-name-fr').value = item.translations.fr.title;
        document.getElementById('p-price').value = item.price;
        document.getElementById('p-desc-fr').value = item.translations.fr.desc || "";
        document.getElementById('p-category').value = item.category;
        document.getElementById('p-seasonier').checked = item.isSeasonier || false;
    } else {
        // Add Mode
        document.getElementById('product-modal-title').textContent = "Add Product";
        productForm.reset();
    }

    productModal.style.display = 'block';
}

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameFr = document.getElementById('p-name-fr').value;
    const price = document.getElementById('p-price').value;
    const category = document.getElementById('p-category').value;
    const descFr = document.getElementById('p-desc-fr').value;
    const isSeasonier = document.getElementById('p-seasonier').checked;

    // Construct Item Object
    const newItem = {
        id: editingProductIndex > -1 ? menu[editingProductIndex].id : Date.now(), // Use timestamp for new IDs
        category: category,
        price: price,
        isSeasonier: isSeasonier,
        translations: {
            fr: { title: nameFr, desc: descFr },
            ar: { title: nameFr, desc: descFr }, // copy fr to others for now
            en: { title: nameFr, desc: descFr }
        }
    };

    if (editingProductIndex > -1) {
        // Preserve existing translations if we are just "quick editing" FR
        const existing = menu[editingProductIndex];
        newItem.translations.ar = existing.translations.ar; // Keep original if exists
        newItem.translations.en = existing.translations.en;
        newItem.translations.fr.title = nameFr; // Update targeted

        menu[editingProductIndex] = newItem;
    } else {
        menu.push(newItem);
    }

    saveData();
    closeModals();
    renderProducts();
});

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        menu.splice(index, 1);
        saveData();
        renderProducts();
    }
}

function toggleSeasonier(index) {
    menu[index].isSeasonier = !menu[index].isSeasonier;
    saveData();
}

// --- CATEGORY ACTIONS ---
function openCategoryModal() {
    categoryForm.reset();
    categoryModal.style.display = 'block';
}

categoryForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('c-id').value.trim();
    const fr = document.getElementById('c-fr').value;
    const ar = document.getElementById('c-ar').value;
    const en = document.getElementById('c-en').value || fr;

    // Check dupes
    if (categories.find(c => c.id === id)) {
        alert('Category ID already exists!');
        return;
    }

    categories.push({ id, fr, ar, en });
    saveData();
    closeModals();
    renderCategories();
});

function deleteCategory(index) {
    const catId = categories[index].id;
    // Check usage
    const used = menu.some(item => item.category === catId);

    if (used) {
        if (!confirm(`Warning: This category is used by some products. If you delete it, those products will be effectively hidden or broken until reassigned. Continue?`)) {
            return;
        }
        // If deleted, we could move items to 'all' or just leave them. 
        // Leaving them creates orphan items. Best to reassign or just allow it (items won't show in filtered views).
    }

    if (confirm('Delete Category?')) {
        categories.splice(index, 1);
        saveData();
        renderCategories();
    }
}

// --- UTILS ---
function saveData() {
    localStorage.setItem('restaurantMenuItems', JSON.stringify(menu));
    localStorage.setItem('restaurantCategories', JSON.stringify(categories));
    showBanner();
}

function showBanner() {
    saveBanner.style.display = 'block';
    setTimeout(() => { saveBanner.style.display = 'none'; }, 2000);
}

function closeModals() {
    productModal.style.display = 'none';
    categoryModal.style.display = 'none';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Initial
renderProducts();
