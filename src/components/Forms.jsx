import TailwindLogo from "../assets/TailwindLogo";
import CodeLink from "../ComponentHelpers/CodeLink";

function Forms() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col">
      <header className="flex mb-7 gap-4">
        <h3>Forms free</h3>
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
            {/* aca va el elemento a poner */}
            <form
              className="flex flex-col justify-center items-center bg-lightGray rounded-md p-4 "
              onSubmit={(e) => handleSubmit(e)}
            >
              <h3 className="text-2xl mb-4 ">
                Title <span className="text-yellow-400">App</span>
              </h3>
              <h4 className="text-[#eee] mb-4">Registrate</h4>
              <input
                className="p-2 rounded-md border border-[#171717] mb-4 focus:outline-none focus:ring-1 focus:ring-yellow-400 border-none bg-lightGrayPlus"
                type="text"
                name=""
                id=""
                placeholder="Tu nombre aqui..."
              />
              <input
                className="p-2 rounded-md border border-[#171717] mb-4 focus:outline-none focus:ring-1 focus:ring-yellow-400 border-none bg-lightGrayPlus"
                type="text"
                name=""
                id=""
                placeholder="Apellido..."
              />
              <input
                className="p-2 rounded-md border border-[#171717] mb-4 focus:outline-none focus:ring-1 focus:ring-yellow-400 border-none bg-lightGrayPlus"
                type="email"
                name=""
                id=""
                placeholder="correo@correo..."
              />
              <div className="flex gap-1 mb-8">
                <label className="text-xs">
                  Acepto los terminos y condiciones
                </label>
                <input type="checkbox" />
              </div>
              <button className="bg-yellow-400 text-[#171717] font-bold p-2 w-full rounded-md hover:bg-yellow-300 active:scale-95 transition-all ease-in-out duration-300">
                Enviar
              </button>
            </form>
          </div>
          <CodeLink path={"/forms/form-one"}>Code</CodeLink>
        </div>
        <div className="flex justify-center items-center rounded-md bg-lightGrayItem relative">
          <div className="m-auto my-8">
            <form className="flex justify-center flex-col items-center bg-[#171717] px-6 rounded-md">
              <div className="my-4 flex justify-center flex-col items-center">
                <h2 className="text-xl font-bold my-4 text-indigo-600">
                  Crear workout
                </h2>
                <select
                  className="bg-[#212121] p-2 my-2 rounded-md shadow-md"
                  name="crearWod"
                  id=""
                >
                  <option value="crossfit">Crossfit</option>
                  <option value="functional">Functional</option>
                  <option value="high">High Intensity</option>
                  <option value="woman">Woman Strong</option>
                  <option value="intense">Intense Functional</option>
                  <option value="power">Power Woman</option>
                  <option value="full">Full Body</option>
                </select>
                <input
                  type="date"
                  className="rounded-md w-full text-[#17171780] p-1"
                  placeholder="Fecha..."
                />
              </div>
              <textarea
                placeholder="Ej: Amrap 18'..."
                className="text-black p-4 rounded-md"
                type="text"
                id=""
                cols="20"
                rows="5"
              ></textarea>
              <button className="my-4 font-semibold tracking-wide focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md  hover:scale-105 ease-in-out duration-200 cursor-pointer bg-[#212121] m-2 w-full">
                Enviar
              </button>
            </form>
          </div>
          <CodeLink path={"/forms/form-two"}>Code</CodeLink>
        </div>
      </div>
    </section>
  );
}

export default Forms;
