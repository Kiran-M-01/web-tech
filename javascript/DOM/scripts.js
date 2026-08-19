// function change() {
//     let target = document.getElementById("one")
//     console.log(target);
//     target.innerHTML = '<h3>this is after change</h3>'
//     target.style.backgroundColor='black'
//     target.style.color = 'white'
//     target.style.padding='20px'

// }
function change() {
    let target = document.getElementsByClassName("one")
    console.log(target);
    // target.innerHTML = '<h3>this is after change</h3>'
    // target[0].style.backgroundColor='black'
    // target[0].style.color = 'white'
    for(i=0;i<target.length;i++){
        target[i].style.backgroundColor='black'
        target[i].style.color = 'white'
        target[i].style.padding='20px'
    }

}
