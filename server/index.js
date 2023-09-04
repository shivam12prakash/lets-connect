import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import multer from 'multer'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import { register } from './controllers/auth.js'
import { createPost } from './controllers/posts.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import { verifyToken } from './middleware/auth.js'
import User from './Models/User.js'
import Post from './Models/Post.js'
import { users, posts } from './data/index.js'

/* Middleware Configurations setup */
//In order to use the modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

//Setting up Configuration for File Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage })

/* ROUTES with Files */
//Middleware Function for File Uploads
app.post('/auth/register', upload.single('picture'), register)
app.post('/posts', verifyToken, upload.single('picture'), createPost)

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

const PORT = process.env.PORT || 4001

mongoose.connect(process.env.DB_URL)

app.listen(PORT, () => {
  console.log(`Server is up on the PORT ${PORT}`)

  //User.insertMany(users)
  //Post.insertMany(posts)
})
