import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getItems} from '../actions/items'
import MainPanel from '../Components/MainPanel/MainPanel';
import Navbar from '../Components/Navbar/Navbar';
import SidePanel from '../Components/SidePanel/SidePanel';
import baseStats from '../assets/gameData/adventurerBaseStats';
import jobBaseStats from '../assets/gameData/jobBaseStats';
import clanStats from '../assets/gameData/clans';
import jobs from '../assets/gameData/jobs';
import player from '../assets/gameData/player';
import { getPlayerPortrait } from '../api';
import Alert from '@mui/material/Alert';
function Home() {
    let newPlayer = player;
    if ('player' in window.localStorage){
      newPlayer = JSON.parse(window.localStorage.getItem('player'));
    }
    const dispatch = useDispatch();
    const items = useSelector((state)=> state.fetchedItems);
    const [character, setCharacter] = useState(baseStats); 
    const [playerInfo, setPlayerInfo] = useState(newPlayer);
    const [equippedGear, setEquippedGears] = useState({});
    const [localSets, setLocalSets] = useState([]); // this will initialize from localStorage.
    const [alertClasses, setalertClasses] = useState('hide');
    const [alertText, setAlertText] =useState(['error', 'No character Found!']);
    const changeJob = (job, gear=false)=>{
      if (!gear){
        dispatch(getItems(job));
      }
      
      const reset = baseStats; 
      reset.clan = character.clan; 
      const newStats = updateStats(job,reset);
      const newCharacter = {
        ...character,
        itemLevel: [{itemLevel:0}],
        HP: newStats[0],
        job: job,
        jobName: jobs.find(item=>{return item.code === job}).name,
        attributes: newStats[1],
        offensiveProp: newStats[2],
        defensiveProp: newStats[3],
        physicalProp: newStats[4],
        mentalProp: newStats[5],
        role:  newStats[6],
      }
      setCharacter(newCharacter);
      if (gear){
        return newCharacter;
      }
      setEquippedGears({});
    }

    const changeClan = (clan)=>{
      let copy = character;
      copy.clan = clan;
      const newStats = updateStats(copy.job, copy);
      copy = {
        ...copy,
        HP: newStats[0],
        attributes: newStats[1],
        offensiveProp: newStats[2],
        defensiveProp: newStats[3],
        physicalProp: newStats[4],
        mentalProp: newStats[5],
        role:  newStats[6],
      }
      updateStatsByGears(equippedGear, copy);
    }

    const changePlayer = async (name, server)=>{
      const data = await changePlayerImg(name,server);
      if (data[0] === false){
        setAlertText(['error', 'No character Found!']);
        setalertClasses('alert');
        setTimeout(()=>{setalertClasses('hide')},5000);
        return;
      };
      const newInfos = {
        CharacterName: data[1],
        server: server,
        img:data[0],
      }
      setPlayerInfo(newInfos)
      setAlertText(['success', 'Character Found!']);
      setalertClasses('alert');
      setTimeout(()=>{setalertClasses('hide')},5000);
      try {
        window.localStorage.setItem('player', JSON.stringify(newInfos));

      } catch (error) {
        console.log(error);
        
      }
      
    };

    const changePlayerImg = (name,server)=>{
      const data = getPlayerPortrait(name, server);
      return data;
    };

    const updateGear = (gear,slot)=>{
      let newGears = equippedGear;
      if (gear === null){
        delete newGears[slot];
        setEquippedGears(newGears);
        updateStatsByGears(newGears, character);
        return;
      }

      newGears[slot] = gear;
      setEquippedGears(newGears);
      updateStatsByGears(newGears, character);

    };

    const updateStatsByGears = (gears,character)=>{
      let newCharacter = changeJob(character.job,true);
      let ilevel = 0;
      let attributes = newCharacter.attributes;
      let HP = newCharacter.HP;
      let offensiveProp = newCharacter.offensiveProp;
      let defensiveProp = newCharacter.defensiveProp;
      let physicalProp = newCharacter.physicalProp;
      let mentalProp = newCharacter.mentalProp;
      let role = newCharacter.role;
      const gearList = Object.entries(gears); //['Head', {...}]
      gearList.forEach(gear=>{
        ilevel += updateItemLevel(gear, character)
        attributes = updateAttributesByGear(gear,attributes);
        HP = updateHP(newCharacter.job, newCharacter, attributes);
        offensiveProp = updateOffensiveByGear(gear,offensiveProp);
        defensiveProp = updateDefensivePropByGear(gear,defensiveProp);
        physicalProp = updatePhysicalPropByGear(gear,physicalProp,attributes,character.job);
        mentalProp = updateMentalPropBygear(gear,mentalProp,attributes,character.job);
        role = updateRoleByGear(gear,role);
      })
    
      ilevel = Math.floor(ilevel/12);
    
      newCharacter = {
        ...newCharacter,
        HP: HP,
        itemLevel: [{itemLevel:ilevel}],
        attributes: attributes,
        offensiveProp: offensiveProp,
        defensiveProp: defensiveProp,
        physicalProp: physicalProp,
        role: role,
        
      }

      setCharacter(newCharacter);
    
    }
    



  return (
    
    <div>
        <Navbar />
        <Alert severity={alertText[0]} className={alertClasses}><p className='msg'>{alertText[1]}</p></Alert>
        
        <div className='wrapper'>
          <SidePanel 
          localSets={[{id: 123, name: 'newset'},{id: 124, name: 'newset2'} ]} 
          changeJob = {changeJob}
          changeClan = {changeClan}
          changePlayer = {changePlayer}
            
          />
          <MainPanel
          character = {character}
          playerInfo = {playerInfo}
          updateGear = {updateGear}
           />
        </div>

    </div>
  )
}









