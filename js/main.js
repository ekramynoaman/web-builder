
var items = document.getElementById('items');
function generateSection(ele) {
  console.log(ele);
  
  let colsNum = ele.target.dataset.cols;
  console.log(colsNum);
  
  if (colsNum < 5 ) {
    
      for(let i=0; i < colsNum; i++) {
        let section = document.createElement('div');
        let item = document.createElement('div');
        section.classList.add(`col-md-${12/colsNum}`, 'nopadding');
        item.classList.add('custom-section');
        section.appendChild(item);
        items.appendChild(section);
        
      }
  }
      
  if (colsNum == 12){

      let section = document.createElement('div');
      let section2 = document.createElement('div');
      let item = document.createElement('div');
      let item2 = document.createElement('div');
      item.classList.add('custom-section');
      item2.classList.add('custom-section');
      section.classList.add('col-md-4', 'nopadding');
      section.appendChild(item);
      section2.classList.add('col-md-8', 'nopadding');
      section2.appendChild(item2);
      items.appendChild(section);
      items.appendChild(section2);
      console.log(items);
      
  }
  
  if (colsNum == 21){

    let section = document.createElement('div');
    let section2 = document.createElement('div');
    let item = document.createElement('div');
    let item2 = document.createElement('div');
    item.classList.add('custom-section');
    item2.classList.add('custom-section');
    section.classList.add('col-md-8', 'nopadding');
    section.appendChild(item);
    section2.classList.add('col-md-4', 'nopadding');
    section2.appendChild(item2);
    items.appendChild(section);
    items.appendChild(section2);
      
  }
  
  if (colsNum == 13){

    let section = document.createElement('div');
      let section2 = document.createElement('div');
      let item = document.createElement('div');
      let item2 = document.createElement('div');
      item.classList.add('custom-section');
      item2.classList.add('custom-section');
      section.classList.add('col-md-3', 'nopadding');
      section.appendChild(item);
      section2.classList.add('col-md-9', 'nopadding');
      section2.appendChild(item2);
      items.appendChild(section);
      items.appendChild(section2);
      
  }
  
  if (colsNum == 31){

    let section = document.createElement('div');
    let section2 = document.createElement('div');
    let item = document.createElement('div');
    let item2 = document.createElement('div');
    item.classList.add('custom-section');
    item2.classList.add('custom-section');
    section.classList.add('col-md-9', 'nopadding');
    section.appendChild(item);
    section2.classList.add('col-md-3', 'nopadding');
    section2.appendChild(item2);
    items.appendChild(section);
    items.appendChild(section2);
      
  }
  
  if (colsNum == 112){

    let section = document.createElement('div');
    let section2 = document.createElement('div');
    let section3 = document.createElement('div');
    let item = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');
    item.classList.add('custom-section');
    item2.classList.add('custom-section');
    item3.classList.add('custom-section');
    section.classList.add('col-md-3', 'nopadding');
    section.appendChild(item);
    section2.classList.add('col-md-3', 'nopadding');
    section2.appendChild(item2);
    section3.classList.add('col-md-6', 'nopadding');
    section3.appendChild(item3);
    items.appendChild(section);
    items.appendChild(section2);
    items.appendChild(section3);
      
  }
  
  if (colsNum == 211){

    let section = document.createElement('div');
    let section2 = document.createElement('div');
    let section3 = document.createElement('div');
    let item = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');
    item.classList.add('custom-section');
    item2.classList.add('custom-section');
    item3.classList.add('custom-section');
    section.classList.add('col-md-6', 'nopadding');
    section.appendChild(item);
    section2.classList.add('col-md-3', 'nopadding');
    section2.appendChild(item2);
    section3.classList.add('col-md-3', 'nopadding');
    section3.appendChild(item3);
    items.appendChild(section);
    items.appendChild(section2);
    items.appendChild(section3);
      
  }
  
  
    
  
// For make template sortable
  var sortable = Sortable.create(items);

}

var structure = document.getElementById('structure');

structure.addEventListener('dragend', generateSection);


// end  here ---------------------------------------------------------------------------



