// Q16 - Persisting inventory data using fs.writeFileSync()

const fs = require('fs');
const { join } = require('path');

console.log('--- Inventory Management System (Sync Mode) ---\n');

// Define data payload
const catalogItems = [
    {
        sku: "PROD-9901",
        title: "Mechanical Keyboard",
        category: "Peripherals",
        stock: 45,
        price: 89.99
    },
    {
        sku: "PROD-2245",
        title: "Ultrawide Monitor",
        category: "Displays",
        stock: 12,
        price: 450.00
    }
];

// Define target destination
const targetFile = join(__dirname, 'inventory_data.json');

try {
    // Execute synchronous write operation
    const jsonData = JSON.stringify(catalogItems, null, 4); // Used 4 spaces for a different look
    fs.writeFileSync(targetFile, jsonData, 'utf-8');

    console.log('Success: Data exported to disk.');
    console.log(`Location: ${targetFile}`);
    
    // Validate the operation
    if (fs.existsSync(targetFile)) {
        const { size } = fs.statSync(targetFile);
        
        console.log(`Resource Status: ONLINE (${size} bytes)`);
        console.log('\n--- Previewing File Structure ---');
        console.log(jsonData);
        console.log('---------------------------------');
        console.log('\nOperation Finalized: File integrity verified.');
    }
} catch (err) {
    console.error('System Failure during write:', err.message);
}