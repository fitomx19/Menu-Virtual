import {graphql, useStaticQuery} from 'gatsby';

const usePlatillos = () => {
    const data = useStaticQuery(
        graphql `query{
             allDatoCmsProducto {
                    nodes {
                            
                            activo
                            precio
                            titulo
                            slug
                            id
                            categoria
                            foto{
                                fluid(maxWidth:300){
                                ...GatsbyDatoCmsFluid
                                     }
                            }
                    }
                        }
                            }`
    )
    return data.allDatoCmsProducto.nodes.map(e =>({
                id: e.id,
                activo: e.activo,
                extra: e.extra,
                precio: e.precio,
                titulo: e.titulo,
                slug: e.slug,
                categoria: e.categoria,
                foto: e.foto

    }))
}

export default usePlatillos;