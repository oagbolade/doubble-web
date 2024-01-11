import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { FlexWrapper, Typography } from "../../shared-components";
import { ChevronLeft, ChevronRight, ReceiveIcon, SendIcon } from "../../icons";
import { formatCurrency, formatDate } from "../../utils/utilities";
import TableStyles from "../../../styles/table.module.css";
import ActivityLoader from "../../shared-components/Loader/ActivityLoader";

const SelectSmall = styled.select`
  border: 1px solid #e5e5e5;
  height: 30px;
  width: 68px;
  border-radius: 5px;
  padding: 5px;
`;

interface PaymentHistoryTableProps {
  tabledata: any[];
  loading: boolean;
  page: number;
  filter: string | number;
  setPage: Dispatch<SetStateAction<number>>;
}

function transType(params) {
  switch (params) {
    case 0:
      return "Send Money";
      break;
    case 1:
      return "Recieve Money";
      break;
    case 2:
      return "Airtime";
      break;
    case 3:
      return "Data";
      break;
    case 4:
      return "Electricity";
      break;
    case 5:
      return "CableTv";
      break;
    default:
      break;
  }
}
function transIcon(params) {
  switch (params) {
    case 0:
      return <SendIcon />;
      break;
    case 1:
      return <ReceiveIcon />;
      break;
    case 2:
      return "";
      break;
    case 3:
      return "";
      break;
    case 4:
      return "";
      break;
    case 5:
      return "";
      break;
    default:
      break;
  }
}

const PaymentHistoryTable = ({
  tabledata,
  loading,
  filter,
  page,
  setPage,
}: PaymentHistoryTableProps) => {
  const [limit, setLimit] = useState(5);
  const [pageData, setPageData] = useState([]);
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    const offset = (page - 1) * limit;
    const endposition = page * limit;

    if (filter === "all") {
      setTotalPages(Math.ceil(tabledata.length / limit));
      setPageData(tabledata.slice(offset, endposition).reverse());
    } else {
      const filteredData = [
        ...tabledata.filter((d, _) => d.transactionType === Number(filter)),
      ];
      setPageData(filteredData.slice(offset, endposition).reverse());
      setTotalPages(Math.ceil(filteredData.length / limit));
    }
  }, [tabledata, page, limit, filter]);

  return (
    <Fragment>
      <div className={TableStyles.tablecontainer}>
        <table className={TableStyles.separatetable}>
          <thead className={TableStyles.tablehead}>
            <tr
              className={`${TableStyles.tableheadrow} bg-secondary-blue text-white`}
            >
              <th className={TableStyles.tablehead}>Type</th>
              <th className={TableStyles.tablehead}>Amount</th>
              <th className={TableStyles.tablehead}>From</th>
              <th className={TableStyles.tablehead}>To</th>
              <th className={TableStyles.tablehead}>Time</th>
            </tr>
          </thead>
          <tbody className={TableStyles.tablebody}>
            {!loading ? (
              pageData.map((data, i) => {
                return (
                  <tr
                    key={i}
                    className={`${TableStyles.tablerow} bg-white text-secondary-blue`}
                  >
                    <td className="d-block d-md-none">
                      <div
                        className={`${TableStyles.mobiletableitem} bg-secondary-blue text-white d-flex`}
                      >
                        <div className="mr-2">{data.icon}</div>
                        {/* <div>{data.narration}</div> */}
                      </div>
                    </td>
                    <td
                      data-label="Type: "
                      className={`${TableStyles.tableitem} d-none d-md-block`}
                    >
                      <div className="d-flex justify-content-left">
                        <div className="mr-2">
                          {transIcon(data.transactionType)}
                        </div>
                        <div>{transType(data.transactionType)}</div>
                      </div>
                    </td>
                    <td data-label="Amount: " className={TableStyles.tableitem}>
                      NGN {formatCurrency(data.amount)}
                    </td>
                    <td data-label="From: " className={TableStyles.tableitem}>
                      {data.originatorName}
                    </td>
                    <td data-label="To: " className={TableStyles.tableitem}>
                      {data.beneficiaryName}
                    </td>
                    <td data-label="Time: " className={TableStyles.tableitem}>
                      {formatDate(data.createdOn)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className="d-flex justify-content-center mt-5">
                <ActivityLoader />
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <SelectSmall
            value={limit}
            onChange={(e) => setLimit(Number(e.currentTarget.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </SelectSmall>
        </div>
        <div>
          <FlexWrapper alignItems="center">
            <FlexWrapper marginRight="10px">
              <Typography fontSize="10px">
                {totalpages < 1 ? 0 : page} of {totalpages}
              </Typography>
            </FlexWrapper>
            <FlexWrapper>
              <ChevronLeft
                opacity={page > 1 ? "1" : "0.5"}
                onClick={() => (page > 1 ? setPage(page - 1) : null)}
                style={{
                  marginRight: "10px",
                  cursor: `${page > 1 ? "pointer" : "not-allowed"}`,
                }}
              />
              <ChevronRight
                opacity={page === totalpages ? "0.5" : "1"}
                onClick={() =>
                  page + 1 <= totalpages ? setPage(page + 1) : null
                }
                style={{
                  cursor: `${page < totalpages ? "pointer" : "not-allowed"}`,
                }}
              />
            </FlexWrapper>
          </FlexWrapper>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentHistoryTable;
