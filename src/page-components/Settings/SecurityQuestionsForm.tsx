import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SettingStyles from "../../../styles/setting.module.css";
import { useAppSelector } from "../../redux/hooks";
import { getSecrityQuestions } from "../../redux/settings/settingsAction";
import { changePwdState } from "../../redux/settings/settingsReducer";
import Image from "next/image";
import { FlexWrapper } from "../../shared-components";
import { httpRequest } from "../../https/http";
import { userInfo } from "../../redux/auth/authActions";

const SecurityQuestionsForm = ({ user }) => {
  const dispatch = useDispatch();
  const { successQues }: changePwdState = useAppSelector(
    (state) => state.settings
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  interface IState {
    questionId: number;
    answer: string;
  }

  const [questionOne, setQuestionOne] = useState<IState>({
    questionId: 0,
    answer: "",
  });
  const [questionTwo, setQuestionTwo] = useState<IState>({
    questionId: 0,
    answer: "",
  });
  const [questionThree, setQuestionThree] = useState<IState>({
    questionId: 0,
    answer: "",
  });

  useEffect(() => {
    dispatch(getSecrityQuestions());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const info = [questionOne, questionTwo, questionThree];
    let isValid = true;
    for (let i = 0; i < info.length; i++) {
      if (Number(info[i].questionId) === 0) {
        setError(`Question ${i + 1} is requied`);
        setTimeout(() => setError(""), 4000);
        isValid = false;
        break;
      }
      if (info[i].answer.length === 0) {
        setError(`Anwser ${i + 1} is requied`);
        setTimeout(() => setError(""), 4000);
        isValid = false;
        break;
      }
    }

    if (isValid === false) return "";

    const saveSecurityQues = async () => {
      try {
        setLoading(true);
        const result = await httpRequest({
          method: "POST",
          url: "Account/SecurityQuestion",
          body: {
            platform: 1,
            imei: "string",
            deviceType: "1",
            deviceManufacturer: "string",
            deviceModel: "string",
            deviceIP: "string",
            deviceName: "string",
            userId: user.userId,
            answers: info,
          },
        });
        if (result?.status === true) {
          setLoading(false);
          setSuccess(result?.message || "Security Info Updated Successfully");
          setQuestionOne({
            questionId: 0,
            answer: "",
          });
          setQuestionTwo({
            questionId: 0,
            answer: "",
          });
          setQuestionThree({
            questionId: 0,
            answer: "",
          });
          dispatch(userInfo({ isEmailAddressConfirmed: true }));
          setTimeout(() => setSuccess(""), 6000);
        }
      } catch (error) {
        setLoading(false);
        setError(error?.message || "Update failed!");
      }
    };

    saveSecurityQues();
  };

  return (
    <form>
      <div>
        <select
          defaultValue="0"
          value={questionOne.questionId}
          onChange={({ target }) =>
            setQuestionOne({
              ...questionOne,
              questionId: parseInt(target.value),
            })
          }
          className={` doubble-input w-95 mb-3 px-2`}
        >
          <option value="0" disabled>Question 1</option>
          {successQues.length &&
            successQues.map((ques, i) => (
              <option value={ques.id} key={i}>
                {ques.question}
              </option>
            ))}
        </select>
        <input
          type="text"
          value={questionOne.answer}
          maxLength={30}
          placeholder="answer"
          onChange={({ target }) =>
            setQuestionOne({ ...questionOne, answer: target.value })
          }
          className="doubble-input-borderless w-95 mb-3 px-2"
        />
      </div>
      <div>
        <select
          defaultValue="0"
          value={questionTwo.questionId}
          onChange={({ target }) =>
            setQuestionTwo({
              ...questionTwo,
              questionId: parseInt(target.value),
            })
          }
          className={` doubble-input w-95 mb-3 px-2`}
        >
          <option value="0" disabled>Question 2</option>
          {successQues.length &&
            successQues.map((ques, i) => (
              <option value={ques.id} key={i}>
                {ques.question}
              </option>
            ))}
        </select>
        <input
          type="text"
          placeholder="answer"
          maxLength={30}
          value={questionTwo.answer}
          onChange={({ target }) =>
            setQuestionTwo({ ...questionTwo, answer: target.value })
          }
          className="doubble-input-borderless w-95 mb-3 px-2"
        />
      </div>
      <div>
        <select
          defaultValue="0"
          value={questionThree.questionId}
          onChange={({ target }) =>
            setQuestionThree({
              ...questionThree,
              questionId: parseInt(target.value),
            })
          }
          className={` doubble-input w-95 mb-3 px-2`}
        >
          <option value="0" disabled>Question 3</option>
          {successQues.length &&
            successQues.map((ques, i) => (
              <option value={ques.id} key={i}>
                {ques.question}
              </option>
            ))}
        </select>
        <input
          type="text"
          placeholder="answer"
          maxLength={30}
          value={questionThree.answer}
          onChange={({ target }) =>
            setQuestionThree({ ...questionThree, answer: target.value })
          }
          className="doubble-input-borderless w-95 mb-3 px-2"
        />
      </div>
      <div className="d-flex justify-content-center">
        {error && (
          <small className="text-danger py-2 d-block w3-animate-top">
            {error}
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
          className={`${SettingStyles.profilebutton} w-70 cursor-pointer d-flex justify-content-center align-items-center`}
          onClick={handleSave}
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

export default SecurityQuestionsForm;
