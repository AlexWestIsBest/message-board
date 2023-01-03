// ===DEPENDENCIES===
const express = require(`express`)
const newsfeed = express.Router()
const Message = require(`../models/message.js`)

// ===MIDDLEWARE===,
const app = express();
app.use(express.static(`.`))



// ===SEED ROUTE===



// ===ROUTES===
// Index
newsfeed.get(`/`, (req, res) => {
    Message.find({}, (err, messages) => {
        res.render(`index.ejs`, {m: messages, pageName: `Index Page`})
    })
})

// New


// Delete


// Update


// Create


// Edit


// Show


module.exports = newsfeed