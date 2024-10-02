 const createGridButton = document.getElementById('create-grid');
 const gridBox = document.getElementById('grid-box');

 createGridButton.addEventListener("click", function (){
 const rowCount = document.querySelector("#row-select").value;
 const colCount = document.querySelector("#col-select").value;
 gridBox.innerHTML = "";
 gridBox.style.display = "flex";
 gridBox.style.flexDirection = "row";
 
 let number = 1;

 for(let col = 0; col < colCount; col++){
   let colDiv = document.createElement("div");
   colDiv.classList.add("grid-row");
   gridBox.appendChild(colDiv);
    
   if(col % 2 === 0){
    colDiv.style.flexDirection = "column";
   }else{
    colDiv.style.flexDirection = "column-reverse";
   }
     for(let row = 0; row < rowCount; row++){
       let box = document.createElement("div");
       box.classList.add("grid-item");
       box.textContent = number++;
       colDiv.appendChild(box);
       setTimeout(() => {
          box.style.display = "flex";
          box.style.justifyContent = "center";
          box.style.alignItems = "center";
          box.textContent = box.textContent;
       },number * 300);
     }
 }
});