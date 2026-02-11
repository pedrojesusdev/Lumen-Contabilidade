'use client'

import { useRef, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../css/Services.module.css'

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(sectionRef)

  const services = [
    {
      title: 'Contabilidade Empresarial',
      description: 'Gestão contábil completa com escrituração fiscal, apuração de impostos e demonstrações financeiras precisas.',
      icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8h.01M9 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
      color: '#6BA3D0'
    },
    {
      title: 'Planejamento Tributário',
      description: 'Estratégias inteligentes para otimização da carga tributária dentro da legalidade.',
      icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
      color: '#4A8BBF'
    },
    {
      title: 'BPO Financeiro',
      description: 'Terceirização completa de processos financeiros, incluindo contas a pagar/receber e fluxo de caixa.',
      icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 2h6M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#1E5A7D'
  },
    {
      title: 'Consultoria Empresarial',
      description: 'Análise estratégica e orientação para tomada de decisões que impulsionam o crescimento.',
      icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 10l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      </svg>
    ),
      color: '#6BA3D0'
    },
    {
      title: 'Departamento Pessoal',
      description: 'Gestão completa de folha de pagamento, encargos trabalhistas e compliance trabalhista.',
      icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
      color: '#4A8BBF'
    },
    {
      title: 'Abertura de Empresas',
      description: 'Assessoria completa para constituição de empresas e escolha do regime tributário ideal.',
      icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="1" fill="currentColor"/>
      </svg>
    ),
      color: '#1E5A7D'
    },
    {
      title: 'Acessoria trabalhista',
      description: 'Assessoria é um serviço técnico juridico e contábil, que tem como objetivo orientar e auxiliar as empresas a cumprirem as obrigações trabalhistas, evitando passivos e garantindo conformidade com a legislação vigente.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="7" r="2.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 12h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: '#5B9FC6'
    },
    {
      title: 'Recuperação Tributária',
      description: 'Assessoria completa para recuperação de créditos tributários e regularização fiscal.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 9v5M10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 7l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#4A8BBF'
    },
    {
      title: 'Imposto de Renda',
      description: 'Assessoria completa para cálculo e declaração de imposto de renda para pessoa física e jurídica.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 9h8M8 13h8M8 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#6BA3D0'
    },
    {
      title: 'Escritório Virtual',
      description: 'Serviços de contabilidade, administração  online para empresas que buscam eficiência e praticidade, recebimento e encaminhamento de correspondencia.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 8h18M9 19h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: '#4A8BBF'
    },
    {
      title: 'Criação de Sites',
      description: 'Desenvolvimento de sites profissionais e modernos para empresas e empreendedores.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 8h18M9 19h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 12h1m2 0h1m2 0h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#1E5A7D'
    },
    {
      title: 'E-social para pessoa física',
      description: 'Assessoria completa para cumprimento das obrigações do e-social para pessoa física, garantindo conformidade e evitando penalidades com o máximo de confiança.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 10h6M9 14h6M9 18h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
      color: '#3D7BA3'
    },
  ]

  const [visibleCount, setVisibleCount] = useState<number>(6)
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleShowMore = () => {
    if (expanded) {
      setVisibleCount(6)
      setExpanded(false)
    } else {
      setVisibleCount(services.length)
      setExpanded(true)
    }
  }

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className={`${styles.services} section ${isVisible ? styles.visible : ''}`}
    >
      <div className="container">
        <div className={`section-title ${styles.title}`}>
          <div className={styles.titleBadge}>Nossos Serviços</div>
          <h2>Soluções Completas</h2>
          <p>Atendemos todas as necessidades contábeis da sua empresa</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.slice(0, visibleCount).map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceCard}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--color': service.color
              } as React.CSSProperties}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <a href="#contato" className={styles.serviceLink}>
                <span>Saiba mais</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className={styles.showMoreWrapper}>
          <button
            className={`${styles.ctaButton} ${styles.showMoreButton}`}
            onClick={toggleShowMore}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Ver menos' : 'Ver mais'}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 8 }}>
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3>Não encontrou o serviço que procura?</h3>
            <p>Entre em contato e descubra como podemos ajudar sua empresa a crescer com soluções personalizadas.</p>
            <a href="#contato" className={styles.ctaButton}>
              <span>Fale com Nossa Equipe</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
