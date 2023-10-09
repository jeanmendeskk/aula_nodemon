const { application } = require("express")
const express = require("express")
const path = require("path")

const app  = express()

const caminhoBase = path.join(__dirname, "templates")

app.get('/', (require, response) => {
    response.sendFile(`${caminhoBase}/`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na port 3000!")
})