import { MagnifyingGlass } from "phosphor-react";

type TInput = {
    handleSeach: React.ChangeEventHandler<HTMLInputElement> | undefined,
    getHerosForName : ()=>void
}


export default function InputHero(props: TInput) {
    return (
        <label
            className='col-span-6 flex justify-between p-2
         text-white  border-b-2 items-center'>
            <input
                className=' bg-transparent focus:outline-0'
                type={'text'}
                placeholder="Buscar por nome"
                onChange={props.handleSeach}

            />
            <button 
            onClick={props.getHerosForName}>
                <MagnifyingGlass size={20}/>
            </button>

        </label>
    )
}