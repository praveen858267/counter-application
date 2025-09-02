let counter=document.getElementById('counter')
// console.log(counter)
// console.log(counter.textContent)
let c=0
function increase(){
    c++;
    counter.textContent=c;
}
function decrease(){
    if(c>0){
    c--
    counter.textContent=c;
    }
}
function reset(){
    c=0
    counter.textContent=c;
}