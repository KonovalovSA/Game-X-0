let count = 0;
let countxo = 0;
let status = document.getElementById('status');

// объекты кнопок

let a1 = {
    btn: document.querySelector('.btna1'),
    count: 0,
}
let a2 = {
    btn: document.querySelector('.btna2'),
    count: 0,
}

let a3 = {
    btn: document.querySelector('.btna3'),
    count: 0,
}

let b1 = {
    btn: document.querySelector('.btnb1'),
    count: 0,
}

let b2 = {
    btn: document.querySelector('.btnb2'),
    count: 0,
}

let b3 = {
    btn: document.querySelector('.btnb3'),
    count: 0,
}

let c1 = {
    btn: document.querySelector('.btnc1'),
    count: 0,
}

let c2 = {
    btn: document.querySelector('.btnc2'),
    count: 0,
}

let c3 = {
    btn: document.querySelector('.btnc3'),
    count: 0,
}

// массив кнопок 
arrObj = [a1,a2,a3,b1,b2,b3,c1,c2,c3];

// функция очистки поля
btnxostart.onclick = function() {
    for (let i = 0; i < arrObj.length; i++) {
        let elem = arrObj[i].btn.children[0];
        arrObj[i].btn.classList.remove('alert-success');
        arrObj[i].count = 0;
        if (elem) {
            elem.remove();
        }
    }
    countxo = 0;
    status.innerText = 'Статус игры: Ход Крестиков';
}


// функция хода Х ил 0
let xo = function (numberBtn) {
    if (countxo % 2 == 0 && countxo !== -1 && !numberBtn.btn.childNodes.length) {
        let img = document.createElement('img');
        img.src = "jpeg/x.png";
        numberBtn.btn.appendChild(img);
        countxo++;
        count = 1;
        numberBtn.count = 1;
        status.innerText = 'Статус игры: Ход Ноликов'; 
    } else if (countxo !== -1 && !numberBtn.btn.childNodes.length) {
        let img = document.createElement('img');
        img.src = "jpeg/o.png";
        numberBtn.btn.appendChild(img);
        countxo++;
        count = 0;
        numberBtn.count = 4;
        status.innerText = 'Статус игры: Ход Крестиков'; 
    }
    winlixo();
}


// обработчики событий по нажатию на кнопку

a1.btn.onclick = function() {xo(a1)}
a2.btn.onclick = function() {xo(a2)}
a3.btn.onclick = function() {xo(a3)}
b1.btn.onclick = function() {xo(b1)}
b2.btn.onclick = function() {xo(b2)}
b3.btn.onclick = function() {xo(b3)}
c1.btn.onclick = function() {xo(c1)}
c2.btn.onclick = function() {xo(c2)}
c3.btn.onclick = function() {xo(c3)}


// условие победы
let winxo = function (a, b, c) {
    if (countxo !== -1) {
        a.classList.add('alert-success');
        b.classList.add('alert-success');
        c.classList.add('alert-success');
        countxo = -1;
    }
}

let winsum = function (a, b, c, x, y, z) {
    if (a + b + c == 3) {
        winxo(x, y, z);
        status.innerText = 'Статус игры: Победили Крестики!';
    } else if (a + b + c == 12) {
        winxo(x, y, z);
        status.innerText = 'Статус игры: Победили Нолики!';
    } else if (countxo == 9) {
        status.innerText = 'Статус игры: Ничья!';
    }
}

let winlixo = function () {
    winsum(a1.count, a2.count, a3.count, a1.btn, a2.btn, a3.btn);
    winsum(b1.count, b2.count, b3.count, b1.btn, b2.btn, b3.btn);
    winsum(c1.count, c2.count, c3.count, c1.btn, c2.btn, c3.btn);
    winsum(a1.count, b1.count, c1.count, a1.btn, b1.btn, c1.btn);
    winsum(a2.count, b2.count, c2.count, a2.btn, b2.btn, c2.btn);
    winsum(a3.count, b3.count, c3.count, a3.btn, b3.btn, c3.btn);
    winsum(a1.count, b2.count, c3.count, a1.btn, b2.btn, c3.btn);
    winsum(a3.count, b2.count, c1.count, a3.btn, b2.btn, c1.btn);
}
