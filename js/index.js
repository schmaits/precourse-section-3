function = buttonColour(event){
    event.target.style.color = "orange";
    document.getElementById('submitbutton').removeEventListener('mouseover', buttonColour, false);
}

document.getElementById('submitbutton').addEventListener('mouseover', buttonColour, false);

