// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Common';

const FooterContainer = styled.footer`
  padding: 4rem 1rem 2rem 1rem;
  background: #f6f7fb; /* Light background like the screenshot */
  color: #586380;
  font-size: 0.875rem;

  a {
    color: #586380;
    text-decoration: none;
    line-height: 2;
    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: #282e3e;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const QRSection = styled.div`
  h4 {
    color: #282e3e;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: var(--border-radius);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #d9ddee;
  padding-top: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h4 {
    color: #282e3e;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const CountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    font-weight: 500;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h4>About us</h4>
          <a href="#">About Quizlet</a>
          <a href="#">How Quizlet works</a>
          <a href="#">Careers</a>
          <a href="#">Advertise with us</a>
        </FooterColumn>
        <FooterColumn>
          <h4>For students</h4>
          <a href="#">Flashcards</a>
          <a href="#">Test</a>
          <a href="#">Learn</a>
          <a href="#">Study groups</a>
          <a href="#">Solutions</a>
          <a href="#">Modern Learning Lab</a>
          <a href="#">Quizlet Plus</a>
        </FooterColumn>
        <FooterColumn>
          <h4>For teachers</h4>
          <a href="#">Live</a>
          <a href="#">Blog</a>
          <a href="#">Be the Change</a>
          <a href="#">Quizlet Plus for teachers</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Resources</h4>
          <a href="#">Help center</a>
          <a href="#">Sign up</a>
          <a href="#">Honor code</a>
          <a href="#">Community guidelines</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Language</h4>
          <a href="#">English (USA)</a>
          <hr style={{ border: 'none', borderTop: '1px solid #d9ddee', margin: '1rem 0' }} />
          <QRSection>
            <h4>Get the app</h4>
            <img src="https://i.imgur.com/L14xfeT.png" alt="QR Code" />
          </QRSection>
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        <h4>Country</h4>
        <CountryList>
          <a href="#">United States</a>
          <a href="#">Canada</a>
          <a href="#">United Kingdom</a>
          <a href="#">Australia</a>
          <a href="#">New Zealand</a>
          <a href="#">Germany</a>
          <a href="#">France</a>
          <a href="#">Spain</a>
          <a href="#">Italy</a>
          <a href="#">Japan</a>
        </CountryList>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;