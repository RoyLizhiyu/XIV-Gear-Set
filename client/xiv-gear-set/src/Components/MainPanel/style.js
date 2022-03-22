import styled from "styled-components";


const MainStyle = styled.div`
    width: 100%;
    margin-top: 1rem;
    .container{
        display: flex;
        justify-content: space-evenly;
    }

    .characterHeader{
        text-align: center;
        padding: 1rem;
        margin-bottom: 1rem;
        background: var(--darker);
        border-radius: 8px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        .header{
            font-family: 'MB';
            font-size: 1.8rem;

            span{
                font-family: 'MB';
                color: #e97a0a;
            }
        }
    }

    .characterHPMP{
        margin: 20px auto;
        padding: 16px 10px;
        ul{
            li{
                display:inline-block;
                
            }
            .hpItem{
                margin-left: 5px;
                width: 200px;
            }
            .mpItem{
                margin-left: 15px;
                width: 200px;
            }

        }
    }

    .hpBar{
        display:block;
        width:100%;
        height: 2px;
        border-radius: 1px;
        line-height: 2px;
        background-color: #81a721;
    }
    .mpBar{
        display:block;
        width:100%;
        height: 2px;
        border-radius: 1px;
        line-height: 2px;
        background-color: #dc7d9d;
    }

    .hpmpText{
        display: flex;
        justify-content: space-between;
        span{
            font-family: 'MSB';
            font-size: 1.25rem;
        }

    }

    .left{
        padding: 0.5rem;
        display:flex;
        flex-direction:column;
        
    }
    .right{
        width: 30%;
        display:flex;
        flex-direction: column;
        background: var(--darker);
        border-radius: 8px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        padding: 1rem;
    }
    .itemColumn{
        float: left;
    }
    .characterImg{
        float: left;
        margin: 0 2rem;
        width: 325px;
        height: 711px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            
            border-radius: 8px;
            border: 2px solid var(--darker);
        }

        h2{
            color: var(--orange);
            width: 90%;
            border-radius: 8px;
            padding: 10px;
            font-family: 'MSB';
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            font-size: 1.25rem;

        }
        

    }
    .itemCard{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media only screen and (max-width:768px){
        .container{
            flex-direction: column;
        }
    }
`

export default MainStyle;