import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Index = () => {
  return (
    <Layout>
      <div className="section started personal" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div
                className="logo"
                style={{ backgroundImage: "url(images/ossama-portrait.png)" }}
              />
              <h1 className="h-title">
                Hello, I’m <strong>Ossama Rafique</strong>, <br />
                Front-end Engineer Based in Toronto 🇨🇦
              </h1>
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
