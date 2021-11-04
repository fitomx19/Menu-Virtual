import * as React from "react"
import { css } from "@emotion/react";
import { Link } from "gatsby"
import PlatilloPreview from '../components/platillo';
import usePlatillos from "../hooks/usePlatillos";
import Mapa from "../components/contenido-mapa";
import Carrusel from "../components/Carrusel";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import useDetallePlatillos from '../hooks/useDetallePlatillos';


const Flotante = styled.div`
position:fixed;
	width:70px;
	height:70px;
	bottom:40px;
	right:40px;
	background-color:#0C9;
	color:#FFF;
  z-index:1;
	border-radius:80px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
`

// markup
const IndexPage = () => {
  const platillos = usePlatillos();

  



  
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
   <Layout>
      <Flotante>
        <a css={css`text-decoration: none; color: #FFF;`} href="#test">PEDIDO</a>
      </Flotante>
    <Header/>

    
    <div className="container">
        
        <br></br>
        <Carrusel/>
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
                    <p className="card-text"><PlatilloPreview  key={platillos.id} platillos={platillos}/></p>
                  </div>
                </div>
            </div>
             ))) : (platillos.map(platillos => (
              <div className="col-sm-3 col-md-6 col-lg-4">
                  <div >
                    <div >
                      <p ><PlatilloPreview key={platillos.id}   platillos={platillos}/></p>
                    </div>
                  </div>
              </div>
               )))}
          </div>
      </div>
    </div>
   
   </Layout>
  
    
  </>
  

    
  )
}

export default IndexPage
