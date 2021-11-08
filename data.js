async function getData(url){

    let res = await fetch(url)

    let data = await res.json()

    return data;



}


function append(data,container){

   data.forEach(({strMeal,strMealThumb,strArea,strCategory})=>{

        let div = document.createElement("div")

        let p = document.createElement('p')

        p.innerText = strMeal;

        let p1 = document.createElement('p')

        p1.innerText = strArea;
        
        let p2 = document.createElement('p')

        p2.innerText = strCategory;

        let img = document.createElement("img");

         img.src = strMealThumb;

        div.append(img,p,p1,p2);

        // console.log(container)
         container.append(div);


    })


}

export {getData,append}