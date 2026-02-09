'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../css/About.module.css'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(sectionRef)

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className={`${styles.about} section ${isVisible ? styles.visible : ''}`}
    >
      <div className="container">
        <div className={`section-title ${styles.title}`}>
          <div className={styles.titleBadge}>Quem Somos</div>
          <h2>Sobre a Lúmen</h2>
          <p>Tradição, Inovação e Compromisso com Resultados</p>
        </div>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.lead}>
              A <strong>Lumen Contabilidade Enterprise</strong> nasce a partir de uma trajetória sólida construída pela LL Contabilidade, que atuou por mais de 15 anos no mercado, oferecendo serviços contábeis com ética, transparência e compromisso com resultados.</p>

            <p>Após encerrar suas atividades, a LL Contabilidade dá lugar à Lumen — uma empresa que carrega toda essa experiência, agora ampliada para uma atuação estratégica em gestão empresarial, unindo contabilidade moderna, tecnologia e visão de crescimento para empresas que querem evoluir com segurança.</p>
        
            <p>
              Com mais de 15 anos de experiência no mercado, combinamos conhecimento técnico 
              profundo, tecnologia de ponta e um atendimento personalizado que coloca as 
              necessidades do seu negócio em primeiro lugar.
            </p>
            
            <p>
              Nossa equipe multidisciplinar de especialistas está preparada para oferecer 
              soluções completas em contabilidade, planejamento tributário, escritório virtual, recuperação tributária, consultoria empresarial e gestão financeira, sempre com foco em resultados mensuráveis 
              e conformidade total com a legislação vigente.
            </p>
          </div>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Excelência Técnica</h3>
                <p>Profissionais certificados e em constante atualização com as melhores práticas do mercado.</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Agilidade</h3>
                <p>Processos otimizados e tecnologia avançada para entregas rápidas e precisas.</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Segurança</h3>
                <p>Proteção total dos seus dados com sistemas seguros e conformidade com a LGPD.</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Atendimento Personalizado</h3>
                <p>Cada cliente é único. Desenvolvemos soluções sob medida para o seu negócio.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Anos de Mercado</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>55+</div>
            <div className={styles.statLabel}>Empresas Atendidas</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>6+</div>
            <div className={styles.statLabel}>Profissionais Especializados</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Satisfação dos Clientes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
