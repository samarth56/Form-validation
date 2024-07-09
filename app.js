const form = document.getElementById("form")
const Name = document.getElementById("Name")
const password = document.getElementById("password")
const Email = document.getElementById("Email")
const confPass = document.getElementById("confPass")
const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
let flag = 1




function validateinputs(){
    if (Name.value== "" || Name.value== null)
    {
        document.getElementById("Name_error").innerHTML="Please Enter valid Name"
        flag=0
    }
    else {
        document.getElementById("Name_error").innerHTML=""
        flag=1
    }
    if ( Email.value==""){
        document.getElementById("email_error").innerHTML="Please Enter valid email"
        flag=0
    }

    else{
        document.getElementById("email_error").innerHTML=""
        flag=1
    }
    if (password.value== "" || password.value== null){
        document.getElementById("password_error").innerHTML="Enter password"
        flag=0
    }

    else{
        document.getElementById("password_error").innerHTML=""
        flag=1
    }
    if (confPass.value!= password.value){ 
        
        document.getElementById("confpass_error").innerHTML="Password didn't match"
        flag=0
    }
    else{
        document.getElementById("confpass_error").innerHTML=""
        flag
    }
    if(flag){
        return true

    }
    else{
        return false
    }
}