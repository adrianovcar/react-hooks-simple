import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])

    const merge = (v1, v2) => {
        return [...v1].map((e, i) => `${e}${(v2[i] || "")}`).join("")
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}
                         [<span className="text red">{count.current}</span>]
                    </span>
                </div>
                <input className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={(event => setValue1(event.target.value))}
                />
            </div>

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <input className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={(event => setValue2(event.target.value))}
                />
            </div>
        </div>
    )
}

export default UseRef
