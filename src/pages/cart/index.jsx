


import React, { useEffect, useState, useRef } from "react";
import { fetchMenuItems } from "../../services/index"
{/*import { addCart } from "../../services/index"; 
import { removeCartItem } from "../../services/index";
import { fetchCart } from "../../services/index"; */}
import { uploads } from "../../services";
import styles from "./cart.module.css"
import basket from "../../assets/Basket.png"
import location from "../../assets/Location.png"
import forwardButton from "../../assets/down_btn.png"
import logo from "../../assets/site_logo.png"
import userLogo from "../../assets/User_logo.png"
import bike from "../../assets/Motocross.png"
import checklist from "../../assets/order_done.png"
import searchIcon from "../../assets/search.png"
import delivary from "../../assets/delivery_og.png"
import contact from "../../assets/contact.png"
import opTime from "../../assets/time.png"
import rating from "../../assets/rating.png"
import McDonaldsMap from "../../components/McDonaldsMap";
import badges from "../../assets/app_store_badges.png"
import facebook from "../../assets/Facebook_icon.png"
import instagram from "../../assets/Instagram_icon.png"
import tiktok from "../../assets/TikTok_icon.png"
import snapchat from "../../assets/Snapchat_icon.png"
import footerLogo from "../../assets/footer_logo.png"
import share from "../../assets/share_icon.png"
import deleteImg from "../../assets/delete.png"
import arrowDown from "../../assets/down_arrow.png"
import greenArw from "../../assets/right_a_green.png"
import whiteArw from "../../assets/right_a_white.png"
import cuteScooter from "../../assets/scooter.png"
import newStore from "../../assets/store.png" 




