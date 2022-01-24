import { useEffect, useState } from "react";
import { AppImage } from "./AppImage";
import { AppCarouselIndexer } from "./AppCarouselIndexer";
import { AppCarouselButton } from "./AppCarouselButton";

export const AppCarousel = ({ images }: { images: any[] }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (selected < 0) {
      setSelected(0);
    }
    if (selected > images.length - 1) {
      setSelected(images.length - 1);
    }
  }, [selected, images.length]);

  return (
    <div className="w-96 h-72 relative overflow-hidden shadow">
      {images.map((image, i) => (
        <AppImage
          key={`image-${i}`}
          image={image}
          index={i}
          selected={selected}
        />
      ))}
      <AppCarouselIndexer selected={selected} imagesLenght={images.length} />
      {selected > 0 && (
        <AppCarouselButton
          direction="left"
          onClick={() => setSelected(selected - 1)}
        />
      )}
      {selected < images.length - 1 && (
        <AppCarouselButton
          direction="right"
          onClick={() => setSelected(selected + 1)}
        />
      )}
    </div>
  );
};
