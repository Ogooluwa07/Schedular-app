import React from 'react'

export default function ServiceCard({ emoji, title, description, extra }) {
  return (
    <div className="bg-white border p-6 rounded-2xl shadow hover:shadow-lg transition">
      <div className="text-5xl mb-3">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2 text-gray-700">{description}</p>
      {extra && <p className="text-gray-500 text-sm">{extra}</p>}
    </div>
  )
}
