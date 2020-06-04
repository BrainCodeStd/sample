import React, { Component } from 'react';
import Header from "./header";
import './App.css';
import Section from "./contentSection"
class App extends Component {
  render() {
    return (
      <div className="back">

        <Header />

        <div className="row">
          <div ></div>
          <div className="video-container">
            <video
           width="800px"
              class="hp__intro-video is-visible"
              preload="auto"
              playsinline=""
              muted="" autoplay=""
              loop=""
              data-src="https://www.engine.xyz/wp-content/themes/the-engine-wp-theme/static/video/space"
              poster="https://www.engine.xyz/wp-content/themes/the-engine-wp-theme/static/video/space--large--poster.jpg">
              <source
                class="video-mp4"
                type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"
                src="https://www.engine.xyz/wp-content/themes/the-engine-wp-theme/static/video/space--large.mp4" />
              <source class="video-ogg"
                type="video/ogg; codecs=theora,vorbis"
                src="https://www.engine.xyz/wp-content/themes/the-engine-wp-theme/static/video/space--large.ogv" />
              <source class="video-webm"
                type="video/webm; codecs=vp8,vorbis"
                src="https://www.engine.xyz/wp-content/themes/the-engine-wp-theme/static/video/space--large.webm" />
            </video>
          </div>
        </div>
        <Section />
      </div>
    );
  }
}

export default App;
