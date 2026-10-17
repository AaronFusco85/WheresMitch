// ─────────────────────────────────────────────────────────────
//  Where in the World is Mitch? — settings
//  Fill these in (see README.md). Both keys are meant to be public
//  in a web app; you protect them with referrer restrictions and
//  Firestore rules, not by hiding them.
// ─────────────────────────────────────────────────────────────
window.MITCH_CONFIG = {
  // Google Cloud → APIs & Services → Credentials. Enable "Maps JavaScript API"
  // and "Geocoding API". Restrict to your site's URL (HTTP referrer).
  googleMapsApiKey: 'AIzaSyBe0RDqfGJSU-kqkgagUVjUDESwEHw8KqE',

  // Optional: a Map ID from Google Cloud → Map Management (needed for custom
  // cloud styling). 'DEMO_MAP_ID' works for development.
  mapId: 'DEMO_MAP_ID',

  // Firebase console → Project settings → Your apps → Web app → Config
  firebase: {
    apiKey: 'AIzaSyDRFTJdSrorpa6pj-rIfGnVdJRKIlj_hRQ',
    authDomain: 'wheresmitch.firebaseapp.com',
    projectId: 'wheresmitch',
    appId: '1:912680177767:web:a7d84f0eb72704360104c2'
  },

  // Sightings that are always on the map (they live here, not in the database).
  // Edit the time/coordinates freely.
  seedSightings: [
    {
      id: 'seed-brasserie-boulud',
      lat: 40.7717, lng: -73.9822,            // approx. 1900 Broadway, Manhattan
      title: 'Mitch at Brasserie Boulud',
      note: 'The first confirmed sighting! Spotted at Brasserie Boulud near Lincoln Center, Manhattan.',
      reporter: 'HQ',
      spotted_at: '2026-10-16T12:00:00-04:00'  // TODO: set the real date/time
    }
  ]
};
