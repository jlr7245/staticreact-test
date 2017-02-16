import React from 'react';
import Helmet from 'react-helmet';
import self from '../svgs/self.svg';

export default () => (
    <div className="home-wrap">
        <div className="self"><img src={self} /></div>
        <div className="welc">
            <h3>Hey there! ...</h3>
            <h3>You've reached the digital home of ...</h3>
            <h1 className="homehead">J Silverstein</h1>
        </div>
        <div className="content">
            <p>J is a formally trained designer masquerading as a developer, or possibly the other way around, she isn't quite sure. Either way, she loves both designing the look and feel of something new and building it out to its completion.</p>
            <p>She loves mazes, maps, puzzles, science fiction, and her wife.</p>
            <p>Currently, she's looking for the next challenge. Please feel free to get in touch with her.</p>
        </div>
    </div>
);
