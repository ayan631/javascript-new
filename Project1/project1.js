const btns = document.querySelectorAll('.button');
// console.log(btns);
const body = document.querySelector('body');

btns.forEach((b) => {
    // console.log(b);
    b.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target.id);
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                body.style.color='#000'
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                body.style.color='#000'
                break;
            case 'blue':
                body.style.backgroundColor = '#0b426b';
                body.style.color='#fff'
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                body.style.color='#000'
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id;
                body.style.color='#000'
                break;
            case 'dark':
                body.style.backgroundColor = '#212121';
                body.style.color='#fff'
                break;
            default:
                break;
        }
    });
});