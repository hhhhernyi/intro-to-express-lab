// server.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world')
});

app.get('/greetings/:username', (req, res) => {
  const username = req.params.username
  res.send(`<h1> Have a great day, ${username}! </h1>`)
});

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if ( isNaN( Number(number) ) ) {
        res.send(`<h1> You must specify a number. </h1>`)
    } else {
        let randomNumber = Math.floor(Math.random()*(Number(number)+1))
        res.send(`<h1> you have rolled a ${randomNumber} </h1>`)
    }
  });

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      const index = req.params.index
      console.log(collectibles[index])
      if (collectibles[index]===undefined) {
        res.send('<h1> This item is not yet in stock. Check back soon! </h1>')
      } else {
        res.send(`<h1>So, you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!</h1>`)
      }
    
  });

  app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    res.send(`the min price is ${req.query['min-price']}, the max price is ${req.query['min-price']} and the type is ${req.query['price']}`)
    // not sure how to render the whole list of shoes array, thinking if need to use home.ejs and use for loop while passing shoes as locals

    
  });


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
