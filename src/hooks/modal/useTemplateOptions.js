import React, { useState } from 'react'

const initialOptions = [
    { id: 1, label: "Plantilla 1", val: 1 },
    { id: 2, label: "Plantilla 2", val: 2 },
  ]

export const useTemplateOptions = () => {

    const [options, setOptions] = useState(initialOptions);

    return {
        options
    }

}
