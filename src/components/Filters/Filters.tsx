"use client";

import { useState } from 'react';
import { FilterParams } from '@/services/api';
import styles from './Filters.module.css';

interface FiltersProps {
  onSearch: (filters: FilterParams) => void;
}

export default function Filters({ onSearch }: { onSearch: (filters: FilterParams) => void }) {
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState<string[]>([]);
  const [type, setType] = useState('');

  const handleEquipmentChange = (item: string) => {
    setEquipment(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <aside className={styles.container}>
      <div className={styles.locationGroup}>
        <label className={styles.label}>Location</label>
        <input 
          type="text" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City, Country" 
          className={styles.locationInput} 
        />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
        <div className={styles.categories}>
          {['AC', 'Automatic', 'Kitchen', 'TV', 'Shower'].map(item => (
            <button 
              key={item} 
              className={`${styles.filterBtn} ${equipment.includes(item) ? styles.active : ''}`}
              onClick={() => handleEquipmentChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Vehicle type</h3>
        <div className={styles.categories}>
          {['Van', 'Fully Integrated', 'Alcove'].map(vType => (
            <button 
              key={vType} 
              className={`${styles.filterBtn} ${type === vType ? styles.active : ''}`}
              onClick={() => setType(vType)}
            >
              {vType}
            </button>
          ))}
        </div>
      </div>

      <button 
        className={styles.searchBtn} 
        onClick={() => onSearch({ location, equipment, type })}
      >
        Search
      </button>
    </aside>
  );
}