var unselectedColor = "rgb(221, 221, 221)";
var selectedColor = "rgb(240, 240, 240)";
var selectionListItems = document.getElementsByClassName("form-multiselect-item");

for(var i = 0; i < selectionListItems.length; i++) {
    selectionListItems[i].style = "background-color: " + unselectedColor;
}

function selectItem(item) {
    if(item.style.backgroundColor == unselectedColor) {
        item.style.backgroundColor = selectedColor;
    }
    else {
        item.style.backgroundColor = unselectedColor;
    }
}

document.onload = function doStuff() {
    var a = document.getElementsByClassName("table-title");
    a[0].style.color = "#f00";
};

