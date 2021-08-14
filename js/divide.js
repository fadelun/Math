let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
const results = document.querySelector('.answers').children;

// function
const generate = () => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    let answer = eval(a / b);
    

    num1.innerHTML = a;
    num2.innerHTML = b;
    if(Number.isInteger(answer) == false){
        answer = answer.toFixed(1)
    }
    console.log(answer)

    // first logic
    if(answer){
        let choises = Math.floor(Math.random() * 3);
        [...results].forEach((item, i) => {
            if(choises == i){
                item.innerHTML = answer;
                if(answer == 0) {
                    item.innerHTML = 0;
                }
            }else{
                let wrongAnswer = Math.floor(Math.random() * 5) / Math.floor(Math.random() * 10);
                if(answer != wrongAnswer){
                    if(Number.isInteger(wrongAnswer) == false){
                        item.innerHTML = wrongAnswer.toFixed(1);
                        console.log(wrongAnswer)
                    }else{
                        item.innerHTML = wrongAnswer;
                        console.log(wrongAnswer)
                    }
                }
            }
        })

        for(let i =0; i < results.length;i++){
            results[i].addEventListener('click', () => {
                if(results[i].innerHTML == answer){
                    generate()
                }
            })
        }
    }

}


generate()
