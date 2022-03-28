import React, { useState,useEffect,useRef} from 'react'
import ICardStyle from './style'
import {IoMdArrowRoundDown} from 'react-icons/io'
import {ImCross} from 'react-icons/im';
import { useSelector } from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import Materials from '../Materials/Materials';



  function ItemCard({slot, id, updateGear,character,gears}) {
    const isLoading = useSelector((state)=>state.isLoading);
    const [currentItem, setCurrentItem] = useState(null);
    const listRef = useRef(null);
    const items = useSelector((state)=> state.fetchedItems);
    let itemArray = [];
    if (items[id]){
      itemArray = items[id];
      itemArray.sort((a,b)=>(b.LevelItem-a.LevelItem))
    }

    const handleClickItem= (item)=>{

      setCurrentItem(item);
      updateGear(item,slot);
    };

    const handleCancel = ()=>{
      setCurrentItem(null);
      updateGear(null, slot);
    }

    const handleResetScroll = ()=>{
      listRef.current.scrollTop = 0;
    }

    // whenever this components loads, we reset its current item to null, and also resets it 
    // to null when the character's job has changed.
    useEffect(()=>{
      if (gears[slot]){
        setCurrentItem(gears[slot]);
        updateGear(gears[slot],slot);
      } else{
        setCurrentItem(null);
      }

    },[character.job,gears,slot])

    return (
      <ICardStyle>
        <div className='container'>
          <div className='itemType'>
            <p>{slot}</p>
          </div>
          {
            currentItem?(
            <div className='cancel' onClick={handleCancel}>
              <ImCross />
            </div>
            ):('')
            }
          <div className='selector'>
            {isLoading||!character.job?(
              <div className='loading'>
              {isLoading&&<CircularProgress size='2rem' style={{'color': 'var(--darker)', 'margin': 'auto'}} />}
              {!character.job&&<p className='placeholder'></p>}
              </div>
            ):(
              <button className='selectField' onMouseOver={handleResetScroll}>
                <div className='selected'>
                {!currentItem?(<p className='placeholder'>{character.job?('Select'):('Choosse a job')}</p>):(
                  <>
                  <img src={currentItem.icon} alt='item-icon' />
                  <p>{currentItem.name}</p>
                  </>
                )}
                </div>

                <div className='arrow'>
                  <IoMdArrowRoundDown />
                </div>
            </button>
            )}


            <ul className='list' ref={listRef}>
              {itemArray.map(item=>{
                return <li key={item.id} className='options' onClick={()=>handleClickItem(item)}>
                  <div className='option'>
                    <div className='itemHeader'>
                      <img src={item.icon} alt='item-icon' />
                      <p>
                        {item.name}

                      </p>
                      <p>
                        i{item.LevelItem}
                      </p>

                    </div>
                      <div className='itemStats'>
                        {Object.entries(item.stats).map(stat=>{
                          return <div key={stat[1].ID} className='stats'>{stat[0]}:{stat[1].HQ?(stat[1].HQ):(stat[1].NQ)}</div>
                        })}
                        <div className='stats'>Material sluts: {item.MateriaSlotCount}</div>
                      </div>
                  </div>
                </li>
              })}
            </ul>
          </div>
          <div className='materials'>
            {/* TODO */}
          </div>
                  
        </div>

      </ICardStyle>
    )
  }



  export default ItemCard

