"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          TravelTrucks
        </Link>
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/catalog" 
            className={`${styles.link} ${pathname === '/catalog' ? styles.active : ''}`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};