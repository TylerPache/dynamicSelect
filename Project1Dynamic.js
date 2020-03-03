var selectLists; //used to hold node array list for all "Select" controls on HTML page
var cook = document.cookie;
var data = choices.choices;
console.log(data);
let photo = document.createElement("img");

var selectDiv = document.createElement("div");

let divImage = document.createElement("div");
divImage.id = "photograph";
document.body.appendChild(divImage);

function init() {
    // Set "change" event for each "Select" on HTML page
    selectLists = document.getElementsByTagName("select");
    selectDiv.id = "myDiv1";
    document.body.appendChild(selectDiv);
    selectChanged("Restaurant");

}


// Either removes the select lists or adds new ones
function newSelect() {
     console.log(this.name);
     console.log(selectLists);
    removeElements(this.name);

    selectChanged(this.value);

    console.log(selectLists);
    // Attempt at cookie and storage stuff
    document.cookie = "name=" + this.value;
    localStorage.setItem = this.value + "="+ this.value;

    // Creates the images to display
    if(this.value == "Pizza Hut"){
        image(this.value);
    }
    if(this.value == "Domino's") {
        image(this.value);
    }
    if(this.value == "Pizza") {
        image(this.value);
    }
    if(this.value == "Wings") {
        image(this.value);
    }
    if(this.value == "Garlic Bread") {
        image(this.value);
    }
    if(this.value == "Fries") {
        image(this.value);
    }
    if(this.value == "Celery") {
        image(this.value);
    }
    if(this.value == "Subs") {
        image(this.value);
    }
    if(this.value == "Chicken Fingers") {
        image(this.value);
    }
    if(this.value == "Chips") {
        image(this.value);
    }
    if(this.value == "Pizza Logs") {
        image(this.value);
    }
    if(this.value == "Mozzarella Sticks") {
        image(this.value);
    }
    if(this.value == "Pepsi") {
        image(this.value);
    }
    if(this.value == "Diet Pepsi") {
        image(this.value);
    }
    if(this.value == "Sprite") {
        image(this.value);
    }
    if(this.value == "Dr. Pepper") {
        image(this.value);
    }
    if(this.value == "Iced Tea") {
        image(this.value);
    }
    if(this.value == "Mellow Yellow") {
        image(this.value);
    }
    if(this.value == "Root Beer") {
        image(this.value);
    }



    console.log(selectLists);
}

// Adds a new select list based on the previous choice
function selectChanged(key) {
     console.log(key);

    for (var i = 0; i < data.length; i++) {
        if (data[i].key == key) {
             console.log(data[i]);
            var selectDivs = document.createElement("div");
            selectDivs.id = "div"+i;
            selectDiv.appendChild(selectDivs);
            
            let selectList = document.createElement("select");
            selectList.id = "select"+i;
            selectList.name = data[i].depth;
            selectList.className = data[i].depth;
            selectList.onchange = newSelect;
            selectDivs.appendChild(selectList);

            let option = document.createElement("option");
            option.value = data[i].description;
            option.textContent = data[i].description;

            selectList.appendChild(option);

            for (var x = 0; x < data[i].options.length; x++) {
                option = document.createElement("option");
                option.value = data[i].options[x];
                option.textContent = data[i].options[x];
                option.onchange = newSelect;
                selectList.appendChild(option);
            }
        }
    }
};
// Removes elements based on the depth of the question
function removeElements(className){
    // "this" will be the html control which triggered the event
    // console.log(className);
    //removeImage;
    for (var i = selectLists.length - 1; i > 0; i--) {
        if (i == parseInt(className)) {
            break;
        }
        else {
            var toDelete = document.getElementsByClassName(i);
            // console.log(toDelete);
            for (j = toDelete.length - 1; j >= 0; j--) {
                // console.log(toDelete[j].parentNode);
                // console.log(toDelete[j]);
                toDelete[j].parentNode.removeChild(toDelete[j]);
            }
        }
    }
};


// Creates images to be displayed on the page
function image(imgsrc) {
    var div = document.createElement("div");
    divImage.appendChild(div);

    photo.id="image"
    photo.src = "images/" + imgsrc + ".png";
    photo.width = 200;
    div.appendChild(photo);
}


// Removes the images
function removeImage() {
    var photog = document.getElementById("photograph");
    photog.parentNode.removeChild(photog)
}


window.onload = init;