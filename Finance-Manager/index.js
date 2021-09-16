var usernames = ["ashwot", "admin", "apurba", "samrat", "ashutosh", "samyam", "adhit", "rakshit"]
var passwords = ["iloveyou", "admin", "idontcare", "wowthatwaslit", "heresafunvideo", "ilovearts", "basketball", "youaregay"]

function check(){
    
    var usr= document.getElementById("usr").value;
    var pwd = document.getElementById("pass").value;

    if (usernames.indexOf(usr) != -1){
        if (passwords[usernames.indexOf(usr)] == pwd){
            Swal.fire(
                'Congratulation!',
                'You have been sucessfully logged in!',
                'success'
                ).then(()=> {
                    window.location.href="home.html"
            })
        }else{
             Swal.fire(
                'Error!',
                'Password is incorrect!',
                'error'
                )           
        }
    } 
    else{
        Swal.fire(
                'Error!',
                "User doesn't exist",
                'error'
                )  

    }

}