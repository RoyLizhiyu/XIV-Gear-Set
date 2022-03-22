const stats = 
    {
        level: 90,
        Main: 390,
        Sub: 400,
        Div: 1900,
        HP: 3000,
        MP: 10000,
        itemLevel: [{itemLevel:0}],
        job: '',
        jobName: '',
        clan:'',
        attributes:[
            {STR: '',literal: 'Strength'},
            {DEX: '',literal: 'Dexterity'},
            {VIT: '',literal: 'Vitality'},
            {INT: '',literal: 'Intelligence'},
            {MND: '',literal: 'Mind'},

        ],
        offensiveProp:[
            {criticalHit:400, literal: 'Critical Hit'},
            {Determination:390, literal: 'Determination'},
            {directHitRate: 400, literal: 'Direct Hit Rate'},
        ]
        ,
        defensiveProp:[
            {defense:0, literal: 'Defense'},
            {magicDefense:0, literal: 'Magic Defense'},
        ]

        ,
        physicalProp:[
            {attackPower: 0, literal: 'Attack Power'},
            {skillSpeed: 0, literal: 'Skill Speed'},
        ]

        ,
        mentalProp:[
            {attackMagicPotency:'', literal: 'Attack Magic Potency'},
            {healingMagicPotency:'',literal: 'Healing Magic Potency'},
            {spellSpeed: '',literal: 'Spell Speed'},
        ]

        ,
        role:[
            {piety:390, literal: 'Piety'},
            {tenacity:400, literal: 'Tenacity'},
        ]
            
        
    }
;

export default stats;