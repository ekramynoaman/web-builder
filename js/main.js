// Store the parent
var items = document.getElementById('items');
// Generate Section
function generateSection(ele) {
  console.log(ele);
  
  let colsNum = ele.target.dataset.cols;
  console.log(colsNum);
  
  if (colsNum < 5 ) {
    let cols = 12/colsNum
    addDivs(colsNum, cols);
  }
      
  if (colsNum == 12){

      addDivs(1,4);
      addDivs(1,8);
      
  }
  
  if (colsNum == 21){

    addDivs(1, 8);
    addDivs(1, 4);
      
  }
  
  if (colsNum == 13){

    addDivs(1, 3);
    addDivs(1, 9);
      
  }
  
  if (colsNum == 31){
    addDivs(1, 9);
    addDivs(1, 3);
      
  }
  
  if (colsNum == 112){
    addDivs(1, 3);
    addDivs(1, 3);
    addDivs(1, 6);
      
  }
  
  if (colsNum == 211){

    addDivs(1, 6);
    addDivs(1, 3);
    addDivs(1, 3);
  }
  
// For make template sortable
  var sortable = Sortable.create(items);

}

var structure = document.getElementById('structure');

structure.addEventListener('dragend', generateSection);f


// Add divs function
function addDivs (divs, cols) {

  for(let i = 0; i < divs; i++) {

    let section = document.createElement('div');
    section.classList.add(`col-md-${cols}`, 'nopadding');
    let item = document.createElement('div');
    item.classList.add('custom-section');
    section.appendChild(item);
    items.appendChild(section);

  }

}


// end  here ---------------------------------------------------------------------------



