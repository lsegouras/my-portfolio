import React from "react";
import "../styles/Form.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubmitMsg from "./SubmitMsg";

const Form = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_uotrjxf",
        "template_qc0f77j",
        form.current,
        "v4D2j724xG9pz5XuQ"
      );

      form.current.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };

  const handleButtonClick = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <form
        className='form-container'
        ref={form}
        onSubmit={sendEmail}
        form
        class='quotation-form'
      >
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Digite seu nome'
          required
        />
        <input
          type='text'
          name='surname'
          id='surname'
          placeholder='Digite seu sobrenome'
          required
        />
        <input
          type='text'
          name='company'
          id='company'
          placeholder='Digite o nome de sua empresa'
          required
        />
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Digite seu email (email@email.com)'
          required
        />
        <input
          type='tel'
          name='tel'
          id='tel'
          placeholder='Digite seu telefone (XX)XXXXX-XXXX'
          required
        />
        <textarea
          type='text'
          name='message'
          id='message'
          rows={7}
          placeholder='Digite sua mensagem'
          required
        ></textarea>
        <button class='btn-submit' type='submit'>
          Enviar
        </button>
      </form>
      {isSubmitted && <SubmitMsg />}{" "}
      {!isSubmitted && (
        <button hidden className='form-btn-submit' onClick={handleButtonClick}>
          Mostrar SubmitMsg
        </button> 
      )}{" "}
    </div>
  );
};

export default Form;
