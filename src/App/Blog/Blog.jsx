import "./styles.css";
<link
  href="https://fonts.googleapis.com/css2?family=Anton&family=Caprasimo&family=Kanit:wght@300&family=Oswald:wght@200;400&family=Outfit:wght@300;400&family=Tilt+Prism&display=swap"
  rel="stylesheet"
></link>;

export const Blog = () => {
  return (
    <div className="main">
      <a href="http://localhost:3000/dashboard">
        <h4>
          <b>BLOG</b>
        </h4>
      </a>
      <div className="first">
        <span>
          <b>10-11-2022</b>
        </span>
        <h1>
          <b>Why are we so nostalgic for the 1990s?</b>
        </h1>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
        </p>
        <p>
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>
        <div className="majdan">
          <h5>
            <b>Radosław Majdan</b>
          </h5>
          <span className="senior">Senior Marketing Specialist</span>
        </div>
      </div>
      <div className="first">
        <span>
          <b>30-11-2022</b>
        </span>
        <h1>
          <b>I make mistakes!</b>
        </h1>
        <p>
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </p>
        <div className="majdan">
          <h5>
            <b>Radosław Majdan</b>
          </h5>
          <span className="senior">Senior Marketing Specialist</span>
        </div>
      </div>
      <div className="first">
        <span>
          <b>30-11-2022</b>
        </span>
        <h1 className="record">
          <b>18 Record-Breaking, Controversial, and Weird Facts </b>
        </h1>
        <p>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
        <ul>
          <a
            href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a"
            target="_blank"
          >
            <li>WP.PL 1</li>
          </a>
          <a href="https://www.wp.pl/" target="_blank">
            <li>WP.PL 2</li>
          </a>
          <a
            href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa"
            target="_blank"
          >
            <li>ONET.PL</li>
          </a>
        </ul>
        <div className="majdan">
          <h5>
            <b>Radosław Majdan</b>
          </h5>
          <span className="senior">Senior Marketing Specialist</span>
        </div>
      </div>
    </div>
  );
};
