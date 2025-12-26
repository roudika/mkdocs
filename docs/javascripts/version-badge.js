// Version Badge Script
// Extracts version from site name and styles it as a badge

(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    const headerTitle = document.querySelector('.md-header__title');
    if (!headerTitle) return;
    
    const titleText = headerTitle.textContent || headerTitle.innerText;
    
    // Extract version (format: "v1.0.0" or "1.0.0")
    const versionMatch = titleText.match(/\s+v?(\d+\.\d+\.\d+)/);
    if (!versionMatch) return;
    
    const version = versionMatch[1];
    const versionText = 'v' + version;
    
    // Remove version from title text
    const cleanTitle = titleText.replace(/\s+v?\d+\.\d+\.\d+/, '').trim();
    
    // Update title with clean text
    headerTitle.textContent = cleanTitle;
    
    // Create version badge
    const badge = document.createElement('span');
    badge.className = 'version-badge';
    badge.textContent = versionText;
    badge.setAttribute('title', 'Documentation Version ' + version);
    
    // Insert badge after title
    headerTitle.appendChild(badge);
  }
})();
