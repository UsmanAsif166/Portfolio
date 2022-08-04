import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* UI/ UX Design */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Requirements Gathering</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Designing Principles (RnD on new ideas before start working)</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Algorithm and Mock flows</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Low Fidelity (Work on basic idea rather than visual appearance.)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>High Fidelity (Include all designing elements and graphics plus prototyping.)</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website Design </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Website Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Architecture</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Unit Testing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Api Integration</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Integration third party libraries</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Deployment</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Domain and Hosting</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Content Creation Ideas</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Content Planning and Strategy</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creating a Content Plan</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>The Content Creation Process</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Analyzing Your Content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Content Creation Tools</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Brainstorm Content Types And Topics</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
