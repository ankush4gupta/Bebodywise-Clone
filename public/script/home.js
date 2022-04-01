
let hair_div1 = document.querySelector(".slideshow-container");
let skin_div1 = document.querySelector(".slideshow-container_skin");

fetch_data("Hair", hair_div1)
async function fetch_data(da, location) {
    let data = await fetch(`/product/cateorgies/${da}`)
    let arr = await data.json();
    display(arr, location)


    console.log(arr);
}
async function fetch_data_all(hair_div1) {
    let data = await fetch(`/product`)
    let arr = await data.json();
    display(arr, hair_div1)


    console.log(arr);
}

// display(hair, hair_div1)
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
    document.querySelector("#best_btn3").style.color = "#007061";

    document.querySelector("#best_btn4").style.backgroundColor = "#fdeff0";
    document.querySelector("#best_btn4").style.color = "#e86f76";

    document.querySelector("#best_btn5").style.backgroundColor = "#eff4f8";
    document.querySelector("#best_btn5").style.color = "#a8a5bd";
}

document.querySelector("#best_btn3").onclick = () => {
  

    document.querySelector("#best_btn1").style.backgroundColor = "#f0eef2";
    document.querySelector("#best_btn1").style.color = "#66509a";

    document.querySelector("#best_btn2").style.backgroundColor = "#e8f4ff";
    document.querySelector("#best_btn2").style.color = "#4798d6";

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


function display(hair, hair_div1) {



    hair.map((ele) => {
        // rating
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


        let div = document.createElement("div");
        div.setAttribute("class", "mySlides")
        div.append(img, rating, name, price_div, for_p, with_p, button);

        hair_div1.append(div);
    })


}