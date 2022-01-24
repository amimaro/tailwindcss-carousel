export const AppCarouselIndexer = ({
  selected,
  imagesLenght,
}: {
  selected: number;
  imagesLenght: number;
}) => {
  return (
    <div className="absolute top-4 right-3">
      <div className="bg-gray-600 rounded-full px-2 py-0 text-white text-xs bg-opacity-50">
        {selected + 1}/{imagesLenght}
      </div>
    </div>
  );
};
