import React, { useState } from "react";

const useInput = (isSecure) => {
    const [secure, setSecure] = useState(isSecure)

    return {
        secure,
        setSecure
    }
}

export default useInput