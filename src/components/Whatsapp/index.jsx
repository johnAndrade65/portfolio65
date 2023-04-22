import React from 'react';
import WhatsappIcon from '../../assets/whatsapp.png';

const Whatsapp = () => {
    return (
        <div>
            <a className='whatsapp-icon' href='https://wa.me/5588997290392?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20por%20que%20tenho%20uma%20proposta%20para%20voc%C3%AA!%20gostaria%20de%20saber%20mais%20sobre%3F'>
                <img src={WhatsappIcon} alt='Whatsapp-icon' />
            </a>
        </div>
    )
}

export default Whatsapp;