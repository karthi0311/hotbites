// ============ BUSINESS CONFIGURATION INTEGRATION ============
if (window.BUSINESS_CONFIG) {
  const config = window.BUSINESS_CONFIG;
  
  // Update all WhatsApp links with pre-filled message
  const whatsappUrl = `https://wa.me/${config.whatsapp_number.replace('+', '')}?text=${encodeURIComponent(config.whatsapp_message)}`;
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = whatsappUrl;
  });
  
  // Update all Call links with primary phone number
  document.querySelectorAll('a[href*="tel:"]').forEach(link => {
    link.href = `tel:${config.phone1_full}`;
  });
  
  // Update all Google Maps links with full address
  const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(config.google_maps_query)}`;
  document.querySelectorAll('a[href*="maps.google.com"]').forEach(link => {
    link.href = mapsUrl;
  });
  
  // Update Instagram links
  document.querySelectorAll('a[href*="instagram.com/hotbites"]').forEach(link => {
    link.href = config.instagram;
  });
}

// ============ MOBILE NAV TOGGLE ============
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ============ MENU TAB FILTERING ============
const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const targetPanel = document.querySelector('.menu-panel[data-panel="' + tab.dataset.tab + '"]');
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});

// ============ ANALYTICS & TRACKING (OPTIONAL) ============
// Track button clicks for analytics
document.querySelectorAll('.btn, .sticky-btn, .nav-cta, .see-all-reviews, .contact-lines a').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Log button interactions (can be connected to analytics service)
    const btnText = this.textContent.trim();
    const btnUrl = this.href || 'no-href';
    // console.log('Button clicked:', { text: btnText, url: btnUrl, timestamp: new Date() });
  });
});