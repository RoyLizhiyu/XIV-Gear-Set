import { MenuItem, Select } from '@mui/material'
import React, { useState,useEffect,useRef} from 'react'
import ICardStyle from './style'
import {IoMdArrowRoundDown} from 'react-icons/io'
import {ImCross} from 'react-icons/im';
import { useSelector } from 'react-redux';
import {CircularProgress} from '@material-ui/core';




  function ItemCard({slot, id, updateGear,character}) {
    const listRef = useRef(null);
    const items = useSelector((state)=> state.fetchedItems);
    let itemArray = [];
    if (items[id]){
      itemArray = items[id];
      itemArray.sort((a,b)=>(b.LevelItem-a.LevelItem))
    }
    const isLoading = useSelector((state)=>state.isLoading);
    const [currentItem, setCurrentItem] = useState(null);
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
      setCurrentItem(null);
    },[character.job])

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
              {!character.job&&<p className='placeholder'>Choose a job</p>}
              </div>
            ):(
              <button className='selectField' onMouseOver={handleResetScroll}>
                <div className='selected'>
                {!currentItem?(<p className='placeholder'>{character.job?('Select'):('Choose a job')}</p>):(
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
                          console.log(stat);
                          return <div key={stat[1].ID} className='stats'>{stat[0]}:{stat[1].HQ?(stat[1].HQ):(stat[1].NQ)}</div>
                        })}
                        <div className='stats'>Material sluts: {item.MateriaSlotCount}</div>
                      </div>
                  </div>
                </li>
              })}
            </ul>
          </div>
                  
        </div>

      </ICardStyle>
    )
  }



  export default ItemCard


  const example = [
    {
      id: 35245,
      name: "Asphodelos Longsword",
      ItemKind: 'MainHand',
      MateriaSlotCount: 2,
      icon: 'https://xivapi.com/i/030000/030648_hr1.png',
      LevelItem: 605,
      defense:{
        defense: 0,
        magicDefense: 0,
      },
      block: 0,
      'Block Rate': 0,
      'Physical Damage': 120,
  
      stats: {
        CriticalHit: {
          ID: 27,
          NQ: 192
          },
        Determination: {
            ID: 44,
            NQ: 134
            },
          Strength: {
          ID: 1,
          NQ: 217
            },
          Vitality: {
          ID: 3,
          NQ: 229
          }
      },
    },
  
    {
      id: 3524544,
      name: "Asphodelos Longsword",
      ItemKind: 'MainHand',
      MateriaSlotCount: 2,
      icon: 'https://xivapi.com/i/030000/030648_hr1.png',
      LevelItem: 605,
      defense:{
        defense: 0,
        magicDefense: 0,
      },
      block: 0,
      'Block Rate': 0,
      'Physical Damage': 120,
  
      stats: {
        Mind: {
          ID: 27,
          NQ: 192
          },
          Intelligence: {
            ID: 44,
            NQ: 134
            },
          SpellSpeed: {
          ID: 1,
          NQ: 217
            },
          Vitality: {
          ID: 3,
          NQ: 229
          }
      },
    },
  
    {
      id: 35245442,
      name: "Asphodelos Longsword",
      ItemKind: 'MainHand',
      MateriaSlotCount: 2,
      icon: 'https://xivapi.com/i/030000/030648_hr1.png',
      LevelItem: 605,
      defense:{
        defense: 0,
        magicDefense: 0,
      },
      block: 0,
      'Block Rate': 0,
      'Physical Damage': 120,
  
      stats: {
        Mind: {
          ID: 27,
          NQ: 192
          },
          Piety: {
            ID: 44,
            NQ: 200
            },
            Tenacity: {
          ID: 1,
          NQ: 400
            },
          Vitality: {
          ID: 3,
          NQ: 229
          }
      },
    },
  
    {
      id: 35190,
      name: "Augmented Radiant's Helm of Fending",
      ItemKind: 'Head',
      MateriaSlotCount: 2,
      icon: 'https://xivapi.com/i/040000/040381_hr1.png',
      LevelItem: 600,
      defense:{
        defense: 780,
        magicDefense: 780,
      },
      block: 0,
      'Block Rate': 0,
      'Physical Damage': 0,
  
      stats: {
        CriticalHit: {
          ID: 27,
          NQ: 162
          },
        SkillSpeed: {
            ID: 45,
            NQ: 113
            },
          Strength: {
          ID: 1,
          NQ: 180
            },
          Vitality: {
          ID: 3,
          NQ: 188
          }
      },
    },
  
  
    {
      id: 35191,
      name: "Augmented Radiant's Scale Mail of Fending",
      ItemKind: 'Body',
      MateriaSlotCount: 2,
      icon: 'https://xivapi.com/i/043000/043958_hr1.png',
      LevelItem: 600,
      defense:{
        defense: 1046,
        magicDefense: 1046,
      },
      block: 0,
      'Block Rate': 0,
      'Physical Damage': 0,
  
      stats: {
        Determination: {
          ID: 44,
          NQ: 257
          },
        Tenacity: {
            ID: 19,
            NQ: 180
            },
          Strength: {
          ID: 1,
          NQ: 285
            },
          Vitality: {
          ID: 3,
          NQ: 299
          }
      },
    },
  
    
    {
      id: 35192,
      name: "Augmented Radiant's Gauntlets of Fending",
      ItemKind: 'Hand',
      MateriaSlotCount: 2,
      icon: 'https://xivapi.com/i/048000/048851_hr1.png',
      LevelItem: 600,
      defense:{
        defense: 780,
        magicDefense: 780,
      },
      block: 0,
      'Block Rate': 0,
      'Physical Damage': 0,
      stats: {
      CriticalHit: {ID: 27,NQ: 162},
      Determination: {ID: 44,NQ: 113},
      Strength: {ID: 1,NQ: 180},
      Vitality: {ID: 3,NQ: 188}
    }
  },
  
    {
      id: 35264,
      name: "Asphodelos Shield",
      MateriaSlotCount: 0,
      ItemKind: 'OffHand',
      icon: 'https://xivapi.com/i/030000/030237_hr1.png',
      LevelItem: 605,
      defense:{
        defense: 0,
        magicDefense: 0,
      },
      block: 1267,
      'Block Rate': 1267,
      'Physical Damage': 0,
      stats: {
        CriticalHit: {ID: 27,NQ: 77},
        Determination: {ID: 44,NQ: 54},
        Strength: {ID: 1,NQ: 87},
        Vitality: {ID: 3,NQ: 91},
    }
  }
    
    
  ]