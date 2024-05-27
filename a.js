const text = "This example can be used for text analysis. Text analysis is commonly used in the fields of data science and natural language processing.";

const wordFrequency = text.toLowerCase().match(/\b\w+\b/g).reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    return frequencyMap;
}, {});

const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);

console.log("Word Frequency and Sorting:");
sortedWords.forEach(word => {
    console.log(`${word}: ${wordFrequency[word]}`);
});