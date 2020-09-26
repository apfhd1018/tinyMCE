import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  RightOutlined,
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const HelpList = (props) => {
  return (
    <div className="help-list" style={{ padding: "5px 0" }}>
      <Link href="">
        <a>
          <RightOutlined style={{ fontSize: "12px", marginRight: "10px" }} />
          {props.data.title}
        </a>
      </Link>
    </div>
  );
};

const Footer = () => {
  const productsData = [
    {
      href: "",
      title: "TinyMCE",
    },
    {
      href: "",
      title: "Tiny Drive",
    },
    {
      href: "",
      title: "Plugins",
    },
    {
      href: "",
      title: "Case Studies",
    },
    {
      href: "",
      title: "Pricing",
    },
    {
      href: "",
      title: "Changelog",
    },
    {
      href: "",
      title: "Quick Start Guide",
    },
    {
      href: "",
      title: "Get Tiny Mce",
    },
  ];
  const developersData = [
    {
      href: "",
      title: "Documentation",
    },
    {
      href: "",
      title: "Integrations",
    },
    {
      href: "",
      title: "Labs",
    },
    {
      href: "",
      title: "Support",
    },
    {
      href: "",
      title: "Community",
    },
    {
      href: "",
      title: "Github",
    },
    {
      href: "",
      title: "Stack Overflow",
    },
  ];
  const tinyData = [
    {
      href: "",
      title: "About Us",
    },
    {
      href: "",
      title: "Blog",
    },
    {
      href: "",
      title: "The Team",
    },
    {
      href: "",
      title: "Careers",
    },
    {
      href: "",
      title: "Contact",
    },
  ];

  // ========================
  //       렌더링 영역
  // ========================
  return (
    <div>
      <div className="feature-footer-top">
        <div className="help container">
          <Row justify="center">
            <Col lg={10} style={{ textAlign: "left" }}>
              <img src="/img/footerIcon.png" alt="" />
              <p style={{ fontSize: "20px" }}>
                Tiny helps developers create great content creation
                applications. Sign up for our newsletter to stay in touch.
              </p>
              <div className="feature-form">
                <form method="post" action="">
                  <input type="text" placeholder="Email Address" />
                  <button className="btn-navy">Subscribe</button>
                </form>
              </div>
            </Col>
            <Col lg={8} offset={1}>
              <Row justify="space-between">
                <Col style={{ textAlign: "left" }}>
                  <p>Products</p>

                  {productsData.map((data, i) => {
                    for (let i = 0; i < productsData.length; i++) {
                      return <HelpList data={data} key={i} />;
                    }
                  })}
                </Col>
                <Col style={{ textAlign: "left" }}>
                  <p>Developers</p>

                  {developersData.map((data, i) => {
                    for (let i = 0; i < developersData.length; i++) {
                      return <HelpList data={data} key={i} />;
                    }
                  })}
                </Col>
                <Col style={{ textAlign: "left" }}>
                  <p>Tiny</p>

                  {tinyData.map((data, i) => {
                    for (let i = 0; i < productsData.length; i++) {
                      return <HelpList data={data} key={i} />;
                    }
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="feature-footer-btm">
        <Row className="feature-footer-btm-first" justify="space-between">
          <Col className="feature-footer-icon-list">
            <Link href="#">
              <a>
                <GithubOutlined />
              </a>
            </Link>
            <Link href="#">
              <a>
                <TwitterOutlined />
              </a>
            </Link>
            <Link href="#">
              <a>
                <InstagramOutlined />
              </a>
            </Link>
          </Col>
          <Col className="feature-footer-terms">
            <Link href="#" className="footer-terms-a">
              © 2020 Tiny Technologies Inc.
            </Link>
            <Link href="#" className="footer-terms-a">
              Privacy
            </Link>
            <Link href="#" className="footer-terms-a">
              Terms
            </Link>
          </Col>
        </Row>
        <Row className="feature-footer-inc" justify="end">
          <Col>
            TinyMCE® and Tiny® are registered trademarks of Tiny Technologies,
            Inc.
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
