import React from 'react';
import '@styles/PersonItem.scss';
import { IconButton } from '@components/modal/iconButton';
import { useTextFormat } from '@hooks/useTextFormat';

const PersonItem = ({ person, wtemplate, etemplate }) => {

    const { capitalize } = useTextFormat();

    return (
        <div className="PersonItem">
            <img className="personImg" src={person.avatar} alt="" />
            <div className="personInfo">
                <span className="personName">{capitalize(person.name)}</span>
                <span className="personDate">{person.age} años</span>
            </div>
            <IconButton iconName={"fa-brands fa-whatsapp"} template={wtemplate} person={person}/>
            <IconButton iconName={"fa-solid fa-envelope"} template={etemplate} person={person}/>
        </div>
    )
}

export default PersonItem