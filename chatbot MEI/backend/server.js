const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", 
    [email, senha],
    (err, results) => {
        if (err) return res.status(500).send("Erro");
        
        if (results.length > 0) {
            res.send({ ok: true, msg: "Login OK" });
        } else {
            res.send({ ok: false, msg: "Email ou senha inválidos" });
        }
    });
});

app.post("/cadastro", (req, res) => {
    const { email, senha } = req.body;

    db.query("INSERT INTO usuarios (email, senha) VALUES (?, ?)", 
    [email, senha],
    (err) => {
        if (err) return res.status(500).send("Erro ao cadastrar");
        res.send({ ok: true, msg: "Usuário criado!" });
    });
});

app.listen(3000, () => {
    console.log("✅ Servidor rodando na porta 3000");
});
