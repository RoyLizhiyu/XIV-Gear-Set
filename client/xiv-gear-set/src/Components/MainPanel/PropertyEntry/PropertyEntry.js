import React, { useState } from 'react'
import Entry from './Entry';
import PropertyStyle from './style'


// entries object should be of structure [{attackPower:2478}, {skillSpeed:984}]
function PropertyEntry({title='Item Level', type}) {

  return (
    <PropertyStyle>
        <div className='container'>
            <div className='title'>
                <p className='titleP'>{title}</p>
            </div>
            <div className='properties'>
                {title==='Item Level'?(<Entry data={type} isILevel={true} />):(type.map((entry,index)=>(<Entry key={index} data={entry} />)))}
            </div>
        </div>

    </PropertyStyle>
  )
}

export default PropertyEntry