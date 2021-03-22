const registerClicks= e =>{
    console.log(e.clientX, e.clientY)
}

document.body.addEventListener("click", registerClicks);