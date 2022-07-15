function verificar(){
    var data = new Date() //data atual  
    var ano = data.getFullYear() //
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.lenght == 0 || Number(fano.value) > ano){ //validação simples
        window.alert('[erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex') // lê o input
        var idade = ano - Number(fano.value) //calcula idade
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElemente('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){    //verificar se foi marcado H ou F
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if ( fsex[1].checked ){ //verificar se foi marcado H ou F
            gênero = 'Mulher'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-idoso-f.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-idoso-f.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','foto-idoso-f.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.` 
        res.appendChild(img)
    }   
}