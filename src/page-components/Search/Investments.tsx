import { Fragment, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CLEAR_SELECTED_INVESTMENT } from "../../redux/search/SearchTypes";
import ActivityLoader from "../../shared-components/Loader/ActivityLoader";
import PaginationComponent from "../../shared-components/Pagination/PaginationComponent";
import SearchStyles from "./Search.module.css";


const Investments = () => {
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const [totalpages, setTotalPages] = useState(0);

    const dispatch = useAppDispatch();
    const { investment: { loading, data } } = useAppSelector(state => state.search)

    useEffect(() => {
        const offset = (page - 1) * limit;
        const endposition = page * limit;

        setTotalPages(Math.ceil(data.length / limit));
        setPageData(data.slice(offset, endposition).reverse())

    }, [data, page, limit]);

    useEffect(() => {
        return () => {
            dispatch({ type: CLEAR_SELECTED_INVESTMENT })
        }
    }, [])

    return (
        <Fragment>
            <div className={SearchStyles.content}>
                Investments
                {loading && <ActivityLoader />}
            </div>
            <PaginationComponent limit={limit} setLimit={setLimit} page={page} setPage={setPage} totalpages={totalpages} />
        </Fragment>
    )
}

export default Investments
