import styles from '../css/Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="Lúmen Contabilidade Enterprise" 
            width={200} 
            height={50}
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
          Fale Conosco
        </a>
      </nav>
    </header>
  )
}
