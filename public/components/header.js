function header() {
    return `  <section>
        <div id="outerdiv_nav">


            <div id="navbar">
                <div id="brand_name"><sup class="sub_be">BE</sup><a href="index.html">Bodywise</a><sup
                        class="sub_TM">TM</sup></div>
                <div id="menu">
                    <div class="menu_items">Book Doctor Consultation</div>
                    <div class="menu_items">Take Wellness Assessment</div>
                    <div class="dropdown">
                        <div>Choose Concern
                            <i class="fa fa-caret-down"></i>
                        </div>
                        <div class="dropdown-content">
                            <a href="#">Hair </a>
                            <a href="#">Skin </a>
                            <a href="#">Nutrition </a>
                            <a href="#">PCOS </a>
                            <a href="#">Intimate Care </a>
                        </div>
                    </div>
                    <div id="all_Products" class="menu_items">All Products</div>
                    <div class="menu_items">Refer & Earn</div>
                </div>
                <div id="menu_left">
                    <div id="search"><span class="material-icons md-24">search</span></div>
                    <div id="user"><span class="material-icons md-24">person_outline </span></div>
                    <div id="whatsapp"><span class="material-icons orange600 md-24">whatsapp</span></div>
                    <div id="cart"><span id="cart" class="material-icons md-24">shopping_bag</span></div>
                </div>
            </div>
        </div>
        <!--  -------------------cart html --------------------------------------------------------- -->
        <div class="c">


            <div id="cart_div">
                <div id="close_div">
                    <div id="close_cart"><span id="close_cart" class="material-icons">
                            arrow_forward
                        </span></div>
                    <div id="cart_heading">Cart</div>
                </div>
                <div class="cart_total">
                    <div class="cart_total_item">
                        <p>Items</p>
                        <p id="t_count"></p>
                    </div>
                    <div class="cart_total_item">
                        <p>Total</p>
                        <p class="total_pay1"></p>
                    </div>
                    <div class="cart_total_item">
                        <div>
                            <p>Saving </p>
                            <p id="saving"></p>
                        </div>

                        <span id="close_cart" class="material-icons privacy">
                            privacy_tip
                        </span>

                    </div>
                </div>
                <div class="cart_items">
                    <p>Products</p>
                    <div class="cart_items_sub">

                    </div>


                </div>
                <div class="price_summary">
                    <h3>Pricing Summary</h3>
                    <div class="cart_t">
                        <div>
                            <div>Subtotal</div>
                            <div id="subtotal"></div>
                        </div>
                        <div class="green">
                            <div>Discount</div>
                            <div id="discount">99873</div>
                        </div>
                        <div class="green">
                            <div>Shipping</div>
                            <div>Free !</div>
                        </div>
                        <div class="seperater"> </div>
                        <div>
                            <div>To Pay</div>
                            <div class="total_pay2"></div>
                        </div>
                        <div class="save">
                            <div>Total Savings</div>
                            <div id="saving_t"></div>
                        </div>
                    </div>
                </div>
                <div class="cart_footer">
                    <div class="black">
                        <p id="t_itemss"></p>
                        <p class="total_pay"></p>

                    </div>
                    <div id="checkout">CHECKOUT</div>
                </div>



            </div>
        </div>

    </section>
    <!-- **************************Login************************* -->
    <div id="login_div">
        <div class="login_1">
            <p>Login or Signup</p>
            <p><span class="material-icons md-14" id="close_login">close </span></p>
        </div>
        <p>Enter your phone number to verify yourself</p>
        <form action="" id="loggedIn">
            <input id="phn_Number" type="text" placeholder="Enter Phone Number">
            <p>We will send OTP to this number</p>
            <input type="submit" value="SUBMIT">
        </form>

    </div>
    <!-- **************************Login OTP div -->
    <div id="login_otp_div">
        <div class="login_1">
            <p>Login</p>
            <p><span class="material-icons md-14" id="close_login_otp">close </span></p>
        </div>
        <p>Enter your phone number to verify yourself</p>
        <form action="">
            <input id="otp_pass" type="text" placeholder="Enter OTP">
            <p>Not received OTP? Resend</p>

        </form>

    </div>

    <!-- ***************************SignUp************************ -->
    <div id="Signup_div">
        <div class="login_1">
            <p>Signup</p>
            <p><span class="material-icons md-14" id="close_signup">close </span></p>
        </div>

        <form action="" id="signedIn">
            <input id="signFName" type="text" placeholder=" First Name">

            <input id="signLName" type="text" placeholder=" Last Name">

            <input id="signemail" type="text" placeholder=" Email">

            <input type="submit" value="NEXT">
        </form>

    </div>

    <!-- ****************************after login div*****************  -->
    <div class="after_login">

        <div class="after-content">
            <a id="myname" href="#">Ankdddddggggush </a>
            <a href="#">My Profile </a>
            <a href="#">BW Purse </a>
            <a href="#">My orders </a>
            <a href="#">My Subscriptions </a>
            <a id="logout" href="#">Log Out </a>
        </div>
    </div>`
}

export default header;