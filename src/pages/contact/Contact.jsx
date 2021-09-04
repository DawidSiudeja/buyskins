import React from "react";
import './contact.css';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="contact">
      <div className="pagewidth">
        <h2>Kontakt</h2>
        <p>
          Postaramy się odpowiedź jak najszybciej - codziennie czytamy nasze skrzynki pocztowe i chętnie pomożemy z każdym problemem.
        </p>
        <br/>
        <h4>Ogólne sprawy dot. strony / raporty o błędach</h4>
        <p><a className="linkcontact" href="mailto:buyskins.csgo.official@gmail.com"><AlternateEmailIcon/> buyskins.csgo.official@gmail.com</a></p>
        <br/>
        <h4>Zapytania biznesowe / Partnerstwo / Reklama</h4>
        <p><a className="linkcontact" href="mailto:buyskins.csgo.official@gmail.com"><AlternateEmailIcon/> buyskins.csgo.official@gmail.com</a></p>
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;