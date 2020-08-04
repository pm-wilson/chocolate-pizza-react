import React from 'react';

class AuthorInformation extends React.Component {
    render() {
        return(
            <div className="author-info-area">
                <div className="author-photo"></div>
                <section className="author-text">
                    <div className="author-name">{this.props.author}</div>
                    <div className="author-information">Food enthusiast, photography fan. Add a pinch of raw foodism and that's <br /> pretty much who I am.</div>
                </section>
            </div>
        )
    }
}

class ChocolateFooter extends React.Component {
    render() {
        return (
            <footer>
                <div className="hr-box"></div>
                <div className="footer-top">
                    <AuthorInformation author='Vanessa Stevenson' />
                    <button className="recipe-button">SHARE RECIPE</button>
                </div>
                <div className="spacer-div">
                    <div className="spacer left"></div>
                    <div className="small-logo-icon"></div>
                    <div className="spacer right"></div>
                </div>
                <div className="footer-bottom">
                    <div className="small-logo-text-upper">Delicious &copy; 2013 <span className="floater">.</span> All Rights Reserved.</div>
                    <div className="small-logo-text-lower">Proudly published with Ghost.</div>
                </div>
            </footer>
        )
    }
}

export default ChocolateFooter;