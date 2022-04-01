
let arr = JSON.parse(localStorage.getItem("bagItems")) || []

let hair_div1 = document.querySelector(".slideshow-container");
let skin_div1 = document.querySelector(".slideshow-container_skin");
let data_count = document.querySelector("#count");

fetch_data("Hair", hair_div1)
async function fetch_data(da, location) {
    let data = await fetch(`/product/cateorgies/${da}`)
    let arr1 = await data.json();
    display(arr1, location);

    data_count.innerHTML = `${arr1.length} Products`;

    console.log("arr", arr);
}
async function fetch_data_all(hair_div1) {
    let data = await fetch(`/product`)
    let arr = await data.json();
    display(arr, hair_div1)
    data_count.innerHTML = `${arr.length} Products`;

    console.log(arr);
}





document.querySelector("#best_btn1").onclick = () => {


    hair_div1.textContent = null;
    hair_div1.setAttribute("class", "slideshow-container1");
    fetch_data("Hair", hair_div1)



    document.querySelector("#best_btn1").style.backgroundColor = "#675680";
    document.querySelector("#best_btn1").style.color = "white";

    document.querySelector("#best_btn2").style.backgroundColor = "#e8f4ff";
    document.querySelector("#best_btn2").style.color = "#1964ab";

    document.querySelector("#best_btn3").style.backgroundColor = "#eaf3f2";
    document.querySelector("#best_btn3").style.color = "#007061";

    document.querySelector("#best_btn4").style.backgroundColor = "#fdeff0";
    document.querySelector("#best_btn4").style.color = "#e86f76";

    document.querySelector("#best_btn5").style.backgroundColor = "#eff4f8";
    document.querySelector("#best_btn5").style.color = "#a8a5bd";
}
document.querySelector("#best_btn2").onclick = () => {

    hair_div1.textContent = null;
    hair_div1.setAttribute("class", "slideshow-container2");

    fetch_data("Skin", hair_div1)
    document.querySelector("#best_btn1").style.backgroundColor = "#f0eef2";
    document.querySelector("#best_btn1").style.color = "#66509a";

    document.querySelector("#best_btn2").style.backgroundColor = "#1964ab";
    document.querySelector("#best_btn2").style.color = "white";

    document.querySelector("#best_btn3").style.backgroundColor = "#eaf3f2";
    document.querySelector("#best_btn3").style.color = "#2d8e7b";

    document.querySelector("#best_btn4").style.backgroundColor = "#fdeff0";
    document.querySelector("#best_btn4").style.color = "#e86f76";

    document.querySelector("#best_btn5").style.backgroundColor = "#eff4f8";
    document.querySelector("#best_btn5").style.color = "#a8a5bd";
}

document.querySelector("#best_btn3").onclick = () => {
    hair_div1.textContent = null;
    hair_div1.setAttribute("class", "slideshow-container3");

    fetch_data_all(hair_div1)

    document.querySelector("#best_btn1").style.backgroundColor = "#f0eef2";
    document.querySelector("#best_btn1").style.color = "#66509a";

    document.querySelector("#best_btn2").style.backgroundColor = "#e8f4ff";
    document.querySelector("#best_btn2").style.color = "#1964ab";

    document.querySelector("#best_btn3").style.backgroundColor = "#2d8e7b";
    document.querySelector("#best_btn3").style.color = "white";

    document.querySelector("#best_btn4").style.backgroundColor = "#fdeff0";
    document.querySelector("#best_btn4").style.color = "#e86f76";

    document.querySelector("#best_btn5").style.backgroundColor = "#eff4f8";
    document.querySelector("#best_btn5").style.color = "#a8a5bd";
}

document.querySelector("#best_btn4").onclick = () => {

    document.querySelector("#best_btn1").style.backgroundColor = "#f0eef2";
    document.querySelector("#best_btn1").style.color = "#66509a";

    document.querySelector("#best_btn2").style.backgroundColor = "#e8f4ff";
    document.querySelector("#best_btn2").style.color = "#1964ab";

    document.querySelector("#best_btn3").style.backgroundColor = "#eaf3f2";
    document.querySelector("#best_btn3").style.color = "#2d8e7b";

    document.querySelector("#best_btn4").style.backgroundColor = "#e86669";
    document.querySelector("#best_btn4").style.color = "white";

    document.querySelector("#best_btn5").style.backgroundColor = "#eff4f8";
    document.querySelector("#best_btn5").style.color = "#a8a5bd";
}


