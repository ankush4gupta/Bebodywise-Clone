
let arr = JSON.parse(localStorage.getItem("bagItems")) || []
let id = JSON.parse(localStorage.getItem("oneitem")) || "62444ae99d49de4246c13562"
fetch_data(id)
async function fetch_data(da, location) {
    let data = await fetch(`/product/${id}`)
    let arr1 = await data.json();
    display_product(arr1);



    console.log("arr", arr1);
}

// display_product(data);
function display_product(data) {
    //  Image Data Mapping start
    let image1 = document.createElement("img");
    image1.src = data.images.img1;
    document.querySelector(".up_img_div").append(image1);
    let img1 = document.createElement("img");
    img1.src = data.images.img1;
    let img2 = document.createElement("img");
    img2.src = data.images.img2;
    let img3 = document.createElement("img");
    img3.src = data.images.img3;
    let img4 = document.createElement("img");
    img4.src = data.images.img4;
    let div1 = document.createElement("div");
    div1.append(img1)
    let div2 = document.createElement("div");
    div2.append(img2);
    let div3 = document.createElement("div");
    div3.append(img3);
    let div4 = document.createElement("div");
    div4.append(img4);
    document.querySelector(".low_img_div").append(div1, div2, div3, div4)

    // onclick function on images div ------------------------------------------
    img1.addEventListener("click", showImg1);
    function showImg1() {

        document.querySelector(".up_img_div").textContent = "";
        let small1 = document.createElement("img");
        small1.setAttribute("src", `${data.images.img1}`);
        small1.setAttribute("id", "imgg1")
        // images border
        img1.style.outline = "2px solid black"
        img2.style.outline = "1px solid black"
        img3.style.outline = "1px solid black"
        img4.style.outline = "1px solid black"


        document.querySelector(".up_img_div").append(small1);
    }
    img2.addEventListener("click", showImg2);
    function showImg2() {

        document.querySelector(".up_img_div").textContent = "";
        let sm2 = document.createElement("img");
        sm2.setAttribute("src", `${data.images.img2}`);
        // images border
        img1.style.outline = "1px solid black"
        img2.style.outline = "2px solid black"
        img3.style.outline = "1px solid black"
        img4.style.outline = "1px solid black"


        document.querySelector(".up_img_div").append(sm2);
    }

    img3.addEventListener("click", showImg3);
    function showImg3() {
        document.querySelector(".up_img_div").textContent = "";
        let small3 = document.createElement("img");
        small3.setAttribute("src", `${data.images.img3}`);
        small3.setAttribute("id", "imgg3")

        // images border
        img1.style.outline = "1px solid black"
        img2.style.outline = "1px solid black"
        img3.style.outline = "2px solid black"
        img4.style.outline = "1px solid black"

        document.querySelector(".up_img_div").append(small3);
    }
    img4.addEventListener("click", showImg4);
    function showImg4() {

        document.querySelector(".up_img_div").textContent = "";
        let sm4 = document.createElement("img");
        sm4.src = data.images.img4
        img1.style.outline = "1px solid black"
        img2.style.outline = "1px solid black"
        img3.style.outline = "1px solid black"
        img4.style.outline = "2px solid black"

        document.querySelector(".up_img_div").append(sm4);
    }

    // -------------Price data mapping part ---------------------

    let h3 = document.createElement("h3");
    h3.innerHTML = data.discription;

    let brand_name = document.createElement("h1");
    brand_name.innerHTML = data.name;
    // -------------------------------------------------------
    let pr_div = document.createElement("div");
    pr_div.setAttribute("class", "pro_price")
    let main_pr = document.createElement("p")
    main_pr.innerHTML = `<span>₹</span> ${data.main_price}`;
    let discount_price = document.createElement("p")
    discount_price.innerHTML = `<span>₹</span> ${data.discount_price}`;
    pr_div.append(discount_price, main_pr)
    //------------------- ---------------------------------------
    let mpr = document.createElement("p")
    mpr.setAttribute("class", "mrp")
    mpr.innerHTML = "MRP (Incl. of all taxes)"
    //----------------------------------------------------------

    let rating_div = document.createElement("div");
    for (let i = 0; i < data.rating; i++) {
        let start = document.createElement("span");
        start.innerHTML = "star"
        start.setAttribute("class", "material-icons size_start");
        rating_div.append(start);
    }
    let review = document.createElement("p");
    review.innerHTML = `${Math.floor(Math.random() * 10 + 20)} Reviewed`;
    let sold = document.createElement("p");
    sold.innerHTML = `${Math.floor(Math.random() * 500)} Units Sold`
    let r_div = document.createElement("div");
    r_div.setAttribute("class", "Rating_Div")
    r_div.append(rating_div, review, sold);

    //----------------------Cart Btn-------------------------------------------
    let addtocartbtn = document.createElement("button");
    addtocartbtn.innerHTML = "Add to Cart";


    addtocartbtn.addEventListener("click", () => {
        // console.log(ele)
        addtocart(data)
    })

    // ---------------------chcek deilvery div--------------------------

    let check_div = document.createElement("div");
    let check_head = document.createElement("h3");
    check_head.innerHTML = "Check Delivery Date";
    let check_para = document.createElement("p");
    check_para.innerHTML = "Enter pincode to check delivery date of your wellness regime.";
    // -----------------------------------------
    let pincode = document.createElement("input");
    pincode.setAttribute("type", "Number");
    pincode.setAttribute("placeholder", "Enter Pincode")
    let check_btn = document.createElement("button");;
    check_btn.innerHTML = "SUBMIT";
    let check_sub_div = document.createElement("div");
    check_sub_div.setAttribute("class", "check_sub_div")
    check_sub_div.append(pincode, check_btn);

    check_div.append(check_head, check_para, check_sub_div);
    check_div.setAttribute("class", "check_Div")


    document.querySelector(".ryt_div").append(h3, brand_name, pr_div, mpr, r_div, addtocartbtn, check_div);

    // *****************************data map for fixed footer***********************************************

    let div_img_name = document.createElement("div");
    let i = document.createElement("img");
    i.src = data.images.img1;
    let n = document.createElement("p");
    n.innerHTML = data.name;
    div_img_name.append(i, n);

    // -------------------------------
    let rate_div = document.createElement("div");
    let rate = document.createElement("h1");
    rate.innerHTML = `<sup>₹</sup>${data.discount_price}`
    let bt = document.createElement("button");
    bt.addEventListener("click", () => {
        // console.log(ele)
        addtocart(data)
    })
    bt.innerHTML = "Add to Cart";
    rate_div.append(rate, bt);

    document.querySelector(".d").append(div_img_name, rate_div);

}

// add to card function

var count = 0;

function addtocart(ele) {
    console.log(ele)

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