import "./styles.css";
import bell from "./bell.png";
<link
  href="https://fonts.googleapis.com/css2?family=Anton&family=Caprasimo&family=Kanit:wght@300&family=Oswald:wght@200;400&family=Outfit:wght@300;400&family=Poppins&family=Roboto&family=Tilt+Prism&display=swap"
  rel="stylesheet"
/>;
export const Blog = () => {
  return (
    <div className="page">
      <div className="first">
        <div className="frame">
          <div className="firstt">
            <img src={bell} className="bell" alt="bell" />
            <spam className="dateone">30-11-2022</spam>
            <h1 className="title-one">
              Why are we so nostalgic for the 1990s?
            </h1>
            <div className="para">
              <p className="parone">
                Pop culture used to define a generation, but it seems the
                cultural, music and fashion trends of the 1990s have been
                recycled, and what Generation X considered its rite of passage
                into adulthood, is being discovered and claimed by fledgling
                grown-ups as their own.
              </p>
              <p className="paratwo">
                There's been the resurgence of vinyl as the trend-setters'
                choice of music consumption rather than the ease of a digital
                download, and now the hipsters have discovered the nostalgic
                sound of a whirring cassette from which to enjoy the dulcet
                tones of everyone from Salt-N-Pepa to Rick Astley.
              </p>
            </div>
            <h5 className="aut">
              <span className="rado">Radosław Majdan</span>
              <span className="position">Senior Marketing Specialist</span>
            </h5>
          </div>
        </div>
        <div className="second">
          <div className="secondd">
            <spam className="datetwo">30-11-2022</spam>
            <h1 className="title-two">I make mistakes!</h1>
            <div className="parat">
              <p className="paratwotwo">
                “I’m selfish, impatient and a little insecure. I make mistakes,
                I am out of control and at times hard to handle. But if you
                can’t handle me at my worst, then you sure as hell don’t deserve
                me at my best.”
              </p>
            </div>
            <p className="monroee">Marilyn Monroe</p>
            <div className="radoo">
              <span className="radotwo">Radosław Majdan</span>
            </div>
            <span className="positiontwo">Senior Marketing Specialist</span>
          </div>
        </div>
      </div>
      <div className="third">
        <span className="datethree">30-11-2022</span>
        <h1 className="title-three">
          18 Record-Breaking, Controversial, and Weird Facts{" "}
        </h1>
        <div className="parath">
          <p className="parathree">
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
        </div>
        <div className="list">
          <ul>
            <li className="point-one">
              <a href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a">
                WP.PL 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
