const triangle = document.querySelector("#triangle");
const pyramid = document.querySelector("#pyramid");
const reverse = document.querySelector("#reverse-pyramid");
const clear = document.querySelector("#clear");
const stars = document.querySelector("#geometric-field");
const buttons = document.querySelectorAll("button");

triangle.addEventListener("click", () => {
    let result = '';
    for( let i = 0; i < 8; i++){
        for( let y = 0; y < i; y++){
            result = result + '*';
        }
        result = `${result}<br>`;
    }
    stars.innerHTML = result;
})

pyramid.addEventListener("click", () => {
    let result = '';
    for( let i = 0; i < 8; i++){
        let space = '';
        let star = '';
        for( let y = 8; y > i; y--){
            space = space + '&nbsp';
        }
        for( let y = 0; y < 1 + i; y++){
            star = star + '*' + '&nbsp'; 
        }
        result = result + space + star;
        result = `${result}<br>`;
    }
    stars.innerHTML = result;
})

reverse.addEventListener("click", () => {
    let result = '';
    for( let i = 0; i < 8; i++){
        let space = '';
        let star = '';
        for( let y = 8; y > i; y--){
            star = star + '*' + '&nbsp';
        }
        for( let y = 0; y < 1 + i; y++){
            space = space + '&nbsp'; 
        }
        result = result + space + star;
        result = `${result}<br>`;
    }
    stars.innerHTML = result;
})

clear.addEventListener("click", () => {
    stars.textContent = null;
})

buttons.forEach( button => {
    button.addEventListener("click", e =>{
        form(e.target.id);
    })
})

function form(action){
    switch(action){

    }
}