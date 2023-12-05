import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express'
import cors from 'cors'
import menuItemsRoutes from './src/routes/menuItemsRoutes'
import categoriesRoutes from './src/routes/categoriesRoutes'
import authRoutes from './src/routes/authRoutes'

const app = express()

app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Restaurant Backend is Running')
})

app.use('/menu-items', menuItemsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/api', authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
