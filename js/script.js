// let counter = document.querySelector('.counter');

// let count = 1;

// setInterval(() => {
//     if(count < 75){    
//         count++;
//         counter.innerText = count;
//     }

// }, 1)

/*let counters = document.querySelectorAll('.counter');
let time = 300;

counters.forEach(counter => {
  let updateCount = ( )=> {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    

    let increment = target / time;

    if(count < target){
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1)
    }
    else{
        counter.innterText = target
    }
  };updateCount()

})
 let healthCondition = document.querySelector('.health')

 setTimeout(() => {
    healthCondition.innerText = "You are FIT!"
 }, 2000 )*/


let counters = document.querySelectorAll('.counter');

let time = 300;

counters.forEach(counter => {
  let updateTime = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
  
    let increment = target / time ;
 

  if(count < target){
    counter.innerText = Math.ceil( count + increment);
    setTimeout(updateTime, 1)
  }else{
    counter.innerText = target
  };
  };updateTime();
});

let healthM = document.querySelector('.health')

setTimeout(() => {
  healthM.innerText = "You are FIT!"
},2000)

