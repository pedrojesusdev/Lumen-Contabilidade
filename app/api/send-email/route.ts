import { NextRequest, NextResponse } from 'next/server'

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

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar se a API key está configurada
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY não configurada')
      return NextResponse.json(
        { error: 'Erro de configuração do servidor - API key não encontrada' },
        { status: 500 }
      )
    }

    console.log('Enviando email para Resend...', { name, email, to: 'contato@lumencontabilidadese.com.br' })

    // Enviar email usando Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'contato@lumencontabilidadese.com.br',
        reply_to: email,
        subject: `Novo contato de ${name} - Lúmen Contabilidade`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Novo Contato Recebido</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensagem:</strong></p>
              <p style="white-space: pre-wrap; word-break: break-word;">${message}</p>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">
              Enviado via Lúmen Contabilidade
            </p>
          </div>
        `,
      }),
    })

    let responseData
    try {
      responseData = await response.json()
    } catch (e) {
      const text = await response.text()
      console.error('Resposta Resend não é JSON:', text)
      responseData = { error: text }
    }

    if (!response.ok) {
      console.error('Resend error:', response.status, responseData)
      return NextResponse.json(
        { 
          error: 'Falha ao enviar email',
          details: responseData?.message || responseData?.error || 'Erro desconhecido'
        },
        { status: response.status || 502 }
      )
    }

    console.log('Email enviado com sucesso:', responseData)

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { 
        error: 'Erro ao enviar email. Tente novamente.',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
}