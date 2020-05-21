import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import "./index.css"

const IndexPage = ({data}) => {
    console.log(data);
    return <div>
        <h1>Hello!</h1>
        <p>This is my first Gatsby project.</p>

        <div className="photos">
            {data.allFile.edges.map(({node}) => {
                return <Img key={node.id} fluid={node.childImageSharp.fluid}/>
            })}
        </div>
    </div>
}

export const pageQuery = graphql`
    {
    allFile(filter:{absolutePath:{regex: "//photos//"}}) {
    edges {
    node {
    id
    childImageSharp {
    fluid(maxWidth: 385) {
    ...GatsbyImageSharpFluid_withWebp
    }
    }
    }
    }
    }
    }
`

export default IndexPage
