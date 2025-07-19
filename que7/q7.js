(async () => {
  const fetch = (await import('node-fetch')).default;

  async function fetchGoogleHomepage() {
    try {
      const response = await fetch('https://www.google.com');
      const html = await response.text();
      console.log(html);
    } catch (error) {
      console.error('Error fetching Google homepage:', error.message);
    }
  }

  fetchGoogleHomepage();
})();