var result = fetch("https://randomuser.me/api/")
result.then(function(res){
    console.log(res)
    var data = res.json();
})

window.onload = async function () {
    var result = await fetch("https://randomuser.me/api/")
    var data = await result.json()
    console.log(data)
    
}
