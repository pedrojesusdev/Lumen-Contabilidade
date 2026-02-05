import styles from '../css/Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image 
            src="/images/logo-blue.png" 
            alt="Lúmen Contabilidade Enterprise" 
            width={180} 
            height={45}
            priority
          />
        </div>
        
        <ul className={styles.navLinks}>
          <li><a href="#inicio" className={styles.navLink}>Início</a></li>
          <li><a href="#sobre" className={styles.navLink}>Sobre</a></li>
          <li><a href="#servicos" className={styles.navLink}>Serviços</a></li>
          <li><a href="#contato" className={styles.navLink}>Contato</a></li>
        </ul>
        
        <a href="#contato" className={styles.ctaButton}>
          <span>Fale Conosco</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </nav>
    </header>
  )
}
