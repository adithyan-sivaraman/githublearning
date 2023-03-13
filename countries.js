var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);
// var country = result.Countries;
console.log(result);

// //url of flag
for(let i=0;i<result.length;i++){
    console.log(result[i].flag);
}

//country name
for(let i=0;i<result.length;i++){
    console.log("Country Name : "+result[i].name);
}

//capitals
for(let i=0;i<result.length;i++){
    console.log("Capital : "+result[i].capital);
}

//population
for(let i=0;i<result.length;i++){
    console.log("Population : "+result[i].population);
}

//region
for(let i=0;i<result.length;i++){
    console.log("Region : "+result[i].region);
}

//subregion
for(let i=0;i<result.length;i++){
    console.log("Subregion : "+result[i].subregion);
}


}