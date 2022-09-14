import React, { useState } from 'react'

export const useTextFormat = () => {

    const [ state, setState ] = useState();

    const capitalize = (str) => {
        var arr = str.toLowerCase().split(" ");
        if (arr.length == 4 || arr.length == 3) {
            arr = [arr[0], arr[2]];
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        return arr.join(" ");
    }

    return (
        { state, capitalize }
    )
}
