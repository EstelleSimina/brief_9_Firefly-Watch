import './Banner.css';
import { IMAGE_BASE_URL, IMAGE_SIZES } from '../../constants/api';

interface BannerProps {
  imageUrl: string | null;
  title?: string;
}

export function Banner({ imageUrl, title }: BannerProps) {
  if (!imageUrl) {
    return null;
  }

  const finalImageUrl = `${IMAGE_BASE_URL}${IMAGE_SIZES.backdrop}${imageUrl}`;

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${finalImageUrl})` }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
    
  );
}

export default Banner;
