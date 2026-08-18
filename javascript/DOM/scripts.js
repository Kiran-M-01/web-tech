function change() {
    let target = document.getElementById("one")
    console.log(target);
    target.innerHTML = '<h3>this is after change</h3>'
    target.style.backgroundColor='black'
    target.style.color = 'white'
    target.style.padding='20px'

}