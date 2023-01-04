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
        res.render(`index.ejs`, {messages, pageName: `Index Page`})
    })
})

// New

// Delete
newsfeed.delete(`/:id`, (req, res) => {
    Message.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect(`/newsfeed`)
    })
})
// Update

// Create

// Edit

// Show
newsfeed.get(`/:id`, (req, res) => {
    Message.findById(req.params.id, (err, message) => {
        res.render(`show.ejs`, {m: message, pageName: `Show Page`})
    })
})

module.exports = newsfeed