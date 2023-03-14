import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { instance } from '../../instanceAxios'
import { ArrowBendUpLeft } from "phosphor-react";


interface ISeries {
    id: string,
    title: string,
    description: string | null,
    startYear: string,
    thumbnail: {
        extension: string,
        path: string
    }
}

export default function SeriesPage() {

    const [series, setSeries] = useState<ISeries | null>(null)

    const { id } = useParams()
    
    useEffect(() => {
        instance.get(`characters/${id}/series`)
            .then((res) => { setSeries(res.data.data.results) })
            .catch((erro) => { console.log(erro) })

    }, [])

    return (
        <div className='grid grid-cols-12 items-start  bg-slate-500 min-h-screen gap-2'>
            <Header component={<button><ArrowBendUpLeft size={32} /></button>} />
            {series && series.map((serie: any) => {
                return (
                    <div key={serie.id}
                        className='bg-white col-span-3 text-center h-72 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform 
                    hover:-translate-y-1 transition duration-300 ease-in-out m-1'>
                        <img
                            className='h-56 object-cover w-full'
                            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                        />
                        <p className='font-bold text-lg mb-2'>{serie.title}</p>
                    </div>)


            })}


        </div>
    )
}