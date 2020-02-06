module.exports = {
  isDevel: true,
  enabledLangs: ['en', 'es', 'zh'],
  mainDomain: 'l-a.site', // used for cookies (without http/https)
  mainLAUrl: 'https://l-a.site',
  services: {
    collectory: { url: 'https://collections.l-a.site', title: 'Collections' },
    biocache: { url: 'https://biocache.l-a.site', title: 'Occurrence records' },
    bie: { url: 'https://especies.gbif.es', title: 'Species' },
    bieDis: { url: 'https://species.l-a.site', title: 'Species' },
    regions: { url: 'https://regions.l-a.site', title: 'Regions' },
    lists: { url: 'https://lists.l-a.site', title: 'Species List' },
    spatial: { url: 'https://spatial.l-a.site', title: 'Spatial Portal' },
    images: { url: 'https://images.l-a.site', title: 'Images Service' },
    cas: { url: 'https://auth.l-a.site', title: 'CAS' }
  },
  otherLinks: [
    { title: 'Datasets', url: 'https://collections.l-a.site/datasets' },
    { title: 'Explore your area', url: 'http://biocache.l-a.site/explore/your-area/' },
    { title: 'Datasets', url: 'https://collections.l-a.site/datasets' },
    { title: 'twitter', url: '', icon: 'twitter' }
  ]
}
