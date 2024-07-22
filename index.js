// Declare variables using var, let, and const
const productTable = document
  .getElementById("productTable")
  .getElementsByTagName("tbody")[0];
const logInventoryButton = document.getElementById("logInventoryButton");
const productNameInput = document.getElementById("productName");
const productModelInput = document.getElementById("productModel");
const productCostInput = document.getElementById("productCost");
const productQuantityInput = document.getElementById("productQuantity");

// Create an array to hold the inventory of store items
let inventory = [];

// Create three product items
const product1 = {
  name: "Chrome Zippo Lighter",
  model: "Dark Silver",
  cost: 50.99,
  quantity: 9,
};
const product2 = {
  name: "Embroidered Leather Wallet",
  model: "Slate Grey",
  cost: 100.99,
  quantity: 90,
};
const product3 = {
  name: "Black Thorns Tote Bag",
  model: "True Black",
  cost: 200.99,
  quantity: 99,
};

// Add the product objects to the inventory array
inventory.push(product1, product2, product3);

// Function to display the inventory data in the HTML table
function displayInventory() {
  productTable.innerHTML = ""; // Clear existing rows
  inventory.forEach((product) => {
    const row = productTable.insertRow();
    row.insertCell(0).textContent = product.name;
    row.insertCell(1).textContent = product.model;
    row.insertCell(2).textContent = `$${product.cost.toFixed(2)}`;
    row.insertCell(3).textContent = product.quantity;
  });
}

// Event handler log inventory
function logInventory() {
  const name = productNameInput.value.trim();
  const model = productModelInput.value.trim();
  const cost = parseFloat(productCostInput.value);
  const quantity = parseInt(productQuantityInput.value, 10);

  if (name && model && !isNaN(cost) && !isNaN(quantity)) {
    const newProduct = { name, model, cost, quantity };
    inventory.push(newProduct);
    displayInventory();
    productNameInput.value = "";
    productModelInput.value = "";
    productCostInput.value = "";
    productQuantityInput.value = "";
    // Log the new product added
    console.log(`Product added: ${name}, ${model}, $${cost.toFixed(2)}, ${quantity} units`);
  } else {
    alert("Please fill in all fields with valid values.");
  }
}

// Add event listeners
logInventoryButton.addEventListener("click", logInventory);

// Display initial inventory
displayInventory();
