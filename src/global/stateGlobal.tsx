
import { ReactNode, useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { instance } from "../instanceAxios";

import { createContext } from 'react'
import { ICharacters, Icomics, ISeries} from './interfaces';

type Globais = {
    comics: Object | null;
    characters: ICharacters[] | undefined;
    series: ISeries[] | undefined,
    yaers: string[] | undefined,
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    setYears: Dispatch<SetStateAction<string[] | undefined>>,
    setSeries: Dispatch<SetStateAction<ISeries[] | undefined>>,
    setCharacters: Dispatch<SetStateAction<ICharacters[] | undefined>>,
    setOnSearch: Dispatch<SetStateAction<boolean>>,
    setReset: Dispatch<SetStateAction<boolean>>,
    handlereset: () => void,
    captureYears: () => void,
    reset: boolean,
    onSearch: boolean,

}
export type TProps = {
    children: ReactNode;
}

export const ContextGlobal = createContext<Globais>({} as Globais)


export const StateGlobal = ({ children }: TProps) => {

    const [comics, setcomics] = useState<Icomics | null>(null)
    const [characters, setCharacters] = useState<ICharacters[]>()
    const [reset, setReset] = useState(false)
    const [onSearch, setOnSearch] = useState(false)
    const [series, setSeries] = useState<ISeries[]>()
    const [yaers, setYears] = useState<string[] | undefined>()
    const [page, setPage] = useState<number>(1)

    const handlereset = () => {
        setReset(true);
        setOnSearch(false)
    }

    const captureYears = () => {
        const result: string[] = [];
        series?.forEach((serie) => {
            result.push(serie.startYear);
        });
        setYears(result);
    };

    useEffect(() => {
        instance.get('comics')
            .then((res) => { setcomics(res.data.data.results) })
            .catch((erro) => { console.log(erro) })
    }, [])

    useEffect(() => {
        if(page>1){
        instance.get(`characters?limit=20&offset=${page}0`)
            .then((res) => { setCharacters(res.data.data.results) })
            .catch((erro) => { console.log(erro) })
        }else{
            instance.get(`characters`)
            .then((res) => { setCharacters(res.data.data.results) })
            .catch((erro) => { console.log(erro) })
        }
    }, [reset, page])

    return <ContextGlobal.Provider value={{
        comics,
        characters,
        reset,
        onSearch,
        series,
        yaers,
        page,
        setPage,
        setReset,
        setYears,
        setSeries,
        setOnSearch,
        setCharacters,
        handlereset,
        captureYears,
    }}>
        {children}
    </ContextGlobal.Provider>
}