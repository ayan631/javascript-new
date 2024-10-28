const btn = document.createElement('button');
btn.innerText = 'Click Me !';
btn.style.color='#fff';
btn.style.backgroundColor='red';
document.querySelector('body').prepend(btn);

// add a new class attribute to p tag using classList:
const para = document.querySelector('.para1');
// below code will override the previous class attribute:
// para.setAttribute('class', 'edited-para');

para.classList.add('edited-para')
// you can check the classes name by:
console.log(para.classList);
