
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
let oldestAdmin:Admin | null = null;;

for(let i=0;i<admins.length;i++){
if(admins[i].isAdmin){
    if(oldestAdmin===null ||admins[i].age> oldestAdmin.age ){
        oldestAdmin = admins[i];
        
    }
}

}
console.log(oldestAdmin);

