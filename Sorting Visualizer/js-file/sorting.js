// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature 
swap = (ele1,ele2)=>{
    console.log('In swap()');

    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
   
}

//disable buttons used in conjunction with enable, so that we disable during sorting and enable button after it

disableSortingBtn = () =>{
    document.querySelector('.bubbleSort').disabled=true;
    document.querySelector('.insertionSort').disabled=true;
    document.querySelector('.mergeSort').disabled=true;
    document.querySelector('.quickSort').disabled=true;
    document.querySelector('.selectionSort').disabled=true;
}
// enable sorting buttons used in conjucntion with disable
enableSortingBtn = () =>{
    document.querySelector('.bubbleSort').disabled=false;
    document.querySelector('.insertionSort').disabled=false;
    document.querySelector('.mergeSort').disabled=false;
    document.querySelector('.quickSort').disabled=false;
    document.querySelector('.selectionSort').disabled=false;
}
//disable size slider used in conjunction with enable, so that we can disable during sorting and enable after it 

disableSizeSlider = () =>{
    document.querySelector('#arr_sz').disabled=true;
}
//enable size slider used in conjucntion with enable
enableSizeSlider = () =>{
    document.querySelector('#arr_sz').disabled=false;
}
//disable new Array button  used in conjunction with enable, so that we can disable during sorting and enable after it 

disableNewArrayBtn= ()=>{
    document.querySelector('#newArray').disabled=true;
}
//enable newArray button used in conjucntion with enable
enableNewArrayBtn= ()=>{
    document.querySelector('#newArray').disabled=false;
}

// using asyn function so that we can show animation of sorting

waitForm =(milisec) =>{
    return new Promise(resolve =>{
        setTimeout(() => {resolve('')},milisec);
    })
}
 // selecting size slider from DOM

 let arraySize = document.querySelector('#arr_sz');

 // Event listner to update the bars on the UI

 arraySize.addEventListener('input', ()=>{
     console.log(arraySize.value , typeof(arraySize.value))
     createNewArray(parseInt(arraySize.value));
 });

 // Default input for waitform functionc(250ms)

 let delay = 260;
 // selecting the speed slider from DOM
 let delayElement = document.querySelector('#speed_input');

 // Event listner to update delay time 

 delayElement.addEventListener('input', ()=>{
     console.log(delayElement.value, typeof(delayElement.value));
     delay = 320 - parseInt( delayElement.value);
 });

   // Helper Funtion to delete all the previous bars, so that new can be added

   deleteChild = () =>{
    const bar = document.querySelector('#bars');
    bar.innerHTML='';
}
 // Creating an array to store randomly generated numbers
 let array=[];
 //call to display bar right when you visit the site
 
     createNewArray();

 // to create a new Array input size of array
//   let noOfBars=60;
  function createNewArray( noOfBars =50){
    // calling helper function to delete old bars from the DOM
    deleteChild();
    // creating an array of random numbers 
    array = [];
    for(let i=0; i<noOfBars;i++){
    array.push(Math.floor(Math.random() *250) +1);
    }
    console.log(array);

 // selecting the div of Bars element

 const bars =document.querySelector('#bars');

 // creating multiple div using loop and adding class bar col
 for( let i=0; i < noOfBars ;i++){
     const bar = document.createElement('div');
     bar.style.height = `${array[i]*2}px`;
     bar.classList.add('bar');
     bar.classList.add('flex-item');
     bar.classList.add(`barNo${i}`);
     bars.appendChild(bar);
     }
}

// selecting new array button from DOM and adding eventlistner 
const newArray = document.querySelector('.newArray');
newArray.addEventListener('click', ()=>{
    console.log('from newArray' + arraySize.value);
    console.log('from newArray' + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
    
});
