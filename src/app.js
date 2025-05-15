// server.js
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import reservasRoutes from './routes/reservas.js'
import ofertasRoutes from './routes/ofertas.js'

const app = express()
const PORT = process.env.PORT || 3000

// Necesario para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) // Para HTML, CSS, JS

// Rutas API
app.use('/api/reservas', reservasRoutes)
app.use('/api/ofertas', ofertasRoutes)

// Ruta base
app.get('/', (req, res) => {
  res.send("Hola mundo desde la web")
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
