import React from 'react'

const Footer = () => {
    return (


        <section class="row bg-warning p-3">
            {/* <!-- child 1   --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">About us</h2>
                <p class="text-white text-center">We are the largest company in Kenya and even is all the East African
                    countries. We are located in Nairobi at Westlands Kangemi Opposite lions place. We sell House
                    affordale items and even electronic devices too. We value you coz you value us</p>
            </div>
            {/* <!-- child 2  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Contact us</h2>
                <form action="">
                    <input type="email" placeholder="enter your email" class=" form-control" /><br /><br />
                    <textarea name="" id="" class="form-control" placeholder="leave a comment" ></textarea><br /><br />
                    <input type="submit" value="send message" class="btn btn-outline-danger" />
                </form>
            </div>
            {/* <!-- child 3  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">Stay Connected</h2>
                <a href="https://facebook.com">
                    <img src="images/fb.png" alt="facebook" />
                </a>
                <a href="https:Instagram.com">
                    <img src="images/in.png" alt="Instagram" />
                </a>
                <a href="https://X.com">
                    <img src="images/x.png" alt="Twitter" />
                </a>
                <p>We are available too through the internet and you can reach us through facebook, Instagram and
                    Twitter.</p>


            </div>


        </section>
    )
}

export default Footer