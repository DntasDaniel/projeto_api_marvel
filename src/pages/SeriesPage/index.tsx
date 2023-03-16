import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { instance } from '../../instanceAxios'
import { ArrowBendUpLeft } from "phosphor-react";
import MenuLeft from '../../components/MenuLeft';
import { ContextGlobal } from '../../global/stateGlobal';

export default function SeriesPage() {

    const { reset, series, setSeries, captureYears } = useContext(ContextGlobal)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        instance.get(`characters/${id}/series`)
            .then((res) => { setSeries(res.data.data.results) })
            .catch((erro) => { console.log(erro) })
    }, [reset])

    useEffect(() => {
        if (series && series.length > 0) {
            captureYears();
        }
    }, [series]);

    return (
        <div className='grid grid-cols-12 items-start bg-slate-500 min-h-screen gap-2'>


            <Header component={<button onClick={()=>navigate("/")}><ArrowBendUpLeft size={32} /></button>} />
            <MenuLeft location='SERIES' id={id} />

            <div className='col-span-10 flex flex-wrap'>
                {series && series.map((serie: any) => {
                    return (

                        <div key={serie.id}
                            className='bg-white w-1/4 text-center h-72 rounded-lg 
                        shadow-md overflow-hidden hover:shadow-lg transform 
                        hover:-translate-y-1 transition duration-300 ease-in-out m-1'>
                            <img
                                className='h-56 object-cover w-full'
                                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                            />
                            <p className='font-bold text-lg mb-2'>{serie.title}</p>
                        </div>)

                })}
            </div>

        </div>
    )
}