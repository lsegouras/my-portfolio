import React from 'react'
import { HiOutlineEmojiSad } from "react-icons/hi";

const ErrorMsg = () => {
  return (
    <div>
        <h1 class="submit-msg-title">Parece que houve um erro no envio de sua mensagem <HiOutlineEmojiSad /> </h1>
        <p class="submit-msg-txt">Por favor, escolha outra forma de contato (email, whatsapp ou messenger)</p>
    </div>
  )
}

export default ErrorMsg