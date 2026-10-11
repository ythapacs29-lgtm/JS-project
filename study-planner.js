/* Variables given 
total available minutes
length of each study session
length of each break */

function session(TimeAvailable,SessionLength,BreakLength)
{
   let SessionNum=0;
   let RemainingTime = 0;
   let BreakNum = 0;
   if (TimeAvailable < 0 || SessionLength <=0 || BreakLength <0){
     console.log("Negative parameters are not accepted and zeros values arae not allowed");
     return;
   }
   else{
     
      
      while(TimeAvailable>=SessionLength  ){
       
         SessionNum++;
         TimeAvailable = TimeAvailable -(SessionLength);

         if(TimeAvailable>=SessionLength+BreakLength) {
            TimeAvailable = TimeAvailable - BreakLength;
            BreakNum ++;}
         else{
           
            
            break;

         }
         
      
        

      }
       RemainingTime = TimeAvailable
       return SessionNum;
   }

      
    
      console.log("The number of session are:",SessionNum,"and the remaining time is",RemainingTime,"and the breaks are:",BreakNum);

    
}
    
session(20,25,5);




