const Height = document.querySelector(`#User-Height`)
const Weight= document.querySelector(`#User-Weight`)
const btn=document.querySelector(`#btn`)
// const result=document.querySelector(`#result`)
const response = document.querySelector('.resultedValue')
btn.addEventListener(`click`,function(){
    let a=Number(Height.value)
    let b=Number(Weight.value)
    
    if(a>0 && b>0 ){
        let bmi = Math.floor( b/(a**a));
        console.log(bmi)
        if(bmi<18.4){
            res='under weight';
            console.log(res)
            response.innerHTML = `${res}`
        }
        // else if(bmi>=18.5 || bmi<2){

        // }
    
    }
})
