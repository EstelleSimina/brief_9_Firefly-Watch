import './Card.css';
import { IMAGE_BASE_URL, IMAGE_SIZES } from '../../constants/api'; // On importe les constantes

interface CardProps {
  imageUrl: string | null;
  title?: string; 
}


function Card({ imageUrl, title }: CardProps) {
  
  if (!imageUrl) {
    return null;
  }
  
  const finalImageUrl = `${IMAGE_BASE_URL}${IMAGE_SIZES.poster}${imageUrl}`;

  return (
    <div className="card">
      <img 
        src={finalImageUrl} 
        alt={title || 'Affiche du film'} 
      />
    </div>
  );
}

export default Card;
