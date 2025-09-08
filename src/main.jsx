import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Landing from './pages/Landing'
import Schedule from './pages/Schedule'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
