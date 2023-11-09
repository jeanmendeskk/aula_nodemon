const { application } = require("express")
const express = require("express")
const path = require("path")

const app  = express()

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastro/salvar', (require, response) => {
    const nome = require.body.nome
    const email = require.body.email
    const senha = require.body.senha

    console.log(`O email do usuário é: ${email}`)
})

app.get('/cadastro', (require, response) => {
    response.sendFile(`${caminhoBase}/cadastro.html`)
})


app.get('/usuarios/:id', (require, response) => {
    const id = require.params.id

    console.log(`acessando dados do usuário ${id}`)

    response.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (require, response) => {
    response.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na port 3000!")
})