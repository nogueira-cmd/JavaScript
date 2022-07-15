//FILTER

const Axios = require('axios')
const Node = require('node-cron')

async function getData2(){

    try{

        let carros = await Axios({            
            method : "get",
            url: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
        })
        
        carros = carros.data
        console.log(carros)
        
        let CARROS = carros.filter(function filtrar(elemento){
            //console.log(elemento.nome)
            //busca e retorna o codigo do veículo se existir.
            
            if(elemento.nome === 'Hyundai' ){
                aux = elemento.codigo
                return aux
            }else{
                console.log(" Veículo não encontrado ")
            }

        })
        
        console.log(CARROS)
    } catch(e){
        console.log(e)
        return e
    
    }
}

module.exports = getData2