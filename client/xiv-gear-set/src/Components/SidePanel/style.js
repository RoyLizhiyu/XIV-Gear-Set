import styled from "styled-components";

const SideStyle = styled.div` 
    width: 400px;
    z-index: 100;
    height:90vh;
    
    .container{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        width: 100%;
        height: 100%;
        background: var(--darker);
        display: flex;
        flex-direction: column;

        .nameInput{
            width: 80%;
            border-radius: 8px;
            padding: 0.6em 0.5em;
            font-size: 1rem;
            outline-color: var(--darker);
            border: none;
            background-color: var(--dark);
            display: block;
            margin-top: 0.5rem;
        }
    }


    .label{
        font-size: 1.5rem;
        font-family: 'MSB';
        color: black;
        margin-bottom: 0.5rem;
    }

    .dropDown{
        width: 80%;
        font-family: 'RR';
        font-size: 1.1rem;


    }

    .setButtons{
        margin-top: 1rem;
        background-color: var(--dark);
        font-size: 1.2rem;
        padding: 0.5em 1em;
        border: 2px solid var(--darker);
        border-radius: 8px;
        cursor: pointer;
        color: black;
        font-family: 'MSB';
        flex: 1

    }

    .saveBtn{
        flex: 2

    }

    .btns{
        width: 80%;
        display: flex;
        justify-content: space-between;

        gap: 2rem;
    }



    .mobileSideMenu{
        display: none;
        color: var(--darker);

    }

    .mobileCloseDiv{
        display: none;
    }

    .createNewSet, .loadMyset{
        padding: 1rem;
        margin-left: 1rem;
        margin-top: 2rem;
    }




    ul{
        li{
            margin-top: 2rem;
        }
    }



    @media only screen and (max-width: 768px){

        position: absolute;
        .mobileCloseDiv{
            display: block;
            width: 3rem;
            z-index: 101;
            margin-top: 1rem;
            margin-left: 1rem;

        }
        .mobileSideMenu{
            display: block;
            position: absolute;
            top: 1rem;
            left: 1rem;
            width: 3rem;
            cursor: pointer;
        }

        .hideContainer{
            transform: translateX(-100%);
        }
        .createNewSet, .loadMyset{
            margin-top: 0;
        }

        .container{
            width: 80%;
            max-width: 250px;
            position: absolute;
            left: 0;
            transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) transform;
            label{font-size: 1rem;}
        }

        .dropDown{font-size: 0.8rem;}

        .setButtons{
            font-size: 0.8rem;
        }

        .btns{
            gap: 0rem;
        }

    }
`

export default SideStyle;