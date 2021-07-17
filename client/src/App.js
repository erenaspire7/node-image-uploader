import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ImageDiv from './components/ImageDiv';
import MyNav from './components/MyNav';
import { Auth0Provider } from '@auth0/auth0-react';
import dotenv from 'dotenv';

dotenv.config();

const App = () => {
  const [uID, setUID] = useState('');

  return (
    <StrictMode>
      <div>
        <MyNav setUID={setUID} />

        <Container>
          <Row className="align-items-center max-height">
            <Col md={{ span: 4, offset: 4 }}>
              <ImageDiv uID={uID} />
            </Col>
          </Row>
        </Container>
      </div>
    </StrictMode>
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    clientId={process.env.AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />,
  </Auth0Provider>,
  document.getElementById('root')
);
