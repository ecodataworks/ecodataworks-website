export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Team', href: '/team' },
    { text: 'Portfolio', href: '/portfolio' },
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
        { text: 'Portfolio', href: '/portfolio' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: '/blog' },
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
  footNote: `© ${new Date().getFullYear()} · Your Environmental Data Consulting Co. All rights reserved.`,
};
