import { useEffect, useState } from "react";
import SettingStyles from "../../../styles/setting.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changeTransactionPIN,
  getSecrityQuestionsByUserID,
} from "../../redux/settings/settingsAction";
import Image from "next/image";
import { FlexWrapper } from "../../shared-components";
import { changePwdState } from "../../redux/settings/settingsReducer";

const ChangePinForm = ({ user }) => {
  const dispatch = useAppDispatch();
  const {
    loadingPIN,
    errorPIN,
    successPIN,
    successQues,
  }: changePwdState = useAppSelector((state) => state.settings);

  interface IPassword {
    ques: string;
    ans: string;
    new: string;
    confirm: string;
    match?: string;
  }
  const [pin, setPin] = useState<IPassword>({
    ques: "",
    ans: "",
    new: "",
    confirm: "",
  });
  const [error, setError] = useState<string>("");

  const handChangePassword = (e) => {
    e.preventDefault();
    setError("");
    if (pin.ques.length === 0)
      return setError("Security question is required **");
    if (pin.ans.length === 0) return setError("Security answer is required **");
    if (pin.new.length === 0) return setError("New PIN is required **");
    if (pin.confirm.length === 0) return setError("Confirm PIN is required **");
    if (pin.new !== pin.confirm) return setError("PIN does not match **");
    const obj = {
      ...pin,
      userId: user.userId,
    };

    dispatch(changeTransactionPIN(obj));
  };

  useEffect(() => {
    successPIN.length > 0 &&
      setPin({ ques: "", ans: "", new: "", confirm: "" });
  }, [successPIN]);

  useEffect(() => {
    dispatch(getSecrityQuestionsByUserID(user.userId));
  }, []);

  return (
    <form className={`mt-3 mb-5 pb-2 w-90 px-2`}>
      <div>
        <select
          name="ques"
          value={pin.ques}
          onChange={({ target }) =>
            setPin({ ...pin, [target.name]: target.value })
          }
          className={` doubble-input w-95 mb-3 px-2`}
          defaultValue=""
        >
          <option value="" disabled>
            Security Questions
          </option>
          {successQues.length &&
            successQues.map((ques, i) => (
              <option value={ques.id} key={i}>
                {ques.question}
              </option>
            ))}
        </select>
        <input
          type="text"
          name="ans"
          maxLength={30}
          value={pin.ans}
          onChange={({ target }) =>
            setPin({ ...pin, [target.name]: target.value })
          }
          placeholder="Answer"
          className="doubble-input-borderless w-95 mb-3 py-2 mb-2 px-2"
        />
      </div>
      <input
        type="password"
        name="new"
        minLength={4}
        maxLength={4}
        value={pin.new}
        onChange={({ target }) => {
          if (isNaN(Number(target.value))) return;
          setPin({ ...pin, [target.name]: target.value.trim() });
        }}
        placeholder="New PIN"
        className={` doubble-input w-95 mb-3 px-2`}
      />
      <input
        type="password"
        name="confirm"
        minLength={4}
        maxLength={4}
        value={pin.confirm}
        onChange={({ target }) => {
          if (isNaN(Number(target.value))) return;
          setPin({ ...pin, [target.name]: target.value.trim() });
        }}
        placeholder="Re-Type PIN"
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
        {errorPIN && (
          <small className="text-danger py-2 d-block w3-animate-top">
            {errorPIN}
          </small>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {successPIN && (
          <small className="text-success py-2 d-block w3-animate-top">
            {successPIN}
          </small>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={handChangePassword}
          className={`${SettingStyles.profilebutton} w-70 cursor-pointer d-flex justify-content-center align-items-center`}
        >
          {loadingPIN && (
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

export default ChangePinForm;
