// Application constants for Fluidline Engineers & Fabricators

// Company Information
export const COMPANY_INFO = {
  name: 'Fluidline Engineers & Fabricators Pvt. Ltd.',
  shortName: 'Fluidline',
  tagline: 'Engineering Excellence Since 1988',
  founded: 1988,
  experience: 33,
  website: 'https://fluidlinegroup.com',
  email: 'projects@fluidlinegroup.com',
  phone: '+91-512-2225138',
  alternatePhone: '+91-512-2225120',
};

// Contact Information
export const CONTACT_INFO = {
  headOffice: {
    city: 'Kanpur',
    address: 'C-51, Udyog Kunj, Panki Site V, Kanpur-208012',
    state: 'Uttar Pradesh',
    country: 'India',
    pincode: '208012',
    phone: '+91-512-2225138 | 2225120',
    email: 'projects@fluidlinegroup.com',
    isHeadOffice: true,
  },
  mumbaiOffice: {
    city: 'Mumbai',
    address: '405, Corporate Annex, Next to Cello House, Sonawala Road, Goregaon (E), Mumbai - 400063',
    state: 'Maharashtra',
    country: 'India',
    pincode: '400063',
    phone: '022-68322032, +91-9695674747',
    email: 'mumbai@fluidlinegroup.com',
    isHeadOffice: false,
  },
  noidaOffice: {
    city: 'Noida',
    address: 'A-306, Logix Technova, Sector 132, Noida-201301',
    state: 'Uttar Pradesh',
    country: 'India',
    pincode: '201301',
    email: 'projects@fluidlinegroup.com',
    isHeadOffice: false,
  },
  bengaluruOffice: {
    city: 'Bengaluru',
    address: 'D-403, Sterling Apartments, Dollors Colony, RMV- II, Bengaluru-560094',
    state: 'Karnataka',
    country: 'India',
    pincode: '560094',
    email: 'projects@fluidlinegroup.com',
    isHeadOffice: false,
  },
};

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/fluidline-engineers-fabricators',
  twitter: 'https://twitter.com/fluidlinegroup',
  facebook: 'https://facebook.com/fluidlinegroup',
  youtube: 'https://youtube.com/fluidlinegroup',
  instagram: 'https://instagram.com/fluidlinegroup',
};

// Business Statistics
export const STATS = {
  projectsCompleted: 1000,
  workforce: 3000,
  safeManHours: 100, // in millions
  yearsOfExperience: 33,
  fortuneCompanies: 500,
  mncsServed: 50,
  industrySectors: 30,
  clientSatisfaction: 100, // percentage
};

// Certifications and Licenses
export const CERTIFICATIONS = {
  fireProtection: {
    name: 'Class A Fire License',
    authority: 'Maharashtra State',
    description: 'Fire Protection & Detection Systems',
    type: 'license',
  },
  processPixing: {
    name: 'ASME B 31.3',
    authority: 'ASME International',
    description: 'Process Piping Standards Compliance',
    type: 'standard',
  },
  boilerRegulations: {
    name: 'IBR Compliance',
    authority: 'Government of India',
    description: 'Indian Boiler Regulations Certified',
    type: 'compliance',
  },
};

// Service Categories
export const SERVICES = {
  processPixing: {
    id: 'process-piping',
    title: 'Process & Utility Piping',
    category: 'Piping Solutions',
    compliance: ['ASME B 31.3'],
  },
  fireProtection: {
    id: 'fire-protection',
    title: 'Fire Protection & Detection Systems',
    category: 'Safety Systems',
    compliance: ['Class A Licensed'],
  },
  structuralWork: {
    id: 'structural-work',
    title: 'Structural Work',
    category: 'Fabrication',
    compliance: ['Heavy Engineering'],
  },
  equipmentFabrication: {
    id: 'equipment-fabrication',
    title: 'Equipment Fabrication',
    category: 'Manufacturing',
    compliance: ['Large Capacity'],
  },
  equipmentErection: {
    id: 'equipment-erection',
    title: 'Equipment Erection',
    category: 'Installation',
    compliance: ['Safety Protocols'],
  },
  balanceOfBoiler: {
    id: 'balance-of-boiler',
    title: 'Balance of Boiler',
    category: 'Boiler Services',
    compliance: ['IBR Compliance'],
  },
};

