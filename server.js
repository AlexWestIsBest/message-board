// ===DEPENDENCIES===
const express = require(`express`);
const mongoose = require(`mongoose`);
const Message = require(`./models/message.js`)
// const seedData = require(`./seedData`)
const methodOverride = require(`method-override`)
const newsfeed = express.Router()
require(`dotenv`).config()



// ===MIDDLEWARE===
const app = express();
app.use(methodOverride(`_method`))
app.use(express.urlencoded({extended: false}))
app.use(express.static(`.`))



// ===DATABASE===
// Configuration
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connection;

// Connection
mongoose.connect(DATABASE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('[Server startup] Mongo connected'));
db.on('disconnected', () => console.log('[Server error] Mongo disconnected'));



// ===ROUTES===
// const newsfeedController = require(`./controllers/newsfeed.js`)
// app.use(`/newsfeed`, newsfeedController)



// ===LISTENER===
app.listen(PORT, () => console.log(`[Server startup] Express is listening on port: ${PORT}`));