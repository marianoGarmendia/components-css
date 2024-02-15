function Cards() {
  return (
    <section className="flex flex-col">
      <header className="flex mb-7">
        <h3>Cards Free</h3>
      </header>
      <div
        className="p-2 rounded-md"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill , minmax(200px, 1fr))",
        }}
      >
        <div>
          <div className="p-6 rounded-md bg-lightGrayItem">
            <article className=" bg-slate-50  rounded-md text-gray-950 ">
              <h3 className="border-b-1 text-center p-2 border-gray-800">
                Products
              </h3>
              <ul>
                <li className="m-2 p-2 hover:bg-lightGrayItem hover:cursor-pointer  ease-in-out transition-all duration-500  rounded-md">
                  Product one
                </li>
                <li>Product two</li>
                <li>Product three</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
