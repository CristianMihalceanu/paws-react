// import classNamees from "./HeroSection.module.css";
import classes from "./HeroSection.module.css";
import customer1 from "../images/customers/customer-1.jpg";
import customer2 from "../images/customers/customer-2.jpg";
import customer3 from "../images/customers/customer-3.jpg";
import customer4 from "../images/customers/customer-4.jpg";
import customer5 from "../images/customers/customer-5.jpg";
import customer6 from "../images/customers/customer-6.jpg";
import photo1 from "./img/cloud.png";
import cyberDog from "../images/final.png";
import { Link } from "react-router-dom";
import thumbtack from "../images/thumbtack.png";
import missing from "../images/missing.png";

const HeroSection = () => {
  return (
    <div>
      <section className={classes.hero}>
        <h2 className={classes["first_title"]}>Travel Beyond Limits</h2>
        <h3 className={classes["first_title"]}>
          Start your travel at an affordable price with Travelly <br />
          Contact us down below
        </h3>
        <button className={classes["first_title"]}>Log In</button>
      </section>
      <section className={classes.locations}>
        <header className={classes["locations-head"]}>
          <h2>The Perfect Travelling Experience</h2>
          <h3>
            We cover everything from picking the perfect hotel <br />
            flight and travelling destionation.
          </h3>
          <img
            src={photo1}
            alt="ceva"
            className={(classes["moving-clouds-1"], classes["cloud"])}
          />
          <img
            src={photo1}
            alt="ceva"
            className={(classes["moving-clouds-2"], classes["cloud"])}
          />
        </header>
      </section>
      <section className={classes.benefits}>
        <header className={classes["benefits-head"]}>
          <h2>The Perfect Travel</h2>
          <h3>
            We cover everything from picking the perfect hotel <br />
            ,flight and destination.
          </h3>
        </header>
        <div className={classes["cards"]}>
          <div className={classes["card"]}>
            <div className={classes["card-icon"]}>
              <img src="./icons/route-solid.svg" alt="" />
            </div>
            <h3>Travel</h3>
            <p>Travel in over 250 countries with no effort.</p>
          </div>
          <div className={classes["card"]}>
            <div className={classes["card-icon"]}>
              <img src="./icons/bed-solid.svg" alt="" />
            </div>
            <h3>Hotel</h3>
            <p>Hotels located near popular areas.</p>
          </div>
          <div className={classes["card"]}>
            <div className={classes["card-icon"]}>
              <img src="./icons/plane-departure-solid.svg" alt="" />
            </div>
            <h3>Fly</h3>
            <p>Flight included in every purchased trip.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

// import "./HeroSection.css";
// import customer1 from "../images/customers/customer-1.jpg";
// import customer2 from "../images/customers/customer-2.jpg";
// import customer3 from "../images/customers/customer-3.jpg";
// import customer4 from "../images/customers/customer-4.jpg";
// import customer5 from "../images/customers/customer-5.jpg";
// import customer6 from "../images/customers/customer-6.jpg";
// import cyberDog from "../images/final.png";

// const HeroSection = () => {
//   return (
//     <section classNameName="section-hero">
//       <div classNameName="hero">
//         <div classNameName="hero-text-box">
//           <h1 classNameName="heading-primary">
//             The perfect place for owners to find their lost pet
//           </h1>
//           <p classNameName="hero-description">
//             This incentivised 24/7 online service provides you essential
//             assistance for finding your buddy. Peers are one click away from
//             beginning the search
//           </p>
//           {/* <a href="#" classNameName="btn btn--full margin-right-sm">
//             Start eating well
//           </a>
//           <a href="#" classNameName="btn btn--outline">
//             Learn more &darr;
//           </a> */}
//           <div classNameName="delivered-meals">
//             <div classNameName="delivered-imgs">
//               <img src={customer1} alt="Customer photo" />
//               <img src={customer2} alt="Customer photo" />
//               <img src={customer3} alt="Customer photo" />
//               <img src={customer4} alt="Customer photo" />
//               <img src={customer5} alt="Customer photo" />
//               <img src={customer6} alt="Customer photo" />
//             </div>
//             <p classNameName="delivered-text">
//               <span classNameName="number-text">2.350+</span>
//               customers found their pet
//             </p>
//           </div>
//         </div>
//         <div classNameName="hero-img-box">
//           <img classNameName="hero-img" src={cyberDog} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
