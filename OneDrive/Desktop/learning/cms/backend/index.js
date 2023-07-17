const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser")
const ErrorMiddleware = require("./middlewares/Error");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const { connectDB } = require("./config/database");
const app = express();

config({
  path: "./.env",
});

connectDB();



// Using Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Content-Type', 'text/event-stream');
  next();
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});



app.use(ErrorMiddleware);

// Routes
app.use("/user", userRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
