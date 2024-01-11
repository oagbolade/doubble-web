import { useEffect, useState } from "react";
import SettingStyles from "../../../styles/setting.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changePassword } from "../../redux/settings/settingsAction";
import Image from "next/image";
import { FlexWrapper } from "../../shared-components";

const ChangeLoginForm = ({ user }) => {
  const dispatch = useAppDispatch();
  const { loading, error: dispatchErr, success } = useAppSelector(
    (state) => state.settings
  );
  interface IPassword {
    old: string;
    new: string;
    confirm: string;
    match?: string;
  }
  const [pwd, setPwd] = useState<IPassword>({ old: "", new: "", confirm: "" });
  const [error, setError] = useState<string>("");

  const handChangePassword = (e) => {
    e.preventDefault();
    setError("");
    if (pwd.old.length === 0) return setError("Old password is required **");
    if (pwd.new.length === 0) return setError("New password is required **");
    if (pwd.old.length < 8)
      return setError("Old password must be 8 Character and above **");
    if (pwd.new.length < 8)
      return setError("New password must be 8 Character and above **");
    if (pwd.confirm.length === 0)
      return setError("Confirm password is required **");
    if (pwd.new !== pwd.confirm) return setError("Password does not match **");
    const obj = {
      ...pwd,
      userId: user.userId,
      username: user.username,
      emaillAddress: user.emailAddress,
      firstName: user.firstName,
    };

    dispatch(changePassword(obj));
  };

  useEffect(() => {
    success.length > 0 && setPwd({ old: "", new: "", confirm: "" });
  }, [success]);

  return (
    <form className={`my-3 w-90 px-2`}>
      <input
        type="password"
        name="old"
        maxLength={30}
        value={pwd.old}
        onChange={({ target }) =>
          setPwd({ ...pwd, [target.name]: target.value })
        }
        placeholder="Old Password"
        className={` doubble-input w-100 mb-3 px-2`}
      />
      <input
        type="password"
        name="new"
        maxLength={30}
        value={pwd.new}
        onChange={({ target }) =>
          setPwd({ ...pwd, [target.name]: target.value })
        }
        placeholder="New Password"
        className={` doubble-input w-95 mb-3 px-2`}
      />
      <input
        type="password"
        name="confirm"
        maxLength={30}
        value={pwd.confirm}
        onChange={({ target }) =>
          setPwd({ ...pwd, [target.name]: target.value })
        }
        placeholder="Re-Type Password"
        className={` doubble-input w-95 mb-3 px-2`}
      />
      <div className="d-flex justify-content-center">
        {error && (
          <small className="text-danger py-2 d-block w3-animate-top">
            {error}
          </small>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {dispatchErr && (
          <small className="text-danger py-2 d-block w3-animate-top">
            {dispatchErr}
          </small>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {success && (
          <small className="text-success py-2 d-block w3-animate-top">
            {success}
          </small>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={handChangePassword}
          className={`${SettingStyles.profilebutton} w-70 cursor-pointer d-flex justify-content-center align-items-center`}
        >
          {loading && (
            <FlexWrapper marginRight="8px">
              <Image src="/loader.gif" alt="loader" width={25} height={25} />
            </FlexWrapper>
          )}{" "}
          Save
        </button>
      </div>
    </form>
  );
};

export default ChangeLoginForm;
