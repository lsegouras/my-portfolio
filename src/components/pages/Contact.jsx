import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import Form from "../utils/Form";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <section className='contact'>
      <h5>Entre em Contato</h5>
      <h2>Contate-me</h2>

      <div className='contact-container'>
        <div className='contact-types'>
          <article className='contact-type'>
            <BsWhatsapp className="contact-icon"/>
            <h4>WhatsApp</h4>
            <a className="btn-contact"
              href='https://wa.me/5511982224644'
              target='_blank'
              rel='noreferrer'
            >
              Enviar
            </a>
          </article>
          <article className='contact-type'>
            <MdOutlineMail className="contact-icon"/>
            <h4>Email</h4>
            <a className="btn-contact"
              href='mailto:lausegouras@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Enviar
            </a>
          </article>
          <article className='contact-type'>
            <PiMessengerLogoBold className="contact-icon"/>
            <h4>Messenger</h4>
            <a className="btn-contact"
              href='https://www.facebook.com/laura.segouras'
              target='_blank'
              rel='noreferrer'
            >
              Enviar
            </a>
          </article>
        </div>
        <Form className="contact-form"/>
      </div>
    </section>
  );
};

export default Contact;
