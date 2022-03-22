import styled from "styled-components";
import {React,useState} from 'react'

const EntryStyle = styled.div`
  margin-bottom: 5px;

  .iLevel{
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0;
  }

  .entryStats{
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
`;

function Entry({data, isILevel=false}) {

    const notILevel =<div className="entry">{data?(<div className="entryStats"><p>{Object.values(data)[1]}:</p> <p>{Object.values(data)[0]}</p></div>):(<p>loading</p>)}</div>
    
  return (
    <EntryStyle>

        {!isILevel?(notILevel):(<div className="iLevel">{data[0].itemLevel}</div>)}

    </EntryStyle>
  )
}

export default Entry