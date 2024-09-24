//Sum All Elements in an Array
let numbers:number[]=[20,50,10,100,4];


let sum:number=0
for(let i:number=0;i<numbers.length-1;i++){
sum+=numbers[i];
}
console.log("the summ is",sum);


//Check if All Elements in Array are Positive
let n:number[]=[-20,50,-10,100,4];
let allPositive:boolean=true;
for(let i:number=0;i<n.length-1;i++){
  if(n[i]<0){
    allPositive=false  ;
  }
  
    }
    console.log(allPositive);



//Find the Longest Name in an Array

const subjects:string[] = ["Biology", "English", "Physics", "Maths", "Chemistry"];
let shortestString = subjects[0];

for(let i=0;i<subjects.length-1;i++){
    if(subjects[i].length>shortestString.length){
        shortestString = subjects[i];
 
    }
}

console.log(shortestString); // Maths
   


//Count Occurrences of a Character in a String
let str:string="sdsdfdffffff ";
let result = {}
for(let i=0; i<str.length-1;i++){
    let ch = str.charAt(i);
    if(!result[ch]){
        result[ch] =1;
      }
      else{
        result[ch]+=1
      }

}
console.log(result);


//Identify Prime Numbers in an Array
let p:number[]=[1,4,6,2,55,3];

for(let i=0;i<p.length;i++){
    if(p[i]<=1){
        continue;
    }
    let isPrime:boolean=true;
    for(let j=2;j<p[i];j++){
if(p[i]%j==0){
    isPrime=false;
   break;
}

    }
    if(isPrime){
        console.log("The prime number is:", p[i]);
    }

}