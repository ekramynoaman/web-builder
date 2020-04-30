







// Store the parent
var items = document.getElementById('items');
// items.addEventListener('dragexit', function () {
  
//   console.log(items);
//   this.appendChild(draggedItem);


  
// });

// Dragged item
let draggedItem = null;

let hood = null;

// Generate Section
function generateSection(ele) {
  
  let colsNum = ele.target.dataset.cols;
  
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
  // Get items collection
 const itemsList = document.querySelectorAll('.custom-section');
  
 itemsList.forEach(item => {
   
   hood = item;

     item.addEventListener('dragover', (e) => {
       
       item.style.height = '150px';
       
      });
      
      item.addEventListener('dragleave', (e) => {
        e.preventDefault();
        // Append component
        item.appendChild(draggedItem)
        item.style.height = 'auto';

    
    
    });

  });
  
}




// Structure events
var structure = document.getElementById('structure');
structure.addEventListener('dragend', generateSection);


var components = document.querySelectorAll('.component');
components.forEach(component => {
  component.addEventListener('dragstart', (e) => {
    let colsType = e.target.dataset.block;

    component.classList.add('dragging');
      if (colsType == 'text') {
      draggedItem = document.createTextNode('This is your new text block with the first paragraph.');
      
      }

      if(colsType == 'image') {
        draggedItem = document.createElement('div');
        draggedItem.classList.add('imgHood');
        let imgText = document.createElement('p');
        let text = document.createTextNode('Drop your image here or browse')
        imgText.appendChild(text)
        draggedItem.appendChild(imgText)

      }
      if(colsType == 'video') {}
      if(colsType == 'btn') {}
      if(colsType == 'divider') {}
      if(colsType == 'spacer') {}
      if(colsType == 'social') {}
      if(colsType == 'gif') {}
      if(colsType == 'html') {}

  }); 
  component.addEventListener('dragend', () => {
    component.classList.remove('dragging');
  }); 
});


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

// For make template sortable
var sortable = Sortable.create(items);

// end  here ---------------------------------------------------------------------------



