import React, { useState } from 'react'

export default function ScheduleForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', service: '' })
  const [modalMessage, setModalMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setModalMessage({
          title: 'Booking Confirmed',
          body: `🎉 Thank you, ${form.name}! Your appointment for "${form.service}" has been scheduled on ${form.date}. A confirmation email will be sent to ${form.email}.`
        })
        setForm({ name: '', email: '', date: '', service: '' })
      } else {
        setModalMessage({
          title: 'Booking Failed',
          body: data?.error || 'An error occurred while sending confirmation email.'
        })
      }
    } catch (err) {
      setModalMessage({ title: 'Booking Failed', body: err.message || 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Select Service</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Repairs">Repairs</option>
          <option value="Installations">Installations</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded">
          {loading ? 'Booking...' : 'Book Now'}
        </button>
      </form>

      {/* Full-screen modal when modalMessage is set */}
      {modalMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white max-w-3xl w-full rounded-lg p-8 text-left shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{modalMessage.title}</h3>
            <p className="mb-6">{modalMessage.body}</p>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setModalMessage(null)} className="px-4 py-2 border rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
