import styled from "styled-components";


const ICardStyle = styled.div`
    .container{
        position: relative;
        flex-direction: column;
        border-radius: 8px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    }

    .itemType{
        p{
            font-family: 'MSB';
            margin: 0.5rem;
            
        }
        background: var(--darker);
        border-radius: 8px 8px 0 0 ;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
    .selector{
        max-width: 350px;
        width: 100%;
    }

    .loading{
        display: flex;
        background: var(--dark);
        width: 320px;
        min-height: 70px;
        padding: 10px 15px;
        border: 2px solid var(--darker);
        border-radius: 0 0 8px 8px;
        position: relative;
        justify-content: space-around;
        align-items: center;
        .placeholder{
            font-size: 1.2rem;
            margin: auto;
        }
    }

    .selectField{
        background: var(--dark);
        width: 320px;
        min-height: 70px;
        padding: 10px 15px;
        position: relative;
        cursor: pointer;
        border: 2px solid var(--darker);
        border-radius: 0 0 8px 8px;
        gap: 1rem;
        transition: box-shadow 0.3s;
    }

    .selectField:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.6); 
    }

    .selected{
        min-width: 200px;
        display: flex;
        gap: 1rem;
        
        img{
            width:40px;
            border-radius: 8px;
            
        }
        p{
            font-size: 1rem;
            text-align: left;
            margin: auto 0;
        }

        .placeholder{
            font-size: 1.2rem;
            margin: auto;
        }
    }

    .cancel{
        width: 20px;
        height: 20px;
        text-align: center;
        top: 8px;
        position: absolute;
        right: 5px;
        cursor: pointer;
        transition: box-shadow 0.3s;
        border-radius: 10px;
        svg{
            width: 10px;
        }
    }
    .cancel:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.6); 
    }


    .arrow{
        position: absolute;
        width: 20px;
        bottom: 5px;
        right: 5px;
        
    }

    .list{
        background: var(--lighter);
        position: absolute;
        border: 2px solid var(--darker);
        border-radius: 6px;
        z-index: 2;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
        transform: translateY(-10px);
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        max-height: 400px;
        overflow: scroll;
    }

    .list::-webkit-scrollbar {
        width:10px;
    }
    .list::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: var(--darker);
        border: 1px solid;
    }

    
    .options{
        padding: 15px;
        cursor: pointer;
        border-bottom: 2px solid var(--darker);

    }

    .options:hover{
        background-color: var(--dark);
    }

    .options .container{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .options img{
        width: 40px;

    }


    .itemHeader{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-bottom:1rem;
        p{
            font-family: 'MB';
            margin: auto 0;
            div{
                font-family:'MB';
                margin-top: 3px;
            }
        }
    }
    .itemStats{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 373px;
        justify-content: space-between;
        text-align: center;
        margin: 0 auto;
    }

    .stats{
        width: 180px;
        margin: 10px 0;
    }

    .selector button:focus + .list{
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);


    }
`;

export default ICardStyle;