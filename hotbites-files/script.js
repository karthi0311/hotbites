// ============ BUSINESS CONFIGURATION INTEGRATION ============
if (window.BUSINESS_CONFIG) {
  const config = window.BUSINESS_CONFIG;

  const whatsappUrl = `https://wa.me/${config.whatsapp_number.replace('+', '')}?text=${encodeURIComponent(config.whatsapp_message)}`;
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = whatsappUrl;
  });

  document.querySelectorAll('a[href*="tel:"]').forEach(link => {
    link.href = `tel:${config.phone1_full}`;
  });

  const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(config.google_maps_query)}`;
  document.querySelectorAll('a[href*="maps.google.com"]').forEach(link => {
    link.href = mapsUrl;
  });

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

// ============ FAQ ACCORDION ============
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach(faq => {
      faq.classList.remove('open');
      const button = faq.querySelector('.faq-question');
      if (button) button.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

// ============ COMBO SCROLLING ============
const comboRail = document.getElementById('comboRail');
const comboLeft = document.querySelector('.combo-scroll-arrow.left');
const comboRight = document.querySelector('.combo-scroll-arrow.right');

if (comboRail && comboLeft && comboRight) {
  const amount = 320;
  comboLeft.addEventListener('click', () => {
    comboRail.scrollBy({ left: -amount, behavior: 'smooth' });
  });
  comboRight.addEventListener('click', () => {
    comboRail.scrollBy({ left: amount, behavior: 'smooth' });
  });
}

// ============ ANALYTICS & TRACKING (OPTIONAL) ============
document.querySelectorAll('.btn, .sticky-btn, .nav-cta, .see-all-reviews, .contact-lines a').forEach(btn => {
  btn.addEventListener('click', function() {
    const btnText = this.textContent.trim();
    const btnUrl = this.href || 'no-href';
    // console.log('Button clicked:', { text: btnText, url: btnUrl, timestamp: new Date() });
  });
});