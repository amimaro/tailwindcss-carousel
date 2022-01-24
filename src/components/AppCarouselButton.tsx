const chevronLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const AppCarouselButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: any;
}) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? " left-5" : "right-5"
      }`}
    >
      <button
        className="p-1 rounded-full bg-white shadow"
        onClick={() => onClick()}
      >
        {direction === "left" ? chevronLeft : chevronRight}
      </button>
    </div>
  );
};
