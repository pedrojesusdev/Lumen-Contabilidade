import styles from '../css/Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Elementos visuais de fundo animados */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      
      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Excelência em
            <span className={styles.highlight}> Soluções Contábeis</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Transforme a gestão financeira da sua empresa com inteligência, 
            tecnologia e o compromisso de quem entende do seu negócio.
          </p>
          
          <div className={styles.heroActions}>
            <a href="#contato" className={styles.primaryButton}>
              Fale com um Especialista
            </a>
            <a href="#servicos" className={styles.secondaryButton}>
              Conheça Nossos Serviços
            </a>
          </div>
          
          {/* Métricas rápidas */}
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>15+</span>
              <span className={styles.metricLabel}>Anos de Experiência</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>500+</span>
              <span className={styles.metricLabel}>Empresas Atendidas</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>98%</span>
              <span className={styles.metricLabel}>Satisfação</span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}>
            {/* Ícone SVG moderno representando contabilidade */}
            <svg className={styles.icon} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="url(#gradient1)" opacity="0.1"/>
              <path d="M60 80h80M60 100h80M60 120h60" stroke="url(#gradient2)" strokeWidth="4" strokeLinecap="round"/>
              <rect x="50" y="60" width="100" height="80" rx="8" stroke="url(#gradient2)" strokeWidth="3" fill="none"/>
              <circle cx="160" cy="60" r="15" fill="url(#gradient1)"/>
              <path d="M155 60l4 4 6-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="200" y2="200">
                  <stop offset="0%" stopColor="#6BA3D0"/>
                  <stop offset="100%" stopColor="#1E5A7D"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0" y1="0" x2="200" y2="0">
                  <stop offset="0%" stopColor="#6BA3D0"/>
                  <stop offset="100%" stopColor="#4A8BBF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <span>Role para descobrir</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  )
}
