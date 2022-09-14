import { useState } from 'react';

const initialImages = {
    1: "https://media.istockphoto.com/photos/birthday-cake-with-happy-birthday-banner-picture-id1201202312?k=20&m=1201202312&s=612x612&w=0&h=JA1f22KxeNzkF2UFZdrqrXHsoqTmsThJoawJbbTqbAI=",
    2: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/happy-birthday-design-template-af838ab160d11b63fd74ccda06e4d075_screen.jpg?ts=1604808021",
    3: "https://media.istockphoto.com/vectors/happy-birthday-greeting-vector-id1196982382?k=20&m=1196982382&s=612x612&w=0&h=h4LWk9Ma13GV71lB9PFfOQ7BfZ3eLYNUAZLaRimgRRY=",
    4: "https://img.freepik.com/vector-gratis/fondo-hermoso-acuarela-feliz-cumpleanos-globos-coloridos-que-vuelan_1035-20642.jpg?w=2000",
}

export const useTemplateImages = () => {
    const [images, setImages] = useState(initialImages);

    const setTemplateImages = (payload) => {
        setImages(payload);
    }

    return { images, setTemplateImages };
}
