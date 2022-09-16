var totalRows = 4,
    itemCol = 0;
for(var rowCount = 0; rowCount < totalRows; rowCount++){
  newCol = document.createElement('div');
  newCol.className = 'col';
  document.getElementsByClassName('wrapper')[0].appendChild(newCol);
}

for(var itemCount = 0; itemCount < document.getElementsByClassName('item').length; itemCount++){
  document.getElementsByClassName('col')[itemCol].appendChild(document.getElementsByClassName('item')[0]);
  if(itemCol < totalRows - 1){
    itemCol++; 
  } else {
    itemCol = 0;
  }
}