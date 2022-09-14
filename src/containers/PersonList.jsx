import React, { useContext, useEffect, useState } from 'react';
import '@styles/PersonList.scss';
import PersonItem from '@components/PersonItem';
import useGetPersons from '../hooks/useGetPersons';
import Modal from '@components/modal/Modal';
import { WhatsappChat } from '@components/WhatsappChat';
//Hooks
import { useTemplateMessage } from '@hooks/modal/useTemplateMessage';
import { useTemplateOptions } from '@hooks/modal/useTemplateOptions';
import { useTemplateImages } from '@hooks/modal/useTemplateImages';

const API = 'https://api.escuelajs.co/api/v1/users';
const usersAPI = "https://script.google.com/macros/s/AKfycbxxf-MmL-b1LWthxLVXAKT6ga5AVpddLHvTwpC2MfoGXIGgbxRyenI6KEbTq_Yvi8YV/exec";

const PersonList = () => {

  const templateWhatsapp = useTemplateMessage();
  const templateWhatsappOptions = useTemplateOptions();
  const templateWhatsappImages = useTemplateImages();

  const templateEmail = useTemplateMessage();
  const templateEmailOptions = useTemplateOptions();
  const templateEmailImages = useTemplateImages();

  const persons = useGetPersons(usersAPI);
  // const persons = [
  //   { id: 1, name: "Hugo", age: 22, avatar: "https://lh3.googleusercontent.com/-9dRXWB-v4gs/Xxs5dCtDNHI/AAAAAAAAAWs/O4rTKicZrAgkhU8pzOmoQX_mi7GDuOlAACK8BGAsYHg/s0/2020-07-24.png" },
  //   { id: 2, name: "Miguel", age: 30, avatar: "https://lh3.googleusercontent.com/-9dRXWB-v4gs/Xxs5dCtDNHI/AAAAAAAAAWs/O4rTKicZrAgkhU8pzOmoQX_mi7GDuOlAACK8BGAsYHg/s0/2020-07-24.png" }
  // ]

  return (
    <div className="PersonList">
      {persons.map(person => (
        <PersonItem
          person={person}
          key={`person-${person.id}`}
          wtemplate={templateWhatsapp}
          etemplate={templateEmail} />
      ))}

      {templateWhatsapp.template.show &&
        <Modal
          title="Personaliza tu mensaje de whatsapp"
          message={templateWhatsapp}
          options={templateWhatsappOptions}
          images={templateWhatsappImages}
          isWhatsapp={true}
        >
          <WhatsappChat message={templateWhatsapp} />
        </Modal>
      }
      {templateEmail.template.show &&
        <Modal
          title="Personaliza tu mensaje de correo"
          message={templateEmail}
          options={templateEmailOptions}
          images={templateEmailImages}
        >

        </Modal>
      }

    </div>

  )
}

export default PersonList;