let userData=JSON.parse(localStorage.getItem("userData"))||[];
let form=document.querySelector("form")
function save(event){
event.preventDefault();
console.log("work")
    let data = {
    name:form.name.value,
    email:form.email.value,
    password:form.password.value,
};
if (checkEmails(data.email) === true) {
    userData.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Account Creating Successful");
    window.location.href = "login.html";
  } else {
    alert("Account Already Exist");
  }
}

function checkEmails(email){
    let filtered=userData.filter((el)=>{
        return email===el.email;
    })
    if(filtered.length>0){
     return false   
    }
    else{
        window.location.href="index.html";
        return true;
    }
}






















// let form=document.getElementById("signup");
// let signup=(event)=>{
//     event.preventDefault();
//     console.log("work")
//     let data={
//     name:form.name.value,
//     email:form.email.value,
//     password:form.password.value,
    
//     }

// }

// let userData=JSON.parse(localStorage.setItem(userData))||[];
// let checkEmails=(email)=>{
// let filtered=userData.filter((el)=>{
//  return email===el.email;   
// })
// if(filtered.length>0){
//     return false;
// }
// else{
//     return true;
// }
// }






