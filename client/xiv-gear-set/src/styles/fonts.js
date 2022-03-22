import { createGlobalStyle } from "styled-components";
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

const Fonts = createGlobalStyle `

    @font-face{
        font-family: 'RR';
        src: url(${RobotoMonoRegular});
    }
    
    @font-face{
        font-family: 'MB';
        src: url(${MontserratBold});
    }
    
    @font-face{
        font-family: 'MSB';
        src: url(${MontserratSemiBold});
    }




`;

export default Fonts;