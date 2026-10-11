
const Increase = document.getElementById('increase');
const Decrease = document.getElementById('decrease');
const Reset = document.getElementById('Reset');
let counter = 0 ;

 function Button_change(){
    if (Increase.addEventListener('Click')) {
        counter ++;
        document.count.textContent(counter);


    }
    };


   /* elseif (Decrease.addEventListener('Click'));{
        if(counter >=0){
           counter --;
        }

    }

    elseif (Reset.addEventListener('Click'));{
        counter = 0 ;
    }
    */
  

