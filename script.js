const togglerBtn = document.getElementById('toggler')  
const cnsContainer = document.querySelector('.cns-container')
const togglerBtn_mob = document.getElementById('toggler-mob')


function toggler(){
    let styleDisplay = cnsContainer.style
    if ( styleDisplay.display === "none"){
        styleDisplay.display = "inline-block"
        // togglerBtn_mob.style.display = "none"
    }else{
        styleDisplay.display = "none"
    } 
}
//  function togglerMobileBtn(){
//      if( togglerBtn_mob.style.display === "none"){
//         togglerBtn_mob.style.display = "block"
//         styleDisplay.display = "none"

//      }else{
//         togglerBtn_mob.style.display = "none"
//      }
//  }
togglerBtn.addEventListener('click', toggler)
togglerBtn_mob.addEventListener('click', toggler)

