// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbbar.js";
document.getElementById("navbar").innerHTML=navbar();
import{getdata,append} from "../components/fetch.js"



document.querySelector("#search_input").addEventListener("keypress",(event)=>{
    if(event.key =="Enter"){
let query=document.querySelector("#search_input").value;
localStorage.setItem("query",query)
window.location.href="./search.html"

 
}

})




var results=document.getElementById("results");

window.addEventListener("load",function(){
    let url="https://masai-api.herokuapp.com/news/top-headlines?country=in"
    getdata(url)
    async function  getdata(url){
     let res=await fetch(url);
     let data= await res.json();
   

     
    append(data.articles,results)
 }
})

document.querySelector("#in").addEventListener("click",val)

function val(event){
    event.preventDefault();
   let url="https://masai-api.herokuapp.com/news/top-headlines?country=in"
   getdata(url)
   async function  getdata(url){
    let res=await fetch(url);
    let data= await res.json();

    
   append(data.articles,results)
}
}
document.querySelector("#ch").addEventListener("click",valu)
function valu(event){
    event.preventDefault();
   let url="https://masai-api.herokuapp.com/news/top-headlines?country=ch"
   getdata(url)
   async function  getdata(url){
    let res=await fetch(url);
    let data= await res.json();


    
   append(data.articles,results)
}
}
document.querySelector("#us").addEventListener("click",value)
function value(event){
    event.preventDefault();
   let url="https://masai-api.herokuapp.com/news/top-headlines?country=us"
   getdata(url)
   async function  getdata(url){
    let res=await fetch(url);
    let data= await res.json();
   
 
    
   append(data.articles,results)
}
}
document.querySelector("#uk").addEventListener("click",valuee)
function valuee(event){
    event.preventDefault();
   let url="https://masai-api.herokuapp.com/news/top-headlines?country=uk"
   getdata(url)
   async function  getdata(url){
    let res=await fetch(url);
    let data= await res.json();
 
  
    
   append(data.articles,results)
}


    

}

