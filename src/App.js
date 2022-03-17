import React, {Component} from 'react';
import './App.css';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.jpeg';
import emailjs from 'emailjs-com';
import PWAPrompt from 'react-ios-pwa-prompt';
import PWAInstallerPrompt from 'react-pwa-installer-prompt';

export default class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      subject:"",
      user_id: "user_kCMlH3on6bQ53ovKUpoX6",
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
    subject_name: this.state.subject,
    from_name: this.state.email ,
    _name: this.state.name,
    message: this.state.message,    
    };
    emailjs
      .send( "my_gmail", 'template_e6asvdf' , templateParams, "user_kCMlH3on6bQ53ovKUpoX6")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
      console.log('FAILED...', error);
    });
    setTimeout(() => {
      window.location.reload(false)
    }, 5000);
  }

  render(){
  return (
    <div className="App">
      <body  data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="0">
      <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/>
      <PWAInstallerPrompt
    />
        <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
        <header id="header" class="d-flex flex-column justify-content-center">
          <nav class="nav-menu">
            <ul>
              <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services"><i class="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </header>
        <section id="hero" class="d-flex flex-column justify-content-center">
          <div class="container aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <h1> Hi, I'm Anna Asunka.</h1>
            <p>I build applications for the web
            </p>
            <span>I am a software developer specializing in building (and designing) fintech solutions for the web.<br/>
            Currently I am focused on building web solutions at Dalex Finance</span>
            <div class="social-links">
              <a href="https://mobile.facebook.com/arnah.lilichin?ref=bookmarks" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/ms_ann.xo/" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="https://join.skype.com/invite/adkL22PWuPjT" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="https://www.linkedin.com/in/anna-asunka-06b418a4/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="about" class="about">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>About</h2>
                <p>
                  Talented Software Development leader experienced in producing, integrating, and translating customer
                  requirements into testable engineering plans. Optimizing structures and processes to accomplish customer
                  targets and promote loyalty while directing large-scale teams or working hands-on to complete projects.
                  Expert in diverse programming languages, including Angular and React
                </p>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  {/*<img src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"/>*/}
                  <img src={five} class="img-fluid" alt="picture"/>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                  <h3> Software Developer.</h3>
                  <p class="font-italic">
                    Personal Information
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li> <strong>Birthday:</strong> 12 July 1997</li>
                        <li><strong>Age:</strong> 24</li>
                        <li> <a class="changes" href="tel:0505358483"><strong>Phone:</strong> +233 505358483 </a></li>
                        <li> <strong>City:</strong> Greater Accra</li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li><strong>Degree:</strong> Masters</li>
                        <li> <strong>Email:</strong> asunkaa41@gmail.com</li>
                        <li> <strong>GitHub:</strong><a href="https://github.com/GirlyTechGeek"> GirlyTechGeek</a></li>
                        <li><strong>Freelance:</strong> Available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="skills" class="skills section-bg">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Skills & Technologies</h2>
                <p>Here are a few technologies I’ve been working with recently:</p>
              </div>
              <div class="row skills-content">
                <div class="col-lg-4">
                  <ol>
                    <li><p>JavaScript (ES6+)</p>
                    </li>
                    <li>
                      <p>Angular</p>
                    </li>
                    <li>
                      <p>Ionic</p>
                    </li>
                  </ol>

                </div>
                <div class="col-lg-4">
                  <ol>
                    <li>
                      <p>React</p>
                    </li>
                    <li>
                      <p>TypeScript</p>
                    </li>
                    <li>
                      <p>NodeJs</p>
                    </li>
                  </ol>
                </div>
                <div className="col-lg-4">
                  <ol>
                    <li>
                      <p>Scrum</p>
                    </li>
                    <li>
                      <p>M365</p>
                    </li>
                    <li>
                      <p>Azure</p>
                    </li>
                  </ol>

                </div>
              </div>
            </div>
          </section>
          <section id="resume" class="resume">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Resume</h2>
                <p>
                 I am an Innovative and deadline-driven Software Developer with 3+ years of
                  experience developing user-centered web solutions and market driven software
                  from the initial concept to the final, polished deliverable.
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6">

                  <h3 class="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Masters</h4>
                    <h5>2021-2023</h5>
                    <h6>MSc IT and Law</h6>
                    <p><em>Ghana Institute of Business and Public Administration, Ghana</em></p>
                  </div>
                  <div class="resume-item">
                    <h4>Professional certificate </h4>
                    <h5>2021</h5>
                    <h6>Software engineering</h6>
                    <p><em>Azubi Africa, Ghana</em></p>
                  </div>
                  <div class="resume-item">
                    <h4> Data Engineering Fellow</h4>
                    <h5>2019</h5>
                    <p><em>Blossom Accadamy, Ghana</em></p>
                  </div>
                  <div class="resume-item">
                    <h4>Bachelor of Arts</h4>
                    <h5>2016 - 2019</h5>
                    <h6>Information Studies &amp; Sociology</h6>
                    <p><em>University of Ghana, Ghana</em></p>
                  </div>
                  <h3 class="resume-title">Certifications</h3>
                  <div class="resume-item">
                    <h4>Microsoft Developer Associate</h4>
                    <h5>2020</h5>
                    <p><em>November 2020 - November 2022</em></p>
                  </div>
                  <div class="resume-item">
                    <h4>Microsoft Azure Fundermentals</h4>
                    <h5>2020</h5>
                    <p><em>No Expiry</em></p>
                  </div>
                  <div class="resume-item">
                    <h4>Security Auditor</h4>
                    <h5>2019</h5>
                    <p><em>No Expiry</em></p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="resume-title">Professional Experience</h3>
                  <div className="resume-item">
                    <h4>Software Developer</h4>
                    <h5>2022 - Present</h5>
                    <p><em>Dalex Finance, Greater Accra, Ghana </em></p>
                    <ul>
                      <li>Developed the Dalex Swift investment application which increased the investment client base by 12%</li>
                      <li>Developed an eligibility script in python to check the eligibility requirement of loan seekers.
                      </li>
                      <li>	Revised, modularized, and updated old code bases to modern development standards, reducing operating costs and improving functionality. </li>
                      {/*<li>Developed a DevOps pipeline for web app hosting to IIS in Azure DevOps</li>*/}
                    </ul>
                  </div>
                  <div class="resume-item">
                    <h4>Software Developer (External)</h4>
                    <h5>2020 - Present</h5>
                    <p><em>Linqworth Limited, Greater Accra, Ghana </em></p>
                    <ul>
                      <li>Developing APIs and micro-services in NodeJs to simplify external integrations</li>
                      <li>Delegate tasks to the 2 members of the IT team and provide counsel on all aspects of the project. </li>
                      <li>Configuring DNS and SSL for web projects</li>
                      <li>Developed a credit eligibility checker in python for salary and loan checking</li>
                      <li>Developed a DevOps pipeline for web app hosting to IIS in Azure DevOps</li>
                    </ul>
                  </div>
                  <div class="resume-item">
                    <h4>Software Research and Development Assistant</h4>
                    <h5>2019 - 2020</h5>
                    <p><em>CITSYS, Osu Greater-Accra, Ghana</em></p>
                    <ul>
                      <li>Developed numerous software compliance policies and deployment modules.</li>
                      <li>Managed up to 3 projects or tasks at a given time while under pressure</li>
                      <li>Assisted in client migrations into Microsoft Azure</li>
                      <li>Security and Operations center analyst for CITSOC</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </section>
          <section id="portfolio" class="portfolio section-bg">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Portfolio</h2>
                <p>The below display showcases some of the projects i have worked on over the past years</p>
              </div>
              <div class="row">
                <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                  <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    {/* <li data-filter=".filter-card">Card</li> */}
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                     <img src={three} class="img-fluid mage" alt=""/>
                    <div class="portfolio-info">
                      <small>A PWA built with Angular Ionic.<br/> Create profile, View all investments, <br/>Create goals, and 24hr services <br/> all at the tap of <br/>one button.</small>
                      {/*<p>PWA</p>*/}
                      {/*<div class="portfolio-links">*/}
                      {/*  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>*/}
                      {/*  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                     <img src={two} class="img-fluid mage" alt=""/>
                    <div class="portfolio-info">
                      <small>An investment back office portal <br/> built in Angular and designed with Nebula<br/>View in realtime Investment audits, user request <br/>with a state of the art KYC automated service</small>
                      {/*<p>Web</p>*/}
                      {/*<div class="portfolio-links">*/}
                      {/*  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>*/}
                      {/*  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src={one} className="img-fluid mage" alt=""/>
                    <div className="portfolio-info">
                      <small>A web application built to run scripts. <br/>Checking eligible loan applicants, <br/>Calculating credit scores and viewing loan applicants</small>
                      {/*<p>Web</p>*/}
                      {/*<div className="portfolio-links">*/}
                      {/*  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox"*/}
                      {/*     title="Web 3"><i className="bx bx-plus"></i></a>*/}
                      {/*  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"*/}
                      {/*     className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <a href="http://healthaid.linqtest.com/">
                    <img src={four} className="img-fluid " alt=""/>
                    <div className="portfolio-info">
                      {/*<small>A web application built to run scripts. <br/>Checking eligible loan applicants, <br/>Calculating credit scores and viewing loan applicants</small>*/}
                      <p>Website</p>
                      <div className="portfolio-links">
                        {/*<a href={four} data-gall="portfolioGallery" className="venobox"*/}
                        {/*   title="Web 3"><i className="bx bx-plus"></i></a>*/}
                        {/*<a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe"*/}
                        {/*   className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>*/}
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Contact</h2>
              </div>
              <div class="row mt-1">
                <div class="col-lg-4">
                  <div class="info">
                    <div class="address">
                      <i class="icofont-google-map"></i>
                      <h4>Location:</h4>
                      <p>Norley Afia Street, Trassaco, Ghana</p>
                    </div>
                    <div class="email">
                      <i class="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p>asunkaa41@gmail.com</p>
                    </div>

                    <div class="phone">
                      <i class="icofont-phone"></i>
                      <h4>Call:</h4>
                      <p>+233 505358483</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 mt-5 mt-lg-0">
                  <form  className="form"
                    id={this.props.id}
                    name={this.props.name}
                    method={this.props.method}
                    action={this.props.action} role="form" class="php-email-form"
                  >
                    <div class="form-row">
                      <div class="col-md-6 form-group">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div class="validate"></div>
                      </div>
                      <div class="col-md-6 form-group">
                        <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div class="validate"></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" name="subject" value={this.state.subject} onChange={this.handleInputChange.bind(this)} id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div class="validate"></div>
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" name="message" value={this.state.message} onChange={this.handleInputChange.bind(this)} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div class="validate"></div>
                    </div>
                    
                    <div class="text-center"><button type="submit" onClick={this.sendMessage.bind(this)}>Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <div class="container">
            <h3>Anna Asunka</h3>
            <p>Get intouch with me on all my social media platforms</p>
            <div class="social-links">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="https://mobile.facebook.com/arnah.lilichin?ref=bookmarks" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/ms_ann.xo/" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="https://join.skype.com/invite/adkL22PWuPjT" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="https://www.linkedin.com/in/anna-asunka-06b418a4/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="copyright">
              &copy; Copyright <strong><span>Anna Asunka</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
        {/*<div id="preloader"></div>*/}
      </body>
    </div>
    );
  }
}


