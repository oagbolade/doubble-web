// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// const defaultCenter = { lat: 40.748817, lng: -73.985428 };

// const defaultOptions = { scrollwheel: false };

// const RegularMap = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={defaultCenter}
//       defaultOptions={defaultOptions}
//     >
//       <Marker position={defaultCenter} />
//     </GoogleMap>
//   ))
// );

// const loadingElementStyle = { height: '100%' };
// const containerElementStyle = { height: '280px' };
// const mapElementStyle = { height: '100%' };

const sociallinks = [
  {
    link: "https://www.facebook.com/SterlingBankNigeria",
    icon: <FaFacebook fontSize="21px" color="#00CCFF" />,
  },
  {
    link: "https://twitter.com/Sterling_Bankng",
    icon: <FaTwitter fontSize="21px" color="#00CCFF" />,
  },
  {
    link: "https://instagram.com/sterlingbank",
    icon: <FaInstagram fontSize="21px" color="#00CCFF" />,
  },
  {
    link: "https://www.youtube.com/user/SterlingBankng",
    icon: <FaYoutube fontSize="21px" color="#00CCFF" />,
  },
];

const ContactUs = () => {
  return (
    <div className="row mt-4 mx-0">
      <div className="col-md-6">
        {/* <RegularMap
          googleMapURL={("https://maps.googleapis.com/maps/api/js?key=AIzaSyDhVtrNPwKUjKTELoTtDUBKy35IPoVA4YM" as never)}
          loadingElement={<div style={loadingElementStyle} />}
          containerElement={<div style={containerElementStyle} />}
          mapElement={<div style={mapElementStyle} />}
        /> */}
        <img src="/map.png" alt="" width="100%" />
      </div>
      <div className="col-md-6 px-4">
        <div
          className="fw-bold text-secondary-blue mb-3"
          style={{ fontSize: "1.12em" }}
        >
          Sterling Towers
        </div>
        <div className="mb-3" style={{ fontSize: "0.75em" }}>
          <span className="fw-bold text-secondary-blue">Address: </span>20
          Marina, Lagos Island, Lagos.
        </div>
        <div className="mb-3" style={{ fontSize: "0.75em" }}>
          <span className="fw-bold text-secondary-blue">Email: </span>
          <a href={`mailto:customercare@sterling.ng?subject=Doubble`}>
            customercare@sterling.ng
          </a>
        </div>
        <div className="mb-3" style={{ fontSize: "0.75em" }}>
          <span className="fw-bold text-secondary-blue">Tel: </span>(+234)
          07008220000, 01-4484481, 01-8888822
        </div>
        <div
          className="d-flex justify-content-around mb-2"
          style={{ marginTop: "60px" }}
        >
          {sociallinks.map((item, i) => {
            return (
              <a href={item.link} key={i} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </div>
        <div
          style={{ color: "var(--gray-two)", fontSize: "10px" }}
          className="text-center"
        >
          © {new Date().getFullYear()} Sterling Bank. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
