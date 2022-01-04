import React, { useState } from "react";
import { Button } from "antd";
import MyForm from "../../components/contact/form";
import AddressSection from "../../components/contact/AddressSection";

export default function Contact() {
  const [activeBtm, setactiveBtm] = useState("branding");
  return (
    <div className=" contact-page ">
      <section className=" mph20 container-wrap">
        <div className="contact-us-heading pt3-ns">
          <h1 className="page-head ma0 regular-font main-heading-animation">
            Let’s work together
          </h1>
        </div>
      </section>

      <section className=" mph20 pt4-ns container-wrap">
        <div className="buttons-section w-80-l">
          <h5 className="mb0 button-heading medium-font mb3">
            I’m interested in
          </h5>

          <div className="buttonGroup">
            <Button
              name="branding"
              onClick={(e) => setactiveBtm(e.target.name)}
              className={`${activeBtm === "branding" ? "active " : ""}`}
            >
              Branding
            </Button>
            <Button
              name="product"
              onClick={(e) => setactiveBtm(e.target.name)}
              className={`${activeBtm === "product" ? "active " : ""}`}
            >
              Product Design
            </Button>
            <Button
              name="e-com"
              onClick={(e) => setactiveBtm(e.target.name)}
              className={`${activeBtm === "e-com" ? "active " : ""}`}
            >
              E-Commerce Design
            </Button>
            <Button
              name="resarch"
              onClick={(e) => setactiveBtm(e.target.name)}
              className={`${activeBtm === "resarch" ? "active " : ""}`}
            >
              Research & testing
            </Button>
            <Button
              name="content"
              onClick={(e) => setactiveBtm(e.target.name)}
              className={`${activeBtm === "content" ? "active " : ""}`}
            >
              Content Covernace
            </Button>
          </div>
        </div>
      </section>

      <section className=" mph20 container-wrap">
        <MyForm />
      </section>
      <AddressSection />
    </div>
    
  );
}
