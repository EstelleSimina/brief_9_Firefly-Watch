import './Card.css';

interface CardProps {
  imageUrl: string;
  title?: string; 
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Card({ imageUrl, title }: CardProps) {
  
  if (!imageUrl) {
    return null;
  }
  
  return (
    <div className="card">
      <img 
        src={`${IMAGE_BASE_URL}${imageUrl}`} 
        alt={title || 'Affiche'} 
      />
    </div>
  );
}

export default Card;
