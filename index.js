const express = require('express')
const cors = require('cors')
const apiRoutes = require('./routes')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/api', apiRoutes)

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`)
})