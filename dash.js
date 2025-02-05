// Get the button and form elements
let createcolBtn = document.getElementById("collection");
let collectionform = document.getElementById("collectionform");
let addItem = document.getElementById("addElement");

// Event listener for the "Create A Collection" button
createcolBtn.addEventListener('click', () => {
    // Hide the "Create A Collection" button
    createcolBtn.style.display = "none";

    // Display the form below the navbar
    collectionform.style.display = "block";

    // Hide other elements (like addItem button)
    addItem.style.display = "none";
});

// Reference to the Collection for select and sub-canteen select elements
let canteenSelect = document.getElementById("canteen");
let subCanteenSelect = document.getElementById("sub-canteen");

// Mapping of canteen types to their sub-canteens
const canteenOptions = {
    mainCanteen: [
        "Canteen 1", "Canteen 2", "Canteen 3", 
        "Canteen 4", "Canteen 5", "Canteen 6"
    ],
    hostelCanteen: [
        "Canteen A", "Canteen B", "Canteen C"
    ],
    foodCourt: [
        "Food Court 1"
    ]
};

// Event listener to update the sub-canteen options based on selection
canteenSelect.addEventListener('change', () => {
    const selectedCanteen = canteenSelect.value;
    
    // Clear the sub-canteen dropdown
    subCanteenSelect.innerHTML = '<option value="">Select a Sub-Canteen</option>';
    
    if (selectedCanteen) {
        // Populate the sub-canteen options based on the selected canteen
        const subCanteens = canteenOptions[selectedCanteen] || [];
        subCanteens.forEach(subCanteen => {
            let option = document.createElement('option');
            option.value = subCanteen;
            option.textContent = subCanteen;
            subCanteenSelect.appendChild(option);
        });
    }
});

// Get references to the input field and container where dynamic items will be added
let noOfItemsInput = document.getElementById('no-of-items');
let itemFieldsContainer = document.getElementById('item-fields-container');

// Function to update the form based on the number of items
noOfItemsInput.addEventListener('input', () => {
    let numOfItems = parseInt(noOfItemsInput.value); // Get the value from the input

    // Clear previous dynamically added item fields
    itemFieldsContainer.innerHTML = '';

    // Add new item fields based on the input number
    for (let i = 0; i < numOfItems; i++) {
        // Create item name input field
        let itemNameLabel = document.createElement('label');
        itemNameLabel.textContent = `Item ${i + 1} Name`;
        let itemNameInput = document.createElement('input');
        itemNameInput.type = 'text';
        itemNameInput.placeholder = `Enter item ${i + 1} name`;

        // Create item price input field
        let itemPriceLabel = document.createElement('label');
        itemPriceLabel.textContent = `Item ${i + 1} Price`;
        let itemPriceInput = document.createElement('input');
        itemPriceInput.type = 'number';
        itemPriceInput.placeholder = `Enter price for item ${i + 1}`;

        // Append the generated fields to the container
        itemFieldsContainer.appendChild(itemNameLabel);
        itemFieldsContainer.appendChild(itemNameInput);
        itemFieldsContainer.appendChild(itemPriceLabel);
        itemFieldsContainer.appendChild(itemPriceInput);
    }
});
