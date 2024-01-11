import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../redux/hooks";
import ChangeLoginForm from "./ChangeLoginForm";
import ChangePinForm from "./ChangePinForm";
import SecurityQuestionsForm from "./SecurityQuestionsForm";
interface SecuritySettingsProps {
    subTab: string;
    setSubTab: Dispatch<SetStateAction<string>>
    subtabs: string[]
}

const SecuritySettings = ({ subTab, setSubTab, subtabs }: SecuritySettingsProps) => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className="d-flex">
            <div style={{ minWidth: "150px" }} className="d-none d-md-block">
                <div className="mt-3 d-flex flex-column justify-content-start">
                    {subtabs.map((tab, i) => <div key={i} onClick={() => setSubTab(tab)} className={`tab py-2 my-2 ${subTab === tab ? "activetab" : ""}`}>{tab}</div>)}
                </div>
            </div>
            <div className="py-2 my-2">
                {subTab === "Change Login Password" && <ChangeLoginForm user={user}/>}
                {subTab === "Reset Transaction PIN" && <ChangePinForm user={user} />}
                {subTab === "Security Questions" && <SecurityQuestionsForm user={user} />}
            </div>
        </div>
    )
}

export default SecuritySettings
