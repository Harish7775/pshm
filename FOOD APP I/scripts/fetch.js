let getData = async (url) =>{
    let res = await fetch(url);
    let data= await res.json();
    return data.meals;   
}

let append=(data)=>{
  
    let cont=document.getElementById("cont");
    cont.innerHTML=""
    data.forEach(function(e){
    let img=document.createElement('img');
    img.src=e.strMealThumb;
    
    let name=document.createElement("h2");
    name.innerText=`StrMeal: ${e.strMeal}`

    let idMeal=document.createElement('p');
    idMeal.innerText=`idMeal: ${e.idMeal}`
    let div=document.createElement('div');
    div.append(img,name,idMeal);

    cont.append(div)
    })
}
    export {getData,append}; 