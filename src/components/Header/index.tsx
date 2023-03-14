type THeader = {
    component: JSX.Element
}


export default function Header(props: THeader) {
    return (
        <header className='col-span-12 flex justify-between p-4 bg-red-700'>
            <img className='col-span-2 w-24'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" />
                {props.component}

        </header>
    )
}