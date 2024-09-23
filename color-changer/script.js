let buttons = document.querySelectorAll('button')
let p = document.querySelector('p')
let container = document.getElementById('container')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = button.innerText
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        p.innerText = `Click the button to get ${button.innerText}`
        button.style.backgroundColor = button.innerText
        container.style.boxShadow = `0 0 20px 10px ${button.innerText.toLowerCase()}`
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseout',()=>{
        p.innerText = "Click to change color"
        button.style.backgroundColor = "black"
        container.style.boxShadow = "0 0 20px 10px white"

    })
})