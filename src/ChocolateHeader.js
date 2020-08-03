import React from 'react';

class ChocolateHeader extends React.Component {
    render() {
        return (
            <header>
            <section className="logo-container-1">
                <div className="logo-icon"></div>
                <div className="logo-title">
                    <p className="delicious">Delicious</p>
                    <p className="logo-text">THE BEST FOOD BLOG ON THE WEB.</p>
                </div>
            </section>
            <section className="logo-container-2">
                <div className="partner-logos">
                    <a href="facebook.com" className="facebook icon"> </a>
                    <a href="twitter.com" className="twitter icon"> </a>
                    <a href="google.com/" className="google icon"> </a>
                    <a href="instagram.com" className="instagram icon"> </a>
                    <a href="flickr.com" className="flickr icon"> </a>
                    <a href="pintrist.com" className="pintrist icon"> </a>
                </div>
                <div className="contact-logos">
                    <a href="index.html" className="rss icon"> </a>
                    <a href="mailto:chocolatepizza@delicious.comm" className="mailto icon"> </a>
                </div>
            </section>
        </header>
    
        )
    }
}

export default ChocolateHeader;