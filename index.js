// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const sortCategories = Object.keys(menu);
    sortCategories.forEach(category => {
        console.log(`${category}`);
        menu[category].forEach(item => {
            console.log(`${item}`);
        });
        console.log('');
    });     
}

const container = document.getElementById(`menu`);

function handleItemClick(event) {
    addToOrder(event.target.textContent);
    
}

Object.keys(menu).forEach(category => {
    
    const categoryElement = document.createElement('h2');
    categoryElement.textContent = category;
    categoryElement.classList.add('menu-category');
    container.appendChild(categoryElement);

    
    menu[category].forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        itemElement.classList.add('menu-item');
        itemElement.addEventListener('click', handleItemClick);
        container.appendChild(itemElement);
    });
});


// Callback function for adding an item to the order
function addToOrder(itemName) {
     
     const orderItemsList = document.getElementById('order-items');
     const orderTotalElement = document.getElementById('order-total');
     
     const orderItemElement = document.createElement('li');
     orderItemElement.textContent = itemName;

     orderItemsList.appendChild(orderItemElement);

     const currentTotal = parseFloat(orderTotalElement.textContent);
     const newTotal = currentTotal + 60.00;
     orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
   
}

// Start the menu system by calling the init function
initMenuSystem(menu);
