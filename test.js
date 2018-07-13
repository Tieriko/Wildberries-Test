// 1.1
let onePointOne = function(){
    let a = 10;
    let b = 2;
    alert(+a + +b);
};

// 1.2
let onePointTwo = function(){
    let a = 17;
    let b = 10;
    let c = a - b;
    let d = 7;
    let result = (+c + +d);
    console.log(result);
};

// 2.1
let twoPointOne = function(){
    let str1 = 'Привет, ';
    let str2 = 'Мир!';
    alert(str1 + str2);
};

// 2.2
let twoPointTwo = function(){
    let num = '12345';
    let numMultiply = 1;
    for (let i = 0; i < num.length; i++) {
       numMultiply =  numMultiply * (+num[i])
    }
    console.log(numMultiply);
};

// 3.1
let threePointOne = function(){
    let arr = [
        'a',
        'b',
        'c',
        'd'
    ];
    alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);
};

// 3.2
let threePointTwo = function(){
    let arr = [];
    //Получаем рандомный int,
    //в пределах от min до max (включительно)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    while (arr.length < 100) {
        let num = getRandomInt(1, 100);
        if(!arr.includes(num)){
            arr.push(num);
        }
    };
    console.log(arr.length + " - длинна массива")
    console.log(arr);
}

// 4.1
let fourPointOne = function (){
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    alert(obj['c']);
    alert(obj.c);
}

// 3.2.1 
let taskOne = function (){
    //Получаем рандомный int,
    //в пределах от min до max (включительно)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let numString = ''
    for (let i = 0; i < 10; i++) {
        num = getRandomInt(0, 100);
        numString = numString.concat(num);
    }
    let message = numString[0] == 1 ? 'Да.' :
        numString[0] == 2 ? 'Да.' :
        numString[0] == 3 ? 'Да.' :
        'Нет.';
    console.log(message);
    console.log(numString);
     

}

// 3.2.2
let taskTwo = function (){
    let x = document.getElementById("fname").value;
    console.log(x);
}

// 3.2.3
let taskThree = function (){
    function Bomb(message, delay) {
        this.message = message;
        setTimeout(this.blowUp, 1000 * delay, this.message);
    }
    Bomb.prototype.blowUp = function (blowUpText) {
        console.log(blowUpText);
    };
    
    new Bomb("Explosion!", .5);
}

// 4.1
let taskFour = function () {
    const myRequest = new Request('https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48');

    const myURL = myRequest.url;
    const myMethod = myRequest.method;

    let airDate = {};

    fetch(myRequest)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then(response => {
        console.debug(response);
        airDate = response;
        let count = 0;
        for (key in airDate) {
            if (key != 'version' && key != 'full_count' && count < 3) {
            count++;
            console.log(airDate[key]);
            }
        }
    }).catch(error => {
        console.error(error);
    });
}

//easter egg code
function toggleClass() {
    var element = document.getElementById("easter-egg-img");
    element.classList.toggle("reveal");
}
