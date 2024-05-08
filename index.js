let container= document.querySelector("#container")
let Box = document.querySelector("#Box")

let inputBox = document.querySelector("#container>input")

let button = document.querySelector("#container>button")


let Data;

button.addEventListener("click", function(){
    getData(inputBox.value)
})

function getData(URL){
    console.log(URL)
    fetch(URL)
    .then(function(res){
        return res.json()
    })
    .then(function(res){

        Data = res

       
        showData(Data)
    })

}

function showData(arr){
    Box.innerHTML=""
    console.log(arr)
    arr.forEach(function(ele){
        let smallBox = document.createElement("div")

        let imgBox = document.createElement("div")
        imgBox.id = "imgBox"
        let img = document.createElement("img")
        img.src = ele.avatar

        imgBox.append(img)

        let name = document.createElement("div")
        name.innerHTML = `Name : ${ele.name}`

        let email = document.createElement("div")
        email.innerHTML = `Email ID : ${ele.email}`

        smallBox.append(imgBox, name, email)
        Box.append(smallBox)

        

    })

}





