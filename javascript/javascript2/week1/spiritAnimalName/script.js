const input =document.createElement('input');
const btn = document.createElement('button');
btn.textContent = 'click';
const body =document.querySelector('body');
body.appendChild(input);
body.appendChild(btn);

const spiritList =['The Spider','The Crow','TheButterfly','The Owl','The Humming Bird','The Wolf']
const randomSpiritAnimalNames = spiritList[Math.floor(Math.random(spiritList)*6)];
const para = document.createElement('p');
body.appendChild(para);

//Button options

const selection = document.getElementById('select');
btn.addEventListener('click',function () {
    const inputText = input.value;
    if(inputText){
        return para.textContent = `SpiritAnimalName:${randomSpiritAnimalNames}`;

    }else{
        return para.textContent = 'Please enter Your Name';
    }
});


//Input given

input.addEventListener('input',function() {
    const writtenInputText = input.value;
    if (selection.value === 'text-written' && writtenInputText) {
        return para.textContent = `SpiritAnimalName:${randomSpiritAnimalNames}`;

    }else{
        return para.textContent = 'Please input your name';
    }
})

//hover

input.addEventListener('mouseover',function () {
    const hoverInputText = input.value;
    if (selection.value === 'hover' && hoverInputText) {
        return para.textContent = `SpiritAnimalName:${randomSpiritAnimalNames}`;

    }
})