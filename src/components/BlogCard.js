import React from 'react'
import Link from 'gatsby-link'
import IronImage from './IronImage'

const BlogCard = ({ path, image, tag, title, date, description, authorImage, authorName}) =>
    <article className="post-card post">
        <Link className="post-card-image-link" to={ path}>
            <IronImage srcLoaded={ image } />
        </Link>
        <div className="post-card-content">
            <Link className="post-card-content-link" to={ path }> 
                <header className="post-card-header">
                    
                    <h2 className="post-card-title">{ title }</h2>
                    
                </header>
                <section className="post-card-excerpt">
                    <p>{ description }</p>
                </section>
            </Link>
            <footer className="post-card-meta">
            <span className="post-card-tags">{ tag }</span>
            <p className="date-meta">{ date }</p> 
            </footer>
        </div>
    </article>

export default BlogCard