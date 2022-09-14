import { useState } from 'react';

const initialTemplate = {
    user: {
        email: "",
        name: "Pedro",
        phone: ""
    },
    content: {
        title: "",
        image: "https://c.tenor.com/BF4LXetTi0kAAAAd/birthday-wishes.gif",
        body: "",
    },
    show: false
}


export const useTemplateMessage = () => {
    const [template, setTemplate] = useState(initialTemplate);

    const setData = (payload) => {
        setTemplate(payload);
    }

    const showModal = () => {
        setTemplate({ ...template, show: true });
    }

    const closeModal = () => {
        setTemplate({ ...initialTemplate, show: false });
    }

    return { template, setData, showModal, closeModal };
}
