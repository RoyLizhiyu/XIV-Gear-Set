import React from 'react'
import FooterStyle from './style';

function Footer() {
    const year = new Date().getFullYear();
  return (
      <FooterStyle>

        <div className='copyright'>
            <footer>
                <p>Copyright ⓒ Zhiyu Li {year}</p>
            </footer>
        </div>

                  
      </FooterStyle>

  )
}

export default Footer