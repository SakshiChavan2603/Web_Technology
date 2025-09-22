// <!-- 1) declare function calculate(...a) 
// 	and display addition of data 
// 	display only odd numbers from given data 

//   call calculate function with multiple parameters  -->


function calculate(...a){
  let sum =0;
  for(let i=0;i<a.length;i++){
    sum= sum+a[i];
  }
  console.log("Addition ="+sum);

  console.log("Odd numbers are:");
  for(let i=0;i<a.length;i++){
    if(a[i]%2!=0){
      console.log(a[i]+" ");
    }
  }
}

calculate(1,2);
calculate(2,3,4);
calculate(4,5,6,7);
calculate(6,7,8,9,10);