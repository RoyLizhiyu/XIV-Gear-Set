import React from 'react'
import MainStyle from './style'
import ItemCard from '../ItemCard/ItemCard'
import PropertyEntry from './PropertyEntry/PropertyEntry'

function MainPanel({character,playerInfo,updateGear, gears}) {
    
    const names = playerInfo.CharacterName.split(' ');
    const upperNames = names.map(name=>{return name.charAt(0).toUpperCase()+name.slice(1)});
    const profileimg = playerInfo.img;
  return (
    <MainStyle>
        <div className='container'>
            <div className='left'>
                <div className='characterHeader'>
                    <h3 className='header'>
                    {playerInfo.CharacterName?(<span>{upperNames.join(' ')}</span>):('Character Profile')}{character.job?(', '+character.jobName):('')} {character.clan?(' of '+ character.clan):('')}
                    </h3>
                </div>
                
                <div className='characterBody'>
                    <div className='itemColumn'>
                        <div className='itemCard'>
                            <ItemCard gears={gears}  character={character}  slot='Main Hand' id='mainHand' updateGear={updateGear} />
                            <ItemCard gears={gears} character={character} slot='Head' id='head' updateGear={updateGear} />
                            <ItemCard gears={gears} character={character} slot='Body' id='body' updateGear={updateGear} />
                            <ItemCard gears={gears}  character={character} slot='Hands' id='hands' updateGear={updateGear} />
                            <ItemCard gears={gears} character={character} slot='Legs' id='legs' updateGear={updateGear} />
                            <ItemCard gears={gears} character={character} slot='Feet' id='feet' updateGear={updateGear} />
                        </div>
                    </div>
                    <div className='characterImg'>
                        {playerInfo.img?
                        (<img src={profileimg} alt='character img'></img>):
                        (<h2>
                        Enter your character's name and server to see thier image.
                        </h2>)}
                        
                    </div>
                    <div className='itemColumn'>
                        <div className='itemCard'>
                                {character.job==='PLD'?(<ItemCard gears={gears} character={character} slot='Off Hand' id='offHand' updateGear={updateGear} />):('')}
                                <ItemCard gears={gears} character={character} slot='Earrings' id='earrings' updateGear={updateGear} />
                                <ItemCard  gears={gears} character={character} slot='Necklace' id='necklace' updateGear={updateGear} />
                                <ItemCard gears={gears} character={character} slot='Bracelets' id='bracelets' updateGear={updateGear} />
                                <ItemCard gears={gears} character={character} slot='Ring 1' id='ring' updateGear={updateGear} />
                                <ItemCard gears={gears} character={character} slot='Ring 2' id='ring' updateGear={updateGear} />
                            </div>

                    </div>
                </div>
                <div className='characterHPMP'>
                    <ul>
                        <li className='hpItem'>
                            <div className='hpmpText'>
                                <span>HP</span>
                                <span>{character.HP}</span>
                            </div>
                            <i className='hpBar'></i>

                        </li>
                        <li className='mpItem'>
                            <div className='hpmpText'>
                                <span >MP</span>
                                <span>{character.MP}</span>
                            </div>
                            <i className='mpBar'></i>

                        </li>

                    </ul>
                </div>
            </div>
            <div className='right'>
                <div className='itemLevel'>
                    <PropertyEntry type={character.itemLevel} />
                </div>
                <div className='attributes'>
                    <PropertyEntry title='Attributes' type={character.attributes} />
                </div>
                <div className='OffensiveProp'>
                    <PropertyEntry title='Offensive Properties' type={character.offensiveProp} />
                </div>
                <div className='defensiveProp'>
                    <PropertyEntry title='Defensive Properties' type={character.defensiveProp} />
                </div>
                <div className='physicalProp'>
                    <PropertyEntry title='Physical Properties' type={character.physicalProp} />
                </div>
                <div className='mentalProp'>
                    <PropertyEntry title='Mental Properties' type={character.mentalProp} />
                </div>
                <div className='roleProp'>
                    <PropertyEntry title='Role' type={character.role}/>
                </div>
            </div>
        </div>
    </MainStyle>
  )
}

export default MainPanel