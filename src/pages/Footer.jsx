import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
function Footer  () {
  return (
    <footer className="bg-[#0F0F1B] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <img src={logo} alt="" />
            <div className="text-xs mt-2 text-gray-400">© 2025 KeySystem Technology Limited. All rights reserved.</div>
          </div>

          <div className="flex-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <div>
              <h3 className="font-bold mb-4 text-2xl">SERVICES</h3>
              <ul className="space-y-1 text-lg">
                <li>Core refresh</li>
                <li>Application management services</li>
                <li>Evolution & enhancement services</li>
                <li>Solution Assurance & validation</li>
                <li>Digital Banking & financial inclusion</li>
                <li>Online/mobile lending solution</li>
              </ul>
            </div>
            <div className="mt-4 sm:mt-0">
              <ul className="space-y-1 text-lg">
                <li>Staff augmentation solutions</li>
                <li>Risk management & Internal audit solutions</li>
                <li>Data Warehouse & Business Intelligence (BI)</li>
                <li>Enterprise Document Management Solutions</li>
                <li>KeySystem software testing</li>
                <li>Cybersecurity Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <h3 className="flex-1 font-bold mb-2 text-2xl">QUICK LINKS</h3>
            <ul className="space-y-1 text-lg">
              <li>About Us</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="flex-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <div className="text-lg">
              <h4 className="font-bold text-white text-2xl">CONTACT</h4>
              <p>
                <strong>Nigeria</strong>
                <br />
                55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria Island
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <div className="text-lg">
                <p className="mt-3">
                  <strong>United Kingdom</strong>
                  <br />
                  39 Kenyon Lane, Off Moston Lane,
                  <br />
                  Moston, Manchester,
                  <br />
                  United Kingdom, M40 9JG
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2">
          <div className="flex-1"></div>

          <div className="flex-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-lg">
            <div>
              <strong className="text-bold">United Kingdom</strong>
              <br /> Tel: +44 161 948 1444
            </div>
            <div>
              <strong className="text-bold">United Arab Emirates</strong>
              <br /> Tel: +971 50 423 8817
            </div>
            <div>
              <strong className="text-bold">Canada</strong>
              <br /> Tel: +1 647 977 1435
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
        <div className="flex-1 ">
        <FontAwesomeIcon icon={faInstagram} className="mx-4 text-2xl"/>
        <FontAwesomeIcon icon={faXTwitter} className="mx-4 text-2xl"/>
        <FontAwesomeIcon icon={faLinkedinIn} className="mx-4 text-2xl"/>
          <FontAwesomeIcon icon={faFacebookF} className="mx-4 text-2xl"/>
        </div>

        <div className="flex-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-lg">
          <div>
            <strong>Nigeria</strong>
            <br /> Tel: +234 818 444 1404
          </div>
          <div className="mt-6 sm:mt-0">
            <div className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:enquiries@keysystemltc" className="underline">
                enquiries@keysystemltc
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
