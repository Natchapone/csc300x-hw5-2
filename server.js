const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Serve files from public
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Main')
})

let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
    {
        'joke': 'Why did the student eat his homework?',
        'response': 'Because the teacher told him it was a piece of cake!'
    },
    {
        'joke': 'What kind of tree fits in your hand?',
        'response': 'A palm tree'
    },
    {
        'joke': 'What is worse than raining cats and dogs?',
        'response': 'Hailing taxis'
    }
];
let lameJoke = [
    {
        'joke': 'Which bear is the most condescending?',
        'response': 'Pan-DUH'
    },
    {
        'joke': 'What would the Terminator be called in his retirement?',
        'response': 'The Exterminator'
    }
];


// Enable CORS for all routes
app.use(cors());


// Categories endpoint
app.get('/jokebook/categories', (req, res) => {
    res.json(categories);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});
