const Banner = () => {
  return (
    <section className="container mx-auto md:px-44 grid md:grid-cols-2 mt-20 mb-20">
      <div className="content-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Get Daily Things in same{" "}
          <span className="text-gray-400">Platform</span>
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img
            src="/images/hero-1.png"
            alt="Hero 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-rows-2">
          <div>
            <img
              src="/images/hero-2.png"
              alt="Hero 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/hero-3.png"
              alt="Hero 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
