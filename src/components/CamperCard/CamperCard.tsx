import { Camper } from '@/types/camper';
import styles from './CamperCard.module.css';

interface CamperCardProps {
  camper: Camper;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function CamperCard({ camper, isFavorite, onToggleFavorite }: CamperCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={camper.gallery[0]?.original} alt={camper.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.name}>{camper.name}</h2>
            <div className={styles.priceContainer}>
              <p className={styles.price}>€{Math.round(camper.price)}</p>
              <button 
                className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ''}`} 
                onClick={onToggleFavorite}
                aria-label="Add to favorites"
              >
                {/* Тимчасова іконка серця для SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "#E44848" : "none"} stroke={isFavorite ? "#E44848" : "#101828"} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.ratingLocation}>
            <span className={styles.rating}>⭐ {camper.rating}({camper.reviews.length} Reviews)</span>
            <span className={styles.location}>📍 {camper.location}</span>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.categories}>
          {camper.AC && <span className={styles.badge}>AC</span>}
          {camper.transmission === 'automatic' && <span className={styles.badge}>Automatic</span>}
          {camper.kitchen && <span className={styles.badge}>Kitchen</span>}
        </div>

        <button className={styles.showMoreBtn}>Show more</button>
      </div>
    </div>
  );
}