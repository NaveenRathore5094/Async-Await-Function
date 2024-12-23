// Async - Await Example 

function data(id){
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      console.log(`Data : ${id}`);
      reslove("success")
      
    },3000)
  })
}
async function Alldata(){
  await data("virat Kohli")
  await data("Rohit Sharma")
}
Alldata()

     // Promise Chaining

function mydata(id){
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      console.log(`Data : ${id}`);
      reslove("success")
      
    },3000)
  })
}
data("kabir singh").then(()=>{
  return data("Arjun reddy")
}).then((res)=>{
  console.log(res);
  
})