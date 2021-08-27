function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
const magicButton = document.querySelector('.btn1');
magicButton.addEventListener('click', function cravingFunc(){
    const dals = [
        'Green moong dal', 'Yellow moong dal', 'Arhar dal', 'Urad dal', 'Chana dal', 'Masoor dal'
    ];
    const subzis = ['Bhindi fry', 'Gobhi fry', 'Paneer bhurji', 'Carrot subzi', 'Aloo jeera', 'Kadhai paneer', 'Shahi paneer'];
    const rotisOrRice = ['Roti', 'Rice','Fried rice','Khichdi'];
    const misc = ['Maggi'];
    let finalDal = dals[Math.floor(Math.random() * dals.length)];
    let finalSubzi = subzis[Math.floor(Math.random() * subzis.length)];
    let finalSide = rotisOrRice[Math.floor(Math.random() * rotisOrRice.length)];
    document.getElementById("demo").innerHTML = finalDal + ' , ' + finalSubzi + ' and ' + finalSide + '!';
});
let newDish = document.getElementById("addADish").value;
let type = document.getElementById("selectedType").value;
const addButton = document.querySelector('.btn2');
addButton.addEventListener('click',function addDish(newDish,type){
    switch(type){
        case 'dals':
            dals.push(newDish);
        case 'subzis':
            subzis.push(newDish);
        case 'rotisOrRice':
            rotisOrRice.push(newDish);
        case 'misc':
            misc.push(newDish);
    }
    document.getElementById("added").innerHTML = newDish + ' added in your ' + type +' menu!';
});