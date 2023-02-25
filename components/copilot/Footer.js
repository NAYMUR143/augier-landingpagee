import LightSpeed from "react-reveal/LightSpeed";
import Image from "next/image";
import brand_logo from "../../public/img/brand-logo.png";

export const JustAbovFooter = () => {
  return (
    <div className="justAbovFooter">
      <div className="content">
        <div></div>
        <div></div>
      </div>

      <div className="under-content">
        <div>
          <LightSpeed left>
            <div>
              <span>Join our Community of Galleries</span>
              <input type="text" placeholder="Enter your email..." />
            </div>
          </LightSpeed>

          <LightSpeed left>
            <div>
              <span>Recommend a feature or tool</span>
              <input
                type="text"
                placeholder="What would like to see next?..."
              />
            </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
};
export const FooterSection = () => {
  return (
    <div className="footer-section">
      <div>
        <div className="footerlogo">
          <Image src={brand_logo} alt="logo" />
        </div>
        <p>AI enabling the art market</p>
        <p>&copy; 2023 Augier Art Inc. All rights reserved.</p>
      </div>

      <div>
        <ul>
          <li>About</li>
          <li>FAQs</li>
          <li>Our Tools</li>
        </ul>

        <ul>
          <li>Search</li>
          <li>Gallery Upload</li>
          <li>Join Waitlist</li>
        </ul>
      </div>
    </div>
  );
};
