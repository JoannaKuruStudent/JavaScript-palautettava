const path = require('path')
const express = require('express')

const app = express()

// Tehdään polkumääritys public kansioon 
const polku = path.join(__dirname, './public')

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
// Tämä metodi kykenee tarjoamaan ns. staattiset filet, eli html, css, selainpään javaScript...
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

const tuotteetJson = [{"id": 1, "tuote": "Pilli", "hinta": 1},
{"id": 2, "tuote": "Pulla", "hinta": 2},
{"id": 3, "tuote": "Pallo", "hinta": 8},
{"id": 4, "tuote": "Polla", "hinta": 1000000}]

app.get('/tuotteet', (req, res) => res.json(tuotteetJson))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})