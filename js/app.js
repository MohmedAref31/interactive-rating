let rateCont = document.getElementById("rate-container");
let thankCont = document.getElementById("thank-container")
let rate= document.querySelectorAll(".rate li")
let submit = document.getElementById("submit")
let selected = document.getElementById("selected")
let rateNum=0;

console.log(rateCont,thankCont, rate ,submit)

rate.forEach((e)=>{
    
    e.onclick=function(){
        rate.forEach(li=>{
            li.classList.remove("active")
        })
        e.classList.add("active")
        rateNum = e.innerText
        selected.innerHTML=`You selected ${rateNum} out of 5`
        console.log(e,rateNum)
    }
  
})

submit.onclick = function(){
    if(rateNum != 0){
       thankCont.classList.remove("fade-out")
        rateCont.classList.add("fade-out")
       thankCont.classList.add("fade-in")
        rateCont.classList.remove("fade-in")
    }
}