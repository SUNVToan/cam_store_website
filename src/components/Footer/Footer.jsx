import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company section */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h1 className="text-4xl font-bold">Orange Mint</h1>
            <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in rerum tempora dolor quasi ipsum doloremque a praesentium vitae modi. Non et accusamus iure doloremque harum quidem dicta officia ad.</p>
          </div>
          {/* navlink section */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-4xl font-bold">Quick link</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column */}
              <div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Search Fruits</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
              {/* second column */}
              <div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Search Fruits</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* social link section */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h1 className="text-4xl font-bold">Follow Us</h1>
            <div>
              <p>+84 931336740</p>
              <p>Binh Chanh, TP Ho Chi Minh</p>
            </div>
            <div className="flex items-center gap-4">
              <a href=""><FaFacebook className="text-3xl hover:scale-105 duration-300" /></a>
              <a href=""><FaGoogle className="text-3xl hover:scale-105 duration-300" /></a>
              <a href=""><FaInstagram className="text-3xl hover:scale-105 duration-300" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
