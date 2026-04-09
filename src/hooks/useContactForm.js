import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS = {
  SERVICE_ID:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const INITIAL = { from_name: '', reply_to: '', subject: '', message: '' }

export default function useContactForm() {
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        { ...form, to_name: 'John' },
        EMAILJS.PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return { form, status, handleChange, handleSubmit }
}

