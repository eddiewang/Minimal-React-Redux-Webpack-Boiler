import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackDevOptions from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import api from './api';

// Declaring express app
const app = express();

// DB Setup (not needed for all apps, so it's commented out)
//mongoose.connect('mongodb://localhost:db_name/collection_name')

// Logging
// Use 'dev' instead for colored concise output
app.use(morgan('combined'))
// bodyParser setting this server for JSON API usage
app.use(bodyParser.json({ type: '*/*' }));

// API
api(app);

// Webpack shit
if(process.env.NODE_ENV === "production"){
  // Still need to change
  console.log('Serving production build');
  // app.use('/', express.static('../assets'));
} else {
  console.log('Starting Webpack Middleware Server');
  const devCompiler = webpack(webpackDevOptions);
  app.use(webpackDevMiddleware(devCompiler, {
    noInfo: true,
    publicPath: webpackDevOptions.output.publicPath
  }));
  app.use(webpackHotMiddleware(devCompiler));
}

//Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('API Server listening on:', port);
