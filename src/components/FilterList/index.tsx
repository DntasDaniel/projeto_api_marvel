import { X } from "phosphor-react"
import { ChangeEvent, useContext } from "react"
import { ContextGlobal } from "../../global/stateGlobal"

type PPropsFilter = {
    title: string,
    items: string[] | undefined,
    onchange?: (event: ChangeEvent<HTMLSelectElement>) => void | undefined,
}

export default function FilterList(props: PPropsFilter) {

    const { setReset, reset } = useContext(ContextGlobal)
    return (
        <div>
            <h4>{props.title}</h4>
            <div>
                <select onChange={props.onchange} >
                    {props.items && props.items.map((item, i) =>
                        <option value={item} key={i + item}>
                            {item}
                        </option>

                    )}
                </select>
                <button onClick={() => setReset(!reset)}>
                    <X size={10} />
                </button>
            </div>
        </div >


    )
}