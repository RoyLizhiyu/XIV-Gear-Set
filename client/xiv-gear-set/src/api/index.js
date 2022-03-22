import axios from 'axios';

const url = 'http://localhost:5000/gears';


export const getItems =  (job)=> axios.get(`${url}/${job}`);

export const getPlayerPortrait= async (name,server)=>{
    let playerUrl = `https://xivapi.com/character/search?name=${name}&server=${server}`;
    
    try {
        const searchResult = await axios.get(playerUrl);
        if (searchResult.data.Results.length === 0){
            return false;
        }
        const playerID = searchResult.data.Results[0].ID;

        const character = await axios(`https://xivapi.com/character/${playerID}`);
        const data = [character.data.Character.Portrait, character.data.Character.Name]
        return data;
    } catch (error) {
        console.log(error);
    }
    
}

