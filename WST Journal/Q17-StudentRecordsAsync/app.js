// Q17 - Retrieving project data via asynchronous fs.readFile()

const fs = require('fs');
const { join } = require('path');

console.log('--- Project Tracker: Async Data Retrieval ---\n');

// Target the JSON source file
const dataStorage = join(__dirname, 'projects.json');

// Initiating non-blocking file read
fs.readFile(dataStorage, 'utf-8', (err, rawData) => {
    if (err) {
        console.error('Critical Error: Unable to access file.', err.message);
        return;
    }

    try {
        // Convert raw string to Object array
        const activeProjects = JSON.parse(rawData);

        console.log('Current Project List:');
        console.log('==========================================\n');

        // Iterating through dataset
        activeProjects.forEach((item) => {
            const output = [
                `Ref ID: ${item.id}`,
                `Project: ${item.title}`,
                `Lead: ${item.manager}`,
                `Status: ${item.status}`,
                `Deadline: ${item.dueDate}`
            ].join('\n');

            console.log(output + '\n');
        });

        // Summary Analytics
        console.log('==========================================');
        console.log(`Count: ${activeProjects.length} records processed.`);
        console.log('==========================================');

        console.log('\nProcess Status: JSON parsing completed successfully.');
        
    } catch (syntaxErr) {
        console.error('Data Corruption: JSON format is invalid.', syntaxErr.message);
    }
});

console.log('Notice: File read request dispatched to system...\n');