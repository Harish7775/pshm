import navbar from "../components/navbbar.js";
document.getElementById("navbar").innerHTML=navbar();
let arr=JSON.parse(localStorage.getItem("news"));

data(arr)

function data(el){
    
    let cont = document.getElementById("detailed_news")
        let img = document.createElement("img")
        img.src = el.urlToImage;
       
        let t = document.createElement("h3")
        t.innerText= el.title;
        
       
        let p = document.createElement("P")
        p.innerText=el.description;
        let div=document.createElement("div");
        div.append(img,t,p)
        cont.append(div);
}