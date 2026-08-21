// Topics: DOM Manipulation

// Description

// Build a shopping list interface.

// The user must be able to:

// enter an item
// add it to the list
// mark it as purchased
// delete it

// Empty items must not be added.

// Required HTML
// <input id="item-input" type="text" />
// <button id="add-button">Add</button>
// <ul id="shopping-list"></ul>
// Requirements

// Create list elements using JavaScript. Do not hard-code items in HTML.

// Bonus

// Display the total and purchased item count.

const input = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");
const totalCount = document.getElementById("total-count");
const purchasedCount = document.getElementById("purchased-count");

addButton.addEventListener("click", () => {
    const itemText = input.value.trim();

    if (itemText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        shoppingList.appendChild(listItem);
        updateCounts();

        const purchasedButton = document.createElement("button");
        purchasedButton.textContent = "Purchased";
        listItem.appendChild(purchasedButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        listItem.appendChild(deleteButton);

        purchasedButton.addEventListener("click", () => {
            listItem.style.textDecoration = "line-through";
            updateCounts();
        });

        deleteButton.addEventListener("click", () => {
            shoppingList.removeChild(listItem);
            updateCounts();
        });

        input.value = "";
    }   
})

function updateCounts() {
    const totalItems = shoppingList.children.length;
    const purchasedItems = shoppingList.querySelectorAll("li[style*='text-decoration: line-through']").length;

    totalCount.textContent = totalItems;
    purchasedCount.textContent = purchasedItems;

}

