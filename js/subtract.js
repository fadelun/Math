let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
const results = document.querySelector('.answers').children;

// function
const generate = () => {
    const a = Math.floor(Math.random() * 18) + 1;
    const b = Math.floor(Math.random() * 12) + 1;
    const c = a - b;

    num1.innerHTML = a;
    num2.innerHTML = b;

    // first logic
    if(c){
        let choises = Math.floor(Math.random() * 3);
        [...results].forEach((item, i) => {
            if(choises == i){
                item.innerHTML = c;
                if(c == 0) {
                    item.innerHTML = 0;
                }
            }else{
                let wrongAnswer = Math.floor(Math.random() * 18) - Math.floor(Math.random() * 10);
                if(c != wrongAnswer){
                    item.innerHTML = wrongAnswer;
                }
            }
        })

        for(let i =0; i < results.length;i++){
            results[i].addEventListener('click', () => {
                if(results[i].innerHTML == c){
                    // console.log(results[i])
                    generate()
                }
            })
        }
    }

}


generate()