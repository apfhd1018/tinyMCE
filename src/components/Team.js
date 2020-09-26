import React, { useState } from "react";
import { Row, Col } from "antd";

const Team = () => {
  const storyData = [
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/01/Blackboard_logo_500x250-e1475690127830.png",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/01/IBM_logo-500px.png",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/01/Microsoft_logo_500x250.png",
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2016/02/OpenText-1.png",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/08/service-now-logo.png",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/01/Survey_Monkey_logo_500x250.png",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/02/tdbank-logo.png",
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2016/02/Visa-logo.png",
    },
  ];
  const StoryImg = (props) => {
    return (
      <Col span={3}>
        <img src={props.data.img} alt="" />
      </Col>
    );
  };
  const memberData = [
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2018/10/team-tiny-aine-winklebleck.jpg",
      name: "Aine Winklebleck",
      job: "CUSTOMER SUCCESS MANAGER",
      id: 1,
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2018/09/IMG_0210.jpg",
      name: "Alice Walker",
      job: "SENIOR PRODUCT DESIGNER",
      id: 2,
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2008/01/PA240474.jpg",
      name: "Amy Chen",
      job: "CFO",
      id: 3,
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2018/07/tiny-team-andrew-bellis.jpg",
      name: "Andrew Bellis",
      job: "VICE PRESIDENT OF SALES",
      id: 4,
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2018/10/team-tiny-aine-winklebleck.jpg",
      name: "Aine Winklebleck",
      job: "CUSTOMER SUCCESS MANAGER",
      id: 5,
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2018/09/IMG_0210.jpg",
      name: "Alice Walker",
      job: "SENIOR PRODUCT DESIGNER",
      id: 6,
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2008/01/PA240474.jpg",
      name: "Amy Chen",
      job: "CFO",
      id: 7,
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2018/07/tiny-team-andrew-bellis.jpg",
      name: "Andrew Bellis",
      job: "VICE PRESIDENT OF SALES",
      id: 8,
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2018/10/team-tiny-aine-winklebleck.jpg",
      name: "Aine Winklebleck",
      job: "CUSTOMER SUCCESS MANAGER",
      id: 9,
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2018/09/IMG_0210.jpg",
      name: "Alice Walker",
      job: "SENIOR PRODUCT DESIGNER",
      id: 10,
    },
  ];
  const boardData = [
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2009/01/PA240471.jpg",
      name: "Andrew Roberts",
      job: "CEO & CO-FOUNDER",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2018/10/jeff_tannenbaum-bluerun_ventures.jpg",
      name: "Jeff Tannenbaum",
      job: "BOARD MEMBER",
    },
    {
      img: "https://about.tiny.cloud/wp-content/uploads/2010/01/PA240593.jpg",
      name: "John Hummelstad",
      job: "BOARD MEMBER",
    },
    {
      img:
        "https://about.tiny.cloud/wp-content/uploads/2016/01/misha-logvinov.jpg",
      name: "Misha Logvinov",
      job: "BOARD MEMBER",
    },
  ];

  const initialScaleState = {
    1: 0,
    2: 0,
    3: 0,
  };

  const Member = ({ data, title }) => {
    const [scale, setScale] = useState(initialScaleState);
    const [hover, setHover] = useState(false);

    return (
      <>
        <h1>{title}</h1>

        <Row gutter={20} justify="center">
          {data.map((item, i) => {
            return (
              <Col
                lg={5}
                md={12}
                xs={24}
                key={i}
                style={{ marginBottom: "50px" }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      filter: `grayscale(${scale}%)`,
                    }}
                    id={item.id}
                  />
                  {hover && <div className="team-member-hover">인스타그램</div>}
                </div>
                <p className="team-name">{item.name}</p>
                <p className="team-job">{item.job}</p>
              </Col>
            );
          })}
        </Row>
      </>
    );
  };

  // ========================
  //       렌더링 영역
  // ========================
  return (
    <div className="team">
      {/* 상단 */}
      <div className="team-main">
        <div className="team-main-container">
          <Row
            justify="center"
            className="team-main-box"
            style={{ textAlign: "center" }}
          >
            <Col>
              <h1 className="team-main-h1">Meet the Team</h1>
              <p className="team-main-p">Join the #1 team in the industry</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* 중앙부 */}
      <div className="team-story">
        <Row style={{ padding: "80px 0", textAlign: "center" }}>
          <Col style={{ padding: "30px 0" }}>
            <h1>Our Story</h1>
            <p>
              If you’ve ever created content on the Internet, the chances are
              you’ve already used one of our products. We’re Tiny, and we are
              the makers of TinyMCE, Textbox.io, and other great products. Our
              products are used by millions of developers and content creators
              worldwide.
            </p>
            <p>
              Our software is licensed by leading technology companies,
              including IBM, Zendesk, Evernote, Constant Contact, SurveyMonkey,
              Marketo, Blackboard, Microsoft, LinkedIn, SAP, Eventbrite,
              Optimizely, WordPress.com, Atlassian, Jive, Lithium, Hubspot,
              Desire2Learn, Adobe, and Meetup.com. It is downloaded by
              developers more than millions of times a year and used by hundreds
              of millions of people.
            </p>
            <Row>
              {storyData.map((data, i) => {
                return <StoryImg data={data} key={i} />;
              })}
            </Row>
          </Col>
        </Row>
      </div>
      {/* 중앙 Team 소개 부 */}
      <div className="team-member">
        <div style={{ textAlign: "center" }}>
          <Member data={memberData} title="Our Team" />
          <Member data={boardData} title="Our Board" />
        </div>
      </div>
      {/* -------------team-join------------- */}
      <div className="team-join">
        <Row justify="center" align="middle">
          <Col lg={14} className="team-join-left">
            <h2>Join Us</h2>
            <p>
              Tiny is your chance to make an impact in the world of technology.
              With tens of millions of users and the best capabilities in the
              industry your work will make a difference.
            </p>
          </Col>
          <Col lg={6} offset={1} className="team-join-right">
            <button>VIEW CAREER OPPORTUNITIES</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Team;
