export default (app) => {
  app.get('/api-test', (req, res) => res.json({
    success: "This page is working"
  }));


  // default 404
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
  });
}