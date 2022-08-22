let data=JSON.parse(localStorage.getItem("userData"))||[];
let form=document.querySelector("form");
let save=(event)=>{
    if(data==null){
    alert("User not exist");    
    }
    let count=0;
    event.preventDefault();
   let emai=form.email.value;
   let pass=form.password.value;
   data.forEach(ele=>{
    if(emai==ele.email){
    if(pass==ele.password){
        alert("login successful");
        localStorage.setItem("login",true);
        count++;
        window.location.href="index.html";
    }
    else{
        alert("check your password");
        localStorage.setItem("iogin",false);
        count++; 
    }
    }
   })
   if(count==0){
    alert("User not exits");
    localStorage.setItem("iogin",false);
   }
}

