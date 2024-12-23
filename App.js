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