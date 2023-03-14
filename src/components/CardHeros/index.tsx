import { useContext } from 'react'
import { ContextGlobal } from "../../global/stateGlobal";
import ButtonAction from "../ButtonAction";


export default function CardHero() {
    const { characters } = useContext(ContextGlobal)

    const showCharacters = characters && characters.map((hero: any) => {
        return (
            <div className=" grid grid-rows-6 items-center w-1/5 text-center rounded-xl shadow-md bg-slate-100">
                <img
                    className="rounded-xl row-span-3 w-full max-h-40 "
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                <h2 className="row-span-1">{hero.name}</h2>


                <div className="flex justify-around gap-2 row-span-2">
                    <ButtonAction name='Series' item={hero} />
                    <ButtonAction name='Stories' item={hero} />
                </div>
            </div>
        )
    }
    )

    return (
        <div className="col-span-12 flex flex-wrap gap-2 justify-between p-4 ">

            {showCharacters}

        </div>

    )
}