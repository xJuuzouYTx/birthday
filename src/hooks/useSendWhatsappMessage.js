import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://graph.facebook.com/v13.0/102135105863993/messages";
const TOKEN = "EAAH5FNemOZCgBAHkY6nBw7cNxE84sOnlUtHZA6pIf0PbvuUMK21GKWblJ1Fb6WvfrxY09hLZAtS4I4mEL7ZADQOCvip8HolDI53k4fiHQCfWgq0dNnoAZCxofo7Cwt6xg2hXbZBLi3FhSKHT5VgXdNQRulJ7sNARLB5JhIc4xY46qwb6nsBIT9vtIRir1MZCdVPGLd2muXifAZDZD";

const config = {
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }
};

const useSendWhatsappMessage = () => {
    const [response, setResponse] = useState([]);

    const sendWhatsappMessageFromTemplate = async (title, image, body, phone, callbackSuccess, callbackFailed) => {
        console.log(phone);
        await axios.post(BASE_URL, {
            "messaging_product": "whatsapp",
            "to": phone,
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US"
                }
            }
        }, config).then((res) => {
            callbackSuccess();
        }).catch((err) => {
            callbackFailed();
        });
        
    }

    return { response, sendWhatsappMessageFromTemplate };
}

export default useSendWhatsappMessage;