const updateStats = (job,character)=>{
  // character's offensive props, defensive props, roleStats remains the same. They are only affected by gears.
  const newAtrributes = updateAttributes(job,character);
  const newHP = updateHP(job,character,newAtrributes);
  const newOffensiveProp = updateOffensiveProp(character);
  const newDefensiveProp = updateDefensiveProp(character);
  const newRole = updateRole(character);
  const newPhysicalProp = updatePhysicalProp(job,character,newAtrributes);
  const newMentalProp = updateMentalProp(job,character,newAtrributes);
  return [newHP, newAtrributes, newOffensiveProp, newDefensiveProp, newPhysicalProp, newMentalProp, newRole];
};




const updateHP=(job,character,newAtrributes)=>{
  let newHP;
  const jbaseStats = jobBaseStats.find(jobs=>jobs.code===job);

  newHP = Math.floor(baseStats.HP * jbaseStats.jobMod.HP);
  // if the role is not tank
  if (job !=='PLD' && job !=='DRK' && job !=='GBR' && job !=='WAR'){
    newHP+= Math.floor((newAtrributes[2].VIT - character.Main) * 24.33);
  }

  // if the role is a tank
  else{

    newHP+= Math.floor((newAtrributes[2].VIT - character.Main) * 34.6);
  }


  return newHP;


}
const updateAttributes=(job,character)=>{

  let newAtrributes = [
    {STR: '',literal: 'Strength'},
    {DEX: '',literal: 'Dexterity'},
    {VIT: '',literal: 'Vitality'},
    {INT: '',literal: 'Intelligence'},
    {MND: '',literal: 'Mind'},
  ];
  const baseStats = jobBaseStats.find(jobs=>jobs.code===job);
  const clanBase = clanStats.find(clan=>clan.name === character.clan);
  newAtrributes.map(attribute=>{
    const attrName = Object.keys(attribute)[0];
    attribute[attrName] = Math.floor(character.Main * baseStats.jobMod[attrName]);
    if (clanBase){
      
      attribute[attrName] +=  clanBase.clanMod[attrName];
    }
    
  })


  
  return newAtrributes
  
}
const updateOffensiveByGear=(gear,offensiveProp)=>{
  let result = offensiveProp;
  const attrList = Object.entries(gear[1].stats);
  attrList.forEach(attr=>{
    switch (attr[0]) {
      case 'CriticalHit':
        result[0].criticalHit += attr[1].NQ;
        break;

      case 'Determination':
        result[1].Determination += attr[1].NQ;
        break;
      
      case 'DirectHitRate':
        console.log(result);
        result[2].directHitRate += attr[1].NQ;
        break;
      default:
        break;
    }
  });
  
  return result
  
}
const updateOffensiveProp= (character)=>{
  return [
    {criticalHit:400, literal: 'Critical Hit'},
    {Determination:390, literal: 'Determination'},
    {directHitRate: 400, literal: 'Direct Hit Rate'},
  ]


};
const updateDefensiveProp=(job,character)=>{

  return[
    {defense:0, literal: 'Defense'},
    {magicDefense:0, literal: 'Magic Defense'},
  ]
  
}

