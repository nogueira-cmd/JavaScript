//MAP

const Axios = require('axios')
const Node = require('node-cron')

async function getData(){

    try{

        let carros = await Axios({            
            method : "get",
            url: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
        })
        
        carros = carros.data
        console.log(carros)
        
        let CARROS = carros.map(function nomesemmaisculo(elemento){
            console.log(elemento.nome)
            return elemento.nome.toUpperCase()
        })
        
        console.log(CARROS)
    } catch(e){
        console.log(e)
        return e
    
    }
}

module.exports = getData