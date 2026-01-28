"use client";

import { useEffect, useState } from 'react';
import { getCampers } from '@/services/api';
import { Camper } from '@/types/camper';
import CamperCard from '@/components/CamperCard/CamperCard';
import styles from './page.module.css';

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchCampersData = async (currentPage: number) => {
    setIsLoading(true);
    try {
      const data = await getCampers(currentPage, 4);      
      const newItems = Array.isArray(data) ? data : (data.items || []);
      
      if (newItems.length < 4) {
        setHasMore(false);
      }

      setCampers(prev => currentPage === 1 ? newItems : [...prev, ...newItems]);
    } catch (error) {
      console.error("Помилка завантаження:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCampersData(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <aside className={styles.filters}>
          <p>Filters will be here</p>
        </aside>

        <main className={styles.list}>
  {campers.map((camper) => (
    <CamperCard key={camper.id} camper={camper} />
  ))}

  {isLoading && <p style={{ textAlign: 'center', margin: '20px 0' }}>Loading...</p>}

  {hasMore && campers.length > 0 && (
    <button 
      className={styles.loadMore} 
      onClick={handleLoadMore}
      disabled={isLoading}
      style={{ visibility: isLoading ? 'hidden' : 'visible' }}
    >
      Load more
    </button>
  )}
</main>
      </div>
    </div>
  );
}