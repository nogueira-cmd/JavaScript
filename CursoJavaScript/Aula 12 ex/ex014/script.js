function carregar(){
    var msg = window.document.getElementsById('msg')
    var img = window.document.getElementsById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manhã.jpg'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
    }else {
        //boa noite
        img.src = 'noite.jpg'
    }   
}