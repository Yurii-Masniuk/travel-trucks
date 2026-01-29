"use client";

import { useEffect, useState, useCallback } from 'react';
import { getCampers, FilterParams } from '@/services/api';
import { Camper } from '@/types/camper';
import CamperCard from '@/components/CamperCard/CamperCard';
import Filters from '@/components/Filters/Filters';
import styles from './page.module.css';

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState<FilterParams>({});
  
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing favorites", e);
      }
    }
  }, []);

  const fetchCampersData = useCallback(async (currentPage: number, currentFilters: FilterParams) => {
    setIsLoading(true);
    try {
      const data = await getCampers(currentPage, 4, currentFilters);
      const newItems = Array.isArray(data) ? data : (data.items || []);
      
      setHasMore(newItems.length === 4);
      setCampers(prev => currentPage === 1 ? newItems : [...prev, ...newItems]);
    } catch (error) {
      setCampers([]);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCampersData(page, filters);
  }, [page, filters, fetchCampersData]);

  const handleSearch = (newFilters: FilterParams) => {
    setFilters(newFilters);
    setPage(1);
    setCampers([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <aside className={styles.filters}>
          <Filters onSearch={handleSearch} />
        </aside>

        <main className={styles.list}>
          {campers.length > 0 ? (
            campers.map((camper) => (
              <CamperCard 
                key={camper.id} 
                camper={camper} 
                isFavorite={favorites.includes(camper.id)}
                onToggleFavorite={() => toggleFavorite(camper.id)}
              />
            ))
          ) : (
            !isLoading && <p className={styles.noResults}>No campers found for these criteria.</p>
          )}

          {isLoading && <p className={styles.loading}>Loading...</p>}

          {hasMore && !isLoading && campers.length > 0 && (
            <button className={styles.loadMore} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </main>
      </div>
    </div>
  );
}