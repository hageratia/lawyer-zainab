import "../../App.css";
import About from "../AboutPage/AboutPage";
import NavBar from "../NavBar/NavBar";
import Services from "../ServicesPage/ServicesPage";
import Certificates from "../CertificatesPage/CertificatesPage";
import Features from "../FeaturesPage/FeaturesPage";
import FreeConsultaion from "../FreeConsultaion/FreeConsultaion";
import Footer from "../FooterPage/FooterPage";
import BlogsPage from "../BlogsPage/BlogsPage";

const HomePage = () => {
  return (
    <>
      <section className="home pt-5" id="home">
        <div className="layout">
          <NavBar />
          <div className="text-center m-auto text-white pt-5">
            <h1 className="fw-bold mb-5">مكتب المحامية زينب إبراهيم</h1>
            <h2 className="fw-bold lh-lg">
              {" "}
              التمَيـــز في الدفـــاع
              <br /> والريادة في الاستشارات القانونية{" "}
            </h2>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Certificates />
      <Features />
      <BlogsPage />
      <FreeConsultaion />
      <Footer />
      <button className="i-whats rounded rounded-circle">
        <a
          href="https://wa.me/966546519560"
          target="_blank"
          className="text-decoration-none text-white"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </button>
    </>
  );
};

export default HomePage;
