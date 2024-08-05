import { Carousel } from "flowbite-react";

export default function crousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-[95vh] mb-10 2xl:h-96">
      <Carousel>
        <img src="https://www.nasa.gov/wp-content/uploads/2024/08/53892185959-f22436c71c-o.jpg?resize=1536,1024" alt="..." />
        <img src="https://www.nasa.gov/wp-content/uploads/2024/07/vlcsnap-2024-07-30-11h17m11s477.png?resize=1536,864" alt="..." />
        <img src="https://www.nasa.gov/wp-content/uploads/2024/07/53852596994-05949f2bca-o.jpg?resize=1536,1024" alt="..." />
        <img src="https://www.nasa.gov/wp-content/uploads/2024/08/crs21-launch-nasa-tv.png?resize=1536,848" alt="..." />
      </Carousel>
    </div>
  );
}
