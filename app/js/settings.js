module.exports = {
  isDevel: true,
  inMante: false, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ['en', 'es', 'zh', 'sw'],
  mainDomain: 'citizen-science.smnh.tau.ac.il', // used for cookies (without http/https)
  mainLAUrl: 'https://citizen-science.smnh.tau.ac.il',
  baseFooterUrl: 'https://branding.citizen-science.smnh.tau.ac.il/brand-2023',
  theme: 'clean',
  services: {
    collectory: { url: 'https://collections.citizen-science.smnh.tau.ac.il', title: 'Collections' },
    biocache: { url: 'https://records.citizen-science.smnh.tau.ac.il', title: 'Occurrence records' },
    biocacheService: { url: 'https://records-ws.citizen-science.smnh.tau.ac.il', title: 'Occurrence records webservice' },
    bie: { url: 'https://species.citizen-science.smnh.tau.ac.il', title: 'Species' },
    // This bieService var is used by the search autocomplete. With your BIE
    bieService: { url: 'https://species-ws.citizen-science.smnh.tau.ac.il', title: 'Species webservice' },
    regions: { url: 'https://regions.ala.org.au', title: 'Regions' },
    lists: { url: 'https://lists.citizen-science.smnh.tau.ac.il', title: 'Species List' },
    spatial: { url: 'https://spatial.citizen-science.smnh.tau.ac.il', title: 'Spatial Portal' },
    images: { url: 'https://images.citizen-science.smnh.tau.ac.il', title: 'Images Service' },
    cas: { url: 'https://auth.citizen-science.smnh.tau.ac.il', title: 'CAS' }
  },
  otherLinks: [
    { title: 'Datasets', url: 'https://collections.citizen-science.smnh.tau.ac.il/datasets' },
    { title: 'Explore your area', url: 'https://records.citizen-science.smnh.tau.ac.il/explore/your-area/' },
    { title: 'twitter', url: '', icon: 'twitter' }
  ]
}
