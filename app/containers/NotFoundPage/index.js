/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  Container,
  Row,
} from 'reactstrap'

import messages from './messages';

export default function NotFound() {
  return (
    <div>
      <Container fluid>
        <Header
        />
        <Row className="layout-img-container">
        </Row>
        <h1>Page not found</h1>
      </Container>
      <Footer/>
    </div>
  );
}