export default function Cart() {

    const imageUrl_prodMain = uploads("product_main.png")
    const imageUrl_dsct_1 = uploads("discount_1.png")
    const imageUrl_dsct_2 = uploads("discount_2.png")
    const imageUrl_dsct_3 = uploads("discount_3.png")
    const imageUrl_reviews = uploads("reviews.png")
    const imageUrl_lftScroll = uploads("left_scroll.png")
    const imageUrl_rgtScroll = uploads("right_scroll.png")
    const imageUrl_rst1 = uploads("resto_1.png")
    const imageUrl_rst2 = uploads("resto_2.png")
    const imageUrl_rst3 = uploads("resto_3.png")
    const imageUrl_rst4 = uploads("resto_4.png")
    const imageUrl_rst5 = uploads("resto_5.png")
    const imageUrl_rst6 = uploads("resto_6.png")


    const [menu, setMenu] = useState([]);
    {/*const [cart, setCart] = useState([]); */}
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const scrollContainerRef = useRef(null);

    // menue data be
    useEffect(() => {
        const getMenu = async () => {
            try {
                const data = await fetchMenuItems();
                setMenu(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        getMenu();
    }, []); 


    // Fetch menu items 2nd time
   {/* useEffect(() => {
        const loadMenuItems = async () => {
            try {
                const data = await fetchMenuItems(); // Use the service function
                setMenu(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        loadMenuItems();
    }, []);

    // Fetch cart items
    useEffect(() => {
        const loadCart = async () => {
            try {
                const cartData = await fetchCart();
                setCart(cartData.items);
            } catch (err) {
                console.error(err.message);
            }
        };
        loadCart();
    }, []);

    const handleAddToCart = async (item) => {
        try {
            const updatedCart = await addCart(item._id);
            setCart(updatedCart.items);
        } catch (error) {
            console.error('Error adding item to cart:', error.message);
        }
    };

    const handleRemoveFromCart = async (itemId) => {
        try {
            const updatedCart = await removeCartItem(itemId);
            setCart(updatedCart.items);
        } catch (error) {
            console.error('Error removing item from cart:', error.message);
        }
    }; */}


    if (loading) {
        return <div>Loading menu...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    const scrollHandler = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.querySelector(`.${styles.reviewImg}`).offsetWidth + 20; // Scroll by the visible container's width
        if (direction === "right") {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        } else if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };



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


            <div className={styles.product_bg} style={{ backgroundImage: `url(${imageUrl_prodMain})` }}>
                <div className={styles.prd_content}>
                    <p>I'm loving it!</p>
                    <h1>McDonal's South Indian </h1>
                    <div className={styles.prd_tags}>
                        <div className={styles.prd_tag_1}>
                            <img src={checklist} alt="motor bike logo" />
                            <p>Minimum Order:20 Rs</p>

                        </div>
                        <div className={styles.prd_tag_2}>
                            <img src={bike} alt="checklist image" />
                            <p>Delivery in 20-25 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.offers}>
                <h1>All offers from McDonald's South India</h1>
                <div className={styles.search_bar}>
                    <img src={searchIcon} alt="search icon" className={styles.search_icon} />
                    <input type="text" placeholder="Search from menue..." className={styles.search_msg} />
                </div>
            </div>


            <div className={styles.offers_tag}>
                <span>offers</span>
                <p>Burgers</p>
                <p>Fries</p>
                <p>Snacks</p>
                <p>Salads</p>
                <p>Cold drinks</p>
                <p>Happy Meal®</p>
                <p>Dessets</p>
                <p>Hot Drinks</p>
                <p>Sauces</p>
                <p>Orbit®</p>
            </div>


            {/* Cart Section */}
            {/* Cart Section */}
           {/* <div className={styles.cartSection}>
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((cartItem) => (
                        <div key={cartItem.itemId} className={styles.cartItem}>
                            <div>
                                <h3>{cartItem.name}</h3>
                                <p>Quantity: {cartItem.quantity}</p>
                                <p>Total: ₹{cartItem.quantity * cartItem.price}</p>
                            </div>
                            <button
                                className={styles.removeButton}
                                onClick={() => handleRemoveFromCart(cartItem.itemId)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div> */}
        


            <div className={styles.Basket}>
                <button className={styles.share_icon_btn}>
                    <img src={share} alt="share icon" className={styles.shareSymbol} />
                    <p>Share this cart <br /> with your friends</p>
                    <span className={styles.shareLink}>Copy Link</span>
                </button>
                <div className={styles.cartContainer}>
                    <div className={styles.basketHeading}>
                        <img src={basket} alt="basket icon" />
                        <span>My Basket</span>
                    </div>
                    <div className={styles.greyBox}>
                        <div className={styles.basketItems}>
                            <span>1X</span>
                            <div className={styles.itemGap}>
                                <p>₹120</p>
                                <h5>Royal Cheese Burger</h5>
                                <p>eith extra fries</p>

                            </div>
                            <img src={deleteImg} alt="delete logo" />
                        </div>
                        <hr />
                        <div className={styles.amount}>
                            <div className={styles.lineitem}>
                                <h4>Sub Total:</h4>
                                <span>₹120</span>
                            </div>
                            <div className={styles.lineitem}>
                                <h4>Discounts:</h4>
                                <span>-₹3.00</span>
                            </div>
                            <div className={styles.lineitem}>
                                <h4>Delivery Fee:</h4>
                                <span>₹3.00</span>
                            </div>

                        </div>
                        <hr />
                        <div className={styles.totalAmt}>
                            <div className={styles.totalItem}>
                                <p>Total to pay</p>
                                <h2>₹120.00</h2>
                            </div>

                            <div className={styles.freeItem}>
                                <span>Choose your free item</span>
                                <img src={arrowDown} alt="button down" />
                            </div>
                            <div className={styles.freeItem2}>
                                <span>Apply Coupon Code here</span>
                                <img src={greenArw} alt="Right arrow logo" />
                            </div>
                        </div>
                        <div className={styles.timingBruh}>
                            <div className={styles.deliveryTimes}>
                                <img src={cuteScooter} alt="scooty icon" />
                                <span>Delivery</span>
                                <p>Starts at 17:50</p>
                            </div>
                            <div class={styles.verticalLine}>|</div>
                            <div className={styles.storeTimes}>
                                <img src={newStore} alt="store icon" />
                                <span>Collection</span>
                                <p>Starts at !6:50</p>
                            </div>
                
                        </div>
                        <button className={styles.checkoutBtn}>
                            <img src={whiteArw} alt="arrow logo" />
                            <span>Checkout!</span>
                        </button>
                    </div>

                </div>
            </div> 


            <div className={styles.discounts_img}>
                <img src={imageUrl_dsct_1} alt="Discount pic 1" />
                <img src={imageUrl_dsct_2} alt="Discount pic 2" />
                <img src={imageUrl_dsct_3} alt="Discount pic 3" className={styles.discount_3} />
            </div>



            <div className={styles.menuSection}>
                {menu.map((category) => (
                    <div key={category.category} className={styles.menuCategory}>
                        <h1>{category.category}</h1>
                        <div className={styles.items}>
                            {/*{category.items.map((item, index) => (
                                <div key={index} className={styles.menuItem}> */}
                            {category.items.map((item) => (
                                <div key={item._id} className={styles.menuItem}>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p>Price: ₹{item.price}</p>
                                    </div>
                                    <span
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        <img src={item.image} alt={item.name} className={styles.itemImage} />
                                    </span>

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>



            <div className={styles.infos}>
                <div className={styles.delivary_info}>
                    <div className={styles.heading_1}>
                        <img src={delivary} alt="location logo" />
                        <h1>Delivery information</h1>
                    </div>
                    <p>
                        <span>Monday:</span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Tuesday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Wednesday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Thursday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Friday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Saturday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Sunday:</span>8:00 AM–12:00 AM
                    </p>
                    <p>
                        <span>Estimated time until delivery: </span>20 min:
                    </p>
                </div>
                <div className={styles.contact_info}>
                    <div className={styles.heading_2}>
                        <img src={contact} alt="contact logo" />
                        <h1>Contact information</h1>
                    </div>
                    <p>
                        If you have allergies or other dietary <br />
                        restrictions, please contact the restaurant. The <br />
                        restaurant will provide food-specific <br />
                        information upon request.
                    </p>
                    <span>Phone number</span>
                    <p className={styles.p_1}>+934443-43</p>
                    <span>Website</span>
                    <p className={styles.p_2}>http://mcdonalds.uk/</p>
                </div>
                <div className={styles.operational}>
                    <div className={styles.heading_3}>
                        <img src={opTime} alt="time logo" />
                        <h1>Delivery information</h1>
                    </div>
                    <p>
                        <span>Monday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Tuesday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Wednesday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Thursday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Friday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Saturday:</span>8:00 AM–3:00 AM
                    </p>
                    <p>
                        <span>Sunday:</span>8:00 AM–3:00 AM
                    </p>
                </div>
            </div>

            <div className={styles.mcd_map}>
                <h1>Mcd</h1>
                <McDonaldsMap />
            </div>

            <div className={styles.reviewsSection}>
                <div className={styles.reviewsHeading}>
                    <h1>Customer Reviews</h1>
                    <div className={styles.scrollImgs}>
                        <img
                            src={imageUrl_lftScroll}
                            alt="scroll left"
                            onClick={() => scrollHandler("left")}
                            className={styles.scrollButton}
                        />
                        <img
                            src={imageUrl_rgtScroll}
                            alt="scroll right"
                            onClick={() => scrollHandler("right")}
                            className={styles.scrollButton}
                        />
                    </div>
                </div>
                <div className={styles.reviewContainer} ref={scrollContainerRef}>
                    <img src={imageUrl_reviews} alt="review 1" className={styles.reviewImg} />
                    <img src={imageUrl_reviews} alt="review 2" className={styles.reviewImg} />
                    <img src={imageUrl_reviews} alt="review 3" className={styles.reviewImg} />
                    <img src={imageUrl_reviews} alt="review 4" className={styles.reviewImg} />
                    <img src={imageUrl_reviews} alt="review 5" className={styles.reviewImg} />
                </div>
                <div className={styles.ratingStars}>
                    <img src={rating} alt="ratings" />
                </div>

            </div>


            <div className={styles.reastaurents}>
                <h1>Popular Restaurants</h1>
            </div>
            <div className={styles.resto_imgs}>
                <span className={styles.restos_1} >
                    <img src={imageUrl_rst1} alt="Restaurant 1" />
                </span>
                <span className={styles.restos_2} >
                    <img src={imageUrl_rst2} alt="Restaurant 2" />
                </span>
                <span className={styles.restos_3} >
                    <img src={imageUrl_rst3} alt="Restaurant 3" />
                </span>
                <span className={styles.restos_4} >
                    <img src={imageUrl_rst4} alt="Restaurant 4" />
                </span>
                <span className={styles.restos_5}>
                    <img src={imageUrl_rst5} alt="Restaurant 5" />
                </span>
                <span className={styles.restos_6}>
                    <img src={imageUrl_rst6} alt="Restaurant 6" />
                </span>
            </div>


            <footer className={styles.footer}>
                <div className="fcolumn_1">
                    <img src={footerLogo} alt="footer logo" className="flogo" /> <br />
                    <img src={badges} alt="app store link" className="badges" />
                    <p>
                        Company # 490039-445, Registered with <br />
                        House of companies.
                    </p>
                </div>
                <div className="fcolumn_2">
                    <h4>Get Exclusive Deals in your inbox</h4>
                    <input className={styles.subscribe_bar} name="email" type="email" placeholder="youremail@gmail.com" />
                    <button className={styles.subscribe_btn} type="submit">Subscribe</button>
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