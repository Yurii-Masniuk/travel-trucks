import { Camper } from '@/types/camper';
import styles from './CamperCard.module.css';
import Link from 'next/link';

interface CamperCardProps {
  camper: Camper;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function CamperCard({ camper, isFavorite, onToggleFavorite }: CamperCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={camper.gallery[0]?.original} 
          alt={camper.name} 
          className={styles.image} 
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.name}>{camper.name}</h2>
            <div className={styles.priceContainer}>
              <span className={styles.price}>€{camper.price.toFixed(2)}</span>
              <button className={styles.favoriteBtn} onClick={onToggleFavorite}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "#E44848" : "none"} stroke={isFavorite ? "#E44848" : "#101828"} strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.meta}>
            <span className={styles.rating}>⭐ {camper.rating}({camper.reviews.length} Reviews)</span>
            <span className={styles.location}>📍 {camper.location}</span>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.categories}>
          <span className={styles.badge}>⚙️ {camper.transmission}</span>
          <span className={styles.badge}>⛽ {camper.engine}</span>
          {camper.AC && <span className={styles.badge}>❄️ AC</span>}
          {camper.kitchen && <span className={styles.badge}>🍳 Kitchen</span>}
          {camper.TV && <span className={styles.badge}>📺 TV</span>}
          {camper.bathroom && <span className={styles.badge}>🚿 Bathroom</span>}
          {camper.radio && <span className={styles.badge}>📻 Radio</span>}
          {camper.refrigerator && <span className={styles.badge}>🍦 Fridge</span>}
          {camper.microwave && <span className={styles.badge}>🍩 Microwave</span>}
          {camper.gas && <span className={styles.badge}>🔥 Gas</span>}
        </div>

        <div className={styles.buttonWrapper}>
          <Link href={`/catalog/${camper.id}`} className={styles.button}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}