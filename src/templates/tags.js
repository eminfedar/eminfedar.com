import React from "react"
import Link from "gatsby-link"
import Header from '../components/Header'
import HomeNav from '../components/HomeNav'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import TagList from '../components/TagList'
import author from '../author/eminfedar.json'
import Navbar from "../components/Navbar"

export default function Tags({ pathContext }) {

    const { posts, post, tag } = pathContext
    const sortedTags = Object.keys(posts).sort();
    console.log(post)

    if (tag) {
        return (
            <div>
                <Navbar />
                <div className="home-template">

                    <Header
                        image={author.backgroundImage}
                        title={`${tag} Kategorisinde ${post.length} yazı var.`}
                        tagline='-' />

                    <main id="site-main" className="site-main outer" role="main">
                        <div className="inner">
                            <div className="post-feed">
                                {
                                    post.map((node) => (
                                        <BlogCard
                                            key={node.id}
                                            path={node.frontmatter.path}
                                            image={node.frontmatter.image}
                                            tag={node.frontmatter.tags[0]}
                                            title={node.frontmatter.title}
                                            date={node.frontmatter.date}
                                            description={node.frontmatter.description}

                                            authorImage={author.cardimage}
                                            authorName={author.name} />
                                    ))
                                }
                            </div>
                        </div>
                    </main>

                    <Footer />

                </div>
            </div>
        )
    }
    return (

        <div>
            <Navbar />
            <div className="home-template">

                <Header image={author.backgroundImage} title="Kategoriler" tagline="-" />

                <main id="site-main" className="site-main outer" role="main">

                    <div className="inner">

                        <div className="post-feed">

                            <div className="tag-container">

                                {sortedTags.map((n, i) => (

                                    <TagList tag={n} key={i} />

                                ))}

                            </div>

                        </div>

                    </div>
                </main>

                <Footer />

            </div>

        </div>
    );
}