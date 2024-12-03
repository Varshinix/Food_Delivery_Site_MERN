import React from 'react';
import { useNavigate } from "react-router-dom";
import { uploads } from "../../services";
import styles from "./success.module.css"
import basket from "../../assets/Basket.png"
import location from "../../assets/Location.png"
import forwardButton from "../../assets/down_btn.png"
import logo from "../../assets/site_logo.png"
import userLogo from "../../assets/User_logo.png"
import badges from "../../assets/app_store_badges.png"
import facebook from "../../assets/Facebook_icon.png"
import instagram from "../../assets/Instagram_icon.png"
import tiktok from "../../assets/TikTok_icon.png"
import snapchat from "../../assets/Snapchat_icon.png"
import successTick from "../../assets/success_tick.png"
import footerLogo from "../../assets/footer_logo.png"

export default function Success() {
  const imageUrl_rst1 = uploads("resto_1.png")
  const imageUrl_rst2 = uploads("resto_2.png")
  const imageUrl_rst3 = uploads("resto_3.png")
  const imageUrl_rst4 = uploads("resto_4.png")
  const imageUrl_rst5 = uploads("resto_5.png")
  const imageUrl_rst6 = uploads("resto_6.png")

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
            <span
              className={styles.change_loc}
              onClick={() => navigate("/address")}
            >
              Change Location
            </span>
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


      <div className={styles.centerContainer}>
        <div className={styles.greenCircle}>
          <img src={successTick} alt="tick" />
          <h4>Order Placed Successfully</h4>
          <p>
            Your order is confirmed and on its way. get set to <br />
            savour your choosen delight.
          </p>
          <div className={styles.itemsListS}>
            <span>Royal Cheese Burger</span> <br />
            <span>Potato Vegies</span> <br />
            <span>Coke Coca Cola</span> <br />
            <button
              className={styles.choosePayment}
              onClick={() => navigate("/home")}>
              Back to Home
            </button>
          </div>
        </div>
      </div>


      <div className={styles.reastaurents}>
        <h1>Popular Restaurants</h1>
      </div>
      <div className={styles.resto_imgs}>
        <span
          className={styles.restos_1}
        >
          <img src={imageUrl_rst1} alt="Restaurant 1" />
        </span>
        <span
          className={styles.restos_2}
        >
          <img src={imageUrl_rst2} alt="Restaurant 2" />
        </span>
        <span
          className={styles.restos_3}
        >
          <img src={imageUrl_rst3} alt="Restaurant 3" />
        </span>
        <span
          className={styles.restos_4}
        >
          <img src={imageUrl_rst4} alt="Restaurant 4" />
        </span>
        <span
          className={styles.restos_5}
        >
          <img src={imageUrl_rst5} alt="Restaurant 5" />
        </span>
        <span
          className={styles.restos_6}
        >
          <img src={imageUrl_rst6} alt="Restaurant 6" />
        </span>
      </div>


      <footer className={styles.footer}>
        <div className={styles.fcolumn_1}>
          <img src={footerLogo} alt="footer logo" className="flogo" /> 
          <img src={badges} alt="app store link" className="badges" />
          <p>
            Company # 490039-445, Registered with <br />
            House of companies.
          </p>
        </div>
        <div className={styles.fcolumn_2}>
          <h4>Get Exclusive Deals in your inbox</h4>
          <input className={styles.subscribe_bar} name="email" type="email" placeholder="youremail@gmail.com" />
          <button className={styles.subscribe_btn} type="submit">Subscribe</button>
          <p>we wont spam, read our <a href="#" onClick="return false;">email policy</a></p>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={tiktok} alt="Tiktok" />
          <img src={snapchat} alt="Snapchat" />
        </div>
        <div className={styles.fcolumn_3}>
          <h4>Legal Pages</h4>
          <a href="#" onClick="return false;">Terms and conditions</a> <br />
          <a href="#" onClick="return false;">Privacy</a> <br />
          <a href="#" onClick="return false;">Cookies</a> <br />
          <a href="#" onClick="return false;">Modern Slavery Statement</a>
        </div>
        <div className={styles.fcolumn_4}>
          <h4>Important Links</h4>
          <a href="#" onClick="return false;">Get help</a> <br />
          <a href="#" onClick="return false;">Add your restaurant</a> <br />
          <a href="#" onClick="return false;">Sign up to delivary</a> <br />
          <a href="#" onClick="return false;">Create a bussiness account</a>
        </div>
      </footer>
      <div className={styles.bottom_footer}>
        <div className={styles.bottom_left}>
          <p>Order.uk Copying 2024, All Rights Reserved.</p>
        </div>
        <div className={styles.bottom_right}>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>


    </>
  );
}
