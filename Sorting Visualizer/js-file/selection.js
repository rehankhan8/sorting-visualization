async function selection(){
    console.log('In selection()');
    const ele=document.querySelectorAll('.bar');
    for (let i=0; i<ele.length;i++){
        console.log('In i loop');
        let min_idx =i;
        ele[i].style.background='blue';
        for(let j=i+1; j < ele.length; j++){
            console.log('In j loop');
            ele[j].style.background='red';
            await waitForm(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height) ){
            console.log('In if condition');
            if (min_idx !== i){
                // new min_idx found so change prev min_idx color back to normal
                ele[min_idx].style.background='cyan';
            }
            min_idx=j;
        } 
        else{
            //if the current comparision is more than min_idx change back to noraml
            ele[j].style.background='cyan'; 
        }
    }
    await waitForm(delay);
    swap(ele[min_idx], ele[i]);
    // change the min element index back to noraml as it is swapped
    ele[min_idx].style.background='cyan';
    // change the sorted eleements color to green 
    ele[i].style.background='green';

}}

const selectionSortBtn=document.querySelector('.selectionSort');
selectionSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSrtiongBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});










