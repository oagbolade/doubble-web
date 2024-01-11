import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { FlexWrapper, Typography } from "../../shared-components";
import { ChevronLeft, ChevronRight } from "../../icons";
import InvestmentModalHorizontalProgressBar from "./Utils/InvestmentModalHorizontalProgressBar";
import Image from "next/image";
import SettingStyles from "../../../styles/setting.module.css";
import {
  determineBackgroundColor,
  determineTextColor,
  formatCurrency,
} from "../../utils/utilities";
import TableStyles from "../../../styles/table.module.css";

const SelectSmall = styled.select`
  border: 1px solid #e5e5e5;
  height: 30px;
  width: 68px;
  border-radius: 5px;
  padding: 5px;
`;

interface InvestmentTableProps {
  handleClick: (data: any) => void;
  tabledata: any[];
  filter: string;
  loading?: boolean;
}

const InvestmentTable = ({
  handleClick,
  tabledata,
  filter,
  loading,
}: InvestmentTableProps) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pageData, setPageData] = useState([]);
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    const offset = (page - 1) * limit;
    const endposition = page * limit;
    if (filter === "asc") {
      setPageData(
        tabledata
          ?.slice(offset, endposition)
          .sort(
            (a, b) =>
              a?.title.toUpperCase().charCodeAt(0) -
              b?.title.toUpperCase().charCodeAt(0)
          )
      );
    } else {
      setPageData(
        tabledata
          ?.slice(offset, endposition)
          .sort(
            (a, b) =>
              b?.title.toUpperCase().charCodeAt(0) -
              a?.title.toUpperCase().charCodeAt(0)
          )
      );
    }

    setTotalPages(Math.ceil(tabledata?.length / limit));
  }, [tabledata, page, limit, filter]);

  return (
    <Fragment>
      <div className={TableStyles.tablecontainer}>
        <table className={TableStyles.separatetable}>
          <thead className={TableStyles.tablehead}>
            <tr
              className={`${TableStyles.tableheadrow} bg-secondary-blue text-white`}
            >
              <th className={TableStyles.tablehead}>Title</th>
              <th className={TableStyles.tablehead}>Type</th>
              <th className={TableStyles.tablehead}>Investment&nbsp;Amount</th>
              <th className={TableStyles.tablehead}>Interest</th>
              <th className={TableStyles.tablehead}>Timeline</th>
              <th
                className={TableStyles.tablehead}
                style={{ textAlign: "center" }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className={TableStyles.tablebody}>
            {pageData?.map((data, i: number) => {
              return (
                <tr
                  onClick={() => handleClick(data)}
                  key={i}
                  className={`${TableStyles.tablerow} bg-white text-secondary-blue text-left`}
                >
                  <td className="d-block d-md-none">
                    <div
                      className={`${TableStyles.mobiletableitem} bg-secondary-blue text-white d-flex justify-content-between`}
                    >
                      <div style={{ width: "50%" }}>{data.title}</div>
                      <InvestmentModalHorizontalProgressBar
                        color="#ABEEFF"
                        period={`${data.timeline.start} of ${data.timeline.end} months`}
                        filledWidth={
                          (data.timeline.start / data.timeline.end) * 100
                        }
                        emptyWidth={
                          10 - (data.timeline.start / data.timeline.end) * 100
                        }
                        fontColor="#fff"
                        width="40%"
                        justifyContent="center"
                      />
                    </div>
                  </td>
                  <td
                    data-label="Title: "
                    className={`${TableStyles.tableitem} d-none d-md-block fw-bold text-capitalize`}
                  >
                    {data.title.toLowerCase()}
                  </td>
                  <td data-label="Type: " className={TableStyles.tableitem}>
                    {data.type}
                  </td>
                  <td data-label="Amount: " className={TableStyles.tableitem}>
                    {`${data.currency === "NGN" ? "₦" : "$"} ${formatCurrency(
                      Number(data?.investmentAmount)
                    )}`}
                  </td>
                  <td data-label="Interest: " className={TableStyles.tableitem}>
                    {`${data.currency === "NGN" ? "₦" : "$"} ${formatCurrency(
                      Number(String(data?.intrest)?.replaceAll(",", ""))
                    )}`}
                  </td>
                  <td
                    data-label="Timeline: "
                    className={`${TableStyles.tableitem} d-none d-md-block`}
                  >
                    <InvestmentModalHorizontalProgressBar
                      color="#ABEEFF"
                      period={`${data.timeline.start} of ${data.timeline.end} months`}
                      filledWidth={
                        (data.timeline.start / data.timeline.end) * 100
                      }
                      emptyWidth={
                        data.timeline.end -
                        (data.timeline.start / data.timeline.end) * 100
                      }
                    />
                  </td>
                  <td className={`${TableStyles.tableitem}`}>
                    <div className="d-lg-flex justify-content-center">
                      <div
                        style={{
                          backgroundColor: determineBackgroundColor(
                            data.status
                          ),
                          borderRadius: "30px",
                          width: "max-content",
                        }}
                        className="py-1 px-3 d-flex justify-content-center"
                      >
                        <span
                          style={{
                            color: determineTextColor(data.status),
                            fontSize: "10px",
                          }}
                        >
                          {data.status}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!loading && tabledata?.length === 0 && (
          <div>
            <div className={SettingStyles.tumbleweed}>
              {" "}
              <Image
                src="/tumbleWeed.gif"
                alt="TumbleWeed"
                width={250}
                height={250}
              />
            </div>
            <h2 className="text-center pb-3 pt-0 text-secondary w3-animate-top">
              No Investment
            </h2>
          </div>
        )}
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
                opacity={page === totalpages ? "0.3" : "1"}
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

export default InvestmentTable;
