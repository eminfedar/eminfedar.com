import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import Tag from '../components/Tag'
import AuthorCard from '../components/AuthorCard'
import Footer from '../components/Footer'
import author from '../author/eminfedar.json'
import siteConfig from '../../data/SiteConfig'
import ReactDisqusThread from 'react-disqus-thread'

const Template = ({ data }) => {

  const { markdownRemark: post } = data
  let tags = ''

  if(Array.isArray(post.frontmatter.tags)) {
    
    tags = post.frontmatter.tags.map((n, i) => {
        return <Tag key={ i } tag= { n } />
    })

  } else {
    tags = <div></div>
  }


  return (
    <div>

      <Navbar />

      <Helmet title={`${siteConfig.siteTitle} | ${post.frontmatter.title}`} />

      <div className="blog-post-header" style={{ backgroundImage: `url(${ post.frontmatter.image })` }}>

      { tags }

      </div>
      
      <main id="site-main" className="site-main outer bg-white" role="main">

          <div className="inner">

              <article className="post-full">

                  <div className="blog-content">

                      <h1 className="post-full-title">{ post.frontmatter.title }</h1>

                      <div className="date-meta">

                        <p>{ post.frontmatter.date }</p>

                      </div>

                      <div dangerouslySetInnerHTML={{ __html: post.html }} />

                      <hr style={{marginTop: 11, marginBottom:11}} />
                      <AuthorCard image={ author.cardimage } name={ author.name } shortbio={ author.shortbio } />

                  </div>

              </article>
              <ReactDisqusThread
                shortname="eminfedar-com"
                identifier={`${post.frontmatter.path}ef`}
                categoryid="Tech"/>
          </div>

      </main>

      <Footer />

    </div>
  );
}

export default Template

export const blogPageQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY" locale:"tr-TR")
      image
      path
      tags
      title
    }
  }
}
`;