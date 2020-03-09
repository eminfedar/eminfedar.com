import React from 'react'

const AuthorCard = ( { image, name, shortbio } ) =>
    <section className="author-card">
        <img className="author-profile-image" src={ image } alt={ name } style={{ display:'block'}} />
        <section className="author-card-content">
            <h4 className="author-card-name">{ name }</h4>
            <p className="twitter-handle">{ shortbio }</p>
        </section>
    </section>

export default AuthorCard