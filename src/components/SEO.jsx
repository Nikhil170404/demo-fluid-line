import React from 'react';

const SEO = ({ 
  title = "Fluidline Engineers & Fabricators - Industrial Engineering Solutions Since 1988",
  description = "Leading multi-dimensional engineering company providing Process Piping, Fire Protection Systems, Structural Fabrication, and Equipment Erection services to Fortune 500 companies across India for 33+ years.",
  keywords = "process piping, fire protection systems, structural fabrication, equipment erection, industrial engineering, ASME B31.3, Class A fire license, Maharashtra, engineering solutions, Fortune 500",
  image = "https://fluidlinegroup.com/images/fluidline-og-image.jpg",
  url = "https://fluidlinegroup.com/",
  canonical,
  children
}) => {
  React.useEffect(() => {
    document.title = title;
    
    const updateMeta = (selector, content) => {
      const meta = document.querySelector(selector);
      if (meta) meta.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[name="keywords"]', keywords);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:image"]', image);
    updateMeta('meta[property="og:url"]', url);
    updateMeta('meta[property="twitter:title"]', title);
    updateMeta('meta[property="twitter:description"]', description);
    updateMeta('meta[property="twitter:image"]', image);
    
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }
  }, [title, description, keywords, image, url, canonical]);

  return children || null;
};

export default SEO;