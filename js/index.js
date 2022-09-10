const h1 = document.getElementsByTagName('h1')
const animation = 'anime';
const target = document.querySelectorAll('[data-anime]')


function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*4)/5);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animation);
        }
        else{
            element.classList.remove(animation); 
        }
    })
    
}

window.addEventListener('scroll', function(){
    animeScroll()
})
