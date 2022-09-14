import React, { useContext } from 'react';
import '@styles/IconButton.scss';

export const IconButton = ({ iconName, template, person }) => {

    const hanldeClick = () => {
        console.log(person);
        template.setData(
            {
                ...template.template,
                show: true,
                user: {
                    email: person.email,
                    name: person.name,
                    phone: person.phone
                }
            }
        );

    }

    return (
        <button className="personGratula" onClick={hanldeClick}><i className={iconName} /></button>
    )
}
