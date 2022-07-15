//FIND

const Axios = require('axios')
const Node = require('node-cron')

async function getData3(){

    try{

        let carros = await Axios({            
            method : "get",
            url: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
        })
        
        carros = carros.data
        console.log(carros)
        
        let CARROS = carros.find(function filtrar(elemento){
            
            if(elemento.nome.substr(0,1) === 'H' ){
                aux = elemento.codigo
                return aux
            }else{
                //console.log(" Veículo não encontrado ")
            }

        })
        
        console.log(CARROS)
    } catch(e){
        console.log(e)
        return e
    
    }
}

module.exports = getData3