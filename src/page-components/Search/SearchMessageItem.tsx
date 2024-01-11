import { FaEnvelope } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Message } from "../../redux/search/SearchReducer";
import { SELECT_MESSAGE } from "../../redux/search/SearchTypes";
import SearchStyles from "./Search.module.css";

interface SearchMessageItemProps {
    item: Message
}

const SearchMessageItem = ({ item }: SearchMessageItemProps) => {

    const dispatch = useAppDispatch();

    const { selectedMessage } = useAppSelector(state => state.search)

    const selectMessage = (selected: Message) => {
        dispatch({ type: SELECT_MESSAGE, payload: selected })
    }

    return (
        <div
            className={`card ${selectedMessage?.id === item?.id ? SearchStyles.selected : "bg-white"} my-4 mx-auto px-2 py-3 py-md-2 row text-secondary-blue cursor-pointer`}
            onClick={() => selectMessage(item)}
        >
            <div
                className="col-2 d-none d-lg-block fw-bold"
                style={{ fontSize: "0.85em" }}
            >
                {item?.title}
            </div>
            <div className="col-lg-8 col-9 fw-400">
                <span className="d-block d-lg-none mr-3 mb-2">
                    <FaEnvelope className="text-primary-blue" />
                </span>
                <div style={{ fontSize: "12.5px" }}>
                    {item?.message?.substring(0, 150)}...
                </div>
            </div>
        </div>
    );
}

export default SearchMessageItem
