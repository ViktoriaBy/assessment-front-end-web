/**CHECK FOR CLICK ON BTN-LIST BUTTONS */

/** BTN COLOR */
let btn1 = document.querySelector('#color').addEventListener('click', btn1Alert)

function btn1Alert(){
    alert('My favorite color is sage green.');
}

/**BTN PLACE */
let btn2 = document.querySelector('#place').addEventListener('click', btn2Alert)

function btn2Alert(){
    alert('My favorite place is with a great nature and less people.')
}

/**BTN RITUAL */
let btn3 = document.querySelector('#ritual').addEventListener('click', btn3Alert)

function btn3Alert(){
    alert('My favorite ritual is going out to eat every Saturday with my husband.')
}
