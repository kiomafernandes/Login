const register = document.querySelector("#registerlink");
const reg = document.querySelector("#register");
const login = document.querySelector("#login");


register.addEventListener('click', () =>{
    reg.style.display = "block";
    login.style.display = "none";
});


