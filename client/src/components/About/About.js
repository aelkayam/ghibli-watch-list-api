import "./About.css";
import React from "react";
import totoro from "../../images/studio-ghibli-logo.png";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="header">
          <h1 className="heading">About Studio-Ghibli</h1>
        </div>
        <div className="main">
          <div className="info">
            <p>
              Studio Ghibli was founded in 1985 by animated film directors{" "}
              <b>Isao Takahata</b> and <b>Hayao Miyazaki</b>, and has produced
              twenty-two feature-length films. Most Studio Ghibli films ranked
              number one at the box office in Japan in the year in which they
              were released. SPIRITED AWAY, directed by Hayao Miyazaki and
              released in 2001, is the all-time highest grossing film in Japan,
              earning over 30 billion yen at the box office.
            </p>
            <p>
              Studio Ghibli films have garnered numerous awards and critical
              acclaim from film critics and animation specialists around the
              world. SPIRITED AWAY was awarded the Golden Bear as the Best
              Feature Film at the 2002 Berlin International Film Festival and
              won the 2002 Academy Award for Best Animated Feature Film. In
              October 2001, Studio Ghibli, in conjunction with The Tokuma
              Memorial Cultural Foundation for Animation, founded the Ghibli
              Museum, Mitaka, designed by Hayao Miyazaki.
            </p>
          </div>
          <img className="info-logo" src={totoro} alt="totoro-transparent" />
        </div>
      </div>
    </div>
  );
}
