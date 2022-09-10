const conteudo = document.getElementById('conteudo')
const card = document.getElementById('card')
var rd = 0;

card.addEventListener('click',()=>{
    rd++
    console.log('rodar')
    if(rd%2!=0){
        card.classList.add('rodar')
    }
    else{
        card.classList.remove('rodar')
    }
    
})
