import React, { useState } from 'react'
import SideStyle from './style'
import jobs from '../../assets/gameData/jobs'
import clans from '../../assets/gameData/clans'
import {MdMenu, MdClose} from "react-icons/md";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import style from './menuItemStyle';
function SidePanel({localSets,changeJob,changeClan,changePlayer,saveSet,loadSet,deleteSet}) {
    const [showSide, setShowSide] = useState(false);
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [clan, setClan] = useState('');
    const [loaded, setloaded] = useState('');
    const handleJob = (e)=>{
        e.preventDefault();
        setJob(e.target.value);
        changeJob(e.target.value);
    }
    const handleClan = (e)=>{
        e.preventDefault();
        setClan(e.target.value);
        changeClan(e.target.value);
    }
    const handlePlayer = (e)=>{
        e.preventDefault();
        const name = e.target.charName.value;
        const server = e.target.server.value;
        changePlayer(name,server);
    }
    const handleSave = (e)=>{
        e.preventDefault();
        if (name ===''){
            alert('Please enter a set name');
            return;
        }
        saveSet(name);
        setName('');
    }

    const handleLoad = (e)=>{
        e.preventDefault();
        setloaded(e.target.value);
        setJob(e.target.value.job);
        setClan(e.target.value.clan);
        loadSet(e.target.value);
    }
    const handleDelete = (e)=>{
        e.preventDefault();
        const result = deleteSet(loaded.id);
        if (result === 0){
            setloaded('');
            setJob('');
            setClan('');
            alert('Successfully deleted set.')
        } else{
            alert('delete set failed.')
        }

    }

  return (
    <SideStyle>
        <div className='mobileSideMenu' onClick={()=>setShowSide(!showSide)}><MdMenu /></div>
        <div className={!showSide?('hideContainer container'):('container')}>
                <div className='mobileCloseDiv' onClick={()=>setShowSide(!showSide)}><MdClose /></div>
                <div className='createNewSet'>
                    <form className='setForm' onSubmit={handlePlayer}>
                        <label className='label' >
                            Character Name:
                            <input
                            name='charName'
                            autoComplete='true' 
                            className='nameInput' 
                            required
                            style={{marginBottom:'10px'}}
                            >
                            </input>
                        </label>



                        <label className='label'>
                            Server:
                            <input
                            name='server'
                            autoComplete='true' 
                            className='nameInput' 
                            required
                            >
                            </input>
                        </label>


                        <button type='submit' className='setButtons'>
                            Load my portrait
                        </button>

                    </form>
                </div>
                <div className='createNewSet'>
                    <form className='setForm'>
                        <ul className='options-ul'>
                            <li>
                                <label className='label'>
                                    Set Name:
                                    <input
                                    name='setName'
                                    autoComplete='off' 
                                    className='nameInput' 
                                    value={name} 
                                    onChange={(e)=>{setName(e.target.value)}}
                                    ></input>
                                </label>
                            </li>
                            <li>
                                <InputLabel className='label' id='jobLabel'>Job</InputLabel>
                                <Select
                                labelId='jobLabel'
                                id='jobSelect'
                                label='Job'
                                className='dropDown'
                                value={job} // change this according to state
                                onChange={handleJob}
                                displayEmpty
                                renderValue={job !== ''? undefined: ()=>'Choose a job'}
                                >
                                    {jobs.map(job=>
                                    {return <MenuItem key={job.code} value={job.code} style={style}>
                                    <img style={{width: '25px'}} alt='job_icon' src={job.icon}/> &nbsp;
                                    {job.name}</MenuItem>})}
                                </Select>

                            </li>
                            <li>
                                <InputLabel className='label' id='clanLabel'>Clans</InputLabel>
                                    <Select
                                    labelId='clanLabel'
                                    id='clanSelect'
                                    label='Clan'
                                    className='dropDown'
                                    value={clan} // change this according to state
                                    onChange={handleClan}
                                    displayEmpty
                                    renderValue={clan !== ''? undefined: ()=>'Choose a clan'}
                                    >
                                        {clans.map(clan=>
                                        {return <MenuItem key={clan.name} value={clan.name} style={style} >{clan.name}</MenuItem>})}
                                    </Select>
                            </li>

                            <li>
                                <div className='btns'>
                                    <button className='setButtons saveBtn' onClick={handleSave}>Save</button>
                                    <button className='setButtons'>Clear</button>
                                </div>

                            </li>
                        </ul>
                    </form>

                </div>
                <div className='loadMyset'>
                    <form>
                        <label>
                            <InputLabel className='label' id='load'>Load my set</InputLabel>
                            <Select 
                            labelId='load' 
                            name='loadSets' 
                            className='dropDown' 
                            value={loaded} 
                            onChange={handleLoad}
                            displayEmpty
                            renderValue={loaded !== ''? undefined: ()=>'saved sets'}
                            >
                                {localSets.length>0? (localSets.map(set=>{
                                    return <MenuItem key={set.id} value={set} className='setOption'>{set.setName}</MenuItem>
                                })) : (<MenuItem className='setOption' disabled>You have no saved Sets</MenuItem>)}


                            </Select>
                            <button className='setButtons' onClick={handleDelete}>Delete Set</button>
                        </label>
                    </form>

            </div>


        </div>
    </SideStyle>

  )
}

export default SidePanel