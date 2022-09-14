import React, { useRef } from 'react';
import '@styles/Modal.scss';
import { Select } from '@components/modal/Select';
import toast, { Toaster } from 'react-hot-toast';
import useSendWhatsappMessage from '@hooks/useSendWhatsappMessage';

const toastOptions = {
  duration: 4000,
  position: 'top-center',
  style: {},
  className: '',
  icon: '👏',
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  }
}

const Modal = ({ title, message, options, images, children, isWhatsapp }) => {

  const { sendWhatsappMessageFromTemplate } = useSendWhatsappMessage();

  const templateData = useRef(null);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const formData = new FormData(templateData.current);
    const data = {
      title: formData.get('title'),
      content: formData.get('content')
    }
    console.log(message);

    if (isWhatsapp) {
      await sendWhatsappMessageFromTemplate("test", "image", "body", message.template.user.phone, () => {
        toast.success("¡El mensaje fue enviado correctamente!", toastOptions);
        message.closeModal();
      },
        () => {
          toast.error("¡Oh,no! Ocurrió un error al enviar el mensaje!", toastOptions);
        }
      )
    }
  }

  const handleCloseModal = (event) => {
    event.preventDefault();
    message.closeModal();
  }

  const handleOnchange = (event) => {
    event.preventDefault();
    const formData = new FormData(templateData.current);
    message.setData({ ...message.template, content: { ...message.template.content, title: formData.get('title') } });
  }

  return (
    <div className='Modal'>
      <form action="/" className="modal-container" ref={templateData}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className='modal-close' onClick={handleCloseModal}>X</button>
        </div>
        <div className="modal-body">
          <Select images={images} message={message} options={options} />
          <div className="modal-input">
            <span><b>Titulo:</b></span>
            <input placeholder={"Tu amigo ## quiere felicitarte!"} name="title" className="modal-title" onChange={handleOnchange} />
          </div>
          {
            children
          }
        </div>
        <div className="modal-actions">
          <button className='modal-cancel' onClick={handleCloseModal}>Cancelar</button>
          <button className='modal-send' onClick={handleSendMessage}>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Modal;