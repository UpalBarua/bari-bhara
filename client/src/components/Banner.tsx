import Image from "next/image";
import image1 from "../../public/undraw_for_sale_re_egkk (1).svg";
import Lottie from "lottie-react";
import working17 from "../../public/Animation - 1701277658902.json";

const Banner = () => {
  return (
    <section>
      <div className="flex items-center  justify-center">
        <div className="max-w-5xl mx-auto flex items-center">
          <div className="flex-1 justify-center mt-28">
            <h1 className="text-4xl font-bold">Find you magic thing happen</h1>
            <h1 className="text-4xl font-bold">In BARI BARA</h1>
            <p className="mt-4 text-[18px] font-semibold">
              Bari bara is a house searching Website .Here are lot people who
              cannot find a perfact home .And in town baribara helps us to
              search home easily .
            </p>
            <div className="flex gap-4 mt-8">
              <button className="px-2 py-4 rounded-md bg-blue-400">
                Browser Property
              </button>
              <button className="px-2 py-4 rounded-md bg-orange-500">
                Get In Touch
              </button>
            </div>
            <div className="flex gap-6  mt-20">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold mb-2">1000+</h1>
                <h1 className="text-[20px] font-bold">Booking House</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold mb-2">200</h1>
                <h1 className="text-[20px] font-bold">Satisfied Client</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold mb-2">5</h1>
                <h1 className="text-[20px] font-bold ">Years Experience</h1>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image src={image1} alt="" height={500} width={500}></Image>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-end mr-32  -mt-56">
          <Lottie
            className=" w-64 lg:w-80"
            animationData={working17}
            loop={true}
          ></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Banner;
