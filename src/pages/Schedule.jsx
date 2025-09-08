import React from 'react'
import ScheduleForm from '../components/ScheduleForm'

export default function Schedule() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Book a Service Appointment</h2>
      <ScheduleForm />
    </div>
  )
}
