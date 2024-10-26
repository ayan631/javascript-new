const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#result')
    if(h==='' || h<0 || isNaN(h)){
        res.innerHTML = "please give a valid height!"
    }
    else if(w==='' || w<0 || isNaN(w)){
        res.innerHTML = "please give a valid weight!"
    }
    else{
        const bmi = (w / ((h*h)/10000)).toFixed(2)
        // show the result:
        if(bmi<18.6){
            res.innerHTML = `<span  style="color: orange">BMI = ${bmi}<br>You are Under Weight.</span>`
        }
        else if(bmi>=18.6 && bmi<24.9){
            res.innerHTML = `<span style="color: #03f13b">BMI = ${bmi}<br>You are Normal Weight.</span>`
        }
        else{
            res.innerHTML = `<span style="color: red">BMI = ${bmi}<br>You are Over Weight.</span>`
        }
    }
});