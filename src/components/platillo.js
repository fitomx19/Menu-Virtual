import React , {useState} from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Showdown from 'showdown';

const Boton = styled.button`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
`;

const PlatilloPreview = ({platillos}) => {
   
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(true);

    const {precio,titulo,foto,detalles} = platillos;

    return (  
<>
       <div css={css` margin-bottom: 2rem; 
                    margin-top: 2rem; 
                    box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);
                    -webkit-box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);
                    -moz-box-shadow: 10px 2px 5px -3px rgba(0,0,0,0.62);`}>
            <Image fluid={foto.fluid} />
                <div className="container">
                    <br/>
                    <p css={css`font-weight: 700; font-size:2rem; text-align: center;`}>{titulo.toUpperCase() }</p>
                    <p css={css`font-size:1.2rem;`}>Precio: $ {precio} .00</p>
                </div>
            
       </div>
       <div>
           <div>
            <button className="form-control btn btn-danger" onClick={onClick}>Detalles</button>
                {showText ? <Informacion detalles={detalles} /> : null}
            </div>
           
       </div>
       </>
    );
  
}
const converter = new Showdown.Converter();
const Informacion = ({detalles}) => <div><br/>

    <p>
    <div  dangerouslySetInnerHTML={{ __html: converter.makeHtml(detalles) }} />
    </p></div>;
 
export default PlatilloPreview;