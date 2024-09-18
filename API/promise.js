const prm = new Promise(function(resolve, reject){
    var age=20
    if(age>18){
        resolve("U Can watch moovi")
    }else{
        reject("Too Young")
        }
});


prm.then(function(result){
    console.log(result)
})
prm.catch(function(err){
    console.log("can not watch moovi, reason: "+ err)
})



//var result = fetch("https://randomuser.me/api/")
// result.then(function(res){
//     console.log(res)
//     var data = res.json();
// })

// window.onload = async function () {
//     var result = await fetch("https://randomuser.me/api/")
//     var data = await result.json
    
// }
