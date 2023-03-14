import { useContext, useState, ChangeEvent, } from 'react'
import CardHero from '../../components/CardHeros'
import InputHero from '../../components/InputHeros'
import { ContextGlobal } from '../../global/stateGlobal'
import { instance } from '../../instanceAxios'
import { SpinnerGap, ArrowCounterClockwise } from "phosphor-react";
import Header from '../../components/Header'


export default function HomePage() {

    const { characters, setCharacters, handlereset, onSearch, setOnSearch } = useContext(ContextGlobal)
    const [searchCharacters, setSearchCharacters] = useState<string | null>()

    const handleSeach = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchCharacters(event.target.value)
    }

    const getHerosForName = () => {
        instance.get(`/characters?name=${searchCharacters}`)
            .then((res) => {
                setCharacters(res.data.data.results);
                setOnSearch(true)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='grid grid-cols-12 items-start bg-slate-500'>

            <Header component={<InputHero handleSeach={handleSeach} getHerosForName={getHerosForName} />} />

            {onSearch &&
                <button className='col-span-2 text-white flex items-center gap-2 p-2' onClick={handlereset}>
                    Limpar busca
                    <ArrowCounterClockwise size={10} />
                </button>}

            {(!characters) ?
                <h1 className=' min-h-screen justify-center'>
                    <SpinnerGap size={32} />
                </h1>
                :
                <CardHero />}

        </div >
    )
}