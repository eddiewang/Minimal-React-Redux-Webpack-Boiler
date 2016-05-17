import path from 'path';

export default (app) => {
  app.get('/test', (req, res) => res.json({
    success: "API Server is working!"
  }));
}