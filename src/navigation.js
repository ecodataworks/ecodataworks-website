export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Team', href: '/team' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'FAQ', href: '/faq' },
  ],
  actions: [{ text: 'Contact Us', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About / Team', href: '/team' },
        { text: 'Services', href: '/services' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FAQ', href: '/faq' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Terms', href: '/terms' },
  ],
  socialLinks: [
    // { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `<div>© ${new Date().getFullYear()} EcoDataWorks. Some rights reserved.</div><div class="mt-1 text-xs opacity-70">Built with <a href="https://github.com/arthelokyo/astrowind" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-700 dark:hover:text-gray-300">AstroWind</a> by onWidget, used under the MIT License.</div>`,
};
