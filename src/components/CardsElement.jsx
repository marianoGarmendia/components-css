function CardsElement(card) {
  return (
    <div
      className="flex justify-center items-center p-4 h-3/4  rounded-md bg-lightGrayItem"
      dangerouslySetInnerHTML={{ __html: card }}
    ></div>
  );
}

export default CardsElement;