const updateDefensivePropByGear=(gear,defensiveProp)=>{
  let result = defensiveProp;
  const defense = Object.entries(gear[1].defense);
  result[0].defense += defense[0][1];
  result[1].magicDefense+= defense[1][1];
  return result;
};

const updatePhysicalPropByGear=(gear,physicalProp,attributes,job)=>{
  let result = physicalProp;
  const dex = ['BRD', 'MCH', 'DNC', 'NIN'];
  if (dex.includes(job)){
    result[0].attackPower = attributes[1].DEX;
  }else{
    result[0].attackPower = attributes[0].STR;
  }

  if ('SkillSpeed' in gear[1].stats){
    result[1].skillSpeed += gear[1].stats.SkillSpeed.NQ;
  }
  
  return result;

};


const updatePhysicalProp=(job,character,newAtrributes)=>{
  let newProps = [
    {attackPower: 0, literal: 'Attack Power'},
    {skillSpeed: 0, literal: 'Skill Speed'},
]


const dex = ['BRD', 'MCH', 'DNC', 'NIN'];
  if (dex.includes(job)){
    newProps[0].attackPower = newAtrributes[1].DEX;
  } else{
    newProps[0].attackPower = newAtrributes[0].STR;
  }

  newProps[1].skillSpeed = character.Sub;
  return newProps;
  
}

const updateMentalPropBygear=(gear,mentalProp,attributes,job)=>{
  let result = mentalProp;
  const healers = ['SGE', 'WHM', 'Astrologian','Scholar'];
  if (healers.includes(job)){
    result[0].attackMagicPotency = attributes[4].MND;
  }else{
    result[0].attackMagicPotency = attributes[3].INT;
  }
  result[1].healingMagicPotency = attributes[4].MND;
  if ('SpellSpeed' in gear[1].stats){
    result[2].spellSpeed += gear[1].stats.SpellSpeed.NQ;
  }
  return result;
};


const updateMentalProp=(job,character,newAtrributes)=>{
  let newProps = [
    {attackMagicPotency:'', literal: 'Attack Magic Potency'},
    {healingMagicPotency:'',literal: 'Healing Magic Potency'},
    {spellSpeed: '',literal: 'Spell Speed'},
]
  const healers = ['SGE', 'WHM', 'Astrologian','Scholar'];
  if (healers.includes(job)){
    newProps[0].attackMagicPotency = newAtrributes[4].MND;
  } else{
    newProps[0].attackMagicPotency = newAtrributes[3].INT;
  }
  newProps[1].healingMagicPotency = newAtrributes[4].MND;
  newProps[2].spellSpeed = character.Sub;
    return newProps;
  
}

const updateRoleByGear= (gear,role)=>{
  let result = role;
  if ('Piety' in gear[1].stats){
    result[0].piety += gear[1].stats.Piety.NQ;
  }

  if ('Tenacity' in gear[1].stats){
    result[1].tenacity += gear[1].stats.Tenacity.NQ;
  }

  return result;

};

const updateRole=(job,character)=>{
  return [
    {piety:390, literal: 'Piety'},
    {tenacity:400, literal: 'Tenacity'},
]
  
}

const updateItemLevel=(gear,character)=>{
  if(gear[0] ==='Main Hand'){
    if (character.job ==='PLD'){
      return gear[1].LevelItem
    }else{
      return 2 * gear[1].LevelItem;
    }
  }

  return gear[1].LevelItem;
};


const updateAttributesByGear=(gear,attributes)=>{
  let result = attributes;
  const attrList = Object.entries(gear[1].stats);
  attrList.forEach(attr=>{
    switch (attr[0]) {
      case 'Strength':
        result[0].STR += attr[1].NQ;
        break;

      case 'Dexterity':
        result[1].DEX += attr[1].NQ;
        break;
      
      case 'Intelligence':
        result[3].INT += attr[1].NQ;
        break;

      case 'Vitality':
        result[2].VIT += attr[1].NQ;
        break;

      case 'Mind':
        result[4].MND += attr[1].NQ;
        break;
        
      default:
        break;
    }
  });


  return result;

}


export default Home