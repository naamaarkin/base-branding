module.exports = {
  isDevel: true,
  inMante: false, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ['en', 'sw'],
  mainDomain: 'freshwater.sua.ac.tz', // used for cookies (without http/https)
  mainLAUrl: 'https://freshwater.sua.ac.tz',
  baseFooterUrl: 'https://tanbif.ditnet.ac.tz/tz-ui-2020-freshwater',
  services: {
    collectory: { url: 'https://collections.tanbif.ditnet.ac.tz', title: 'Collections' },
    biocache: { url: 'https://freshwater.sua.ac.tz', title: 'Occurrence records' },
    bie: { url: 'https://species.tanbif.ditnet.ac.tz', title: 'Species' },
    regions: { url: 'https://regions.tanbif.ditnet.ac.tz', title: 'Regions' },
    lists: { url: 'https://lists.tanbif.ditnet.ac.tz', title: 'Species List' },
    spatial: { url: 'https://spatial.tanbif.ditnet.ac.tz', title: 'Spatial Portal' },
    images: { url: 'https://images.tanbif.ditnet.ac.tz', title: 'Images Service' },
    cas: { url: 'https://auth.tanbif.ditnet.ac.tz', title: 'CAS' }
  },
  otherLinks: [
    { title: 'Datasets', url: 'https://collections.tanbif.ditnet.ac.tz/datasets' },
    { title: 'Explore your area', url: 'http://records.tanbif.ditnet.ac.tz/explore/your-area/' },
    { title: 'Datasets', url: 'https://collections.tanbif.ditnet.ac.tz/datasets' },
    { title: 'twitter', url: '', icon: 'twitter' }
  ]
}
