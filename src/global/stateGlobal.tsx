
import { ReactNode, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { instance } from "../instanceAxios";

import { createContext } from 'react'

type Globais = {
    comics: Object | null;
    characters: Object | null;
    setCharacters: Dispatch<SetStateAction<ICharacters | null>>,
    setOnSearch: Dispatch<SetStateAction<boolean>>,
    handlereset: () => void,
    reset: boolean,
    onSearch: boolean,

}

export const ContextGlobal = createContext<Globais>({} as Globais)

type TProps = {
    children: ReactNode;
}

interface Icomics {
    id: string,
    title: string,
    urls: [{
        type: string,
        url: string
    }]
    creators: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string,
            role: string
        }],
    },
    series: {
        name: string,
        resourseURI: string
    },
    stories: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string,
            type: string
        }],


    }

}
export interface ICharacters {
    id: string,
    name: string,
    urls: Array<{ type: string, url: string }>,
    thumbnail: {
        extension: string,
        path: string
    },
    series: {
        name: string,
        resourseURI: string,
        items: Array<{ name: string, resourceURI: string }>
    },
    stories: {
        available: number,
        collectionURI: string,
        items: Array<{
            name: string,
            resourceURI: string,
            type: string
        }>,
    }
}
export const StateGlobal = ({ children }: TProps) => {

    const [comics, setcomics] = useState<Icomics | null>(null)
    const [characters, setCharacters] = useState<ICharacters | null>(null)
    const [reset, setReset] = useState(false)
    const [onSearch, setOnSearch] = useState(false)

    const handlereset = () => {
        setReset(true);
        setOnSearch(false)
    }

    useEffect(() => {
        instance.get('comics')
            .then((res) => { setcomics(res.data.data.results) })
            .catch((erro) => { console.log(erro) })
    }, [])

    useEffect(() => {
        instance.get('characters')
            .then((res) => { setCharacters(res.data.data.results) })
            .catch((erro) => { console.log(erro) })
    }, [reset])

    return <ContextGlobal.Provider value={{
        comics,
        characters,
        reset,
        onSearch,
        setOnSearch,
        setCharacters,
        handlereset,
    }}>
        {children}
    </ContextGlobal.Provider>
}