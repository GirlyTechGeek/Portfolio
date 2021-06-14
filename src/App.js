import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import emailjs from 'emailjs-com';
import PWAPrompt from 'react-ios-pwa-prompt';
import PWAInstallerPrompt from 'react-pwa-installer-prompt';
import Prompt from './Prompt'
import ReactPWAInstallProvider from "react-pwa-install";

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
    <div id="preview">
      <body data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="0">
      <ReactPWAInstallProvider enableLogging ><Prompt/></ReactPWAInstallProvider>
      <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/>
      {/* <PWAInstallerPrompt 
      render={({ onClick }) => (
        <button type="button" onClick={onClick}> // make sure you pass onClick
          Install
        </button>
      )}
      callback={(data) => console.log(data)} 
    /> */}
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
            {/* <h2 id="demo"></h2> */}
            <h1>Anna Asunka</h1>
            <p>I'm <span class="typed" data-typed-items="Software Developer, Big Data Enthusiast"></span>
              <span class="typed-cursor" aria-hidden="true" >|</span>            
            </p>
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
                <p>A multi-skilled Information Science professional, passionate about the
                  development and efficient application of IT tools and resources towards national
                  development, and seeking a bigger and challenging opportunity to contribute in this
                  direction, whilst upgrading my knowledge and skills in all related and applicable
                  areas
                </p>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGS3QYMymxSKA/profile-displayphoto-shrink_800_800/0/1613674345934?e=1628726400&v=beta&t=c_Gcm5zPlHrWlL3D6DfpeMrgBAxEOC6owSDmK6dTXxU" class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                  <h3> Software Developer.</h3>
                  <p class="font-italic">
                    Personal Information
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 12 July 1997</li>
                        <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 23</li>
                        <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +233 505358483</li>
                        <li><i class="icofont-rounded-right"></i> <strong>City:</strong> Greater Accra</li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor</li>
                        <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> asunkaa41@gmail.com</li>
                        <li><i class="icofont-rounded-right"></i> <strong>GitHub:</strong><a href="https://github.com/GirlyTechGeek">GirlyTechGeek</a></li>
                        <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="facts" class="facts">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Facts</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="count-box">
                    <i class="icofont-simple-smile"></i>
                    <span data-toggle="counter-up">7</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                  <div class="count-box">
                    <i class="icofont-document-folder"></i>
                    <span data-toggle="counter-up">15</span>
                    <p>Projects</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div class="count-box">
                    <i class="icofont-live-support"></i>
                    <span data-toggle="counter-up">1,463</span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div class="count-box">
                    <i class="icofont-users-alt-5"></i>
                    <span data-toggle="counter-up">2</span>
                    <p>Microsoft certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="skills" class="skills section-bg">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div class="row skills-content">
                <div class="col-lg-6">
                  <div class="progress">
                    <span class="skill">HTML <i class="val">100%</i></span>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress">
                    <span class="skill">CSS <i class="val">50%</i></span>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress">
                    <span class="skill">JavaScript <i class="val">85%</i></span>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="progress">
                    <span class="skill">WordPress/CMS <i class="val">55%</i></span>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="progress">
                    <span class="skill">ReactJS <i class="val">85%</i></span>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="resume" class="resume">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>Resume</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="resume-title">Sumary</h3>
                  <div class="resume-item pb-0">
                    <h4>Anna Asunka</h4>
                    <p><em>Innovative and deadline-driven Software Developer with 1+ years of experience developing user-centered websites and market driven softwares from initial concept to final, polished deliverable.</em></p>
                    <ul>
                      <li>Accra, Greater Accra Ghana</li>
                      <li>+233 505358483</li>
                      <li>asunkaa41@gmail.com</li>
                    </ul>
                  </div>
                  <h3 class="resume-title">Education</h3>
                  <div class="resume-item">
                    <h4>Masters certificate in Software engineering</h4>
                    <h5>2020</h5>
                    <p><em>German Institute of Business and Technology</em></p>
                  </div>
                  <div class="resume-item">
                    <h4>Accelerator Data Engineering</h4>
                    <h5>2019</h5>
                    <p><em>Blossom Accadamy, Ghana</em></p>
                  </div>
                  <div class="resume-item">
                    <h4>Bachelor of Arts in Information Studies &amp; Sociology</h4>
                    <h5>2016 - 2019</h5>
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
                    <p><em>No Expiry, Safetica</em></p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="resume-title">Professional Experience</h3>
                  <div class="resume-item">
                    <h4>Software Developer</h4>
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
                  <div class="resume-item">
                    <h4>CITSYS stationed at Dalex Finance</h4>
                    <h5>2018 - 2019</h5>
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
                    {/* <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/> */}
                    <div class="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    {/* <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/> */}
                    <div class="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
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
        <div id="preloader"></div>
      </body>
    </div>
    );
  }
}


