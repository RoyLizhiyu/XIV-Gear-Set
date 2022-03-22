import styled from "styled-components";

const PropertyStyle = styled.div`
    .container{
        display: block;
    }

    .title{
        text-align: center;
    }
    .titleP{
        min-width: 400px;
        font-family: 'MSB';
        font-size: 1.2rem;
        text-align: center;
        padding: 0.5rem 6rem;
        display: inline-block;
        background: var(--dark);
        border-radius: 8px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    }

    .properties{
        margin-top: 10px;

        padding: 0 7rem;
    }
    .iLevel{
        text-align: center;
    }

    

`


export default PropertyStyle;