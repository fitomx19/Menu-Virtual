import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';


const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
`;

const PlatilloPreview = ({platillos}) => {
    const {precio,titulo,foto} = platillos;
    return (  
<>
       <div css={css` margin-bottom: 2rem; 
                    margin-top: 2rem; height:25rem;
                    box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);
                    -webkit-box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);
                    -moz-box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);`}>
            <Image fluid={foto.fluid} />
                <div className="container">
                    <br/>
                    <p>Titulo: {titulo}</p>
                    <p>Precio: {precio}</p>
                </div>
            
       </div>
       <div>
           <Boton >Ver detalles </Boton>
       </div>
       </>
    );
}
 
export default PlatilloPreview;