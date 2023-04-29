/*
function sum(){
  let g=0;
  for(let i=0;i<arguments.length;i++){
    g=g+arguments[i]
  }
  console.log(g)
 }
 sum(1,2,3);
 */



             
/*
 let sum =function(a){
  let b;
  if(b===undefined){
    return a;
  }else{
  let sum2=function(b){
    let c;
    if(c===undefined){
       return b=a+b
    }else{
    let sum3=function(c){
      c=c+b
    }
      return sum3
  }
  }
    return sum2;
 }
}



console.log(sum(1))
*/

               //interesting function
/*
let sum=function(a){
  return function(b){
      b=b+a
    return function(c){
      c=c+b
      return c
    }
  }
}


console.log(sum(1)(2)(3));
*/

//function bind

/*
const obj={
  num:2
}

function increase(number){
  return this.num+number;
}

const res=increase.bind(obj);
console.log(res(5));
*/




                  // creat custom     new
/*
function Person () {
  this.name="John"
  this.age=31
}

Person.prototype.lastName="Smith";

let customNew=function(per){
  let newObject={}
  newObject.__proto__=per.prototype;
    per=per.call(newObject);
  return newObject;
}
let person1=customNew(Person)
console.log(person1)

let person2=new Person;
console.log(person2);
*/


//closure effect 
/*
function calc(){
  let i=0;
  function a(){
     i=i+1
     console.log(i)
  }
  return a
}




let b=calc()
b()
b()
b()
*/


/*
let i=0;
  function a(){
     i=i+1
     console.log(i)
  }
  console.log(i)
a()
a()
a()
*/


/*
let rectangleArea=(width,height)=>width*height;


const countParams=(fn)=>{
  return(...params)=>{
    if(params.length!==fn.length){
      console.log(`Incorrect number of parameters for ${fn.name}`);
    }
    return fn(...params);
  }
}

const checkParams=(fn)=>{
  return (...args)=>{
    for(let i=0;i<args.length;i++){
      if(typeof(args[i])!=="Number"){
         console.log("Incorrect type ")
      }
    }
    return  fn(...args)
  }
}


rectangleArea=checkParams(rectangleArea)
rectangleArea=countParams(rectangleArea);
console.log(rectangleArea(5,6))

*/



/*
function getUrl(c){
fetch(c).then(a=> a.json()).then(data=>{console.log(data)});
}

function decoratorFn(cb){
  return function fn(...args){
    console.time("cb");
    cb(...args)
    console.timeEnd("cb");
  }
}
getUrl=decoratorFn(getUrl);


getUrl("https://jsonplaceholder.typicode.com/posts");
*/

/*
async function requestData(url){
  let res= await fetch(url).then(res=>)
}
*/



/*
const gsd=(a,b)=>{
   let x=1
  for(let i=1;i<=a;i++){
    if(a%i===0&&b%i===0){
      x=i
    }
  }
  return x
}



console.log(gsd(458,2154));
*/
/*
const gsd=(a,b)=>{
  arr.push(a)
  if(b%x===0&&a%x===0){
    return x=1
  }
   return gsd(a/i,b/i)

}

console.log(gsd(458,2154))
*/



/*
const arr=[1,2,3,4,5,1,2,3,4,5,2,3,4,5,6,7,8,1,2,3]



function sincroneArr(arr){
  let arrs=[]
  let arrf=[];
  let arrl=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]+1===arr[i+1]){
       arrs.push(i)
    }else{
      arrf.push(i+1)
    }
  }
  
  console.log(arrf)
  return arrs;
}

let a=sincroneArr(arr);
console.log(a);
*/

/*
let bubleSort=(arr)=>{
  for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>=arr[i+1]){
        //const temp=arr[i];
        //arr[i]=arr[i+1];
        //arr[i+1]=temp
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
      }
    }
  }
  return arr;
}
const arr1=[1,2,5,3,7,9,2]

console.log(bubleSort(arr1))
*/



//QUIQSORT


/*
function quiqSort(arr){
  let deafult=arr[0];
  let rightArr=[];
  let leftArr=[];
  for(let i=1;i<arr.length;i++){
    if(deafult>arr[i]){
      leftArr=[...leftArr,arr[i]];
    }else if(deafult<arr[i]){
      rightArr=[...rightArr,arr[i]];
    }
  }                                                                //dont work
   for(let j=0;j<arr.length;j++){
    if(arr[j]+1===arr[j+1]){
      return arr;
    }
   }
  return quiqSort([...leftArr,deafult,...rightArr])
}


let arr=[1,4,62,2,6,1,5];
console.log(quiqSort(arr))
*/



//1,2,3,4
//3,6,9,12


/*
let arr=[1,2,3,4,5,6,7,8,9,10]
let arr1=[];
let arr2=[];

for(let i=0;i<arr.length;i++){
  if(i<(arr.length)/2){
    arr1.push(arr[i]);
  }else{
    arr2.push(arr[i]);
  }
}
console.log(arr1)
console.log(arr2)
*/


const x = 90;
function f(){
  console.log(x);
  let x = 100;
}
f()




