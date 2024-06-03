import TailwindLogo from "../assets/TailwindLogo";
import CodeLink from "../ComponentHelpers/CodeLink";

function Buttons() {
  return (
    <section className="flex flex-col">
      <header className="flex mb-7 gap-4">
        <h3>Buttons Free</h3>
        <TailwindLogo />
      </header>
      <div
        className="p-2 rounded-md w-full gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit , minmax(250px, 1fr))", // CUANDO HAYA MAS CARDS PONER AUTO-FIT
        }}
      >
        <div className="flex justify-center items-center rounded-md bg-lightGrayItem relative">
          <div className="m-auto my-8">
            {" "}
            <button className="bg-red-500 p-4 rounded-md hover:scale-105 group transition-all duration-150 relative overflow-hidden flex active:scale-100 ">
              <div className="absolute rounded-full bg-blue-600 w-48 h-48 scale-0 group-hover:scale-150  transition-all duration-500  ease-in-out group-hover:-translate-x-5   "></div>
              <p className="z-10">Hover me!</p>
            </button>{" "}
          </div>
          <CodeLink path={"/buttons/button-one"}>Code</CodeLink>
        </div>
        <div className="flex justify-center items-center rounded-md bg-lightGrayItem relative">
          <div className="m-auto my-8">
            <button className="rounded-full bg-lightGray p-2 relative overflow-hidden group flex active:scale-95 ">
              <svg
                className="z-10 hover:fill-green-500 transition-all duration-200 ease-in-out group-focus:fill-green-500"
                fill="#eee"
                height="30px"
                width="30px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 198.715 198.715"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M161.463,48.763c-2.929-2.929-7.677-2.929-10.607,0c-2.929,2.929-2.929,7.677,0,10.606
		c13.763,13.763,21.342,32.062,21.342,51.526c0,19.463-7.579,37.761-21.342,51.523c-14.203,14.204-32.857,21.305-51.516,21.303
		c-18.659-0.001-37.322-7.104-51.527-21.309c-28.405-28.405-28.402-74.625,0.005-103.032c2.929-2.929,2.929-7.678,0-10.606
		c-2.929-2.929-7.677-2.929-10.607,0C2.956,83.029,2.953,138.766,37.206,173.019c17.132,17.132,39.632,25.697,62.135,25.696
		c22.497-0.001,44.997-8.564,62.123-25.69c16.595-16.594,25.734-38.659,25.734-62.129C187.199,87.425,178.059,65.359,161.463,48.763
		z"
                  />
                  <path
                    d="M99.332,97.164c4.143,0,7.5-3.358,7.5-7.5V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.164
		C91.832,93.807,95.189,97.164,99.332,97.164z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <CodeLink path={"/buttons/button-two"}>Code</CodeLink>
        </div>
        <div className="flex justify-center items-center rounded-md bg-lightGrayItem relative">
          <div className="m-auto my-8">
            {" "}
            <button className="bg-gray-700 text-white p-4 rounded-md hover:scale-105 group transition-all duration-150 relative overflow-hidden flex active:scale-100 ">
              <div className="absolute rounded-full bg-red-500 w-48 h-48 scale-0 group-hover:scale-150  transition-all duration-500  ease-in-out group-hover:-translate-x-5   "></div>
              <p className="z-10">Hover me!</p>
            </button>
          </div>
          <CodeLink path={"/buttons/button-three"}>Code</CodeLink>
        </div>
      </div>
    </section>
  );
}

export default Buttons;