// Application Configuration
export const APP_CONFIG = {
  defaultTheme: 'classic',
  autoSaveInterval: 30000, // 30 seconds
  animationDuration: 300,
  slideTransitionTime: 6000, // 6 seconds
  chatResponseDelay: 1000, // 1 second
  scrollOffset: 100, // pixels
  maxFileSize: 10485760, // 10MB in bytes
  supportedImageFormats: ['jpg', 'jpeg', 'png', 'webp', 'svg'],
  supportedDocumentFormats: ['pdf', 'doc', 'docx'],
};

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'Fluidline Engineers & Fabricators - Industrial Engineering Solutions Since 1988',
  titleSeparator: ' - ',
  defaultDescription: 'Leading multi-dimensional engineering company providing Process Piping, Fire Protection Systems, Structural Fabrication, and Equipment Erection services to Fortune 500 companies across India for 33+ years.',
  defaultKeywords: 'process piping, fire protection systems, structural fabrication, equipment erection, industrial engineering, ASME B31.3, Class A fire license, Maharashtra, engineering solutions, Fortune 500',
  ogImage: 'https://fluidlinegroup.com/images/fluidline-og-image.jpg',
  twitterImage: 'https://fluidlinegroup.com/images/fluidline-twitter-image.jpg',
  canonicalBase: 'https://fluidlinegroup.com',
};

// API Configuration
export const API_CONFIG = {
  baseUrl: import.meta.env.MODE === 'production' 
    ? 'https://api.fluidlinegroup.com' 
    : 'http://localhost:3001',
  timeout: 10000, // 10 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
};

// Form Validation Rules
export const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    required: true,
    pattern: /^(\+91|91|0)?[6-9]\d{9}$/,
    message: 'Please enter a valid Indian phone number',
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'Name should contain only letters and spaces',
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: 'Message should be between 10 and 1000 characters',
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  timeout: 'Request timed out. Please try again.',
  validation: 'Please check your input and try again.',
  fileSize: 'File size is too large. Maximum allowed size is 10MB.',
  fileType: 'File type not supported. Please upload a valid file.',
  required: 'This field is required.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  contactForm: 'Thank you for your message! We will get back to you soon.',
  newsletter: 'Successfully subscribed to our newsletter!',
  download: 'Download started successfully.',
  copy: 'Copied to clipboard!',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'fluidline_theme',
  activeSection: 'fluidline_active_section',
  userPreferences: 'fluidline_user_preferences',
  chatHistory: 'fluidline_chat_history',
  formData: 'fluidline_form_data',
};

// Analytics Events
export const ANALYTICS_EVENTS = {
  pageView: 'page_view',
  sectionChange: 'section_change',
  themeChange: 'theme_change',
  contactForm: 'contact_form_submit',
  downloadBrochure: 'download_brochure',
  chatInteraction: 'chat_interaction',
  serviceInquiry: 'service_inquiry',
  phoneCall: 'phone_call_click',
  emailClick: 'email_click',
};

// Responsive Breakpoints
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
  '4xl': 1920,
};

// Animation Delays and Durations
export const ANIMATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  extraSlow: 800,
  stagger: 100,
  slideTransition: 6000,
  countAnimation: 2000,
};

// Environment Configuration
export const ENV = {
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production',
  isTesting: import.meta.env.MODE === 'test',
};

export default {
  COMPANY_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
  STATS,
  CERTIFICATIONS,
  SERVICES,
  APP_CONFIG,
  SEO_CONFIG,
  API_CONFIG,
  VALIDATION_RULES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  STORAGE_KEYS,
  ANALYTICS_EVENTS,
  BREAKPOINTS,
  ANIMATIONS,
  ENV,
};