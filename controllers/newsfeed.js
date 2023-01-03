const express = require(`express`)
const newsfeed = express.Router()
const Product = require(`../models/productSchema.js`)
const app = express();
app.use(express.static(`.`))

// ===SEED ROUTE===
const seedData = require(`../seedData.js`) // Seed Data
productRouter.get(`/seed`, (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {})
    Product.create(seedData, (err, data) => {
        res.redirect(`/products`)
    })
})


// ===ROUTES===
// INDEX
productRouter.get(`/`, (req, res) => {
    Product.find({}, (err, products) => {
        res.render(`index.ejs`, {products, tabTitle: `Index Page`})
    })
})

// NEW
productRouter.get(`/new`, (req, res) => {
    res.render(`new.ejs`, {tabTitle: `New Product Page`})
})

// DELETE
productRouter.delete(`/:id`, (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect(`/products`)
    })
})

// UPDATE
productRouter.put(`/:id`, (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedProduct) => {
            res.redirect(`/products/${req.params.id}`)
        },
    )
})

// CREATE
productRouter.post(`/`, (req, res) => {
    console.log(`Test`)
    Product.create(req.body, (err, createdProduct) => {
        // res.send(createdProduct)
        res.redirect(`/products`)
    })
})

// EDIT
productRouter.get(`/:id/edit`, (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render(`edit.ejs`, {p : foundProduct, tabTitle: `Edit Page`})
    })
})

// SHOW
productRouter.get(`/:id`, (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        // res.send(foundProduct)
        res.render(`show.ejs`, {p : foundProduct, tabTitle: `Show Page`})
    })
})

module.exports = productRouter