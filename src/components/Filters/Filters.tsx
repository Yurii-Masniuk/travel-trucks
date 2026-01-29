import styles from './Filters.module.css';

export default function Filters() {
  const equipment = [
    { id: 'ac', label: 'AC', icon: '❄️' },
    { id: 'automatic', label: 'Automatic', icon: '⚙️' },
    { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
    { id: 'tv', label: 'TV', icon: '📺' },
    { id: 'bathroom', label: 'Bathroom', icon: '🚿' },
    { id: 'radio', label: 'Radio', icon: '📻' },
    { id: 'refrigerator', label: 'Refrigerator', icon: '🍦' },
    { id: 'microwave', label: 'Microwave', icon: '🍩' },
    { id: 'gas', label: 'Gas', icon: '🔥' },
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
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="City, Country" className={styles.input} />
        </div>
      </div>

      <p className={styles.filterTitle}>Filters</p>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
        <div className={styles.grid}>
          {equipment.map((item) => (
            <button key={item.id} className={styles.filterBtn}>
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
            <button key={type.id} className={styles.filterBtn}>
              <span className={styles.icon}>{type.icon}</span>
              <span className={styles.btnLabel}>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button className={styles.searchBtn}>Search</button>
    </aside>
  );
}