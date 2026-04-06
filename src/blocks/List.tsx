import { type FC } from "react";
import Item from "../components/Item.tsx";

import type { ItemData }from '../data/to-do-list-data.ts'

interface ListProps {
    itemData: ItemData[],
    deleteItem: (id: number) => void,
    checkItem: (id: number) => void,
}

const List:FC<ListProps> = ({itemData, deleteItem, checkItem}) => {




    return (
        <section className="list">
            <span className="counter-item">{`Total items: ${itemData.length}`}</span>

            <ul className="items-block">
                {itemData.map((item) => {
                    return (
                        <Item 
                            key={item.id} 
                            id={item.id} 
                            itemText={item.content} 
                            checked={item.checked}  
                            deleteItem={deleteItem}
                            checkItem={checkItem}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default List