import {  useEffect, useState, type FC } from "react"
import ButtonOrLink from "../components/ButtonOrLink.tsx"
import Title from "../blocks/Title.tsx"
import List from "../blocks/List.tsx"
import InputAdd from "../blocks/InputAdd.tsx"
import { ITEM_DATA } from "../data/to-do-list-data.ts"
import type { ItemData } from "../data/to-do-list-data.ts"

// type Theme = 'light' | 'dark'
type ItemDataApp = ItemData[]

const App: FC = () => {

/// theme
  document.querySelector('html')?.setAttribute('data-theme', 'dark') /// X

  
  /// list in localStorage    
    const [itemData, isItemData] = useState<ItemDataApp>(() => {
      const getLocalStorageValue = localStorage.getItem('toDoList')

      if (getLocalStorageValue) {
        try {
          return JSON.parse(getLocalStorageValue)
        } 
        catch (e) {
          console.log(e)          
          return ITEM_DATA
        }
      }

      return ITEM_DATA
    } )

    useEffect(() => {
      localStorage.setItem('toDoList', JSON.stringify(itemData))
    }, [itemData])





/// add item
  const addItem = (text: string) => {
    if (text.trim().length < 1 || !text) return

    isItemData(prev => [...prev, {id: Date.now(), content: text.trim(), checked: false}])    
  }

/// delete item
  const deleteItem = (id: number) => {
    isItemData(prev => prev.filter(item => item.id != id))
  }
  
/// check item
  const checkItem = (id: number) => {
    isItemData(prev => [...prev.map(item => item.id === id ? {...item, checked: !item.checked} : {...item, checked: item.checked})])
  }

  return (
    <>
      <div className="list-section">
          
          <div className="list-section__container">
            <Title content="To-Do List" />
            <List itemData={itemData} deleteItem={deleteItem} checkItem={checkItem}/>
            <InputAdd addItem={addItem}/>
          </div>

          <div className="decor-circle red"></div>
          <div className="decor-circle green"></div>
          <div className="decor-circle yellow"></div>
          <div className="decor-circle purple"></div>
      
          <ButtonOrLink
            typeButton='link'
            className="portfolio-link"
            href='/'
            content="/// WEBSITE PORTFOLIO"  
          />
      </div>

      
    </>

  )
}

export default App
