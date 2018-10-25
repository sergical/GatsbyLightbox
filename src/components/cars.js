import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Cars = () => (
  <StaticQuery
    query={graphql`
      query {
        carImages: allFile(filter: {sourceInstanceName: { eq: "cars" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => console.log(data) || <div>Images</div>}
  />
)
export default Cars
