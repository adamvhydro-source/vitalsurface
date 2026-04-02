import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, projectType, message } = body

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Vital Surface <noreply@vitalsurface.co.uk>', // Update this to your verified domain
      to: ['hello@vitalsurface.co.uk'], // Update this to the correct recipient email
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
      text: [
        `Name: ${name}`,
        company ? `Company: ${company}` : '',
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        projectType ? `Project Type: ${projectType}` : '',
        '',
        `Message:`,
        message,
      ].filter(Boolean).join('\n'),
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
