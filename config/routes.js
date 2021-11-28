const express = require('express')
const routes = express.Router()

let db = [
    { '1': { nome: 'Cliente 1', Idade: '20' } },
    { '2': { nome: 'Cliente 2', Idade: '20' } },
    { '3': { nome: 'Cliente 3', Idade: '20' } }

]

//buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// inserir dado
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
})

routes.delete = ('/:id', (req, res) => {
    constd = req.params.Idade

    let newDB = db.filter(it => {
        if (!item[id])
            return item
    })
    db = newDB
    return res.send(newDB)
})

module.exports = routes