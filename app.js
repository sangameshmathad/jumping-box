console.log("game teting");
let char = document.getElementById('char');
let block = document.getElementById('block');


function jump(){
    if(char.classList!="animate"){

        char.classList.add("animate");
    }
   setTimeout(function (){char.classList.remove("animate")},1000)
}

// block vs char
// let kl = parseInt(window.getComputedStyle(char).getPropertyValue('left'));
// console.log(kl);

let game = setInterval(function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    // console.log(charTop);
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    // console.log(blockLeft);
   if (blockLeft<30 && blockLeft>0 && charTop >=200 ){
       block.style.animation="none"
       alert("Game-Over")
   }

},10)
