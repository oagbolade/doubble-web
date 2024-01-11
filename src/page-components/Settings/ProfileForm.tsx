import { useEffect, useState } from "react";
import SettingStyles from "../../../styles/setting.module.css";
import { httpRequest } from "../../https/http";
import { useAppSelector } from "../../redux/hooks";
import { checkUserValidity } from "../../utils";

const ProfileForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    mobileNumber: "",
    username: "",
    emailAddress: "",
  });

  const { user } = useAppSelector(({ auth }) => auth);

  useEffect(() => {
    if (user) {
      setUpdatedData({
        firstName: user?.firstName,
        lastName: user?.lastName,
        dob: user?.dob,
        gender: user?.gender,
        mobileNumber: user?.mobileNumber,
        username: user?.username,
        emailAddress: user?.emailAddress,
      });
    }
  }, [user]);

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (updatedData.username === "")
      return setError("Username field is required!");
    if (updatedData.emailAddress === "")
      return setError("Email field is required!");
    try {
      setLoading(true);
      const result: any = await httpRequest({
        url: "Account/UpdateProfile",
        method: "POST",
        body: {
          imei: "imei",
          deviceType: "1",
          deviceManufacturer: "deviceManufacturer",
          deviceModel: "deviceModel",
          deviceIP: "deviceIP",
          deviceName: "deviceIP",
          userId: user.userId,
          lastName: user.lastName,
          firstName: user.firstName,
          mobileNumber: updatedData.mobileNumber,
          username: updatedData.username,
          emailAddress: updatedData.emailAddress,
        },
      });
      console.log("dateeee", result);
      if (result.status) {
        setLoading(false);
        setSuccess(result.message);
      } else {
        setLoading(false);
        setError(result.message);
      }
    } catch ({ message }) {
      console.log("error", message);
      setLoading(false);
      setError(message);
    }
  };

  return (
    <form className={`${SettingStyles.profileform} my-3 w-100 px-2`}>
      <input
        disabled
        type="text"
        value={updatedData.firstName}
        placeholder="First Name"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
      />
      <input
        disabled
        type="text"
        value={updatedData.lastName}
        placeholder="Last Name"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
      />
      <input
        disabled
        type="text"
        value={updatedData.dob}
        placeholder="DOB"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
      />
      <input
        disabled
        type="text"
        value={updatedData.mobileNumber}
        placeholder="Phone number"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
      />
      <input
        disabled
        type="text"
        value={updatedData.gender}
        placeholder="Gender"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
      />
      <input
        type="email"
        name="emailAddress"
        value={updatedData.emailAddress}
        placeholder="Email"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
        onChange={(e) =>
          setUpdatedData({
            ...updatedData,
            [e.currentTarget.name]: e.target.value,
          })
        }
      />
      <input
        type="text"
        name="username"
        value={updatedData.username}
        placeholder="Username"
        className={`${SettingStyles.profileforminput} doubble-input w-95 mb-3 px-2`}
        onChange={(e) =>
          setUpdatedData({
            ...updatedData,
            [e.currentTarget.name]: e.target.value,
          })
        }
      />
      {error && (
        <div className="d-flex justify-content-center my-3 text-danger">
          {error}
        </div>
      )}
      {success && (
        <div className="d-flex justify-content-center my-3 text-success">
          {success}
        </div>
      )}
      {user.emailAddress !== updatedData.emailAddress ||
      user.username !== updatedData.username ? (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={handleSubmit}
            className={`${SettingStyles.profilebutton} w-70`}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      ) : (
        updatedData.firstName &&
        checkUserValidity(updatedData).isValid === false && (
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={handleSubmit}
              className={`${SettingStyles.profilebutton} w-70`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        )
      )}
    </form>
  );
};

export default ProfileForm;
