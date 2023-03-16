import { ChangeEvent, useContext } from "react"
import { ContextGlobal } from "../../global/stateGlobal"
import { instance } from "../../instanceAxios"
import FilterList from "../FilterList"

type PPropsMenu = {
    location: string,
    id? : string | undefined
}

export default function MenuLeft({ location, id }: PPropsMenu) {

    const {  setSeries, yaers } = useContext(ContextGlobal)

    const filterByYear = (event: ChangeEvent<HTMLSelectElement>) => {
        instance.get(`characters/${id}/series?startYear=${event.target.value}`)
        .then((res) => { setSeries(res.data.data.results) })
        .catch((erro) => { console.log(erro) })

        // const filtered = series?.filter((serie) => serie.startYear == event.target.value)
        // setSeries(filtered)
    }
    return (
        <div className="col-span-2 min-h-screen bg-white">

            {location === 'HOME' ?
                <FilterList
                    title="Ordenar Por"
                    items={['name', 'modificate']}
                />
                :
                <FilterList
                    title="Filtrar por ano"
                    items={yaers}
                    onchange={filterByYear}
                />}
            <hr />
        </div>
    )
}