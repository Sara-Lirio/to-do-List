import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}:Props) => {
    const [input, setInput] = useState('');


    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && input != ''){
            onEnter(input);
            setInput('')
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input type="text" 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder='Adicione uma nota'/>
        </C.Container>
    )
}