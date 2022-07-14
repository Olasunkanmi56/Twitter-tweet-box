const counter = document.querySelector(".counter"),
placeHolder = document.querySelector(".placeholder"),
editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
button = document.querySelector("button");

editableInput.onkeyup = (e) => {
    let element = e.target;
    checkInput(element);
}

editableInput.onkeypress = (e) => {
    let element = e.target;
    checkInput(element);
    placeHolder.style.display = "none";
}

function checkInput(element){
    let maxlength = 100;
    let currentElement = element.innerText.length;
    let textTag = element.innerHTML;
    if(currentElement <= 0){
        placeHolder.style.display = "block";
        counter.style.display = "none";
        button.classList.remove("active");
    }else{
        placeHolder.style.display = "none";
        counter.style.display = "block";
        button.classList.add("active");
    }

    counter.innerText = maxlength - currentElement;

    if(currentElement > maxlength){
        let overText = element.innerText.substr(maxlength);
        overText = `<span class="highlight">${overText}</spa>`;
        textTag = element.innerText.substr(0, maxlength) + overText;
        readonlyInput.style.zIndex = "1";
        counter.style.color = "#e0245e";
        button.classList.remove("active");
    }else{
        readonlyInput.style.zIndex = "-1";
        counter.style.color = "#333";
    }

    readonlyInput.innerHTML = textTag;
}




