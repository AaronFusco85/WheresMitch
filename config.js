// ─────────────────────────────────────────────────────────────
//  Where in the World is Mitch? — settings
//  Fill these in (see README.md). Both keys are meant to be public
//  in a web app; you protect them with referrer restrictions and
//  Firestore rules, not by hiding them.
// ─────────────────────────────────────────────────────────────
window.MITCH_CONFIG = {
  // Google Cloud → APIs & Services → Credentials. Enable "Maps JavaScript API"
  // and "Geocoding API". Restrict to your site's URL (HTTP referrer).
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',

  // Optional: a Map ID from Google Cloud → Map Management (needed for custom
  // cloud styling). 'DEMO_MAP_ID' works for development.
  mapId: 'DEMO_MAP_ID',

  // Firebase console → Project settings → Your apps → Web app → Config
  firebase: {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT',
    appId: 'YOUR_APP_ID'
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
