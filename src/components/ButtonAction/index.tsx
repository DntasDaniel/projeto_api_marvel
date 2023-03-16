import { useNavigate } from 'react-router-dom'
import { ICharacters } from '../../global/stateGlobal'

type TButton = {
    name: string,
    item?: ICharacters,
}


export default function ButtonAction(props: TButton) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/series/${props.item && props.item.id}`)
    }
    return (
        <button
            onClick={handleClick}
            className="bg-red-700 w-full rounded-xl p-4 hover:bg-white">
            {props.name}
        </button>
    )
}