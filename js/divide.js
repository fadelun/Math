let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
const results = document.querySelector('.answers').children;

// function
const generate = () => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    let c = eval(a / b).toFixed(2);
    let fixedNum = c;

    num1.innerHTML = a;
    num2.innerHTML = b;

    // first logic
    if(fixedNum){
        let choises = Math.floor(Math.random() * 3);
        [...results].forEach((item, i) => {
            if(choises == i){
                item.innerHTML = fixedNum;
                if(fixedNum == 0) {
                    item.innerHTML = 0;
                }
            }else{
                let wrongAnswer = Math.floor(Math.random() * 5) / Math.floor(Math.random() * 10);
                if(fixedNum != wrongAnswer){
                    item.innerHTML = wrongAnswer.toFixed(2);
                }
            }
        })

        for(let i =0; i < results.length;i++){
            results[i].addEventListener('click', () => {
                if(results[i].innerHTML == fixedNum){
                    generate()
                }
            })
        }
    }

}


generate()