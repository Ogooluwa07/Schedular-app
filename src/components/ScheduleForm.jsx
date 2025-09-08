import React, { useState } from 'react';

export default function ScheduleForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', service: '' });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // reset popup
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Booking successful!' });
        setForm({ name: '', email: '', date: '', service: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Booking failed. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again later.' });
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[80vh] bg-white shadow-lg rounded-xl m-6 p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-900">Book an Appointment</h2>

        {/* ✅ Styled Popup */}
        {message && (
          <div
            className={`p-4 rounded-xl text-center transition-all duration-300 ${
              message.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-400'
                : 'bg-red-100 text-red-800 border border-red-400'
            }`}
          >
            {message.text}
          </div>
        )}

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        >
          <option value="">Select Service</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Repairs">Repairs</option>
          <option value="Installations">Installations</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
