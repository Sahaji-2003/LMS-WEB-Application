import React from 'react'
import './LandingPageCss.css'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { useState } from 'react'
import StudentLogin from '../../students/Register/StudentLogin'
import StudentRegister from '../../students/Register/StudentRegister'

const LandingPage = () => {
  // const Register = () => {
    const [activeTab, setActiveTab] = useState(null);
  
    const handleTabClick = (role) => {
      setActiveTab(role);
    };
  
  return (
    <>
    <>
  {/* ======= Header ======= */}
  <header
    id="header"
    className="fixed-top d-flex align-items-center  header-transparent "
  >
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
        <h1>
          <a href="index.html">LMS WebApp</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          {/* <li>
            <a className="nav-link scrollto " href="/Signup">
              Register
            </a>
          </li> */}
          <li>
            <a className="nav-link scrollto" href="/EducatorLogin">
              Educator Login
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="/StudentLogin">
              Student Login
            </a>
          </li>
          {/* <li className="dropdown">
            <a href="#">
              <span>Drop Down</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section
    id="hero"
    className="d-flex flex-column justify-content-end align-items-center"
  >
    <div
      id="heroCarousel"
      data-bs-interval={5000}
      className="container carousel carousel-fade"
      data-bs-ride="carousel"
    >
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Welcome to <span>Paper Designer</span>
          </h2>
          <p className="animate__animated fanimate__adeInUp">
          Our web-based Learning Management System (LMS) is designed to empower educators in creating
          comprehensive Multiple Choice Question (MCQ) papers with ease. With an intuitive interface,
          you can seamlessly design, organize, and customize.
          </p>
          
          <a
            href="#features"
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
          >
            Register Now
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Streamline MCQ Paper Generation
          </h2>
          <p className="animate__animated animate__fadeInUp">
          Say goodbye to the hassle of manually preparing MCQ papers. Our LMS provides a streamlined 
          process that allows you to focus on what matters most: teaching. Create, edit, and download 
          your MCQ papers in various formats.
          </p>
          <a
            href="#features"
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
          >
            Register Now
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Great tool for Educators
          </h2>
          <p className="animate__animated animate__fadeInUp">
          Experience the future of educational assessments with the MCQ Paper Designer LMS WebApp. 
          Our platform not only simplifies the creation of MCQ papers but also ensures a professional 
          and polished output. 
          </p>
          <a
            href="#features"
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
          >
            Register Now
          </a>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bx bx-chevron-left"
          aria-hidden="true"
        />
      </a>
      <a
        className="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bx bx-chevron-right"
          aria-hidden="true"
        />
      </a>
    </div>
    <svg
      className="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g className="wave1">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={3}
          fill="rgba(255,255,255, .1)"
        ></use>
      </g>
      <g className="wave2">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={0}
          fill="rgba(255,255,255, .2)"
        ></use>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
      </g>
    </svg>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    {/* <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Register</h2>
          <p>You can Register as Educator or Student</p>
        </div>
        <div className="row content" data-aos="fade-up">
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
              <li>
                <i className="ri-check-double-line" /> Duis aute irure dolor in
                reprehenderit in voluptate velit
              </li>
              <li>
                <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section> */}
    {/* End About Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container">
      <div className="section-title" data-aos="zoom-out">
          <h2>Register</h2>
          <p style={{ fontSize: '25px' }}>You can Register as Educator or Student</p>
        </div>
        <ul className="nav nav-tabs row d-flex">
        <li className="nav-item col-6 nav-item-space" data-aos="zoom-in">
          <a
            className={`nav-link ${activeTab === 'Educator' ? 'active show' : ''}`}
            onClick={() => handleTabClick('Educator')}
          >
            <i className="ri-gps-line"></i>
            <h4 className="d-none d-lg-block">Educator</h4>
          </a>
        </li>
        <li
          className="nav-item col-6 nav-item-space"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <a
            className={`nav-link ${activeTab === 'Student' ? 'active show' : ''}`}
            onClick={() => handleTabClick('Student')}
          >
            <i className="ri-body-scan-line"></i>
            <h4 className="d-none d-lg-block">Student</h4>
          </a>
        </li>
      </ul>
      <br/>
      <br/>
      {activeTab === 'Educator' && <Signup/>}
      {activeTab === 'Student' && <StudentRegister/>}
      <br/>
      <br/>
      <br/>
      <br/>

        <div className="tab-content" data-aos="fade-up">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                Key Features of the MCQ Paper Designer LMS WebApp
                </h3>
                

                <ul>
                  <li>
                    <i className="ri-check-double-line" />User-Friendly Interface: Easy-to-use for creating and managing MCQ papers.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Customizable Templates: Pre-designed templates for quick selection and customization.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 
                    Question Type Variety: Supports single answer, multiple answer, and true/false questions.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 
                    Real-Time Preview: Live preview of the MCQ paper during creation.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 
                   
                        Download Options: Download MCQ papers and answer keys as PDFs.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 
                    
                     Edit and Delete Questions: Easily edit or delete questions.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 
Answer Key Generation: Automatic generation of answer keys.
                  </li>
                </ul>
               
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Neque exercitationem debitis soluta quos debitis quo mollitia
                  officia est
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Provident mollitia
                    neque rerum asperiores dolores quos qui a. Ipsum neque dolor
                    voluptate nisi sed.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Voluptatibus commodi ut accusamus ea repudiandae ut autem
                  dolor ut assumenda
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Provident mollitia
                    neque rerum asperiores dolores quos qui a. Ipsum neque dolor
                    voluptate nisi sed.
                  </li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                  inventore rerum
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}
    {/* ======= Cta Section ======= */}
    <section id="cta" className="cta">
      <div className="container">
        <div className="row" data-aos="zoom-out">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Cta Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>What we do offer</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="zoom-in-left">
              <div className="icon">
                <i className="bi bi-briefcase" style={{ color: "#ff689b" }} />
              </div>
              <h4 className="title">
                <a href="">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
            <div
              className="icon-box"
              data-aos="zoom-in-left"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="bi bi-book" style={{ color: "#e9bf06" }} />
              </div>
              <h4 className="title">
                <a href="">Dolor Sitema</a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
            <div
              className="icon-box"
              data-aos="zoom-in-left"
              data-aos-delay={200}
            >
              <div className="icon">
                <i
                  className="bi bi-card-checklist"
                  style={{ color: "#3fcdc7" }}
                />
              </div>
              <h4 className="title">
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div
              className="icon-box"
              data-aos="zoom-in-left"
              data-aos-delay={300}
            >
              <div className="icon">
                <i className="bi bi-binoculars" style={{ color: "#41cf2e" }} />
              </div>
              <h4 className="title">
                <a href="">Magni Dolores</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div
              className="icon-box"
              data-aos="zoom-in-left"
              data-aos-delay={400}
            >
              <div className="icon">
                <i className="bi bi-globe" style={{ color: "#d6ff22" }} />
              </div>
              <h4 className="title">
                <a href="">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div
              className="icon-box"
              data-aos="zoom-in-left"
              data-aos-delay={500}
            >
              <div className="icon">
                <i className="bi bi-clock" style={{ color: "#4680ff" }} />
              </div>
              <h4 className="title">
                <a href="">Eiusmod Tempor</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
      <h3>LMS WEB </h3>
      <p>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </p>
      <div className="social-links">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#" className="google-plus">
          <i className="bx bxl-skype" />
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>LMS WEB </span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/selecao-bootstrap-template/ */}
        Designed by <a href="https://www.linkedin.com/in/sahaji-chaurasia">Sahaji</a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

    </>
  )
};

export default LandingPage;