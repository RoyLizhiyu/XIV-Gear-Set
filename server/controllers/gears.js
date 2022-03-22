import axios from "axios";


export const getGears = async (req, res)=>{
    const {job: job} = req.params;
    let url = 'https://xivapi.com/search?columns=ID,Name,LevelItem,Stats,EquipSlotCategory,MateriaSlotCount,IconHD,DefensePhys,DefenseMag,Block,BlockRate,DamagePhys,DamageMag&filters=LevelItem>=580,ClassJobCategory.ID=';
    let weapon;
    let armor;
    let acc;
    let accessories = [];
    let response = {
        mainHand: [],
        offHand: [],
        head: [],
        body: [],
        hands: [],
        legs: [],
        feet: [],
        earrings: [],
        necklace:[],
        bracelets: [],
        ring: [],
    };
    
    switch (job) {
        case 'PLD':
            weapon = await axios(url+'38?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee');
            armor = await axios(url+'59?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee');
            break;
        case 'WAR':
            weapon = await axios(url+'44?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'59?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')

            break;
        case 'DRK':
            weapon = await axios(url+'98?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'59?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')

            break;
        case 'GBR':
            weapon = await axios(url+'149?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'59?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'WHM':
            weapon = await axios(url+'53?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'64?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'SCH':
            weapon = await axios(url+'29?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'64?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'AST':
            weapon = await axios(url+'99?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'64?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'SGE':
            weapon = await axios(url+'181?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'64?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'MNK':
            weapon = await axios(url+'41?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'65?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'84?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'NIN':
            weapon = await axios(url+'93?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'103?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'105?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'DRG':
            weapon = await axios(url+'47?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'76?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'84?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'SAM':
            weapon = await axios(url+'111?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'65?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'84?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'RPR':
            weapon = await axios(url+'180?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'76?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'84?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'BRD':
            weapon = await axios(url+'50?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'66?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'105?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'MCH':
            weapon = await axios(url+'96?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'66?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'105?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'DNC':
            weapon = await axios(url+'150?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'66?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            acc = await axios(url+'105?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            accessories = acc.data.Results;
            break;
        case 'BLM':
            weapon = await axios(url+'55?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'63?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'SUM':
            weapon = await axios(url+'69?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'63?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        case 'RDM':
            weapon = await axios(url+'112?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            armor = await axios(url+'63?private_key=3b1c982a070841e7a9e734e498d4f89644907a6fd19d40b0ba4959f6001f7dee')
            break;
        default:
            break;


    }
    const weaponArray = weapon.data.Results;
    const armorArray = armor.data.Results.concat(accessories);

    weaponArray.forEach((item)=>{
        const newEntry = {
            id: '',
            name: '',
            ItemKind: '',
            MateriaSlotCount: '',
            icon: '',
            LevelItem: '',
            defense: {},
            block: 0,
            'Block Rate': 0,
            'Physical Damage': 0,
            'Magical Damage': 0,
            stats: {},
        };
        newEntry.id = item.ID;
        newEntry.name = item.Name;
        if (item.EquipSlotCategory.MainHand === 1){
            newEntry.ItemKind = 'mainHand'
        } else if (item.EquipSlotCategory.OffHand === 1){
            newEntry.ItemKind = 'offHand'
        }
        newEntry.MateriaSlotCount = item.MateriaSlotCount;
        newEntry.icon = 'https://xivapi.com'+ item.IconHD;
        newEntry.LevelItem =item.LevelItem;
        newEntry.defense = {
            defense: item.DefensePhys,
            magicDefense: item.DefenseMag,
        }
        newEntry.block = item.Block;
        newEntry['Block Rate'] = item.BlockRate;
        newEntry['Physical Damage'] = item.DamagePhys;
        newEntry['Magical Damage'] = item.DamageMag;
        newEntry.stats = item.Stats;
        response[newEntry.ItemKind].push(newEntry);
        
    })

    armorArray.forEach((item)=>{
        const newEntry = {
            id: '',
            name: '',
            ItemKind: '',
            MateriaSlotCount: '',
            icon: '',
            LevelItem: '',
            defense: {},
            block: 0,
            'Block Rate': 0,
            'Physical Damage': 0,
            'Magical Damage': 0,
            stats: {},
        };
        Object.entries(item.EquipSlotCategory).forEach((slot)=>{
            if (slot[1] === 1){
                switch (slot[0]) {
                    case 'Body':
                        newEntry.ItemKind = 'body'
                        break;
                    case 'Ears':
                        newEntry.ItemKind = 'earrings'
                        break;
                    case 'Feet':
                        newEntry.ItemKind = 'feet'
                        break;
                    case 'FingerL':
                        newEntry.ItemKind = 'ring'
                        break;
                    case 'FingerR':
                        newEntry.ItemKind = 'ring'
                        break;
                    case 'Gloves':
                        newEntry.ItemKind = 'hands'
                        break;
                    case 'Head':
                        newEntry.ItemKind = 'head'
                        break;
                    case 'Legs':
                        newEntry.ItemKind = 'legs'
                        break;
                    case 'Neck':
                        newEntry.ItemKind = 'necklace'
                        break;
                    case 'Wrists':
                        newEntry.ItemKind = 'bracelets'
                        break;                         
                    default:
                        break;
                }
            }
        })
        newEntry.id = item.ID;
        newEntry.name = item.Name;
        newEntry.MateriaSlotCount = item.MateriaSlotCount;
        newEntry.icon = 'https://xivapi.com'+ item.IconHD;
        newEntry.LevelItem =item.LevelItem;
        newEntry.defense = {
            defense: item.DefensePhys,
            magicDefense: item.DefenseMag,
        }
        newEntry.block = item.Block;
        newEntry['Block Rate'] = item.BlockRate;
        newEntry['Physical Damage'] = item.DamagePhys;
        newEntry['Magical Damage'] = item.DamageMag;
        newEntry.stats = item.Stats;
        response[newEntry.ItemKind].push(newEntry);

    })


    res.status(200).json(response);


}


