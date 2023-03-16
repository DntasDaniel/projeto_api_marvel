import { Lightbulb, Moon } from "phosphor-react"
import { useEffect, useState } from "react"

type THeader = {
    component: JSX.Element
}

export default function Header(props: THeader) {

    const [theme, setTheme] = useState(false)

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <header className='col-span-12 flex justify-between p-4 bg-red-700'>
            <img className='col-span-2 w-24'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" />
            {props.component}

            <button onClick={() => setTheme(!theme)}>
                {theme ? <Lightbulb size={32} className='text-white' /> : <Moon size={32}  />}

            </button>

        </header>
    )
}