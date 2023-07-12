import React from "react";
import "../styles/Form.css"

const Form = () => {
  return (
    <form className="form-container"
      form
      action='https://api.staticforms.xyz/submit'
      method='POST'
      class='quotation-form'
    >
      <input
        type='hidden'
        name='accessKey'
        value='63fdf955-32cb-4906-9b16-8779325eea4e'
      />

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
      <input
        type='hidden'
        name='redirectTo'
        value='http://127.0.0.1:5500/src/pages/submit-msg.html'
      />
    </form>
  );
};

export default Form;
