let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");

let change=()=>{
    if(password.type=="password"){
        password.type="text";
        eyeicon.classList="fa-solid fa-eye";
    }else{
        password.type="password";
        eyeicon.classList="fa-solid fa-eye-slash";
    }
}
