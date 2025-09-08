import React from 'react'
import ServiceCard from '../components/ServiceCard'
import logo from '../assets/logo.jpg'

export default function Landing() {
  return (
    <div className="max-w-5xl mx-auto text-center py-12">
      <img src={logo} alt="Samuel Ojo Mechanical Services Logo" className="mx-auto w-40 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Samuel Ojo Mechanical Services</h1>
      <p className="mb-6 text-lg max-w-3xl mx-auto text-gray-700">
        Reliable mechanical engineering solutions for businesses and homes. We focus on maintenance, repairs, and installations with safety and efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <ServiceCard
          emoji="🛠️"
          title="Maintenance"
          description="Routine checks, preventive maintenance and safety inspections to keep your machines running."
          extra="Scheduled visits, lubrication, alignment and performance tuning."
        />
        <ServiceCard
          emoji="🔧"
          title="Repairs"
          description="Rapid diagnostics and repairs to reduce downtime and restore operations fast."
          extra="Breakdown response, parts replacement, and testing."
        />
        <ServiceCard
          emoji="⚙️"
          title="Installations"
          description="Professional installation and commissioning of mechanical systems and equipment."
          extra="Site assessment, correct installation, and initial testing."
        />
      </div>
    </div>
  )
}