document.querySelector("#best_btn5").onclick = () => {

    document.querySelector("#best_btn1").style.backgroundColor = "#f0eef2";
    document.querySelector("#best_btn1").style.color = "#66509a";

    document.querySelector("#best_btn2").style.backgroundColor = "#e8f4ff";
    document.querySelector("#best_btn2").style.color = "#1964ab";

    document.querySelector("#best_btn3").style.backgroundColor = "#eaf3f2";
    document.querySelector("#best_btn3").style.color = "#2d8e7b";


    document.querySelector("#best_btn4").style.backgroundColor = "#fdeff0";
    document.querySelector("#best_btn4").style.color = "#e86f76";

    document.querySelector("#best_btn5").style.backgroundColor = "#5e93bd";
    document.querySelector("#best_btn5").style.color = "white";
}
//******************* */ SORTING ***********************************************************



document.querySelector("#low").onclick = () => {
    value = "low"
    console.log("h")
    document.querySelector("#low").style.backgroundColor = "#007061"
    document.querySelector("#low").style.color = "white"

    document.querySelector("#high").style.backgroundColor = "white"
    document.querySelector("#high").style.color = "#007061"

    document.querySelector("#p_sorting").style.backgroundColor = "white"
    document.querySelector("#p_sorting").style.color = "#007061"
}

document.querySelector("#high").onclick = () => {



    console.log("h")
    document.querySelector("#high").style.backgroundColor = "#007061"
    document.querySelector("#high").style.color = "white"

    document.querySelector("#low").style.backgroundColor = "white"
    document.querySelector("#low").style.color = "#007061"

    document.querySelector("#p_sorting").style.backgroundColor = "white"
    document.querySelector("#p_sorting").style.color = "#007061"



}


function display(hair, hair_div1) {



    hair.map((ele) => {
        // console.log(ele)
        // rating
        console.log(ele._id)
        let rating = document.createElement("div");
        rating.setAttribute("class", "rating")
        let r = ele.rating;
        for (let i = 0; i < ele.rating; i++) {
            let start = document.createElement("span");
            start.innerHTML = "star"
            start.setAttribute("class", "material-icons size_start");


            rating.append(start);
        }

        // images
        let img = document.createElement("img");
        img.src = ele.images.img1;
        img.style.cursor = "pointer";
        // brand name
        let name = document.createElement("p");
        name.setAttribute("class", "brand_name")
        name.innerHTML = ele.name;

        // price div 
        let price_div = document.createElement("div");
        price_div.setAttribute("class", "price_div");
        let discount_price = document.createElement("p");
        discount_price.innerHTML = `<sup>₹</sup>${ele.discount_price}`;
        let main_price = document.createElement("p");
        main_price.innerHTML = ele.main_price;
        price_div.append(discount_price, main_price);

        //  for and with 

        let for_p = document.createElement("p");
        for_p.setAttribute("class", "description");
        for_p.innerHTML = `<span>For</span> ${ele.For}`;
        let with_p = document.createElement("p");
        with_p.innerHTML = `<span>With</span> ${ele.With}`;
        with_p.setAttribute("class", "description")

        // Button

        let button = document.createElement("button");
        button.innerHTML = "Add to Cart";
        button.addEventListener("click", () => {
            // console.log(ele)
            addtocart(ele)
        })


        let div = document.createElement("div");
        div.setAttribute("class", "mySlides")
        div.append(img, rating, name, price_div, for_p, with_p, button);
        img.onclick = () => {
            
            localStorage.setItem("oneitem", JSON.stringify(ele._id))
            window.location.href = "./specific_product.html"
        }

        hair_div1.append(div);
    })


}
var count = 0;

function addtocart(ele) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].id == ele.id) {

            ele.quant = ele.quant + 1;

            arr.splice(i, 1);
            break;
        }
    }
    arr.push(ele)
    localStorage.setItem("bagItems", JSON.stringify(arr));
    console.log("bag", arr)

}

//  price sorting 



