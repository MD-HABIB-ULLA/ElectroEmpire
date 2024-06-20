import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "10px", zIndex: 1 }} // Customize the left position
        onClick={onClick}
      >
        ◀
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "10px", zIndex: 1 }} // Customize the right position
        onClick={onClick}
      >
        ▶
      </div>
    );
  };
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className=" pt-5 container m-auto ">
      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-5 ">
        <div className="md:col-span-3">
          <div className="slider-container h-full ">
            <Slider {...settings} className="h-full ">
              <div className="h-full bg-gray-700">
                <img
                  src="https://promotions.newegg.com/msi/24-0409/1920x660_sm.jpg"
                  alt=""
                  className="rounded-lg md:min-h-screen object-cover "
                />
              </div>
              <div>
                <img
                  src="https://promotions.newegg.com/lenovo/24-0237/1920x660_sm.jpg"
                  alt=""
                  className="rounded-lg md:min-h-screen object-cover"
                />
              </div>
              <div>
                <img
                  src="https://promotions.newegg.com/abs/24-0139/1920x660_sm.jpg"
                  alt=""
                  className="rounded-lg md:min-h-screen object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="flex flex-col justify-evenly w-full gap-5 m-auto  ">
          {" "}
          <div className="">
            <img
              src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/banner-campaign-51-1-1.png"
              alt=""
              className="rounded-lg "
            />
          </div>
          <div>
            <img
              src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/banner-campaign-61-1.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/banner-campaign-51-1-1.png"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Banner;
