import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      {data.allFile.edges.map(({ node }) => (
        <ul>
          <li>{node.absolutePath}</li>
          <li>{node.size}</li>
        </ul>
      ))}
      <div>Hello world</div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          absolutePath
          size
        }
      }
    }
  }
`
