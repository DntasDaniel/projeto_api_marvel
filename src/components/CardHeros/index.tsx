import { useContext } from 'react'
import { ContextGlobal } from "../../global/stateGlobal";
import ButtonAction from "../ButtonAction";
import { CardDark, CardLight } from './theme';


export default function CardHero() {
    const { characters } = useContext(ContextGlobal)

    const showCharacters = characters && characters.map((hero: any) => {
        return (
            <div key={hero.id} 
            className={`${CardLight} dark:${CardDark}`}>
                <img
                    className=" rounded-xl row-span-3 max-w-full max-h-40 "
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
        <div className="col-span-10 flex flex-wrap gap-2 justify-around p-4 ">

            {showCharacters}

        </div>

    )
}