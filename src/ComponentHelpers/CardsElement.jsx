function CardsElement(card) {
  return (
    <div
      className="flex justify-center items-center p-4 min-h-full rounded-md bg-lightGrayItem"
      dangerouslySetInnerHTML={{ __html: card }}
    ></div>
  );
}

export default CardsElement;
