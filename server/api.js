import path from 'path';

export default (app) => {
  app.get('/api-test', (req, res) => res.json({
    success: "This page is working"
  }));
}