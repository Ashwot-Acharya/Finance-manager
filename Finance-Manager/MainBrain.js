var list = document.querySelector("#task-list table ");


function load(){
    list.innerHTML = localStorage.getItem("list")
    nList.innerHTML = localStorage.getItem("nList")
}

list.addEventListener("click", function (event) {
        if (event.target.parentElement.classList == "button"){
            console.log(event.target.parentElement.parentElement)
            var li = event.target.parentElement.parentElement;
            li.parentElement.removeChild(li)
            localStorage.setItem("list", list.innerHTML)

        }
    })

        

var form = document.forms["add-task"];

form.addEventListener("submit", function (event){
    event.preventDefault();
    var val  = document.querySelector("#task").value
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")

    td1.innerHTML = val;
    tr.appendChild(td1)

    var button = document.createElement("button")
    button.innerHTML = "Delete"
    td2.classList.add("button")
    button.setAttribute("class", "btn btn-danger")
    td2.appendChild(button)

    tr.appendChild(td2)

    list.appendChild(tr)

    document.querySelector("#task").value = ""

    localStorage.setItem("list", list.innerHTML)

})

        
