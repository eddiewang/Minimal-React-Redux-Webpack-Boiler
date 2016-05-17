import React from 'react';
import { Router } from 'react-router';
import MainContainer from '../containers/MainContainer';

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
      </Router>
    </Router>
  )
}