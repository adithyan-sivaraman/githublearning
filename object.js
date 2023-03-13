let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};



// comparing with value pairs using for in loop
for( let key in obj1){
  console.log(obj1[key])
  console.log(obj2[key])
  console.log(obj1[key]==obj2[key])
}


//converting keys to array and comparing with index
const obj1arr = Object.keys(obj1)
const obj2arr = Object.keys(obj2)


for(i=0;i<obj1arr.length;i++){
  console.log(obj1arr.indexOf(obj2arr[i]))
  console.log(obj2arr.indexOf(obj1arr[i]))
}

//compare with key property
console.log(obj1.name==obj2.name)
console.log(obj1.age==obj2.age)
