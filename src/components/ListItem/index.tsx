import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item
}

type PropsRemove = {
    onChange :  (taskName: string) => []
}

export const ListItem = ({item}:Props, {onChange}: PropsRemove) => {
    const [isChecked, setIsChecked] = useState(item.done); 
    
    return (
    <C.Container done={isChecked}>
        <input type='checkbox' 
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}/>
        <label>{item.name}</label>
    </C.Container>
    )
}