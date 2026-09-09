const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const responsiveCSS = `
/* ==========================================================================
   ADVANCED MOBILE & RESPONSIVE ENGINE (320px to 1080px)
   ========================================================================== */

/* Universal Mobile Safety */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
  -webkit-tap-highlight-color: transparent;
}

/* Tablet & Smaller Screens (<= 1080px) */
@media (max-width: 1080px) {
  :root {
    --header-height: 72px;
  }

  .site-header {
    height: var(--header-height);
    background: rgba(7, 20, 38, 0.96) !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--gold-border);
  }

  .header-container {
    height: 100%;
    padding: 0 1rem;
  }

  .brand-logo {
    gap: 0.75rem;
  }

  .logo-img-wrapper {
    width: 48px !important;
    height: 48px !important;
  }

  .brand-title {
    font-size: 1.1rem !important;
    line-height: 1.2;
  }

  .brand-sub {
    display: none;
  }

  /* Full Screen Mobile Navigation Drawer */
  .nav-menu {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100dvh - var(--header-height));
    background: rgba(6, 17, 33, 0.98);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    flex-direction: column;
    align-items: stretch;
    padding: 1.75rem 1.25rem 3.5rem;
    gap: 0.85rem;
    border-bottom: 2px solid var(--gold-border);
    transform: translateY(-120%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
  }

  .nav-menu.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .nav-link {
    font-size: 1.1rem;
    font-weight: 700;
    width: 100%;
    text-align: start;
    padding: 0.85rem 1.15rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(212, 175, 55, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.25s ease;
  }

  [dir="rtl"] .nav-link {
    text-align: right;
  }

  .nav-link:hover, .nav-link.active {
    background: rgba(212, 175, 55, 0.18);
    border-color: var(--gold-primary);
    color: #ffffff;
    transform: translateX(4px);
  }

  [dir="rtl"] .nav-link:hover, [dir="rtl"] .nav-link.active {
    transform: translateX(-4px);
  }

  .nav-dropdown-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .nav-dropdown-menu {
    position: static !important;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    background: rgba(11, 31, 58, 0.6) !important;
    border: 1px solid rgba(212, 175, 55, 0.2) !important;
    border-radius: 12px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    box-shadow: none !important;
    display: none;
    flex-direction: column;
    gap: 0.4rem;
  }

  .nav-dropdown-wrapper.open .nav-dropdown-menu {
    display: flex;
  }

  .nav-dropdown-item {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
  }

  .mobile-menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(11, 31, 58, 0.85);
    border: 1.5px solid var(--gold-border);
    border-radius: 10px;
    color: var(--gold-bright);
    font-size: 1.35rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .mobile-menu-btn:hover, .mobile-menu-btn.active {
    background: var(--gold-gradient);
    color: #071426;
    border-color: #ffffff;
  }

  /* Hero Section Responsiveness */
  .hero-section {
    padding-top: calc(var(--header-height) + 1.5rem);
    padding-bottom: 2.5rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-content {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .hero-badge {
    font-size: 0.82rem;
    padding: 0.4rem 0.9rem;
    white-space: normal;
    text-align: center;
    line-height: 1.4;
    max-width: 100%;
  }

  .hero-title {
    font-size: clamp(1.85rem, 6vw, 2.8rem);
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 600px;
    margin-inline: auto;
    margin-bottom: 1.75rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.85rem;
    width: 100%;
  }

  .hero-visual {
    max-width: 480px;
    width: 100%;
    margin-inline: auto;
  }

  /* Stats Bar on Mobile & Tablet */
  .hero-stats-bar {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
    padding: 1.25rem 1rem !important;
    border-radius: 16px !important;
    background: rgba(11, 31, 58, 0.8) !important;
    backdrop-filter: blur(16px);
    border: 1px solid var(--gold-border) !important;
    margin-top: 1.5rem;
  }

  .hero-stat-item {
    text-align: center;
    padding: 0.5rem;
  }

  .hero-stat-item::after {
    display: none !important;
  }

  .hero-stat-item .stat-number {
    font-size: 1.75rem !important;
    font-weight: 900;
  }

  .hero-stat-item .stat-label {
    font-size: 0.8rem !important;
    color: var(--text-secondary);
  }

  /* Grids & Cards on Tablets */
  .about-grid, .inquiry-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

/* Mobile Screens (<= 768px) */
@media (max-width: 768px) {
  :root {
    --header-height: 66px;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-badge {
    font-size: 0.78rem;
    padding: 0.35rem 0.8rem;
  }

  .section-title {
    font-size: 1.65rem;
    line-height: 1.3;
  }

  .section-sub {
    font-size: 0.92rem;
  }

  /* Trade Tabs Bar Mobile */
  .trade-tabs-bar {
    width: 100%;
    max-width: 100%;
    display: flex;
    padding: 4px;
    border-radius: 50px;
    margin-bottom: 1.25rem;
  }

  .trade-tab-btn {
    flex: 1;
    justify-content: center;
    padding: 0.65rem 0.75rem;
    font-size: 0.88rem;
    gap: 0.4rem;
  }

  .trade-tab-icon {
    font-size: 1.1rem;
  }

  /* Touch-Scrollable Subfilter Chips */
  .products-subfilter-bar {
    display: flex;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    padding: 0.35rem 0.25rem 1rem !important;
    gap: 0.5rem !important;
    margin-bottom: 1.75rem !important;
    scrollbar-width: none;
  }

  .products-subfilter-bar::-webkit-scrollbar {
    display: none;
  }

  .subfilter-btn {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
    font-size: 0.82rem;
    padding: 0.45rem 0.95rem;
    border-radius: 30px;
  }

  /* Products Grid on Mobile Phones */
  .products-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }

  .product-card {
    border-radius: 16px;
  }

  .product-card-img-wrapper {
    height: 220px !important;
  }

  .product-card-body {
    padding: 1.25rem 1rem !important;
  }

  .product-name {
    font-size: 1.15rem !important;
  }

  .product-card-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1rem;
  }

  .product-card-actions .btn {
    width: 100%;
    min-height: 44px;
    justify-content: center;
    font-size: 0.92rem;
  }

  /* Form & Inquiries */
  .form-row {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }

  .inquiry-wrapper {
    padding: 1.75rem 1.15rem !important;
    border-radius: 18px;
  }

  .form-control, .form-select {
    font-size: 16px !important; /* Prevents auto-zoom on iOS */
    min-height: 48px;
    padding: 0.75rem 1rem;
    border-radius: 10px;
  }

  /* Modal Bottom-Sheet Behavior on Mobile */
  .modal-backdrop {
    padding: 0;
    align-items: flex-end !important;
  }

  .modal-dialog {
    width: 100% !important;
    max-width: 100% !important;
    max-height: 90dvh !important;
    margin: 0 !important;
    border-radius: 24px 24px 0 0 !important;
    border-bottom: none !important;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.8) !important;
  }

  .modal-close-btn {
    top: 1rem !important;
    right: 1rem !important;
    width: 38px !important;
    height: 38px !important;
    background: rgba(255, 255, 255, 0.15) !important;
    font-size: 1.25rem !important;
    border-radius: 50% !important;
  }

  [dir="rtl"] .modal-close-btn {
    right: auto !important;
    left: 1rem !important;
  }

  .modal-content-body {
    padding: 1.25rem 1.15rem 2.5rem !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
  }

  .modal-product-img {
    height: 200px !important;
    border-radius: 14px;
  }

  .modal-specs-grid {
    grid-template-columns: 1fr !important;
    gap: 0.65rem !important;
  }

  /* Floating Action Buttons Mobile Placement */
  .floating-whatsapp-btn {
    bottom: 16px !important;
    right: 16px !important;
    width: 52px !important;
    height: 52px !important;
    font-size: 1.6rem !important;
    z-index: 995 !important;
  }

  [dir="rtl"] .floating-whatsapp-btn {
    right: auto !important;
    left: 16px !important;
  }

  .scroll-top-btn {
    bottom: 76px !important;
    right: 18px !important;
    width: 42px !important;
    height: 42px !important;
    font-size: 1.1rem !important;
    z-index: 990 !important;
  }

  [dir="rtl"] .scroll-top-btn {
    right: auto !important;
    left: 18px !important;
  }

  /* Footer on Mobile */
  .footer-top {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
    text-align: center;
  }

  .footer-corporate-info, .footer-col {
    align-items: center;
  }

  .footer-corp-item {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

/* Extra Small Mobile (< 480px) */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.6rem !important;
  }

  .hero-actions .btn {
    width: 100% !important;
  }

  .hero-stats-bar {
    grid-template-columns: 1fr 1fr !important;
    gap: 0.75rem !important;
  }

  .cert-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

// Replace media queries section in style.css or append cleanly
const responsiveMarker = '/* ==========================================================================\n   RESPONSIVE DESIGN (MEDIA QUERIES)\n   ========================================================================== */';
const markerIdx = css.indexOf(responsiveMarker);

if (markerIdx !== -1) {
  // Keep corporate footer if after
  const corpMarker = '/* ==========================================================================\n   OFFICIAL LETTERHEAD CORPORATE FOOTER ACCENTS';
  const corpIdx = css.indexOf(corpMarker);
  
  let newCss = css.substring(0, markerIdx) + responsiveCSS;
  if (corpIdx !== -1) {
    newCss += '\n' + css.substring(corpIdx);
  }
  fs.writeFileSync(cssPath, newCss, 'utf8');
  console.log('Successfully updated style.css with enhanced mobile responsive engine!');
} else {
  // Append to the end
  css += '\n' + responsiveCSS;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended responsive engine to style.css!');
}
