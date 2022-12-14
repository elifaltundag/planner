import { useState, useEffect } from "react";

export const useLocalge = <T extends {}>(key: string, initialValue: T) => {
    const [state, setState] = useState();

    useEffect(() => {

    }, [state]);

    return [state, setState]
}

