import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";

import { AppCarousel } from "./components/AppCarousel";

function App() {
  const images = [image1, image2, image3, image4];

  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h1 className="text-3xl font-bold">Tailwindcss Carousel</h1>
      <AppCarousel images={images} />
    </div>
  );
}

export default App;
