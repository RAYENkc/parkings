const express = require('express')
const app = express()
const parkings = require('./parkings.json')

app.get('/parkings', function (req, res) {

  res.status(200).json(parkings)
})

/*
app.get('/parkings/:id', function (req, res) {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id == id)
    res.status(200).json(parking)
  })

app.post('/parkings', function (req,res) {
    parkings.push(req.body)
    res.status(200).json(parkings)
  })
*/
app.use(express.json())
app.listen(3000)