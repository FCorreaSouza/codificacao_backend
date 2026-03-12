const express = require('express')
const app = express()
const port = 3000

let alunos = [
 {id:1, nome: "Edio", idade: 35},
 {id:2, nome: "Maria", idade: 15},
 {id:3, nome: "lucas", idade: 17}
]





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
