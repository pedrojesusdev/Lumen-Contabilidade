'use client'

import { useState, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../css/Contact.module.css'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(sectionRef)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simular envio
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className={`${styles.contact} section ${isVisible ? styles.visible : ''}`}
    >
      <div className="container">
        <div className={`section-title ${styles.title}`}>
          <div className={styles.titleBadge}>Entre em Contato</div>
          <h2>Vamos Conversar</h2>
          <p>Estamos prontos para transformar a gestão da sua empresa</p>
        </div>
        
        <div className={styles.contactContent}>
          {/* Informações de contato */}
          <div className={styles.contactInfo}>
            <h3>Fale Conosco</h3>
            <p className={styles.infoParagraph}>
              Transforme a gestão contábil da sua empresa. Entre em contato 
              e descubra como podemos ajudar seu negócio a crescer.
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:diretoria@llcontabilidadese.com.br">
                    diretoria@llcontabilidadese.com.br
                  </a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Telefone</h4>
                  <a href="tel:+557932138359">(79) 3213-8359</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Endereço</h4>
                  <p>
                    Rua Dom Bosco, 96 Cirurgia<br />
                    Aracaju - SE, 49030-000
                  </p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Horário</h4>
                  <p>
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulário */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  disabled={status === 'sending'}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  disabled={status === 'sending'}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Como podemos ajudar sua empresa?"
                  disabled={status === 'sending'}
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2L9 11M18 2l-5 16-4-7-7-4 16-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {status === 'success' && (
                <div className={styles.successMessage}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
