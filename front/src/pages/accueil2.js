import logoinput from '../images/logoinput.png'
import doctor from '../images/doctor.svg'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'

import Bruno from '../images/Bruno.jpg'
import Antoine from '../images/Antoine.jpg'
import Arnaud from '../images/Arnaud.jpg'
import Baptiste from '../images/Baptiste.jpg'
import Clement from '../images/Clément.jpg'
import Rafael from '../images/Rafael.jpg'
import Romain from '../images/Romain.jpg'
import Thomas from '../images/Thomas.jpg'


import Navbar from "../component/navbar";

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import '../images/bootstrap.min.css'

function Accueil() {

//infos necesaires: Sexe, nom du chirurgien,  
  return (//          <Input name="email" icon={FiMail} placeholder="E-mail" />
  <div>
    <meta charSet="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>Home - Brand</title>
    <link rel="stylesheet" href='../images/bootstrap.min.css'/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap"/>

    <React.Fragment>
			<Navbar/>
		</React.Fragment>
    
    <section
        className="py-5"
        style={{ paddingTop: 0, paddingBottom: 6, marginBottom: "-92px" }}
        >
        <div className="container">
            <h1 className="text-center" style={{ fontWeight: "bold" }}>
            Le Projet
            </h1>
            <p className="fw-bold" style={{ paddingTop: 48 }}>
            Parti du constat d’une mauvaise gestion des lits au sein d’établissements
            hospitaliers, la team #NoFlop s’est intéressée à la méthode de prises de
            rendez-vous d’opérations dans les services chirurgicaux pour la
            révolutionner.
            <br />
            <br />
            Passer d’un enregistrement de rendez-vous par forçage du côté des
            chirurgiens à une adaptation dynamique au nombre de lits disponibles dans
            le service et aux capacités opératoires des chirurgiens pour déterminer la
            date optimale d’opération sont les missions que nous nous sommes données.
            <br />
            <br />
            Propulsé par une trésorerie de 45 Graals, notre projet est un projet
            d’avenir fiable et innovant.
            <br />
            <br />
            Basé sur l’intelligence artificielle avec un réseau de neurones profond,
            Input Healthcare© est capable de prédire la durée de séjours hospitaliers
            des futurs patients grâce aux nombreux entraînements réalisés. <br />
            Notre algorithme performant permet au système de fournir des dates de
            rendez-vous optimales à vos patients.
            <br />
            <br />
            De plus, Input Healthcare© est facilement déployable, un clic seulement
            suffit à le partager dans le cloud et il est aussi scalable
            horizontalement.
            <br />
            <br />
            Frontend développé de manière disruptive et web design de haute qualité
            sont autant d‘atouts pour nous faire confiance
            <br />
            <br />
            Achetez NoFlop, vivez Input !
            </p>
        </div>
        <div className="container">
            <h1
            className="text-center fw-bold"
            style={{ paddingTop: 66, paddingBottom: 0, marginBottom: 10 }}
            >
            La Team #NoFlop
            </h1>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-6" style={{ marginBottom: 0 }}>
                <img
                className="rounded-circle img-fluid"
                src={Rafael}
                style={{ transform: "scale(0.70)", marginBottom: 2 }}
                />
                <h1 className="text-center fw-bold">Rafael Tomomitsu</h1>
                <p className="text-center" style={{ fontWeight: "bold" }}>
                CEO
                </p>
            </div>
            <div className="col-md-6">
                <img
                className="rounded-circle img-fluid"
                src={Thomas}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Thomas Descorsiers</h1>
                <p className="text-center fw-bold">CTO</p>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img
                className="rounded-circle img-fluid"
                src={Romain}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Romain Marty</h1>
                <p className="text-center fw-bold">Machine Learning Engineer</p>
            </div>
            <div className="col-md-6 img-fluid">
                <img
                className="rounded-circle img-fluid"
                src={Bruno}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Bruno Zimmer</h1>
                <p className="text-center fw-bold">Data Scientist</p>
            </div>
            </div>
        </div>
        <div className="container img-fluid">
            <div className="row img-fluid">
            <div className="col-md-6 img-fluid">
                <img
                className="rounded-circle img-fluid"
                src={Arnaud}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Arnaud Leloir</h1>
                <p className="text-center fw-bold">Backend Engineer</p>
            </div>
            <div className="col-md-6 img-fluid">
                <img
                className="rounded-circle img-fluid"
                src={Clement}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Clément Lérou</h1>
                <p className="text-center fw-bold">Frontend Engineer</p>
            </div>
            </div>
        </div>
        <div className="container img-fluid">
            <div className="row img-fluid">
            <div className="col-md-6 img-fluid">
                <img
                className="rounded-circle img-fluid"
                src={Baptiste}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Baptiste Ayrignac</h1>
                <p className="text-center fw-bold">Web Designer</p>
            </div>
            <div className="col-md-6 img-fluid">
                <img
                className="rounded-circle img-fluid"
                src={Antoine}
                style={{ transform: "scale(0.70)" }}
                />
                <h1 className="text-center fw-bold">Antoine Vallat</h1>
                <p className="text-center fw-bold">Communication Manager</p>
            </div>
            </div>
        </div>
        <div className="container">
            <img
            className="d-block mx-auto img-fluid"
            src={logo2}
            style={{ paddingTop: 104 }}
            />
        </div>
        <div className="container text-center py-5">
            <p className="mb-4" style={{ fontSize: "1.6rem" }}>
            Used by{" "}
            <span className="bg-success-light p-1">
                <strong>0</strong>
            </span>
            &nbsp;of the best companies in the world.
            </p>
            <p>#Logo</p>
            <a href="#"> </a>
            <a href="#"> </a>
            <a href="#"> </a>
            <a href="#"> </a>
            <a href="#"> </a>
        </div>
        </section>

        ;<div>
  <section />
  <section />
  <section className="py-5 mt-5" style={{ paddingTop: 0, marginTop: 204 }}>
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">Témoignages</p>
          <h2 className="fw-bold">
            <strong>Ce qu'en pensent nos clients</strong>
          </h2>
          <p className="text-muted">Pourquoi pas vous ?</p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
        <div className="col mb-4">
          <div className="d-flex flex-column align-items-center align-items-sm-start">
            <p className="bg-light border rounded border-light p-4">
              Au-delà de mes attentes, la Team #NoFlop a su répondre à tous mes
              besoins. C'est presque de la magie !
            </p>
            <div className="d-flex">
              <img
                className="rounded-circle flex-shrink-0 me-3 fit-cover"
                width={50}
                height={50}
                src={Thomas}
              />
              <div>
                <p className="fw-bold text-primary mb-0">Doctor Strange</p>
                <p className="text-muted mb-0">Multi-chirurgien</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="d-flex flex-column align-items-center align-items-sm-start">
            <p className="bg-light border rounded border-light p-4">
              Pendant longtemps j'ai cherché un sens à mon existence, mais grâce
              à Input Healthcare© je l'ai enfin trouvé. Merci #NoFlop
            </p>
            <div className="d-flex">
              <img
                className="rounded-circle flex-shrink-0 me-3 fit-cover"
                width={50}
                height={50}
                src={Baptiste}
              />
              <div>
                <p className="fw-bold text-primary mb-0">Amir</p>
                <p className="text-muted mb-0">Chirurgien-dentiste</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="d-flex flex-column align-items-center align-items-sm-start">
            <p className="bg-light border rounded border-light p-4">
              J'avais besoin d'un software pour improve le feedback de
              l'organisation de l'hôpital. Je strongly advise de le purchase
              ASAP
            </p>
            <div className="d-flex">
              <img
                className="rounded-circle flex-shrink-0 me-3 fit-cover"
                width={50}
                height={50}
                src={Clement}
              />
              <div>
                <p className="fw-bold text-primary mb-0">Lola Nuss</p>
                <p className="text-muted mb-0">Chirurgienne plastique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">Contacts</p>
          <h2 className="fw-bold">Pour nous contacter</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div>
            <form className="p-3 p-xl-4" method="post">
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="name-1"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  id="email-1"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message-1"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  className="btn btn-primary shadow d-block w-100"
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(115deg, #00c4cc, #028a8f), #00c4cc",
                  }}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
          <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
            <div className="d-flex align-items-center p-3">
              <div
                className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md"
                style={{
                  background:
                    "linear-gradient(134deg, #00c4cc, #028a8f 100%), #00c4cc",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-telephone"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <div className="px-2">
                <h6 className="fw-bold mb-0">Téléphone</h6>
                <p className="text-muted mb-0">+123456789</p>
              </div>
            </div>
            <div className="d-flex align-items-center p-3">
              <div
                className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md"
                style={{
                  background:
                    "linear-gradient(125deg, #00c4cc, #04878d), #00c4cc",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-envelope"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                  />
                </svg>
              </div>
              <div className="px-2">
                <h6 className="fw-bold mb-0">Email</h6>
                <p className="text-muted mb-0">inputhealthcare@noflop.</p>
              </div>
            </div>
            <div className="d-flex align-items-center p-3">
              <div
                className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md"
                style={{
                  background:
                    "linear-gradient(137deg, #00c4cc 0%, #028a8f), #00c4cc",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-pin"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
                </svg>
              </div>
              <div className="px-2">
                <h6 className="fw-bold mb-0">Adresse</h6>
                <p className="text-muted mb-0">
                  C009 Résidence Léonard de Vinci, 59650 Villeneuve-d'Ascq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container">
      <div className="border rounded border-white d-flex flex-column justify-content-between align-items-center flex-lg-row bg-primary-gradient p-4 p-lg-5">
        <div className="text-center text-lg-start py-3 py-lg-1">
          <h2 className="fw-bold mb-2">S'abonner à notre newsletter</h2>
          <p className="mb-0">Pas de spam, que de l'info utile</p>
        </div>
        <form
          className="d-flex justify-content-center flex-wrap flex-lg-nowrap"
          method="post"
        >
          <div className="my-2">
            <input
              className="border rounded-pill shadow-sm form-control"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="my-2">
            <button
              className="btn btn-primary shadow ms-2"
              type="submit"
              style={{
                background: "linear-gradient(138deg, #00c4cc 1%, #028a8f)",
              }}
            >
              S'abonner
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <footer className="bg-primary-gradient">
    <div className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">Services</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">Web design</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">About</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Legacy</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">Careers</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">Job openings</a>
            </li>
            <li>
              <a href="#">Employee success</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
          <div className="fw-bold d-flex align-items-center mb-2">
            <span>Input Healthcare</span>
          </div>
          <p className="text-muted">C'est moooi</p>
        </div>
      </div>
      <hr />
      <div className="text-muted d-flex justify-content-between align-items-center pt-3">
        <p className="mb-0">Copyright © 2023 Input Healthcare</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-facebook"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </li>
          <li className="list-inline-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-twitter"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </li>
          <li className="list-inline-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-instagram"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>







    </div>
    

  );//<button type="button" onClick={signOut}>
}

export default Accueil;
