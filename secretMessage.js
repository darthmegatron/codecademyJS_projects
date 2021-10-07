let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 
                     'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last element
secretMessage.pop();
// Add 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');
// Replace 'easily' with 'right'
secretMessage[secretMessage.indexOf('easily')] = 'right';
// Remove first element
secretMessage.shift();
// Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
// Replace 'get, right, the, first, time' with 'know'
secretMessage.splice(6, 5, 'know');
// Print array as a sentence to reveal the message
console.log(secretMessage.join(' '));
