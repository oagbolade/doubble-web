// import { Spinner } from "react-bootstrap";
import Image from "next/image";
import { FlexWrapper } from "..";
const ActivityLoader = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{
      position: "absolute",
      top: "30px",
      left: "0",
      width: "100%",
      height: "100%",
      background: "var(--overlay-light)",
      zIndex: 100,
    }}
  >
    <Image
      src="/loader.gif"
      alt="Loader"
      width={100}
      height={100}
    />
    {/* <div className="bg-white p-2">
        <Spinner animation="border" size="sm" variant="primary" /> Loading. Please wait...
    </div> */}
  </div>
);

export default ActivityLoader;
