import * as React from "react"
import { css } from "@emotion/react";
import { Link } from "gatsby"
import PlatilloPreview from '../components/platillo';
import usePlatillos from "../hooks/usePlatillos";
import Facebook from '../images/facebook.svg'
import Instagram from '../images/insta.svg'
import WhatsApp from '../images/whatsapp.svg'
import Telefono from '../images/telefono.svg'
import Footer from "../components/footer";
// markup
const IndexPage = () => {
  const platillos = usePlatillos();
  console.log(platillos);
  //TODO EDITAR SECCION PARA CAMBIAR DATOS
 
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredResults, setFilteredResults] = React.useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = platillos.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(platillos)
    }
}

  const filteredData = platillos.filter((item) => {
    return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
  

  return (
 
    <>
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    </div>
    <div className="container">
        <div className="alert" css={css`text-align:center;`}>
            <h1 className="display-2" >Restaurante Los Olivos</h1>
        </div>
        <div className="row">
        <div className="col">
        <Link to="/">
        <img src={Facebook} css={css`width: 40%; `} alt="..."/>
        </Link> 
        </div>
        <div className="col">
        <Link to="/">
        <img src={Instagram} css={css`width: 40%`} alt="..."/>
        </Link> 
        </div>
        <div className="col">
        <Link to="/">
        <img src={WhatsApp} css={css`width: 40%`} alt="..."/>
        </Link> 
        </div>
        <div className="col">
        <Link to="/">
        <img src={Telefono} css={css`width: 40%`} alt="..."/>
      </Link>
        </div>

          
        </div>
        <div className="container">
        <div style={{ padding: 20 }}></div>
            <input type="text" className="form-control" placeholder="Buscar..." onChange={(e) => searchItems(e.target.value)}/>
        
        <br></br>
        </div>

        <div>
          <div className="row">
          {searchInput.length > 1 ? (filteredResults.map(platillos => (
            <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text"><PlatilloPreview key={platillos.id} platillos={platillos}/></p>
                  </div>
                </div>
            </div>
             ))) : (platillos.map(platillos => (
              <div className="col-sm-3 col-md-6 col-lg-4">
                  <div >
                    <div >
                      <p ><PlatilloPreview key={platillos.id} platillos={platillos}/></p>
                    </div>
                  </div>
              </div>
               )))}
          </div>
      </div>
    </div>
    
    <Footer/> 
    </>
    
  )
}

export default IndexPage
