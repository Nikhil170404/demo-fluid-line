import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Performance monitoring
const trackPerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
    });
  }
};

// Initialize performance tracking
trackPerformance();

// Error boundary for production
const ErrorFallback = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-red-600 text-2xl">⚠</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try refreshing the page.</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

// Development error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Initialize app
const initializeApp = () => {
  const container = document.getElementById('root');
  
  if (!container) {
    console.error('Root container not found');
    return;
  }

  // Remove loading spinner if it exists
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 300);
  }

  const root = createRoot(container);
  
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}