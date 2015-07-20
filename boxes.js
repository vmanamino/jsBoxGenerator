
// the counter will generate the unique id for each box
var counter = 0;

//box constructor
//calls to this function generate boxes with all of the properties needed for display
function Box (id, boxName, color, num, posX, posY) {
    
    this.id = id;
    this.boxName = boxName;
    this.color = color;
    this.number = num;
    this.posX = posX;
    this.posY = posY;
}


//boxes array to store each box generated
var boxes = [];

//the window load event triggers the init function
window.onload = init;

//init function responsible for generating boxes and clearing them away
function init() {
    var generateButton = document.getElementById("generateButton");
    generateButton.onclick = generate;
    var clearButton = document.getElementById("clearButton");
    clearButton.onclick = clear;

}

//the generate function gets the data needed to generate a box with its properties
function generate() {

    var nameInput = document.getElementById("name");
    var nameIn = nameInput.value;

    var boxColor = document.getElementById("color");
    var colorSelect = boxColor.options[boxColor.selectedIndex];
    var colorSelected = colorSelect.value;
    
    //loads each radio button value into an array
    var howManyBoxes = data.elements.amount;    
    var numBoxes = "";
    
    
    
    //checks if name is entered, on empty value sending alert
    if (nameIn == null || nameIn == ""){
        alert("Please enter the box name");
        return;    
    }
    
   //checked variable to test whether number of boxes was selected
   var checked = 0;
   
   //gets the value of the radio button selected by the user   
    for (var i = 0; i < howManyBoxes.length; i++) {
        if (howManyBoxes[i].checked) {
            checked += 1;
            numBoxes = howManyBoxes[i].value;        
        }
        
    }
    
    if (checked == 0) {
    alert("Please enter the number of boxes");
    return;
    
    }
        
    numBoxes = parseInt(numBoxes);   
    
    //the value of the selected radio button becomes the number to run the loop against
    //the loop uses the value to generate the correct number of boxes
    //the box properties are fetched from above and from within the loop
    for (var i = 0; i < numBoxes; i++) {
       counter += 1;
       var sceneDiv = document.getElementById("scene"); 
       var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));
       var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));
       var id = counter;
       var box = new Box(id, nameIn, colorSelected, numBoxes, x, y);
       boxes.push(box);
       addBox(box);
       
      
    }    
    //resets the form after function is done with the above work
    var datei = document.getElementById("data");
    datei.reset();
    
}

//this function adds individual box properties to the div elements that represent the boxes
//the properties are added as attributes of the element
function addBox(box){
       var sceneDiv = document.getElementById("scene"); 
       var div = document.createElement("div");
       div.setAttribute("class", "box");
       div.setAttribute("id", box.id);
       div.setAttribute("name", box.boxName);
       div.setAttribute("color", box.color);
       div.setAttribute("X", box.posX);
       div.setAttribute("Y", box.posY);
       div.style.backgroundColor=box.color;       
       div.style.left = box.posX + "px";
       div.style.top = box.posY + "px";
       div.innerHTML = box.boxName;  
       sceneDiv.appendChild(div);       
       div.onclick = display;
       
       
       
      
      


}

function clear() {

    counter = 0;
    boxes = [];

    var sceneDiv = document.getElementById("scene");
    sceneDiv.innerHTML = "";


}

//the values of each element's attributes are fetched for display in the alert
//the function is called on the click event of each div element representing a box
//the click event is a property of the div element created in the addBox function
function display(e) {

//display box properties
var el = e.target;
var eyeD = el.getAttribute("id");
var name = el.getAttribute("name");
var col = el.getAttribute("color");
var posX = el.getAttribute("X");
var posY = el.getAttribute("Y");
alert("Box id: "+eyeD+"\nName: "+name+"\nColor: "+col+"\nX position: "+posX+"\nY position: "+posY);
return;


}