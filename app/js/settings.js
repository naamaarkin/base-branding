module.exports = {
  isDevel: true,
  inMante: false, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ['en', 'es', 'zh', 'sw', 'he'],
  mainDomain: 'cs-smnh.me', // used for cookies (without http/https)
  mainLAUrl: 'https://cs-smnh.me',
  baseFooterUrl: 'https://branding.cs-smnh.me/brand-2023',
  theme: 'clean',
  services: {
    collectory: { url: 'https://collections.cs-smnh.me', title: 'Collections' },
    biocache: { url: 'https://records.cs-smnh.me', title: 'Occurrence records' },
    biocacheService: { url: 'https://records-ws.cs-smnh.me', title: 'Occurrence records webservice' },
    bie: { url: 'https://species.cs-smnh.me', title: 'Species' },
    // This bieService var is used by the search autocomplete. With your BIE
    bieService: { url: 'https://species-ws.cs-smnh.me', title: 'Species webservice' },
    regions: { url: 'https://regions.ala.org.au', title: 'Regions' },
    lists: { url: 'https://lists.cs-smnh.me', title: 'Species List' },
    spatial: { url: 'https://spatial.cs-smnh.me', title: 'Spatial Portal' },
    images: { url: 'https://images.cs-smnh.me', title: 'Images Service' },
    cas: { url: 'https://auth.cs-smnh.me', title: 'CAS' }
  },
  otherLinks: [
    { title: 'Datasets', url: 'https://collections.cs-smnh.me/datasets' },
    { title: 'Explore your area', url: 'https://records.cs-smnh.me/explore/your-area/' },
    { title: 'twitter', url: '', icon: 'twitter' }
  ]
}
