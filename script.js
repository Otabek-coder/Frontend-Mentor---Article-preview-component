const togglerBtn = document.getElementById('toggler')  
const cnsContainer = document.querySelector('.cns-container')
const togglerBtn_mob = document.getElementById('toggler-mob')


function toggler(){
    let styleDisplay = cnsContainer.style
    if ( styleDisplay.display === "none"){
        styleDisplay.display = "inline-block"
    }else{
        styleDisplay.display = "none"
    } 
}

togglerBtn.addEventListener('click', toggler)
togglerBtn_mob.addEventListener('click', toggler)

