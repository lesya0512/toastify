const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({
        message: "успешное подключение к серверу!"
    })
})

app.post('/login', (req, res) => {
    
    const user = {
        login: 'admin',
        password: '1234'
    }

    if (req.body.login != user.login){
        res.status(404).send({message: 'пользователь не найден'});
    }

    if (req.body.login === user.login && req.body.password !== user.password) res.status(403).send({message: ' неверный пароль'});

    if (req.body.login === user.login && req.body.password === user.password) res.send({message: 'успешная авторизация'}); 

    console.log(req.body);
})

app.listen(3001, ()=>{
    console.log("сервер запущен. порт: 3001");
})
