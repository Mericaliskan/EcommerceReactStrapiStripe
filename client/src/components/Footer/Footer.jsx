import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, adipisci. Temporibus ipsa doloribus id repudiandae, accusamus facilis est fugiat rerum quas molestiae similique ipsum asperiores sapiente perferendis adipisci labore blanditiis.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                    İkitelli OSB Mah. YTÜ İkitelli Teknopark Sk. No:1 Başakşehir – İstanbul/Türkiye
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                    Phone: 0534 635 55 55
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                    Email: meristore@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    MERISTORE 2023 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
