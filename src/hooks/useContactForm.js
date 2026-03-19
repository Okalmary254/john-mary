import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS } from '../data/config'

const INITIAL = { from_name: '', reply_to: '', subject: '', message: '' }

export default function useContactForm() {
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

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
    } catch {
      setStatus('error')
    }
  }

  return { form, status, handleChange, handleSubmit }
}
