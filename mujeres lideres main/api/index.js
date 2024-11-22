import express from 'express';
import cors from 'cors';
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import multer from "multer"; 



dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
};


app.use("/upload", express.static("../client/public/upload"));
app.use(cors(corsOptions));

// USING MULTER...
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  const fullUrl = `${process.env.BACKEND_URL}/upload/${file.filename}`; // Usar la URL completa
  res.status(200).json({ url: fullUrl });
});



app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/auth", authRoute)

app.listen(5000, () =>
    console.log("Connected successfully")
);
