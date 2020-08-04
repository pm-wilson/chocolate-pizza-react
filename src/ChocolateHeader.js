import React from 'react';

class ChocolateLinks extends React.Component {
    render() {
        return (
            <a href={this.props.site + '.com'} className={this.props.site + ' icon'}> </a>
        )
    }
}

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
                    <ChocolateLinks site='facebook'/>
                    <ChocolateLinks site='twitter'/> 
                    <ChocolateLinks site='google'/> 
                    <ChocolateLinks site='instagram'/> 
                    <ChocolateLinks site='flickr'/> 
                    <ChocolateLinks site='pintrist'/> 
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