//conf inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//import função de requisição / trabalho de dados
const functionOne = require('./controllers/rotina.js')
const functionTwo = require('./controllers/rotina2.js')
const functionThree = require('./controllers/rotina3.js')


//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())


//rotas da API - enviar dados

const personRoutes =  require('./routes/personRoutes')

app.use('/person', personRoutes)


//rota inicial / endpoint

app.get('/', (req,res) =>{

    //mostrar req
    
    res.json({message: 'Oi Express!' })

})

// entregar uma porta  - conexão banco de dados MONGODB

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@up2.ohr9uhb.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(4000)
}

)
.catch((err) => console.log(err))

// Parte 2 - aquisição e tratamento de dados - MAP/FILTER/FIND

    //1)functionOne -> map
    //2)functionTwo  -> filter
    //3)functionThree -> find

        //Obs: Descomentar e utilizar a função para tratamento de dados da API - function(One,Two,Three). 

//functionOne()                //Map
//functionTwo()               //Filter
//functionThree()            //Find