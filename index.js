const myInput = document.getElementById('myInput');
const keyList = document.getElementById('keyList')
const button = document.getElementById('buttonReset')

myInput.addEventListener('input',() => {
   
    let listKey = document.createElement('li');
    let listCode = document.createElement('li');
    
    
    listKey.textContent = myInput.value;
    keyList.appendChild(listKey)

    listCode.textContent = `Key: ${myInput.value.toUpperCase()}`
    codeList.appendChild(listCode)
    
})


document.addEventListener('keypress', () => {

    let listWhich = document.createElement('li');
    listWhich.textContent = event.keyCode;
    whichList.appendChild(listWhich)
})
// function keycode(){
//     let key = event.keyCode;
//     console.log(key);
// }

// myCode.addEventListener
// resetObject.value(lists)

button.addEventListener('click', () => {
    let lists = document.getElementsByTagName('li'); //[0]
    for (let i = document.getElementsByClassName('lis'); i.lists > lists[6]; lists = lists[0]);
})
    
//get elements by tag name returns array so needs square brackets
