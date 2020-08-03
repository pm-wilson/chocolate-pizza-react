import React from 'react';

class ChocolateBody extends React.Component {
    render() {
        return (
            <main>
                <ChocolateBodyTop />
                <ChocolateBodyMiddle />
                <ChocolateBodyBottom />
            </main>
        )
    }
}

class ChocolateBodyTop extends React.Component {
    render() {
        return (
            <div>
                <div className="hr-box"></div>
                <section className="title-section">
                    <h1 className="title-name">Chocolate Pizza</h1>
                    <section className="posted-print">
                        <div className="post-date">POSTED ON 15 DEC 2013 / DESSERTS</div>
                        <span className="print-area">
                            <div className="print-icon"></div>
                            <div className="print-text">PRINT</div>
                        </span>
                    </section>
                </section>
                <section className="title-picture"></section>
            </div>
        )
    }
}


class ChocolateBodyMiddle extends React.Component {
    render() {
        return (
            <div>
                <section className="recipe-instructions">
                    <p className="recipe-paragraph">For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                    <p className="recipe-paragraph">Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                    <p className="recipe-paragraph">Using and ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpne, fig jam mixture, and the nust. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.</p>
                </section>
            </div>
        )
    }
}


class ChocolateBodyBottom extends React.Component {
    render() {
        return (
            <div>
<section className="recipe-picture-area">
                    <ul className="recipe-list left">
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1 1/2 cups milk
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1/2 cup mascarpone
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1/2 tsp pink salt
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1 lb Black Mission Figs
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1/2 cup brown sugar
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 2-4 tbsp water
                        </label>
                    </ul>
                    <ul className="recipe-list right">
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1 1/2 cups heavy cream
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" checked /> <span className="checked"> 1/3 granulated sugar</span>
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" checked /> <span className="checked"> 2 egg yolks</span>
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1 lemon, juiced
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 2 tbsp butter
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" /> 1 cup honey roasted pecans, roughly  <br />
                            <span className="chopped">chopped</span>
                        </label>
                    </ul>
                </section>
            </div>
        )
    }
}

export default ChocolateBody;