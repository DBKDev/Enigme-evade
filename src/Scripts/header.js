
const userBtn = document.querySelector("#user-icon");
const userContent = document.querySelector('.user-container');
const liencreate = document.querySelector("#create");
const userContentRegister = document.querySelector('.user-container-register');
const connect = document.querySelector("#connexion")


userBtn.addEventListener("click", ()=>{
    userContent.classList.toggle("active")
    userContentRegister.classList.remove("active")
});

liencreate.addEventListener("click", ()=>{
    userContentRegister.classList.toggle("active")
    userContent.classList.remove("active")
});

connect.addEventListener("click", ()=>{
    userContent.classList.toggle("active")
    userContentRegister.classList.remove("active")
})

