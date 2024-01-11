import { useAppSelector } from "../../redux/hooks";
import SearchStyles from "./Search.module.css";

const MessageDetails = () => {
    const { selectedMessage } = useAppSelector(state => state.search)
    return (
        <div className={`${SearchStyles.details} mt-5 p-4`}>
            <h1 className={SearchStyles.messagetitle}>{selectedMessage?.title}</h1>
            <div className={SearchStyles.body}>{selectedMessage?.message}</div>
        </div>
    )
}

export default MessageDetails
