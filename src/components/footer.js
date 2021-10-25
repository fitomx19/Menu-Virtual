import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = ({title}) => {
    const year = new Date().getFullYear;
  return (
    <>
      <footer
        css={css`
          background-color: #F53429;
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          
          <EnlaceHome to="/">
            <h1 className="display-2">Restaurante los Olivos</h1>
          </EnlaceHome>
        </div>
      </footer>
      <p css={css`
        text-align: center;
        color:  #fff;
        background-color: #A60800;
        margin: 0;
        padding: 1rem;
        `}>
        {title} Todos los derechos Reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer