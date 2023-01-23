import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getZapas } from "../Actions";

const useProductos = (pageNum) => {
    const dispatch = useDispatch()
    const allZapas = useSelector(state => state.zapas)
    const [resultados, setResultados] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);
    const [pages, setPages] = useState(10);
    
    
    useEffect(() => {
        dispatch(getZapas());
    }, [dispatch]);
    
    const cantPages = Math.ceil(allZapas.length / 10);
    // console.log("ESTAS PAGES ", pages);
    
    
    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        
        try {
            setIsLoading(true);
            setIsError(false);
            setError({});
            
            let currentZapas = allZapas.slice(pageNum, pages);
            if (pageNum !== 1) {
                currentZapas = allZapas.slice(pages, pages + 10)
            }
            setPages(pages + 10);
            
            
            // setResultados(previos => [...previos, ...allZapas]);
            // console.log("ESTO ES LO QUE TIENE PAGE NUM ", pageNum);
            // setHasNextPage(Boolean(allZapas.length));
            // setIsLoading(false);
            setResultados(previos => [...previos, ...currentZapas]);
            // console.log("ESTO ES LO QUE TIENE PAGE NUM ", pageNum);
            
            if (pageNum === cantPages) {
                setHasNextPage(false);
            } else {
                setHasNextPage(Boolean(allZapas.length));
            }
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            if (signal.aborted) return
            setIsError(true);
            setError({ message: e.message });
        } 
            
        return () => controller.abort();
        

        // getZapas().then(data => {
        //     setResultados(previos => [...previos, ...data]);
        //     setHasNextPage(Boolean(data.length));
        //     setIsLoading(false);
        // }).catch(e => {
        //     setIsLoading(false);
        //     if (signal.aborted) return
        //     setIsError(true);
        //     setError({ message: e.message });
        // })

    }, [pageNum])

    return { isLoading, isError, error, resultados, hasNextPage }
}

export default useProductos;