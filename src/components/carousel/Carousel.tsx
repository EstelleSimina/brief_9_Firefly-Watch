// affiche une liste horizontal de films ou séries
import Card from "../card/Card";
import "./Carousel.css";

interface CarouselProps<T> {
  title: string;
  items: T[];
}

interface CarouselItem {
  id: number;
  poster_path: string;
  title?: string; 
  name?: string; 
}

function Carousel<T extends CarouselItem>({ title, items }: CarouselProps<T>) {
    
  if (!items || items.length === 0) {
    return null; 
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel">
        {items.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.poster_path}
            title={item.title || item.name}/>
        ))}
      </div>
    </div>
  );
}

export default Carousel;