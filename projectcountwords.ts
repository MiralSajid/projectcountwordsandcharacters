import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to count characters and words
const analyzeText = (text: string) => {
    // Remove all whitespaces
    const noSpaces = text.replace(/\s+/g, '');

    // Count characters
    const charCount = noSpaces.length;

    // Count words by splitting on spaces and filtering out empty strings
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    return { charCount, wordCount };
};

// Prompt user for input
const promptUser = () => {
    rl.question('Enter an English paragraph: ', (input) => {
        const { charCount, wordCount } = analyzeText(input);

        console.log(`Character count (excluding whitespaces): ${charCount}`);
        console.log(`Word count: ${wordCount}`);

        rl.close();
    });
};

// Start the application
promptUser();
