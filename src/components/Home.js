import React from "react";
import { Row, Col } from "antd";

const Home = () => {
  const getStartedData = [
    {
      title: "Designed for developers",
      detail:
        "The only rich text editor specifically built to be flexible, customizable, and deal with any edge case that can be thrown at it. TinyMCE 5 has been built with developers in mind, making it easier, simpler, and faster than ever to get an editing experience that fits your use case.",
      img:
        "https://www.tiny.cloud/static/img-tinymce5-feature-3-d23eaea9f01f9e854499e96d70c11f26.png",
    },
    {
      title: "Built for designers",
      detail:
        "A clean UI designed to enhance the UX. TinyMCE 5 can be customized to fit your design system, falling seamlessly into your design vision. We’ve taken care of the basics so you can focus on the product.",
      img:
        "https://www.tiny.cloud/static/img-tinymce5-feature-2-94d948b08990edf384f40654e8369041.png",
    },
    {
      title: "Supporting content creators",
      detail:
        "Get more done in less time thanks to our productivity solutions. TinyMCE 5 has been proven to save content creators thousands of hours a year whilst increasing user engagement, all leading to better client satisfaction.",
      img:
        "https://www.tiny.cloud/static/img-tinymce5-feature-1-043114554f73fc65f4d68190efbf50cc.png",
    },
  ];

  const getStartedData2 = [
    {
      title: "PowerPaste",
      detail:
        "Stop broken HTML and increase productivity with PowerPaste. The only plugin on the market for rich text editors with a 99.9% accuracy rate. Full functionality across Microsoft Word, Excel and other popular platforms.",
      img:
        "https://www.tiny.cloud/static/copypaste@2x-c0d1bcf05c1c96e5807f82454d33e8b0.png",
    },
    {
      title: "Spell Checker Pro",
      detail:
        "The most advanced spell checker on the market. Enable your users to see the errors as they type in up to 13 different languages at the same time in a single document. Add additional functionality over and above simple spell checking to ensure compliance with your brand.",
      img:
        "https://www.tiny.cloud/static/spellcheck@2x-b66db2ce08795a91c3047a333147455f.png",
    },
    {
      title: "Image Upload",
      detail:
        "Extend your functionality with Tiny Drive, our cloud storage system, or MoxieManager, our self-hosted file management system — both fully integrated with TinyMCE. Enable the ability to store and host files in a single location, or hook-up to a file manager with a leading UI.",
      img:
        "https://www.tiny.cloud/static/tiny-drive@2x-17355e5f72bb38a682dee992a308f3c6.png",
    },
  ];

  const premiumData = {
    title: "Commercial License",
    detail:
      "Remove the restrictions of LGPL and utilize TinyMCE within your product under our commercial licensing options.",
    img:
      "https://www.tiny.cloud/static/licence@2x-bea499f010369e52c884aaa141f36592.png",
  };

  const Content = (props) => {
    return (
      <div>
        <img src={props.data.img} alt="img" />
        <h3 className="fs-24 text-bold mb-30">{props.data.title}</h3>
        <p>{props.data.detail}</p>
      </div>
    );
  };

  return (
    <div>
      {/* 메인 */}
      <div className="feature-main-container">
        <h1>TinyMCE 5</h1>
        <p style={{ fontSize: "20px", marginTop: "70px" }}>
          The rich text editor built to scale, designed to innovate, and
          developed in open source.
        </p>
        <button>Get your free API Key</button>
      </div>

      {/* Get Started With TinyMCE */}
      <div className="feature-getStarted container">
        <h2>Get Started With TinyMCE</h2>
        <p className="sub-title">
          Use the snippet below or better yet, grab your free API key...
        </p>
        <div className="feature-getStarted-list">
          <Row justify="space-between">
            {getStartedData.map((data, i) => {
              return (
                <Col xs={24} lg={8} style={{ padding: "0 11px" }}>
                  <div>
                    <Content data={data} key={i} />
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row style={{ padding: "0 80px" }}>
            <Col xs={24} lg={12}>
              <img
                src="https://www.tiny.cloud/static/img-tinymce5-feature-1-043114554f73fc65f4d68190efbf50cc.png"
                alt=""
              />
            </Col>
            <Col xs={24} lg={12}>
              <img
                src="https://www.tiny.cloud/static/img-tinymce5-feature-1-043114554f73fc65f4d68190efbf50cc.png"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Get Started 중간 */}
      <div className="feature-getStarted2 container">
        <h2>Get Started with TinyMCE</h2>
        <p className="sub-title">
          Use the snippet below or better yet, grab your free API key...
        </p>
        <img src="/img/antd.png" alt="" />
      </div>

      {/* Get Started 마지막 */}
      <div className="feature-getStarted3 container">
        <h2>Get Started with TinyMCE</h2>
        <p className="sub-title">
          Use the snippet below or better yet, grab your free API key...
        </p>
        <div className="feature-getStarted-list">
          <Row justify="space-between">
            {getStartedData2.map((data, i) => {
              return (
                <Col xs={24} lg={8} style={{ padding: "0 11px" }}>
                  <div>
                    <Content data={data} key={i} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      {/* Premium */}
      <div className="feature-premium container">
        <h2>Premium Benefits. Advanced Capabilities.</h2>
        <p className="sub-title">
          Fully responsive. Better accessibility. Completely customizable.
        </p>
        <div style={{ marginTop: "70px" }}>
          <Row justify="center">
            <Col span={8}>
              <Content data={premiumData} />
            </Col>
          </Row>
        </div>
      </div>

      {/* Question */}
      <div className="feature-question container">
        <div>
          <h2
            style={{ color: "white", fontSize: "50px", marginBottom: "80px" }}
          >
            Still Have Questions?
          </h2>
          <button class="btn-white">Talk to an expert</button>
        </div>
      </div>

      {/* Environment */}
      <div className="feature-environment container">
        <Row justify="center" style={{ marginBottom: "40px" }}>
          <Col span={14}>
            <h2>Built to thrive in all environments</h2>
            <p className="sub-title">
              We’ve taken out the quirks, and standardized the selection model,
              wrangled the clipboard, and beaten the enter key into submission.
              TinyMCE has been purpose-built to match all popular browser
              requirements and environments. Don’t risk a sub-standard
              experience.
            </p>
          </Col>
        </Row>
        <Row justify="space-between" className="environment-list">
          <Col xs={24} lg={4} style={{ textAlign: "center" }}>
            <img src="/img/firefox.png" alt="" />
            <p>Firefox</p>
          </Col>
          <Col xs={24} lg={4} style={{ textAlign: "center" }}>
            <img src="/img/ie.png" alt="" />
            <p>IE</p>
          </Col>
          <Col xs={24} lg={4} style={{ textAlign: "center" }}>
            <img src="/img/chrome.png" alt="" />
            <p>Chrome</p>
          </Col>
          <Col xs={24} lg={4} style={{ textAlign: "center" }}>
            <img src="/img/opera.png" alt="" />
            <p>Opera</p>
          </Col>
          <Col xs={24} lg={4} style={{ textAlign: "center" }}>
            <img src="/img/safari.png" alt="" />
            <p>Safari</p>
          </Col>
        </Row>
        <div style={{ marginTop: "50px" }}>
          <p>
            TinyMCE is the most stable WYSIWYG HTML editor available, built to
            handle any edge case you throw at it.
          </p>
          <button className="btn-navy" style={{ marginTop: "15px" }}>
            Check out our compatibility
          </button>
        </div>
      </div>

      {/* Flexible */}
      <div className="feature-flexible container">
        <Row justify="center">
          <Col lg={7} xs={24}>
            <img src="/img/transparent1.svg" alt="" />
            <h3>Flexible API</h3>
            <p>
              Developer-friendly API. Build your own plugins and extensions or
              fully wrap the editor. Have a look at the Docs for an extensive
              overview.
            </p>
            <button className="btn-white">API documentation</button>
          </Col>
          <Col lg={7} xs={24} offset={1}>
            <img src="/img/transparent2.svg" alt="" />
            <h3>Accessibility</h3>
            <p>
              TinyMCE follows the WAI-ARIA specification, making it compatible
              with screen readers such as JAWS and NVDA.
            </p>
            <button className="btn-white">Accessibility features</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
