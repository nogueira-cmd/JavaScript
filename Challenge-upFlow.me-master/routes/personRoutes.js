const router = require('express').Router()

const Person = require('../models/Person')


// API Rest - definição CRUD . ok! Funcionando todas funções! 


// Criação de dados- create 


router.post('/', async (req, res)=> {

    //req.body - corpo de requisição(aonde chega os dados)
    // {name: "Matheus", age: 23, salary: 5000, formation: enginner} - modelo
    const {name, age, salary, formation} = req.body

    if(!name){
        res.status(422).json({ error: 'O nome é obrigatório!'})
        return
    }

    const person = {
        name,
        age,
        salary,
        formation
    }
    
    //criação de dados - e validação de erro...
    try{
     
        await Person.create(person)
    // statu HTTP 201 - criação realizada com sucesso.    
    
    res.status(201).send({message: 'Pessoa inserida no sistema com sucesso'})
    
    }   catch(error) {
        res.status(500).json({ error: error })
    }
})

// Read - leitura de dados - lemos todos os usuários cadastrados no banco de dados
// Método FIND

router.get('/', async (req,res) => {
    try{

      const people = await Person.find()

      res.status(200).json(people)

    } catch(error) {
        res.status(500).json({ error: error})

    }

})

router.get('/:id', async (req,res) =>{

    // BUSCAR DADOS da requisição, pela url = req.params
    // MÉTODO FIND0NE - FILTRANDO POR ID
    const id = req.params.id
    try{
        const person = await Person.findOne({_id: id}) //filtro ID

        if(!person){ 
            res.status(422).json({message: ' O usuário não foi encontrado'})
            return
        }
        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ error: error})
 }
})

// ATUALIZAR DADOS - update (PUT, PATCH) 
// PUT - atualização total
// PATCH - atualização parcial

router.patch('/:id', async (req,res) => {

    const id = req.params.id
    
    const { name, age, salary, formation} = req.body

    const person ={
        name,
        age,
        salary,
        formation
    }

    try{
        
        const updatedPerson = await Person.updateOne({_id:id}, person)
        
        console.log(updatedPerson)
        
        //validação do update
        if(updatedPerson.matchedCount === 0 ){
            res.status(422).json({message: ' O usuário não foi encontrado'})
            return
        }
        
        res.status(200).json(person)

    } catch(error){
        res.status(500).json({ error: error })
    }

})

//DELETE - deletar dados
router.delete('/:id', async (req,res)=> {

    const id = req.params.id

    const person = await Person.findOne({_id: id}) //filtro ID

    if(!person){ 
        res.status(422).json({message: ' O usuário não foi encontrado'})
        return
    }

    try{
        await Person.deleteOne({_id: id})

        res.status(200).json({message: 'Usuário removido com sucesso'})

    }catch(error){
        res.status(500).json({ error: error })
    }
})

module.exports = router
