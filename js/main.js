// Create element function
function create(ele) {
  return document.createElement(ele);
}

// Store the parent
const items = document.getElementById('items');


// Dragged item component
let draggedItem = null;

// component hood
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
const structure = document.getElementById('structure');
structure.addEventListener('dragend', generateSection);

// Component event
const components = document.querySelectorAll('.component');
components.forEach(component => {
  component.addEventListener('dragstart', (e) => {
    let colsType = e.target.dataset.block;

    component.classList.add('dragging');
      if (colsType == 'text') {
      draggedItem = document.createTextNode('This is your new text block with the first paragraph.');
      
      }

      if(colsType == 'image') {
        draggedItem = create('div');
        draggedItem.classList.add('imgHood');
        let imgText = create('p');
        let text = document.createTextNode('Drop your image here or browse')
        imgText.appendChild(text)
        draggedItem.appendChild(imgText)

      }

      if(colsType == 'gif') {
        draggedItem = create('div');
        draggedItem.classList.add('imgHood');
        let gif = create('img');
        gif.classList.add('img-fluid')
        gif.setAttribute('src', '../imgs/placeholderImg.png')
        draggedItem.appendChild(gif)
        
      }
      if(colsType == 'btn') {
        draggedItem = create('div');
        // draggedItem.classList.add('');
        let btn = create('button');
        btn.classList.add('btn', 'btn-primary');
        let text = document.createTextNode('Click')
        btn.appendChild(text)
        draggedItem.appendChild(btn)

      }
      if(colsType == 'video') {}
      if(colsType == 'divider') {}
      if(colsType == 'spacer') {}
      if(colsType == 'social') {}
      if(colsType == 'html') {}

  }); 
  component.addEventListener('dragend', () => {
    component.classList.remove('dragging');
  }); 
});


// Add divs function
function addDivs (divs, cols) {
  
  for(let i = 0; i < divs; i++) {
    
    let section = create('div');
    section.classList.add(`col-md-${cols}`, 'nopadding');
    let item = create('div');
    item.classList.add('custom-section');
    section.appendChild(item);
    items.appendChild(section);
    
  }
  
}

// For make template sortable
let sortable = Sortable.create(items);

// end  here ---------------------------------------------------------------------------



