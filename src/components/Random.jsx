import TailwindLogo from "../assets/TailwindLogo";
import CodeLink from "../ComponentHelpers/CodeLink";

function Random() {
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
          <div className="mx-auto my-8 ">
            <div className="mx-auto flex flex-col items-center justify-center gap-3">
              <div className="w-[200px] h-2 bg-white rounded-md">
                <div className="w-1/2 bg-slate-800 h-full rounded-md"></div>
              </div>
              <span className="text-slate-800">50%</span>
            </div>
          </div>
          <CodeLink path={"/random/bar-progress"}>Code</CodeLink>
        </div>
      </div>
    </section>
  );
}

export default Random;
