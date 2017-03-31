import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container-fluid text-center">
        <div className="footer-content" style={{display: 'inline-block'}}>
          <div className="f-box roboto text-left">
            <span className="roboto-bold">MAGROUND</span>
            <ul className="list-unstyled">
              <li><a href="/sf/node/information/about">About us</a></li>
              <li>
                <a href="/sf/node/contact">
                  Contact
                </a>
              </li>
              <li><a href="http://blog.maground.com/">Blog</a></li>
              <li><a href="/sf/node/teasers/photographers">Photographers</a></li>
              <li><a href="/sf/node/teasers/jobs">Jobs</a></li>
            </ul>
          </div>
          <div className="f-box roboto text-left">
            <span className="roboto-bold">Services</span>
            <ul className="list-unstyled">
              <li><a href="/sf/node/teasers/imageresearch">Image Research</a></li>
              <li><a href="/sf/node/teasers/custommadeset">Productions</a></li>
              <li><a href="/sf/node/teasers/pricing">Pricing</a></li>
              <li><a href="/sf/node/teasers/compositing">Compositing License</a></li>
              <li><a href="/sf/node/teasers/newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div className="f-box roboto text-left">
            <span className="roboto-bold">Technology</span>
            <ul className="list-unstyled">
              <li><a href="/sf/node/teasers/cgi">What is CGI</a></li>
              <li><a href="/sf/node/teasers/dataquality">Data Quality</a></li>
              <li><a href="/sf/node/teasers/360HDR">HDR Domes</a></li>
              <li><a href="/sf/node/teasers/automotive">Multiple Perspectives</a></li>
              <li><a href="/sf/node/teasers/moutionblur">Motion Blur</a></li>
            </ul>
          </div>
          <div className="f-box roboto text-left">
            <span className="roboto-bold">Informations</span>
            <ul className="list-unstyled">
              <li><a href="/sf/node/teasers/automotive">Automotive Advertising</a></li>
              <li><a href="/sf/node/teasers/fashion">Fashion Backgrounds</a></li>
              <li><a href="/sf/node/teasers/cgi">360° Visualizer</a></li>
              <li><a href="/sf/node/image-archive">New Productions</a></li>
              <li><a href="/sf/node/teasers/rightsmanaged">Rights-Managed</a></li>
            </ul>
          </div>
          <div className="f-box roboto text-left">

          </div>
        </div>

      </div>
      <div className="footer-line roboto">
        <div className="container-fluid">
          <ul className="list-unstyled  list-inline text-capitalize text-right col-xs-4">
            <li>
              <a href="/sf/node/information/dataprotection">Privacy</a>
            </li>
            <li>
              <a href="/sf/node/information/terms_and_conditions">
                Terms and Conditions
              </a>
            </li>
          </ul>
          <ul className="list-unstyled list-inline text-center social-icons col-xs-4">
            <li><a href="https://vimeo.com/user6815937" target="_blank"><i className="fa fa-vimeo"
                                                                           aria-hidden="true"></i></a></li>
            <li><a href="https://www.behance.net/MAGROUND" target="_blank"><i className="fa fa-behance"
                                                                              aria-hidden="true"></i></a></li>
            <li><a href="https://www.facebook.com/magroundgmbh" target="_blank"><i className="fa fa-facebook"
                                                                                   aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/company/maground" target="_blank"><i className="fa fa-linkedin"
                                                                                       aria-hidden="true"></i></a></li>
          </ul>
          <ul className="list-unstyled  list-inline text-capitalize text-left col-xs-4" style={{float: 'right'}}>
            <li>
              <a href="/sf/node/information/imprint">
                Imprint
              </a>
            </li>
            <li>
              <a href="/sf/node/contact">
                Contact
              </a>
            </li>
            <li><span>2007-2017 MAGROUND Gmbh</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
