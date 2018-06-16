module.exports = {
  myFunction
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction () {
  document.getElementById('myDropdown').classList.toggle('show')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content')
    let i
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

// var box = document.getElementById('display');
// var num = box.value;
// var len = num.length-1;

// //CREATE A FUNCTION TO ADD INPUT TO SCREEN
// function addToInput(x) {
//    box.value += x;
// //IF CLEAR IS SELECTED, CLEAR ALL INPUT ON SCREEN
//    if (x === 'c'){
//    box.value = '';
// }
// }
// //CREATE A SEPARATE FUNCTION FOR THE POWER BUTTON
// function tothepower() {
//     x = box.value;
//     x = eval(x * x);
//     box.value = x;
// }

// //CREATE A FUNCTION THAT WILL GO BACK A STEP USING SUBSTRING
// function goBack() {
//     var newNum = num.substring(0,len);
//     box.value = newNum;
// }
// //CREATE A FUNCTION, USING EVAL TO EQUAL THE VALUE OF X
// function total() {
//     x = box.value
//     x = eval(x);
//     box.value = x;
// }
