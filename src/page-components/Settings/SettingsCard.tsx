import Link from "next/link";
import { determineTextColor } from "../../utils/utilities";
import Image from "next/image";
import { useAppDispatch } from "../../redux/hooks";
import { useRouter } from "next/router";
import { useState } from "react";

interface SettingsCardProps {
  cardBackground: string;
  badgeBackground: string;
  badgeItems: string[];
  status: "completed" | "pending" | "future" | "active";
  quantity: number;
  loading: boolean;
  icon: any;
}

const SettingsCard = ({
  cardBackground,
  icon,
  badgeBackground,
  status,
  badgeItems,
  quantity,
  loading,
}: SettingsCardProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [requesting,setRequesting] = useState(false)

  const handleStatus = (status) => {
    setRequesting(true)
    dispatch({type:"GET_SELECTED_TYPE",payload:status})
    router.push('/investment')
  }

  return (
    <div style={{ minWidth: "280px" }} className="mr-3">
      <div
        className="card w-100"
        style={{ height: "160px", backgroundColor: cardBackground }}
      >
        <div className="row p-3">
          <div className="col-10">
            <div className="d-flex align-items-center">
              <div className="mr-2">{icon}</div>
              <div
                className="fw-bold text-capitalize"
                style={{
                  color: determineTextColor(status),
                  fontSize: "1.23em",
                }}
              >
                {status}
              </div>
            </div>
            <div className="col-12 d-flex my-3">
              {badgeItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      backgroundColor: badgeBackground,
                      borderRadius: "20px",
                      width: "max-content",
                    }}
                    className="py-1 px-3 d-flex justify-content-center align-items-center mr-1"
                  >
                    <span
                      style={{
                        color: determineTextColor(status),
                        fontSize: "8px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-2">
            {loading ? (
              <span>
                <Image
                  src="/loader.gif"
                  alt="Fixed investment"
                  width={50}
                  height={50}
                />
              </span>
            ) : (
              <span
                className="fw-bold text-secondary-blue pr-1 text-center"
                style={{ fontSize: "1.5em" }}
              >
                {quantity}
              </span>
            )}
          </div>
          <div className="col-12 d-flex justify-content-center">
              <button
              disabled={loading || quantity === 0}
                style={{
                  padding: "3px 6px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "none",
                  marginTop: "20px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:'center'
                }}
                onClick={() => handleStatus(status)}
                className="bg-primary-blue text-secondary-blue fw-500 cursor-pointer"
              >
                <div>Click to view</div>
                {requesting  && <div className="ml-2 mt-2">
                <Image
                  src="/loader.gif"
                  alt="Fixed investment"
                  width={20}
                  height={20}
                />
              </div>}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
