function createGrid(size) {
 const container = document.querySelector('.container');
 for (let y = 0; y <=size-1; y++) {
   for (let x = 0; x <=size-1; x++) {
         let news=(container.clientHeight/size)+'px';
         let newd = document.createElement('div');    
          container.appendChild(newd);
   
           newd.style.width= news;
           newd.style.height=news;
           newd.style.border='border-box';
           newd.style.border='1px solid black';
           newd.style.float ='left';
           newd.style.boxSizing = 'border-box';
           newd.style.position ='relative';
           newd.style.fontSize='0';

     newd.addEventListener('mouseover', function () {
        if (Random)
   {
   newd.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
   }
   else
   {
     newd.style.backgroundColor = 'black';
     let currentOp = newd.style.opacity;
     let newOp = Number(currentOp) + 0.1;
     newd.style.opacity = newOp;
    }
     });
             
}
 }
 
}
const Reset = document.querySelector('#Reset');
const Randomcolor = document.querySelector('#Randomcolor');
let Random = false;

const newRandom = () => {
   Random = !Random;
}

function reset(){ 
Random = false; 
const container = document.querySelector('.container');
 while (container.firstChild) {
   container.removeChild(container.firstChild);
 }
  noOfgrid = prompt("How many squares per side do you want?","size");

   createGrid(noOfgrid);  
}

function addEventListenerToButton() {
 Reset.addEventListener("click", reset);
}

createGrid(20);
addEventListenerToButton();