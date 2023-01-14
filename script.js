const input = document.querySelector('input[type="text"]');
const btn = document.querySelectorAll('button');
const div = document.querySelector('.container');
const eql = document.getElementById('equal')
const clrbtn = document.querySelector('.clr-btn');

document.oncontextmenu = new Function("return false");

div.addEventListener('click',(e)=>{
    if(!e.target.classList.contains("container") && !e.target.classList.contains("bg-dark-container") && !e.target.classList.contains('switch') && !e.target.classList.contains('slider') && !e.target.classList.contains('round') && !e.target.classList.contains('clr-btn')){
        if(e.target.textContent === 'C'){
            input.style.color = "#000";
            input.value = "";
        }
        else if(e.target.textContent === 'DEL')
            input.value = input.value.slice(0,-1);
        else if(e.target.textContent === '='){
            if(input.value!=""){
                try{
                    input.value = eval(input.value);
                }
                catch(err){
                    input.style.color = "red"
                    input.value = "Invalid";
                }
            }
        }
        else{
            if(input.value === "Invalid" || input.value === "Infinity"){
                input.value = "";
            }
            input.style.color = "#000";
            input.value += e.target.textContent;
        }
    }

})

clrbtn.addEventListener('click',(e)=>{
    if(e.target.textContent === "Dark Mode"){
        e.target.textContent = "Light Mode";
        div.classList.add('bg-dark-container');
        btn.forEach((button)=>{
            button.classList.add('bg-dark-btn')
        })
        document.body.classList.add('bg-dark-body')
    }
    else if(e.target.textContent === "Light Mode"){
        e.target.textContent = "Dark Mode";
        div.classList.remove('bg-dark-container');
        btn.forEach((button)=>{
            button.classList.remove('bg-dark-btn')
        })
        document.body.classList.remove('bg-dark-body')
    }
})

document.body.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        if(input.value!=""){
            try{
                input.value = eval(input.value);
            }
            catch(err){
                input.style.color = "red"
                input.value = "Invalid";
            }
        }
    }
})
