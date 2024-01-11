import { Fragment, useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { Typography, IconButton } from "../../shared-components";
import PaymentHistoryTable from "./PaymentHistoryTable";
import DashboardLayout from "../../shared-components/DashboardLayout/DashboardLayout";
import { currentDate, daysBefore } from "../../utils/utilities";
import {
  ReceiveIcon,
  SendIcon,
  EKEDCIcon,
  IkejaElectricIcon,
} from "../../icons";
import { useAppSelector } from "../../redux/hooks";
import { httpRequest, HTTPResponse } from "../../https/http";

const investmentdata = [
  {
    type: "Recieve Money",
    icon: <ReceiveIcon />,
    amount: 1000000,
    from: "Desmond Edward",
    to: "Quick Teller",
    time: currentDate(),
  },
  {
    id: `int${Math.floor(Math.random() * 100000000)}${Math.floor(
      Math.random() * 100000000
    )}`,
    type: "Send Money",
    icon: <SendIcon />,
    amount: 2300000,
    from: "Desmond Edward",
    to: "Quick Teller",
    time: daysBefore(5),
  },
  {
    type: "Recieve Money",
    icon: <ReceiveIcon />,
    amount: 1000000,
    from: "Desmond Edward",
    to: "Quick Teller",
    time: currentDate(),
  },
  {
    id: `int${Math.floor(Math.random() * 100000000)}${Math.floor(
      Math.random() * 100000000
    )}`,
    type: "Send Money",
    icon: <SendIcon />,
    amount: 2300000,
    from: "Desmond Edward",
    to: "Quick Teller",
    time: daysBefore(5),
  },
];

const filters = [
  { label: "Send Money", value: 0 },
  { label: "Recieve Money", value: 1 },
  { label: "Airtime", value: 2 },
  { label: "Data", value: 3 },
  { label: "Electricity", value: 4 },
  { label: "CableTv", value: 5 },
];

const PaymentHistory = () => {
  const [paymentList, setPaymentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string | number>("all");

  const { user } = useAppSelector((state) => state.auth);

  const PaymentList = async () => {
    try {
      setLoading(true);
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/TrasantionHistory",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "string",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          userId: user?.userId,
          from: "2021-09-23T17:22:19.157Z",
          to: "2021-09-23T17:22:19.157Z",
        },
      });

      if (result.status === true) {
        setPaymentList(result.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    PaymentList();
  }, []);

  return (
    <DashboardLayout>
      <Fragment>
        <Link href="/payment">
          <div className="d-flex align-items-center">
            <FaChevronLeft
              color="#263D61"
              fontSize="24px"
              className="cursor-pointer mr-2"
            />
            <Typography fontWeight="600" className="my-4 cursor-pointer">
              Payments
            </Typography>
          </div>
        </Link>
        <div
          className="d-flex justify-content-between flex-wrap"
          style={{ margin: "50px 0 30px 0" }}
        >
          <div className="my-1">
            <select
              className="doubble-select px-2"
              value={filter}
              onChange={(e) => {
                setPage(1);
                setFilter(e.currentTarget.value);
              }}
            >
              <option value="all">All Payment</option>
              {filters.map((f, i) => (
                <option value={f.value} key={i}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex my-1">
            {/* <select name="" id="" className="doubble-select px-2" >
              <option>Filter</option>
            </select> */}
            <div className="ml-2 d-none d-md-block">
              <IconButton borderRadius="5px" background="#263D61">
                <FaPlus fontSize="24px" color="#00CCFF" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="p-relative">
          <PaymentHistoryTable
            tabledata={paymentList}
            loading={loading}
            filter={filter}
            page={page}
            setPage={setPage}
          />
          <button
            className={`d-block d-md-none bg-primary-blue float-action-button`}
            style={{ bottom: "7%" }}
          >
            <FaPlus
              className="text-secondary-blue"
              style={{ fontSize: "20px" }}
            />
          </button>
        </div>
      </Fragment>
    </DashboardLayout>
  );
};

export default PaymentHistory;
