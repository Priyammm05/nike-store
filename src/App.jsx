import React from "react";
import {
    Banner,
    Cart,
    FlexContent,
    Footer,
    Navbar,
    Sales,
    Stories,
} from "./components";
import {
    heroapi,
    popularsales,
    topratesales,
    highlight,
    sneaker,
    story,
    footerAPI,
} from "./data/data";

const App = () => {
    return (
        <div>
            <Navbar />
            <Cart />
            <main className="flex flex-col gap-16 relative">
                <Banner heroapi={heroapi} />
                <Sales endpoint={popularsales} ifExists />
                <FlexContent endpoint={highlight} ifExists />
                <Sales endpoint={topratesales} />
                <FlexContent endpoint={sneaker} />
                <Stories story={story} />
            </main>
            <Footer footerAPI={footerAPI} />
        </div>
    );
};

export default App;
