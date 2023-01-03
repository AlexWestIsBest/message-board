// ===DEPENDENCIES===
const express = require(`express`)
const newsfeed = express.Router()
const Message = require(`../models/message.js`)

// ===MIDDLEWARE===,
const app = express();
app.use(express.static(`.`))



// ===SEED ROUTE===
const seedData = require(`../seedData.js`)
newsfeed.get(`/seed`, (req, res) => {
    Message.deleteMany({}, (err, allMessages) => {})
    Message.create(seedData, (err, data) => {
        res.redirect(`/newsfeed`)
    })
})



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