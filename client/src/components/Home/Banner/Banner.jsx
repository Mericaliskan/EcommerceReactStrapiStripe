import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum hic cum aspernatur, voluptatibus ullam alias ea? Quia saepe dicta ea qui. Ipsa ullam quae enim soluta, iste facere similique.</p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>

                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
