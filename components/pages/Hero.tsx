'use client'

import { useEffect, useState } from 'react'
import styles from '../css/Hero.module.css'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="inicio" className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`}>
      {/*Fundo Animado e moderno*/}
      <div className={styles.gridBackground}>
        <div className={styles.gridLines}></div>
      </div>

      <div className={styles.gradientOrbs}>
        <div 
          className={styles.orb1}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className={styles.orb2}
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`
          }}
        ></div>
        <div 
          className={styles.orb3}
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
          }}
        ></div>
      </div>
      
      {/*Hero Section*/}
      <div className={`${styles.heroContent} container`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>Excelência em Contabilidade Corporativa</span>
        </div>

        <h1 className={styles.heroTitle}>
          Transforme sua
          <span className={styles.titleHighlight}> gestão contábil</span>
          <br />
          em vantagem competitiva
        </h1>

        <p className={styles.heroSubtitle}>
          Soluções contábeis inteligentes e tecnológicas para empresas que 
          buscam crescimento sustentável, conformidade e resultados mensuráveis.
        </p>

        <div className={styles.heroActions}>
          <a href="#contato" className={styles.primaryBtn}>
            <span>Agende uma Consultoria</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#servicos" className={styles.secondaryBtn}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Nossos Serviços</span>
          </a>
        </div>
        
        {/*Estatísticas*/}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Anos de Experiência</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>55+</div>
            <div className={styles.statLabel}>Empresas Atendidas</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Satisfação</div>
          </div>
        </div>

        <div className={styles.trustBadges}>
          <p className={styles.trustText}>Confiado por empresas de todos os portes</p>
          <div className={styles.badges}>
            <div className={styles.certBadge}>CRC Certificado</div>
            <div className={styles.certBadge}>ISO 9001</div>
            <div className={styles.certBadge}>LGPD Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
}
