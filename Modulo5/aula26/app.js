import express from 'express'
import fs from 'fs'

const app = express()
app.use(express.json())

const PORT = 3300
const users =JSON.parse(fs.readFileSync("./users.json", {
    encoding: "UTF-8"
}))

const saveUsers = (users) => {
    fs.writeFileSync('.users.json', JSON.stringify(users, null, 2))
}

app.get('/users', (req, res) => {
    return res.json(JSON.parse(users))
});

app.post('/users', (req, res) => {
    const { name, age, email } = req.body
    if (!name || !email || !age) {
        return res.status(400).json({ message: "todos os campos são obrigatórios" })
    }
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email já esta cadastrado!' })
    }

    users.push({
        id: users.length + 1,
        name,
        age,
        email
    })
    saveUsers(users);
    return res.status(201).json({ message: "O usuario salvo com sucesso" })
});


app.put('/user/id', (req, res) => {
    const { id } = req.params
    const { name, age, email } = req.body
    const user = users.find(user => user.id === Number(id))

    if (!user) {
        return res.status(400).json({ message: 'usuario não encontrado' })
    }
    const userIndex = users.findIndex(user => user.id === id)

    name && (user.name = name)
    age && (user.age = age)
    email && (user.email = email)

    saveUsers(Useres);

    return res.status(200).json({ ok: true })
})

app.get('/', (req, res) => {
    return res.send('Helo world!');
});

app.listen(PORT, () => {

    console.log(`Servidor esta na porta http://localhost:${PORT}`);
});

// const fs = require('fs')

// const conteudo = fs.readFileSync(
//     "dados.txt", 'utf-8'
// );

// console.log(conteudo)


// fs.writeFileSync(
//     'saida.txt',
//     'Olá, Node.JS'
// )