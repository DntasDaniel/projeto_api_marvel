import { useContext, useState, ChangeEvent, } from 'react'
import CardHero from '../../components/CardHeros'
import InputHero from '../../components/InputHeros'
import { ContextGlobal } from '../../global/stateGlobal'
import { instance } from '../../instanceAxios'
import { SpinnerGap, ArrowCounterClockwise } from "phosphor-react";
import Header from '../../components/Header'

const active = 'bg-white p-1 rounded-lg'


export default function HomePage() {

    const { characters, setCharacters, handlereset, onSearch, setOnSearch, setPage, page } = useContext(ContextGlobal)
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
        <div className='grid grid-cols-12 items-start dark:bg-slate-500  bg-slate-50'>

            <Header component={<InputHero handleSeach={handleSeach} getHerosForName={getHerosForName} />} />

            {onSearch &&
                <button className='col-span-2 dark:text-black text-white flex items-center gap-2 p-2' onClick={handlereset}>
                    Limpar busca
                    <ArrowCounterClockwise size={10} />
                </button>}

            {(!characters) ?
                <h1 className=' min-h-screen justify-center'>
                    <SpinnerGap size={32} />
                </h1>
                :
                <CardHero />
            }

            <ul className='flex gap-2'>
                <li>
                    <button onClick={() => setPage(1)} className={page === 1 ?
                        `${active}`
                        :
                        ``}>1</button>
                </li>
                <li>
                    <button
                        className={page === 2 ?
                            `${active}`
                            :
                            ``}
                        onClick={() => setPage(2)}>2</button>
                </li>
                <li>
                    <button
                        className={page === 3 ?
                            `${active}`
                            :
                            ``} onClick={() => setPage(3)}>3</button>
                </li>
                <li>
                    <button className={page === 4 ?
                        `${active}`
                        :
                        ``} onClick={() => setPage(4)}>4</button>
                </li>
                <li>
                    <button className={page === 5 ?
                        `${active}`
                        :
                        ``} onClick={() => setPage(5)}>5</button>
                </li>
            </ul>

        </div >
    )
}