const Reset = document.querySelector('#Reset');
//const Randomcolor = document.querySelector('#Randomcolor');
let Random=false;



function createGrid(size) {
  const container = document.querySelector('.container');
  for (let y = 0; y <=size-1; y++) {
    for (let x = 0; x <=size-1; x++) {
    let news=(container.clientHeight/size)+'px';
      let newd = document.createElement('div');     
      container.appendChild(newd);
      //newd.setAttribute('data-opacity', num);
      newd.style.width= news;

     newd.style.height=news;
    // newd.style.margin = '0';
     //newd.style.padding = '0';
     newd.style.border='border-box';
  newd.style.border='1px solid black';
  newd.style.float ='left';
  newd.style.boxSizing = 'border-box';
  newd.style.position ='relative';
    //newd.style.backgroundColor='red';
    newd.style.fontSize='0';
       //let y = 0.1;
       //newd.addEventListener('mouseover',makeDarker);
      newd.addEventListener('mouseover', function () {
         if (Random)
    { 
    newd.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    else
    { console.log("new square");
      newd.style.backgroundColor = 'black';
  let currentOp = newd.style.opacity;
  let newOp = Number(currentOp) + 0.1;
  newd.style.opacity = newOp;
}
      });
               
 }
  }
   }


const newRandom = () => {
    Random = !Random;
}
 
function reset(){ 
Random=false; 
const container = document.querySelector('.container');
  while (container.firstChild)
   {
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







