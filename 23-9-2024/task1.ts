
//q1
let number:number=5;
if(number%2==0){
console.log("its even");
}
else{
    console.log("its odd");  
}

//q2
let products:number[]=[20,50,10,100,4];
for(let i:number=0;i<products.length;i++){
    if(products[i]>=50){
        console.log(products[i]);
    }
}

//q3
interface Admin {
    name: string;
    age: number;
    isAdmin: boolean;
}

const admins: Admin[]=[
    {name:"Rama", age:20, isAdmin:true},
    {name:"Youssef", age:30,isAdmin:false},
    {name:"Najlaa", age:12,isAdmin:false},
    {name:"Mohammad", age:25, isAdmin:true},
    {name:"Lujain", age:20, isAdmin:true},
    {name:"Qussai", age:24, isAdmin:true},

];
let oldestAdmin:Admin | null = null;

for(let i=0;i<admins.length;i++){
if(admins[i].isAdmin){
    if(oldestAdmin==null ||admins[i].age> oldestAdmin.age ){
        oldestAdmin = admins[i];
        
    }
}

}
console.log(oldestAdmin);

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
