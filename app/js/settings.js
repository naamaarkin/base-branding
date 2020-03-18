module.exports = {
  isDevel: true,
  inMante: false, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ['en', 'sw'],
  mainDomain: 'freshwater.sua.ac.tz', // used for cookies (without http/https)
  mainLAUrl: 'https://freshwater.sua.ac.tz',
  baseFooterUrl: 'https://tanbif.ditnet.ac.tz/tz-ui-2020-freshwater',
  services: {
    collectory: { url: 'https://collections.l-a.site', title: 'Collections' },
    biocache: { url: 'https://biocache.l-a.site', title: 'Occurrence records' },
    biocacheService: { url: 'https://biocache-ws.l-a.site', title: 'Occurrence records webservice' },
    bie: { url: 'https://especies.gbif.es', title: 'Species' },
    bieDis: { url: 'https://species.l-a.site', title: 'Species' },
    regions: { url: 'https://regions.l-a.site', title: 'Regions' },
    lists: { url: 'https://lists.l-a.site', title: 'Species List' },
    spatial: { url: 'https://spatial.l-a.site', title: 'Spatial Portal' },
    images: { url: 'https://images.l-a.site', title: 'Images Service' },
    cas: { url: 'https://auth.l-a.site', title: 'CAS' }
  },
  otherLinks: [
    { title: 'Datasets', url: 'https://collections.tanbif.ditnet.ac.tz/datasets' },
    { title: 'Explore your area', url: 'http://records.tanbif.ditnet.ac.tz/explore/your-area/' },
    { title: 'Datasets', url: 'https://collections.tanbif.ditnet.ac.tz/datasets' },
    { title: 'twitter', url: '', icon: 'twitter' }
  ]
}
