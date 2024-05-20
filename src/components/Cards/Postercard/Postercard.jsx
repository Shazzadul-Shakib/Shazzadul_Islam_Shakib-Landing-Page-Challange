const Postercard = ({ image, height,title,sale }) => {
  return (
    <main
      className={`relative w-[330px] md:w-[460px] h-[${height}px] rounded overflow-hidden`}
    //   style={{ height: `${height}px` }}
    >
      <img
        className={`w-full h-full object-cover h-[${height}px]`}
        src={image}
        alt="Poster Image"
        // style={{ height: `${height}px` }}
      />
      <section className="flex justify-center">
        <div className="absolute z-10 bottom-12 h-[120px] w-[230px] md:h-[160px] md:w-[300px] rounded bg-txtL1 flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="text-xl font-bold text-txtD1">{title}</h2>
            <p className="text-xs text-txtD2">{sale}</p>
          </div>
          <button className="px-8 py-2 bg-txtD1 text-txtL1 text-xs font-bold rounded mt-6">
            Buy Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Postercard;
