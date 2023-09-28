let index=0;

function add(){
    
    index++
   
    document.getElementById('result').innerHTML=`<span>${index}</span>`
   }
    

function minus(){
    
    index--
    document.getElementById('result').innerHTML=`<span>${index}</span>`
}