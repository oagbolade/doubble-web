import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CLEAR_SELECTED_MESSAGE } from "../../redux/search/SearchTypes";
import ActivityLoader from "../../shared-components/Loader/ActivityLoader";
import PaginationComponent from "../../shared-components/Pagination/PaginationComponent";
import SearchStyles from "./Search.module.css";
import SearchMessageItem from "./SearchMessageItem";

const Messages = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const [totalpages, setTotalPages] = useState(0);

    const dispatch = useAppDispatch();
    const { messages: { loading, data } } = useAppSelector(state => state.search)

    useEffect(() => {
        const offset = (page - 1) * limit;
        const endposition = page * limit;

        setTotalPages(Math.ceil(data.length / limit));
        setPageData(data.slice(offset, endposition))

    }, [data, page, limit]);

    useEffect(() => {
        return () => {
            dispatch({ type: CLEAR_SELECTED_MESSAGE })
        }
    }, [])

    return (
        <Fragment>
            <div className={SearchStyles.content}>
                {pageData.map((item, i) => <SearchMessageItem item={item} key={i} />)}
                {loading && <ActivityLoader />}
            </div>
            <PaginationComponent limit={limit} setLimit={setLimit} page={page} setPage={setPage} totalpages={totalpages} />
        </Fragment>
    )
}

export default Messages;