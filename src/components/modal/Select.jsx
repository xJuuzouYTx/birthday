import React, { useEffect } from 'react';
import '@styles/Select.scss';
import { useTemplateMessage } from '@hooks/modal/useTemplateMessage';
import useTemplateImages from '@hooks/modal/useTemplateImages';

export const Select = ({ options, message, images }) => {

    const handleChangeTemplate = (e) => {
        message.setData({...message.template, content: {...message.template.content, image: images.images[e.target.value]}});
    }

    return (
        <div className='Select'>
            <label className="label-select" htmlFor="slct">
                <select id="slct" required="required" onChange={handleChangeTemplate}>
                    <option value disabled="disabled">Selecciona una plantilla</option>
                    {options.options.map(option => (
                        <option value={option.val} key={`slct-opt-${option.id}`}>{option.label}</option>
                    ))}
                </select>
                <svg>
                    <use xlinkHref="#select-arrow-down" />
                </svg>
            </label>
            <svg className="sprites">
                <symbol id="select-arrow-down" viewBox="0 0 10 6">
                    <polyline points="1 1 5 5 9 1" />
                </symbol>
            </svg>
        </div>
    )
}
