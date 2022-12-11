import React from "react";
import Container from "../../components/Container";
import PriceSection from './PricesSection';
import HowSection from './howSection';
import HeaderSection from './HeaderSection';
import UsPage from '../us/index';

const LandingPage = (props) => {

  return (
    <Container>
        <div className="container text-center items-center content-center max-w-5xl">
          
          <HeaderSection locale={props.locale}/>

          <HowSection locale={props.locale}/>

          <UsPage locale={props.locale} />

          {/*<PriceSection locale={props.locale} />*/}

        </div>
    </Container>
  )
}

export default LandingPage