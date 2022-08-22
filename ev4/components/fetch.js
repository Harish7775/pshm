async function  getdata(url){
    let res=await fetch(url);
    let data= await fetch(url);
    return data;
}
let  append =(data,cont)=>{
    cont.innerText="";
data.forEach(function(el){
 

        let img = document.createElement("img")
        img.src = el.urlToImage;
       
        let t = document.createElement("h3")
        t.innerText= el.title;
        
       
        let p = document.createElement("P")
        p.innerText=el.description;
       
       let div1=document.createElement("div")
        div1.append(t,p)
       
        let div = document.createElement("div");
        div.className="news";
        div.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify(el));
            window.location.href="news.html"
        })
        div.append(img,div1);
        cont.append(div)
    })
};
export { getdata,append}