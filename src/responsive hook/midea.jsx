import React, { useEffect, useState } from "react";

function Mediahook(quary) {
    let [midea, setmedai] = useState(false)
    useEffect(() => {
        let media3 = window.matchMedia(`(max-width: ${quary})`)
        const handelchange = () => (setmedai(media3.matches))
        handelchange()
        media3.addEventListener('change', handelchange())
        return () => media3.removeEventListener('change', handelchange())
    }, [])
    return midea
}

export { Mediahook };

