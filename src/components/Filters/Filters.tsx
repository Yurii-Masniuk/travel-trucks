import { useFilterStore } from '@/store/useFilterStore';
import styles from './Filters.module.css';

export default function Filters() {
  const { 
    location, setLocation, 
    equipment, toggleEquipment, 
    vehicleType, setVehicleType 
  } = useFilterStore();

  const equipmentList = [
    { id: 'AC', label: 'AC', icon: '💨' },
    { id: 'Automatic', label: 'Automatic', icon: '⚙️' },
    { id: 'Kitchen', label: 'Kitchen', icon: '☕' },
    { id: 'TV', label: 'TV', icon: '📺' },
    { id: 'Bathroom', label: 'Bathroom', icon: '🚿' },
    { id: 'Radio', label: 'Radio', icon: '📻' },
    { id: 'Refrigerator', label: 'Refrigerator', icon: '🧊' },
    { id: 'Microwave', label: 'Microwave', icon: '🥧' },
    { id: 'Gas', label: 'Gas', icon: '🔥' },
  ];

  const vehicleTypes = [
    { id: 'van', label: 'Van', icon: '🚐' },
    { id: 'fullyIntegrated', label: 'Fully Integrated', icon: '🚌' },
    { id: 'alcove', label: 'Alcove', icon: '🚍' },
  ];

  return (
    <aside className={styles.filters}>
      <div className={styles.locationGroup}>
        <label className={styles.label}>Location</label>
        <input 
          className={styles.input} 
          placeholder="City, Country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <p className={styles.filterTitle}>Filters</p>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
        <div className={styles.grid}>
          {equipmentList.map((item) => (
            <button 
              key={item.id} 
              type="button"
              className={`${styles.filterBtn} ${equipment.includes(item.id) ? styles.active : ''}`}
              onClick={() => toggleEquipment(item.id)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.btnLabel}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Vehicle type</h3>
        <div className={styles.grid}>
          {vehicleTypes.map((type) => (
            <button 
              key={type.id} 
              type="button"
              className={`${styles.filterBtn} ${vehicleType === type.id ? styles.active : ''}`}
              onClick={() => setVehicleType(type.id)}
            >
              <span className={styles.icon}>{type.icon}</span>
              <span className={styles.btnLabel}>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button className={styles.searchBtn} onClick={() => console.log('Шукаємо...')}>
        Search
      </button>
    </aside>
  );
}