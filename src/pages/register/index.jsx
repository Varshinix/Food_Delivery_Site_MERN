import { useState } from "react";
import { Link } from 'react-router-dom';
import { uploads } from "../../services";
import React from 'react';
import styles from "./register.module.css";
import toast from "react-hot-toast";
import { register } from "../../services";
import logo from "../../assets/site_logo.png";
import badges from "../../assets/app_store_badges.png";
import facebook from "../../assets/Facebook_icon.png";
import instagram from "../../assets/Instagram_icon.png";
import tiktok from "../../assets/TikTok_icon.png";
import snapchat from "../../assets/Snapchat_icon.png";
import footerLogo from "../../assets/footer_logo.png";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: null,
        phone: null,
        email: null,
        password: null,
    });

    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        let errors = false;
        setFormErrors({ name: null, phone: null, email: null, password: null });

        if (!formData.name || formData.name.length === 0) {
            setFormErrors(prev => ({ ...prev, name: "Name is required" }));
            errors = true;
        }
        if (!formData.phone || formData.phone.length !== 10) {
            setFormErrors(prev => ({ ...prev, phone: "Phone number is invalid" }));
            errors = true;
        }
        if (!formData.email || formData.email.length < 1 || !formData.email.includes("@") || !formData.email.includes(".")) {
            setFormErrors(prev => ({ ...prev, email: "Email is invalid" }));
            errors = true;
        }
        if (!formData.password || formData.password.length < 8) {
            setFormErrors(prev => ({ ...prev, password: "Password is required" }));
            errors = true;
        }
        if (errors) {
            return;
        }

        try {
            setLoading(true);
            const response = await register(formData);
            toast.success(response.message);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const imageUrl = uploads("login_image.png");

    return (
        <div>
            <header>
                <img src={logo} alt="Main Logo" />
                <h1>Welcome</h1>
                <p>
                    Today is a new day. It's your day. You shape it. <br />
                    Sign in to start ordering.
                </p>
            </header>
            <form className={styles.form} onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input id="name" value={formData.name} type="text" placeholder="eg. Jhon A" onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })} />
                {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}

                <label htmlFor="phone">Phone</label>
                <input id="phone" value={formData.phone} type="text" placeholder="Enter your 10 digit mobile number" onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })} />
                {formErrors.phone && <p className={styles.error}>{formErrors.phone}</p>}

                <label htmlFor="email">Email</label>
                <input id="email" value={formData.email} type="text" placeholder="Example@email.com" onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })} />
                {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}

                <label htmlFor="password">Password</label>
                <input id="password" value={formData.password} type="password" placeholder="At least 8 characters" onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })} />
                {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}

                <button disabled={loading} type="submit">{loading ? "Loading.." : "Sign Up"}</button>
                <p>Already have an account? <Link to="/login" style={{ color: "orange" }}>Sign in</Link></p>
            </form>

            <div className={styles.rightside}>
                <img src={imageUrl} alt="Login image" className={styles.login_image_1} />
            </div>

            <footer className={styles.footer}>
                <div className={styles.fcolumn_1}>
                    <img src={footerLogo} alt="footer logo" className={styles.flogo} /> <br />
                    <img src={badges} alt="app store link" className={styles.badges} /> <br /> <br />
                    <p>
                        Company # 490039-445, Registered with <br />
                        House of companies.
                    </p>
                </div>
                <div className={styles.fcolumn_2}>
                    <h4>Get Exclusive Deals in your inbox</h4> <br />
                    <input className={styles.subscribe_bar} name="email" type="email" placeholder="youremail@gmail.com" />
                    <button className={styles.subscribe_btn} type="submit">Subscribe</button> <br /> <br />
                    <p>We won't spam, read our <a href="#" onClick={() => false}>email policy</a></p>
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={tiktok} alt="Tiktok" />
                    <img src={snapchat} alt="Snapchat" />
                </div>
                <div className={styles.fcolumn_3}>
                    <h4>Legal Pages</h4> <br />
                    <a href="#" onClick={() => false}>Terms and conditions</a> <br /> <br />
                    <a href="#" onClick={() => false}>Privacy</a> <br /> <br />
                    <a href="#" onClick={() => false}>Cookies</a> <br /> <br />
                    <a href="#" onClick={() => false}>Modern Slavery Statement</a>
                </div>
                <div className={styles.fcolumn_4}>
                    <h4>Important Links</h4> <br />
                    <a href="#" onClick={() => false}>Get help</a> <br /> <br />
                    <a href="#" onClick={() => false}>Add your restaurant</a> <br /> <br />
                    <a href="#" onClick={() => false}>Sign up to delivery</a> <br /> <br />
                    <a href="#" onClick={() => false}>Create a business account</a>
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
        </div>
    );
}
