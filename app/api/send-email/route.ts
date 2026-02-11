import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Usando FormSubmit - envia para pa04052007@gmail.com
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)
    formData.append('_subject', `Novo contato de ${name} - Lúmen Contabilidade`)
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')

    // Enviar para FormSubmit
    const response = await fetch('https://formsubmit.co/pa04052007@gmail.com', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      console.error('FormSubmit response error:', response.status, text)
      return NextResponse.json(
        { error: 'Falha ao enviar email', details: text },
        { status: response.status || 502 }
      )
    }

    return NextResponse.json({ success: true, message: 'Email enviado com sucesso!' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    )
  }
}
