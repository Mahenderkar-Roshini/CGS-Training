var result = fetch("https://randomuser.me/api/")

result.then(function(data) {
    console.log(data)
    var res = data.json()
    res.then(function(userdata){
        console.log(userdata)
    })
    res.catch(function(err){
        console.log(err)
    })
})

result.catch(function(err){
    confirm.log(err)
})