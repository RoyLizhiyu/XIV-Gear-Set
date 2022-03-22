import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${'' /* reset all paddings and use border-box */}
*{ 
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'RR';

}




:root{
  --darker: #8E806A;
  --dark: #C3B091;
  --light: #E4CDA7;
  --lighter: #FFE6BC;
  --orange: #B3541E;

}

html{
  background-color: var(--light);
    
  }

a{
  text-decoration: none;
}
ul,li{
  list-style: none;
}
img,svg{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button{
  outline:none;
}

.container{
  width: 100%;
  margin: 0 auto;
}

.App{

}

.wrapper{
  display:flex;
  flex-direction: row;
  justify-content: flex-start
}

.hide{
  position: absolute;

  
}
.msg{
    font-family: 'MSB';
  }
.alert{
  visibility: visible;
  position: relative;


}

@media only screen and (max-width: 768px){
    .wrapper{
      flex-direction: column;
      align-items: flex-end
    }
}



`;

export default GlobalStyles;