// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbbar.js";
document.getElementById("navbar").innerHTML=navbar();
import{append} from "../components/fetch.js"
var container=document.getElementById("results");
let query=document.querySelector("#search_input").value;
let val=localStorage.getItem("query");
if(query!==null){
 query=val
 cars(query);
}



function cars(query){
   let url=` https://masai-api.herokuapp.com/news?q=${query}`
   getdata(url)
   async function  getdata(url){
    let res=await fetch(url);
    let data= await res.json();
  
  
    
   append(data.articles,container)
}
}



    document.querySelector("#search_input").addEventListener("keypress",(event)=>{
         query=document.querySelector("#search_input").value;
         cars(query);

})


