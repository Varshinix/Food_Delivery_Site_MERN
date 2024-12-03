{/*import { useState } from "react";*/}
import { uploads } from "../../services"; 
import styles from "./home.module.css"
import basket from "../../assets/Basket.png"
import location from "../../assets/Location.png"
import forwardButton from "../../assets/down_btn.png"
import logo from "../../assets/site_logo.png"
import userLogo from "../../assets/User_logo.png"
import placeOrder from "../../assets/place_order.png"
import trackOrder from "../../assets/track_order.png"
import getOrder from "../../assets/get_order.png"
import badges from "../../assets/app_store_badges.png"
import facebook from "../../assets/Facebook_icon.png"
import instagram from "../../assets/Instagram_icon.png"
import tiktok from "../../assets/TikTok_icon.png"
import snapchat from "../../assets/Snapchat_icon.png"
import footerLogo from "../../assets/footer_logo.png"
import { useNavigate } from "react-router-dom";

export default function Home() { 
    const imageUrl = uploads("main_home_og.png");
    const imageUrl_deals1 = uploads("deals_1.png")
    const imageUrl_deals2 = uploads("deals_2.png")
    const imageUrl_ctg1 = uploads("categories_1.png")
    const imageUrl_ctg2 = uploads("categories_2.png")
    const imageUrl_ctg3 = uploads("categories_3.png")
    const imageUrl_ctg4 = uploads("categories_4.png")
    const imageUrl_ctg5 = uploads("categories_5.png")
    const imageUrl_ctg6 = uploads("categories_6.png")
    const imageUrl_rst1 = uploads("resto_1.png")
    const imageUrl_rst2 = uploads("resto_2.png")
    const imageUrl_rst3 = uploads("resto_3.png")
    const imageUrl_rst4 = uploads("resto_4.png")
    const imageUrl_rst5 = uploads("resto_5.png")
    const imageUrl_rst6 = uploads("resto_6.png")
    const imageUrl_cplpic = uploads("ordering_img.png")
    const imageUrl_ptnr = uploads("partner_img.png")
    const imageUrl_ride = uploads("ride_img.png")

    
    
    const navigate = useNavigate();

    return (
        <>
        <div className={styles.top_banner}>
            <p> 🌟 Get 5% off your first order,
                <span className={styles.promo}>
                    Promo:ORDERS
                </span>
            </p>
            <div className={styles.banner_right}>
                <div className={styles.location}>
                    <img src={location} alt="location logo" />
                    <span>Mumbai, India (default address)</span>
                    <span className={styles.change_loc}>  Change Location</span>
                </div>
                <div className={styles.cart}>
                    <img src={basket} alt="shopping basket" className={styles.cart_img} />
                    <span>My Cart</span>
                    <img src={forwardButton} alt="forward buttont" className={styles.fwd_btn} />
                </div>
            </div>
        </div>
        
        <div className={styles.home_header}>
            <div className={styles.homelogo}>
                <img src={logo} alt="Main Logo" />
            </div>
            <div className={styles.header_right}>
                <div className={styles.homeBtn}>
                    <span>Home</span>
                </div>
                <div>
                    <span>Browse Menu</span>
                </div>
                <div>
                    <span>Special Offers</span>
                </div>
                <div>
                    <span>Restaurants</span>
                </div>
                <div>
                    <span>Track Order</span>
                </div>
                <div className={styles.user_logo}>
                    <img src={userLogo} alt="user logo" />
                    <span>Login/Signup</span>
                </div>
            </div>
        </div>

        {/* <div className={styles.home_bg}>
            <img src= {imageUrl} alt="main Home image" />
        </div> */}

        <div className={styles.home_bg} style={{ backgroundImage: `url(${imageUrl})` }}> 
            <div className={styles.home_para}>
                <p>Order Restaurant food, takeaway and groceries.</p>
                <h1>Feast Your Senses, <br />
                    <span className={styles.fastnFresh}>Fast and Fresh</span>
                </h1>
                <div className={styles.home_para_div}>
                    <p>Enter a postcode to see what we deliver</p>
                    <input className={styles.search_bar} name="text" type="text" placeholder="e.g. EC4R 3TE" />
                    <button className= {styles.search_btn} type="submit">Search</button>
                </div> 
            </div>
        </div>


        <div className={styles.deals}>
            <h1>Up to-40% 🎊 Order.uk exclusive deals </h1>
            <div className={styles.deal_right}>
                <p>Vegan</p>
                <p>Sushi</p>
                <span className={styles.deal_part}>Pizza & Fastfood</span>
                <p>others</p>
            </div>
        </div>
        <div className={styles.deals_img}>
            <img src={imageUrl_deals1} alt="Deals 1" />
            <img src={imageUrl_deals2} alt="Deals 2" />
            <img src={imageUrl_deals1} alt="Deals 3" />
        </div>

        <div className={styles.categories}>
            <h1>Order.uk Popular Categories 🤩</h1>
        </div>
        <div className={styles.categories_img}> 
            <div className={styles.ctg_img1}>
                <img src={imageUrl_ctg1} alt="category 1" />
                <div className={styles.tag_1}>
                    <p>Burgers & Fastfood</p>
                    <span>21 Restaurents</span>
                </div> 
            </div>
            <div className={styles.ctg_img2}>
                <img src={imageUrl_ctg2} alt="category 2" />
                <div className={styles.tag_2}>
                    <p>Salads</p>
                    <span>32 Restaurents</span>
                </div> 
            </div>
            <div className={styles.ctg_img3}>
                <img src={imageUrl_ctg3} alt="category 3" />
                <div className={styles.tag_3}>
                    <p>Pasta & Casuals</p>
                    <span>4 Restaurents</span>
                </div> 
            </div>
            <div className={styles.ctg_img4}>
                <img src={imageUrl_ctg4} alt="category 4" />
                <div className={styles.tag_4}>
                    <p>Pizza</p>
                    <span>32 Restaurents</span>
                </div> 
            </div>
            <div className={styles.ctg_img5}>
                <img src={imageUrl_ctg5} alt="category 5" />
                <div className={styles.tag_5}>
                    <p>Breakfast</p>
                    <span>4 Restaurents</span>
                </div> 
            </div>
            <div className={styles.ctg_img6}>
                <img src={imageUrl_ctg6} alt="category 6" />
                <div className={styles.tag_6}>
                    <p>Soups</p>
                    <span>32 Restaurents</span>
                </div> 
            </div>  
        </div>


        <div className={styles.reastaurents}>
            <h1>Popular Restaurants</h1>
        </div>
        <div className={styles.resto_imgs}>
            <span
                className={styles.restos_1}
                onClick={() => navigate("/product")}
            >
                <img src={imageUrl_rst1} alt="Restaurant 1" />
            </span>
            <span
                className={styles.restos_2}
                onClick={() => navigate("/product")}
            >
                <img src={imageUrl_rst2} alt="Restaurant 2" />
            </span>
            <span
                className={styles.restos_3}
                onClick={() => navigate("/product")}
            >
                <img src={imageUrl_rst3} alt="Restaurant 3" />
            </span>
            <span
                className={styles.restos_4}
                onClick={() => navigate("/product")}
            >
                <img src={imageUrl_rst4} alt="Restaurant 4" />
            </span>
            <span
                className={styles.restos_5}
                onClick={() => navigate("/product")}
            >
                <img src={imageUrl_rst5} alt="Restaurant 5" />
            </span>
            <span
                className={styles.restos_6}
                onClick={() => navigate("/product")}
            >
                <img src={imageUrl_rst6} alt="Restaurant 6" />
            </span>
        </div> 


        <div >
            <img src={imageUrl_cplpic} alt="Ordering Couple picture" className={styles.ordering} />
        </div>

        
        <div className={styles.get_started}>
            <div>
                <img src={imageUrl_ptnr} alt="Partner with us" className={styles.partner_us}/>
            </div>
            <div>
                <img src={imageUrl_ride} alt="Ride with us" className={styles.ride_us}/>
            </div>
        </div>
        

        <div className={styles.know_us}>
            <div className={styles.about_us}>
                <h1>Know more about us!</h1>
                <div className={styles.about_right}>
                    <span>Frequent Questions</span>
                    <p>Who we are?</p>
                    <p>Partner Program</p>
                    <p>Help & Support</p>
                </div>
            </div>
            <div className={styles.inner_box}>
                <div className={styles.inner_left}>
                    <span><h3>How does Order.UK work?</h3></span>
                    <h3>What payment methods are accepted?</h3>
                    <h3>Can I track my order in real-time?</h3>
                    <h3>
                        Are there any special discounts or <br />
                        promotions available?
                    </h3>
                    <h3>Is Order.UK available in my area?</h3>
                </div>
                <div className={styles.inner_right}>
                    <div className={styles.inner_right_top}>
                    <div className={styles.inner_right_1}>
                        <h3>Place an Order!</h3>
                        <img src={placeOrder} alt="order place" />
                        <p>
                            Place order through our <br />
                            website or Mobile app
                        </p>
                    </div>
                    <div className={styles.inner_right_2}>
                        <h3>Track Progress</h3>
                        <img src={trackOrder} alt="track progress" />
                        <p>
                            Your can track your order <br />
                            status with delivery time
                        </p>
                    </div>
                    <div className={styles.inner_right_3}>
                        <h3>Get your Order</h3>
                        <img src={getOrder} alt="get order" />
                        <p>
                            Receive your order at a <br />
                            lighting fast speed!
                        </p>
                    </div>
                    </div>
                    <p className={styles.inner_right_bottom}>
                        Order.UK simplifies the food ordering process. Browse through our diverse menu, <br />
                        select your favorite dishes, and proceed to checkout. Your delicious meal will be <br />
                        on its way to your doorstep in no time!
                    </p>
                </div>
            </div>

        </div>


        <div className={styles.count}>
            <div className={styles.count_1}>
                <p>546+</p>
                <h4>Registered Riders</h4>
            </div>
            <p> | </p>
            <div className={styles.count_2}>
                <p>789,800+</p>
                <h4>Orders Delivered</h4>
            </div>
            <p> | </p>
            <div className={styles.count_3}>
                <p>690+</p>
                <h4>Restaurant Partners</h4>
            </div>
            <p> | </p>
            <div className={styles.count_4}>
                <p>17,540+</p>
                <h4>Food Items</h4>
            </div>
        </div>


        <footer className={styles.footer}>
                <div className="fcolumn_1">
                    <img src={footerLogo} alt="footer logo" className="flogo" /> <br/>
                    <img src={badges} alt="app store link" className="badges" />
                    <p>
                        Company # 490039-445, Registered with <br />
                        House of companies.
                    </p>
                </div>
                <div className="fcolumn_2">
                    <h4>Get Exclusive Deals in your inbox</h4>
                    <input className={styles.subscribe_bar} name="email" type="email" placeholder="youremail@gmail.com" />
                    <button className= {styles.subscribe_btn} type="submit">Subscribe</button>
                    <p>we wont spam, read our <a href="#" onClick="return false;">email policy</a></p>
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={tiktok} alt="Tiktok" />
                    <img src={snapchat} alt="Snapchat" />
                </div>
                <div className="fcolumn_3">
                    <h4>Legal Pages</h4>
                    <a href="#" onClick="return false;">Terms and conditions</a> <br />
                    <a href="#" onClick="return false;">Privacy</a> <br />
                    <a href="#" onClick="return false;">Cookies</a> <br />
                    <a href="#" onClick="return false;">Modern Slavery Statement</a>
                </div>
                <div className="fcolumn_4">
                    <h4>Important Links</h4>
                    <a href="#" onClick="return false;">Get help</a> <br />
                    <a href="#" onClick="return false;">Add your restaurant</a> <br />
                    <a href="#" onClick="return false;">Sign up to delivary</a> <br />
                    <a href="#" onClick="return false;">Create a bussiness account</a>
                </div>
            </footer>

        </>      
    );
    
}