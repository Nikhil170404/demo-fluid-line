// Utility functions for Fluidline website

/**
 * Format numbers with commas for display
 * @param {number|string} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (num) => {
  if (typeof num === 'string') {
    num = parseInt(num.replace(/\D/g, ''));
  }
  return num.toLocaleString();
};

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.offsetTop - offset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

/**
 * Debounce function to limit execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Local storage utilities with error handling
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading from localStorage: ${error}`);
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Error writing to localStorage: ${error}`);
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Error removing from localStorage: ${error}`);
      return false;
    }
  }
};

/**
 * Email validation
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Phone number validation (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

/**
 * Generate unique ID
 * @returns {string} Unique identifier
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Format file size
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      console.warn('Failed to copy to clipboard:', err);
      return false;
    }
  }
};

/**
 * SEO-friendly slug generator
 * @param {string} text - Text to convert to slug
 * @returns {string} SEO-friendly slug
 */
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Analytics event tracking
 * @param {string} action - Event action
 * @param {string} category - Event category
 * @param {string} label - Event label
 * @param {number} value - Event value
 */
export const trackEvent = (action, category, label, value) => {
  // Google Analytics 4 event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  // Console log for development
  if (import.meta.env.MODE === 'development') {
    console.log('Analytics Event:', { action, category, label, value });
  }
};

/**
 * Device detection utilities
 */
export const device = {
  isMobile: () => window.innerWidth <= 768,
  isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
  isDesktop: () => window.innerWidth > 1024,
  isTouchDevice: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0
};

/**
 * Performance utilities
 */
export const performance = {
  measureTime: (name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  },
  
  measureAsyncTime: async (name, fn) => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  }
};

export default {
  formatNumber,
  scrollToElement,
  debounce,
  throttle,
  isInViewport,
  storage,
  isValidEmail,
  isValidPhone,
  generateId,
  formatFileSize,
  copyToClipboard,
  generateSlug,
  trackEvent,
  device,
  performance
};