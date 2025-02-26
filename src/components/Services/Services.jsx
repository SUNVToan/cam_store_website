
import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";

const ServiceDatas = [
  {
    id: 1,
    image: Fruits1,
    title: "Fresh Fruits",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias labore id reiciendis fugit!",
    aosDelay: '300'
  },
  {
    id: 2,
    image: Fruits2,
    title: "Fresh Fruits",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias labore id reiciendis fugit!",
    aosDelay: '500'
  },
  {
    id: 3,
    image: Fruits3,
    title: "Fresh Fruits",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias labore id reiciendis fugit!",
    aosDelay: '700'
  }
]

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-dark">Fresh and <span className="text-primary">Tasty fruits</span>{ " " }</h1>
        <p data-aos="fade-up" className="text-sm opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod vitae facere amet, natus omnis sapiente minus fuga quia praesentium facilis voluptas inventore ducimus. Earum, veritatis? Minus ad itaque autem?</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServiceDatas.map(({ id, image, title, subtitle, aosDelay}) => (
          <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className="p-4 text-center space-y-6">
            <img src={image} alt="" className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2" />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{ title }</h1>
              <p className="text-dark">{ subtitle }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Services;
