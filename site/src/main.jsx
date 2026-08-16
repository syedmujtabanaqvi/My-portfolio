import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

const fallback = (
  <div style={{ padding: '48px', color: '#f8f8f8', fontFamily: 'sans-serif' }}>
    <h1 style={{ marginBottom: 12 }}>Something went wrong.</h1>
    <p style={{ color: '#bdbdbd' }}>Please refresh the page. Check the browser console for details.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={fallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
