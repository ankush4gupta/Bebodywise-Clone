// CART PAge Function

let cart_data = JSON.parse(localStorage.getItem("bagItems")) || [];
let sum = 0;
let total_pay = 0
let subtotal = 0
let saving = 0
cart_data.map((ele) => {

    if (ele.main_price !== null) {
        subtotal = subtotal + ele.main_price
    }
    if (ele.main_price !== null) {

        saving = saving + ele.quant * (ele.main_price - ele.discount_price)
    }

    sum = sum + ele.quant
    total_pay = total_pay + (ele.quant * ele.discount_price);
})
// let saving = subtotal - total_pay;
document.querySelector(".total_pay").innerHTML = `<b>₹ ${total_pay}</b>`;
document.querySelector(".total_pay1").innerHTML = `<b>₹ ${total_pay}</b>`;
document.querySelector(".total_pay2").innerHTML = `<b>₹ ${total_pay}</b>`;
document.querySelector("#subtotal").innerHTML = `<b>₹</b> ${subtotal}`;
document.querySelector("#saving").innerHTML = `<b>₹</b> ${saving}`;
document.querySelector("#saving_t").innerHTML = `<b>₹</b> ${saving}`;
document.querySelector("#discount").innerHTML = `- <b>₹</b> ${saving}`;


document.querySelector("#t_itemss").innerHTML = `<b>${sum} items</b>`;
document.querySelector("#t_count").innerHTML = sum;
document.querySelector("#cart").onclick = () => {
    console.log("cart")
    document.querySelector("#cart_div").style.display = "block"
}

document.querySelector("#close_cart").onclick = () => {
    console.log("cart")
    document.querySelector("#cart_div").style.display = "none"
}

// data mapping for cart page
display_cart(cart_data)
function display_cart(data) {
    data.map((ele, index) => {
        // document.querySelector(".cart_items_sub").innerHTML = null;
        let product_div = document.createElement("div");
        product_div.setAttribute("class", "product_div");
        // image div
        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.images.img1;
        img_div.append(img);
        // price_div

        let price_div = document.createElement("div");
        let heading = document.createElement("h4");
        heading.innerHTML = ele.name;
        let pri_btn_div = document.createElement("div");
        // ---------------------------------------------------
        let pri_div = document.createElement("div");
        pri_div.setAttribute("class", "price_div")

        let discount_pri = document.createElement("p");
        discount_pri.innerHTML = `₹ ${ele.discount_price}`;

        let main_price = document.createElement("p");
        main_price.innerHTML = ele.main_price;
        pri_div.append(discount_pri, main_price)
        // --------------------------------------------------

        let increase_descrease = document.createElement("div");
        increase_descrease.setAttribute("class", "plus_minus_btn")
        let increase_btn = document.createElement("span");
        increase_btn.setAttribute("class", "material-icons size_b")
        increase_btn.innerHTML = "add";


        let descraese_btn = document.createElement("span");
        descraese_btn.setAttribute("class", "material-icons size_b")
        descraese_btn.innerHTML = "remove"

        let quant = document.createElement("p");
        quant.innerHTML = ele.quant;

        increase_descrease.append(descraese_btn, quant, increase_btn);


        pri_btn_div.append(pri_div, increase_descrease);

        price_div.append(heading, pri_btn_div);


        product_div.append(img_div, price_div);


        // addition 
        increase_btn.onclick = () => {
            // ele.quant++
            ele.quant = ele.quant + 1
            quant.innerHTML = ele.quant;
            cart_data.splice(index, 1);
            cart_data.push(ele);
            localStorage.setItem("bagItems", JSON.stringify(cart_data));
            // localStorage.setItem("bagItems", JSON.stringify(cart_data));
            let sum = 0;
            let total_pay = 0;
            let subtotal = 0
            cart_data.map((ele) => {
                if (ele.main_price !== null) {
                    subtotal = subtotal + ele.main_price
                }
                if (ele.main_price !== null) {

                    saving = saving + (ele.main_price - ele.discount_price)
                }
                sum = sum + ele.quant;
                total_pay = total_pay + (ele.quant * ele.discount_price)
            })
            // let saving = subtotal - total_pay;
            // document.querySelector("#cart_div").style.display = "block"
            location.reload()
            document.querySelector(".total_pay").innerHTML = `<b>₹ ${total_pay}</b>`;
            document.querySelector(".total_pay1").innerHTML = `<b>₹ ${total_pay}</b>`;
            document.querySelector(".total_pay2").innerHTML = `<b>₹ ${total_pay}</b>`;
            document.querySelector("#t_count").innerHTML = sum;
            document.querySelector("#t_itemss").innerHTML = `<b>${sum} items</b>`;
            document.querySelector("#subtotal").innerHTML = `<b>₹</b> ${subtotal}`;
            document.querySelector("#saving").innerHTML = `<b>₹</b> ${saving}`;
            document.querySelector("#saving_t").innerHTML = `<b>₹</b> ${saving}`;
            document.querySelector("#discount").innerHTML = `- <b>₹</b> ${saving}`;
            console.log(sum)



        }
        // minus product quantity
        descraese_btn.onclick = () => {
            ele.quant = ele.quant - 1

            if (ele.quant < 1) {
                prodelete(index);

            } else {

                quant.innerHTML = ele.quant;
                cart_data.splice(index, 1);
                cart_data.push(ele);
                console.log(cart_data)
                localStorage.setItem("bagItems", JSON.stringify(cart_data));
                let sum = 0;
                let total_pay = 0;
                cart_data.map((ele) => {
                    sum = sum + ele.quant;
                    if (ele.main_price !== null) {
                        total_pay = total_pay + (ele.quant * ele.discount_price);
                    }
                    if (ele.main_price !== null) {

                        saving = saving + (ele.main_price - ele.discount_price)
                    }
                })
                location.reload()
                // document.querySelector("#cart_div").style.display = "block"
                document.querySelector("#t_count").innerHTML = sum;
                document.querySelector("#t_itemss").innerHTML = `<b>${sum} items</b>`;
                document.querySelector(".total_pay").innerHTML = `<b>₹ ${total_pay}</b>`;
                document.querySelector(".total_pay1").innerHTML = `<b>₹ ${total_pay}</b>`;
                document.querySelector(".total_pay2").innerHTML = `<b>₹ ${total_pay}</b>`;
                document.querySelector("#saving").innerHTML = `<b>₹</b> ${saving}`;
                document.querySelector("#subtotal").innerHTML = `<b>₹</b> ${subtotal}`;
                document.querySelector("#saving_t").innerHTML = `<b>₹</b> ${saving}`;
                document.querySelector("#discount").innerHTML = `- <b>₹</b> ${saving}`;
                console.log(sum)



            }
        }


        document.querySelector(".cart_items_sub").append(product_div);

    })
}


