import React from "react";
import Navbar from "../Navbar/Navbar";
import Image2 from "../../Assets/Image2.png";
import Image3 from "../../Assets/Image3.png";
import Image4 from "../../Assets/Image4.png";
import Image5 from "../../Assets/Image5.png";
import Image6 from "../../Assets/Image6.png";
import Image7 from "../../Assets/Image7.png";
import Image8 from "../../Assets/Image8.png";
import Image9 from "../../Assets/Image9.png";
import Image10 from "../../Assets/Image10.png";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div>

        {/* FIRST SECTION */}
        <section className="relative mb-8">
          {/* Image */}
          <img
            src="https://tinyurl.com/zwsnhjc6"
            className="h-[80vh] w-full object-cover"
          />

          {/* Text and Button (Positioned on the left side of the image) */}
          <div className="absolute top-1/2 left-8 space-y-2">
            <h1 className="text-[4rem] font-bold text-white">
              EXCLUSIVE <br /> LINGERIES ONLY!!!
            </h1>
            <p className="text-lg text-white">
              At [Product Name], we give only the best.
            </p>
            <button
              type="submit"
              className="rounded-md text-white bg-[#BB66E6] w-[13rem] h-[3rem] font-semibold"
            >
              Button
            </button>
          </div>
        </section>

        {/* SECOND SECTION */}
        <section className="mb-[3rem]">
          <div>
            <h4 className="text-[2rem] mb-[4rem] text-center">
              Norem Ipsum dolor sit amet consecturer
            </h4>
            <div className="flex justify-between h-[30vh] w-[50vw] ml-[12rem] gap-x-[2rem]">
              {/* Correct usage of Image2 */}
              <img src={Image2} alt="Second Section Image" />
              <img src={Image2} alt="Second Section Image" />
            </div>
          </div>
        </section>

        {/* THIRD SECTION */}

        <section className="mb-[3rem]">
          <div>
            <h5 className="text-center text-[3rem] mb-[4rem]">Dorem</h5>

            {/* Center the container and create a 2-column grid */}
            <div className="grid grid-cols-2 gap-4 w-[80vw] mx-auto">
              <div>
                {/* Adjust image size */}
                <img
                  src={Image7}
                  alt="First slide"
                  className="w-full h-auto object-cover mb-8"
                />
                <h5>FAST SHIPPING</h5>
                <p>
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque.
                </p>
              </div>

              <div>
                <img
                  src={Image9}
                  alt="Second slide"
                  className="w-full h-auto object-cover"
                />
                <h2>BOVEDA</h2>
                <p>Every Item, all the time</p>
                <h5>TOREM</h5>
                <p>
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque.
                </p>
              </div>
              <div>
                <img
                  src={Image10}
                  alt="Third slide"
                  className="w-full h-auto object-cover"
                />
                <h5>FAST SHIPPING</h5>
                <p>
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque.
                </p>
              </div>
              <div>
                <img
                  src={Image8}
                  alt="Fourth slide"
                  className="w-full h-auto object-cover"
                />
                <h5>KOREM</h5>
                <p>
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOURTH SECTION */}

        <section className="mb-[3rem]">
          <div>
            <h3 className="text-center text-[3rem] mb-[4rem]">
              RELATED PRODUCTS
            </h3>

            <div className="grid grid-cols-4 gap-6 w-[70vw] mx-auto">
              <img src="https://tinyurl.com/3tnspayy" />
              <img src="https://tinyurl.com/mpe8jhr3" />
              <img src="https://tinyurl.com/mpe8jhr3" />
              <img src="https://tinyurl.com/mpe8jhr3" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
