const clock = document.getElementById('clock');

// setInterval() is a javascript event:
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    }, 1000)
