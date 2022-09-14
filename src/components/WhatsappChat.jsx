import React, { useEffect } from 'react';
import '@styles/WhatsappChat.scss';
import arrow from '@icons/arrow.png';
import phone from '@icons/phone.png';
import video from '@icons/video.png';
import more from '@icons/more.png';
import viewed from '@icons/check-1.png';
import send from '@icons/send.svg';
import { useTextFormat } from '@hooks/useTextFormat';

export const WhatsappChat = ({ message }) => {

    const { capitalize } = useTextFormat();

    const handleOnchange = (event) => {
        var value = event.target.value;
        message.setData({ ...message.template, content: { ...message.template.content, body: value } })
    }

    return (
        <div className="WhatsappChat">
            <div className="chat-header">
                <div className="profile">
                    <div className="left">
                        <img src={arrow} className="arrow" />
                        <img src="https://lh3.googleusercontent.com/-9dRXWB-v4gs/Xxs5dCtDNHI/AAAAAAAAAWs/O4rTKicZrAgkhU8pzOmoQX_mi7GDuOlAACK8BGAsYHg/s0/2020-07-24.png" className="pp" />
                        <div className='user'>
                            <h2>{capitalize(message.template.user.name)}</h2>
                            <span>online</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src={video} className="icon" />
                        <img src={phone} className="icon" />
                        <img src={more} className="icon" />
                    </div>
                </div>
            </div>
            <div className="chat-box">
                <div className="chat-r">
                    <div className="sp" />
                    <div className="mess mess-r">
                        <p>
                            {/* <strong>Este es un ejemplo</strong><br /> */}
                            <b>{message.template.content.title}</b>
                        </p>
                        <img src={message.template.content.image} className="img_chat" />
                        <p>
                            {/* <strong>Este es un ejemplo</strong><br /> */}
                            {message.template.content.body}
                        </p>
                        <div className="check">
                            <span>4:00 PM</span>
                            <img src={viewed} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-footer">
                <textarea placeholder="Escribe un mensaje" defaultValue={""} onChange={handleOnchange} />
                <div className="send-btn">
                    <img src={send} className="send-icon" />
                </div>
            </div>
        </div>

    )
}
