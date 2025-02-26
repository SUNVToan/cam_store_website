import AppStoreImg from "../../assets/website/app_store.png"
import BannerImg from "../../assets/website/banner.jpg"
import PlayStoreImg from "../../assets/website/play_store.png"

const bannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  with: "100%",
  height: "100%"
}

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div data-aos="fade-up" style={bannerStyle} className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
        <div>
          <div className="space-y-6 max-w-lg mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold">Download the app</h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-center sm:px-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolore nesciunt fugit veniam dolor.</p>
            {/* image link */}
            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center items-center">
              <a href=""><img src={AppStoreImg} alt="Not Found" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] mx-2 " /></a>
              <a href=""><img src={PlayStoreImg} alt="Not Found" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] mx-2 " /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AppBanner;
