import { Vector } from "../Images/tech-stack/Vector";
import { Bitbucket } from "../Images/tech-stack/bitbucket";
import { Firebase } from "../Images/tech-stack/firebase";
import { Hatem } from "../Images/tech-stack/html";
import { Javascript } from "../Images/tech-stack/javascript";
import { Jest } from "../Images/tech-stack/jest";
import { Reactt } from "../Images/tech-stack/react";
import { Typescript } from "../Images/tech-stack/typescript";
import "./styles.css";
import { Reduxxx } from "../Images/tech-stack/redux";
import { Githubb } from "../Images/tech-stack/github";
import { Discord } from "../Images/tech-stack/discord";
import { Jira } from "../Images/tech-stack/Jira";
import { Reddmine } from "../Images/tech-stack/readmine";

export const TechStack = () => {
  return (
    <div className="techstack">
      <div className="stack">
        <h1>TECH STACK</h1>
      </div>
      <div className="text">
        <p>
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu.
        </p>
      </div>
      <div class="grid-container">
        <div class="grid-cell">
          <Vector />
          <p>CSS</p>
        </div>
        <div class="grid-cell">
          <Hatem />
          <p>html</p>
        </div>
        <div class="grid-cell">
          <Typescript />
          <p>typescript</p>
        </div>
        <div class="grid-cell">
          <Javascript />
          <p>javascript</p>
        </div>
        <div class="grid-cell">
          <Reactt />
          <p>react</p>
        </div>
        <div class="grid-cell">
          <Bitbucket />
          <p>bitbucket</p>
        </div>
        <div class="grid-cell">
          <Jest />
          <p>jest</p>
        </div>
        <div class="grid-cell">
          <Firebase />
          <p>firebase</p>
        </div>
        <div class="grid-cell">
          <Reduxxx />
          <p>redux</p>
        </div>
        <div class="grid-cell">
          <Githubb />
          <p>github</p>
        </div>
        <div class="grid-cell">
          <Githubb />
          <p>git</p>
        </div>
        <div class="grid-cell">
          <p>vscode</p>
        </div>
        <div class="grid-cell">
          <Discord />
          <p>discord</p>
        </div>
        <div class="grid-cell">
          <Jira />
          <p>jira</p>
        </div>
        <div class="grid-cell">
          <Reddmine />
          <p>readmine</p>
        </div>
      </div>
    </div>
  );
};
