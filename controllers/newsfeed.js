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
    Message.find({}, (err, m) => {
        res.render(`index.ejs`, {m, pageName: `Newsfeed`})
    })
})

// New
newsfeed.get(`/new`, (req, res) => {
    res.render(`new.ejs`, {pageName: `Create Post`})
})

// Delete
newsfeed.delete(`/:id`, (req, res) => {
    Message.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect(`/newsfeed`)
    })
})

// Update
newsfeed.put(`/:id`, (req, res) => {
    Message.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedMessage) => {
            res.redirect(`/newsfeed`)
        }
    )
})

// Create
newsfeed.post(`/`, (req, res) => {
    Message.create(req.body, (err, newMessage) => {
        res.redirect(`/newsfeed`)
    })
})

// Edit
newsfeed.get(`/:id/edit`, (req, res) => {
    Message.findById(req.params.id, (err, message) => {
        res.render(`edit.ejs`, {m: message, pageName: `Edit Post`})
    })
})

// Show
newsfeed.get(`/:id`, (req, res) => {
    Message.findById(req.params.id, (err, message) => {
        res.render(`show.ejs`, {m: message, pageName: `View Post`})
    })
})

module.exports = newsfeed