import { Camper } from '@/types/camper';
import styles from './CamperCard.module.css';

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  return (
    <div className={styles.card}>
      {/* Зображення кемпера */}
      <div className={styles.imageWrapper}>
        <img 
          src={camper.gallery[0].original} 
          alt={camper.name} 
          className={styles.image} 
        />
      </div>

      {/* Інформація про кемпер */}
      <div className={styles.details}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.name}>{camper.name}</h2>
            <div className={styles.priceRow}>
              <p className={styles.price}>€{camper.price.toFixed(2)}</p>
              {/* Іконка серця */}
            </div>
          </div>
          
          <div className={styles.meta}>
            <span className={styles.rating}>⭐ {camper.rating}({camper.reviews.length} Reviews)</span>
            <span className={styles.location}>📍 {camper.location}</span>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        {/* Додати іконки (AC, Kitchen тощо) */}

        <button className={styles.button}>Show more</button>
      </div>
    </div>
  );
}