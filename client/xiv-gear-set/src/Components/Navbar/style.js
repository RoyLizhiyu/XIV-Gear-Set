import styled from "styled-components";


const NavbarStyle = styled.div`
    .container{
        display:flex;
        background-color: blue;
        width: 100%;
        background-color: var(--lighter);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .brand{
        padding: 1rem;
        padding-top: 1.3rem;
    }

    .brandTitle{
        font-size: 2.6rem;
        font-family: 'MSB';
        color: var(--orange);
    }
    .subtitle{
        font-size: 1.3rem;
        font-family: 'RR';
    }

    @media only screen and (max-width:768px){
        
        .brandTitle{
            font-size: 1.6rem;
        }
        .subtitle{
            font-size:0.5rem;
        }
        .brand{
            margin: 0 auto;
            text-align: center;
            width: 100vw;
        }
    }
`

export default NavbarStyle;