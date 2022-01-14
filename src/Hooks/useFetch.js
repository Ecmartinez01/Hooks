import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        erorr: null,
    });
    const isMounted = useRef(true)

    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, [])
    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)

            .then((res) => res.json())

            .then((data) => {
               
                    if (isMounted.current === true) {
                        setState({
                            data,
                            loading: false,
                            error: null,
        
                        });
                        
                    }else{
                        console.log("esta OK")
                    }
                    
              

            });
    }, [url]);

    return state;
};