function prodelete(index) {
    console.log(index);
    cart_data.splice(index, 1);
    localStorage.setItem("bagItems", JSON.stringify(cart_data));
    document.querySelector(".cart_items_sub").innerHTML = null;
    display_cart(cart_data);
}

document.querySelector("#checkout").onclick = () => {
    window.location.href = "./checkout.html";
}























// ************************Login & Logout *****************************
//   show and hide after login div 
let user_a = document.querySelector(".after_login");
let t = JSON.parse(localStorage.getItem("user_data")) || {}
if (t.token) {
    user_a.addEventListener("mouseover", function () {
        console.log("hhhhh")

        document.querySelector(".after-content").style.display = "block";
    });
    user_a.addEventListener("mouseout", function () {
        console.log("tttttt")
        document.querySelector(".after-content").style.display = "none";
    });

} else {
    // login close button
    document.querySelector("#close_login").onclick = () => {
        document.querySelector("#login_div").style.display = "none"
    }
    // login show button function 
    document.querySelector("#user").onclick = () => {
        document.querySelector("#login_div").style.display = "block"
    }

    // close btn for signup 

    document.querySelector("#close_signup").onclick = () => {

        document.querySelector("#Signup_div").style.display = "none"
    }

    // close btn for otp div

    document.querySelector("#close_login_otp").onclick = () => {
        document.querySelector("#login_otp_div").style.display = "none"
    }
}
// ***********************login function ********************************
document.querySelector("#loggedIn").addEventListener("submit", async (eve) => {
    eve.preventDefault();
    let n = document.getElementById('phn_Number').value
    try {
        var login_data = {
            "Number": document.getElementById('phn_Number').value
        }// password: document.getElementById('password-login').value

        login_data = JSON.stringify(login_data);
        // console.log("login_data", login_data)


    } catch (error) {
        alter(error);
        console.log('error', error);
    }
    let login_api = `/login`;
    let res = await fetch(login_api, {
        method: 'POST',
        body: login_data,
        headers: {
            "Content-Type": "application/json"
        }
    });
    let data = await res.json();
    if (data.null !== null) {
        document.querySelector("#login_div").style.display = "none"
        document.querySelector("#login_otp_div").style.display = "block"
        let OTP = Math.floor(Math.random() * 5000)
        window.alert(OTP);
        document.querySelector("#otp_pass").addEventListener("keypress", () => {
            searchUser(event, OTP, data);
        });
        console.log(data);
    } else {
        document.querySelector("#login_div").style.display = "none"
        document.querySelector("#Signup_div").style.display = "block"

        document.querySelector("#signedIn").addEventListener("submit", () => {
            register(event, n)
        })


    }
    // let username = document.getElementById('username-login').value;
    // let t = data.token;
    // getdata(username, t);

});


function searchUser(event, OTP, data) {
    console.log(OTP)
    event.preventDefault();
    if (event.key == "Enter") {
        let o = document.querySelector("#otp_pass").value;
        if (o == OTP) {
            document.querySelector("#login_otp_div").style.display = "none";
            alert("Login Successfully");
            localStorage.setItem("user_data", JSON.stringify(data));
            location.reload();

        } else {
            alert("Enter correct otp or Login again")
        }
    }
}


// data after login 
console.log()
document.querySelector("#myname").innerHTML = `Hello ! ${t.user.firstName}`;
document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("user_data");
    location.reload();

}



async function register(event, n) {
    try {
        event.preventDefault();
        // console.log("register_data", n)
        register_data = {
            Number: n,
            firstName: document.getElementById('signFName').value,
            Email: document.getElementById('signemail').value,
            lastName: document.getElementById('signLName').value,


        };
        register_data = JSON.stringify(register_data);
        console.log(register_data);

    }
    catch (e) {
        console.log(e);
    }
    let reg_api = `/register`
    let res = await fetch(reg_api, {
        method: 'POST',
        body: register_data,
        headers: {
            "Content-Type": "application/json",
        }
    });
    let data = await res.json();
    localStorage.setItem("user_data", JSON.stringify(data));
    location.reload();
    alert("Register and Login Successfully")
}


// *******************************************************************



