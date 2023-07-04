const currentValue = document.querySelector('#currentValue');
const aswerScreen = document.querySelector('#answerScreen');
const buttons = document.querySelectorAll('button');
const eraserBtn = document.querySelector('#eraseBtn');
const clearBtn = document.querySelector('#clearBtn');
const evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];

clearBtn.addEventListener('click', function(){
    realTimeScreenValue = [""]
    currentValue.innerHTML = 0;
    aswerScreen.innerHTML = 0;
    
});

buttons.forEach(function(btn, idx){
    btn.addEventListener('click', function(){
        if(btn.id !== 'eraseBtn' && btn.id !== 'evaluate' && btn.id !== 'clearBtn'){
            realTimeScreenValue.push(btn.value);
            currentValue.innerHTML = realTimeScreenValue.join('');
            if(btn.classList){
                aswerScreen.innerHTML = eval(realTimeScreenValue.join(''))
            }
        }
        if(btn.id === 'eraseBtn'){
            realTimeScreenValue.pop();
            currentValue.innerHTML = realTimeScreenValue.join('');
            aswerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        if(btn.id === 'evaluate'){
            currentValue.innerHTML = eval(realTimeScreenValue.join(''));
            aswerScreen.innerHTML = 0;
        }
    })
})