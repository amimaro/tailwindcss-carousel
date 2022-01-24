export const AppImage = ({
  image,
  index,
  selected,
}: {
  image: any;
  index: number;
  selected: number;
}) => {
  return (
    <div
      className={`flex absolute w-full h-full ${
        selected === index
          ? "left-0"
          : selected > index
          ? "-left-full"
          : "left-full"
      }`}
      style={{ transition: "left .25s" }}
    >
      <img
        src={image}
        alt="carousel"
        className="mx-auto w-96 h-72 object-cover"
      />
    </div>
  );
};
