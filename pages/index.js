import Image from "next/image";
import top_search from "../public/img/top-search.png";
import arrow_left from "../public/img/arrow-left.png";
import arrow_right from "../public/img/arrow-right.png";
import white_arrow_right from "../public/img/white-arrow-right.png";
import brand_logo from "../public/img/brand-logo.png";
import part_four_right_img from "../public/img/part-four-right-img.png";
import part_two_left_img from "../public/img/part-two-left-img.png";
import part_one_right_img from "../public/img/part-one-right-img.png";
import Gif_img from "../public/img/Gif.gif";
import { BsArrowUpRight } from "react-icons/bs";
import trst1 from "../public/img/trstedCompany1.png";
import trst2 from "../public/img/trstedCompany2.png";
import trst3 from "../public/img/trstedCompany3.png";
import trst4 from "../public/img/trstedCompany4.png";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { FooterSection, JustAbovFooter } from "../components/copilot/Footer";
export default function Home() {
  return (
    <>
      <TopSection />
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartFive />
      <JustAbovFooter />
      <FooterSection />
    </>
  );
}

function TopSection() {
  return (
    <div className="top-main-container">
      <div className="topSpan">
        <span style={{ width: "20px", margin: "0px 8px" }}>
          <Image src={top_search} alt="image" />
        </span>
        <span>
          Test out the first ever visual search tool for the art industry -&gt;
        </span>
      </div>

      <div className="blur-1"></div>

      <div className="waitlist-div">
        <div>
          <span className="brand_logo">
            <Image src={brand_logo} alt="logo" />
          </span>

          <Link
            href="https://calendly.com/augier/30min?month=2022-11"
            target="_blank"
          >
            <button className="waitlistBtn">
              <sup
                style={{
                  margin: "0px 5px",
                  width: "10px",
                  display: "inline-block",
                }}
              >
                <Image src={arrow_left} alt="arrow" />
              </sup>
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-blur">
        <div className="blur-2">
          <Zoom>
            <div>
              <h1>Co-Pilot for the Art Industry</h1>
              <p>
                Augier Art is building a tool set for galleries and art
                institutions to automate tedious workflows and <br /> unlock
                business insights using data
              </p>
            </div>
          </Zoom>
        </div>

        <div className="video">
          <Fade left>
            <video src="pages/copilot"></video>
          </Fade>

          <LightSpeed bottom>
            <Link href={"/art/prediction"}>
              <button>
                Learn More
                <div className="imgdiv">
                  <Image src={arrow_right} alt="arrow" />
                </div>
              </button>
            </Link>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
}

function PartOne() {
  return (
    <div className="part-one">
      <div>
        <p>01</p>

        <div className="left">
          <div>
            <LightSpeed left>
              <h1>
                Search inventory in natural language and build client insights
              </h1>
            </LightSpeed>

            <LightSpeed left>
              <p>
                Query your own gallery inventory like you would with a
                google-search.
                <br />
                <br />
                Discover insights regarding demand, price, aesthetic similarity,
                and related works and artists to help you find the best fit for
                your clients preferences
              </p>
            </LightSpeed>

            <LightSpeed bottom>
              <Link
                href="https://calendly.com/augier/30min?month=2022-11"
                target="_blank"
              >
                <button>
                  <span>Try Our Demo</span>
                  <div className="imgdiv">
                    <Image src={white_arrow_right} alt="arrow" />
                  </div>
                </button>
              </Link>
            </LightSpeed>
          </div>

          <LightSpeed right>
            <div>
              <Image src={part_one_right_img} alt="part-one-img" />
            </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
}

function PartTwo() {
  return (
    <div className="part-two">
      <div>
        <p>02</p>

        <div className="left">
          <div>
            <Fade right>
              <h1>
                Automate your outbound with collector context and
                personalization
              </h1>
            </Fade>

            <LightSpeed right>
              <p>
                Gain new collectors and build relationships while our AI helps
                define existing collector tastes to recommend specific artworks
                <br />
                <br />
                Auto-send emails for follow ups, exhibitions & events, or new
                inventory
                <br />
                <br />
                Use analytics to understand the efficacy of your outbounds and
                revenue generated
              </p>
            </LightSpeed>
            <LightSpeed bottom>
              <Link href="https://calendly.com/augier/30min?month=2022-11">
                <button>
                  <span>Get Early Access</span>
                  <div className="imgdiv">
                    <Image src={white_arrow_right} alt="arrow" />
                  </div>
                </button>
              </Link>
            </LightSpeed>
          </div>

          <Fade left>
            <div>
              <Image src={Gif_img} alt="part-two-img" />
              <p>
                *Automating sending an email to collectors about a new piece in
                today.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

function PartThree() {
  return (
    <div className="part-three">
      <div>
        <p>03</p>

        <div>
          <LightSpeed left>
            <div>
              Galleries were created to nurture artists and provide the
              relationships and platform for them to become great
            </div>
          </LightSpeed>
          <LightSpeed right>
            <div>
              We are automating tedious business operations so galleries can get
              back to focusing on building their artists
            </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
}

function PartFour() {
  return (
    <div className="part-four">
      <div>
        <p>04</p>

        <div className="left">
          <div>
            <Fade left>
              <h1>Understand the art market better than ever before</h1>
            </Fade>

            <LightSpeed left>
              <p className="line-height">
                The most comprehensive art database to ever exist Say goodbye to
                clunky Artnet with UX from the 90s
              </p>
            </LightSpeed>

            <LightSpeed left>
              <p>
                Here’s <strong>Augier</strong> to help galleries, students, and
                museums find and learn about art with culture and context
              </p>
            </LightSpeed>

            <LightSpeed bottom>
              <Link href={"/art/prediction"}>
                <button>
                  <span>Try now</span>
                  <div className="imgdiv">
                    <Image src={white_arrow_right} alt="arrow" />
                  </div>
                </button>
              </Link>
            </LightSpeed>
          </div>

          <LightSpeed right>
            <div>
              <Image src={part_four_right_img} alt="part-four-img" />
            </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
}

function PartFive() {
  return (
    <div className="part-five">
      <div className="flexBox">
        <div>05</div>
        <div className="partFiveTxt">
          Trusted By
          <p>Teams and individuals at</p>
        </div>
        <div></div>
      </div>
      <div className="imageSc">
        <Zoom bottom>
          <Image src={trst1} alt="" />
        </Zoom>
        <Zoom top>
          <Image src={trst2} alt="" />
        </Zoom>

        <Zoom bottom>
          <Image src={trst3} alt="" />
        </Zoom>
        <Zoom top>
          <Image src={trst4} alt="" />
        </Zoom>
      </div>
    </div>
  );
}
