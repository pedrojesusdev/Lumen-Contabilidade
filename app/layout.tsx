import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Lúmen Contabilidade Enterprise | Soluções Contábeis Corporativas',
  description: 'Soluções contábeis completas para empresas. Consultoria especializada, planejamento tributário e gestão financeira com excelência e tecnologia.',
  keywords: 'contabilidade, consultoria empresarial, planejamento tributário, gestão contábil, BPO financeiro',
  authors: [{ name: 'Lúmen Contabilidade Enterprise' }],
  openGraph: {
    title: 'Lúmen Contabilidade Enterprise',
    description: 'Soluções contábeis completas para empresas',
    type: 'website',
    images: ['../public/Marca_Lumen_perfil_fundo_azul-removebg-preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
