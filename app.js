const express = require('express')
const mongoose = require('mongoose')

const app = express()
const log = console.log
const port = process.env.PORT || 8080

app.use(express.static(__dirname))

mongoose.connect("mongodb://localhost:27017/Project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}) 
.catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send({
        'status' : 'home'
    })
})

app.listen(port, () => {
    log('Server Running On Port ' + port)
})