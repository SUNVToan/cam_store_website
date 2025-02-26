import WorldMap from "../../assets/world-map.png"

const WhereToBuy = () => {
  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* text content section */}
        <div data-aos="zoom-in" className="col-span-1 space-y-8">
          <h1 className="text-4xl font-bold font-serif text-dark">Where to buy our product?</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Country" className="input-style w-full lg:w-[120px]" />
            <input type="text" placeholder="ZipCode" className="input-style w-full" />
          </div>
          <button className="primary-btn">Search</button>
        </div>
        {/* map section */}
        <div data-aos="zoom-in" className="col-span-2">
          <img src={WorldMap} alt="Not Found" className="w-full sm:w-[500px] mx-auto"/>
        </div>
      </div>
    </div>
  )
};

export default WhereToBuy;
