import { Fragment } from "react";
import TableStyles from "../../../styles/table.module.css";

interface AccountTableProps {
  tabledata: any[];
}
interface IGetAccount {
  account: string;
  name: string;
  accountType: string;
}

const AccountTable = ({ tabledata }: AccountTableProps) => {
  return (
    <Fragment>
      <div className={`${TableStyles.tablecontainer} d-none d-md-block`}>
        <table className={TableStyles.collapsetable}>
          <tbody>
            {tabledata.length > 0 &&
              tabledata.map((data: IGetAccount, i: number) => {
                return (
                  <tr key={i} className={`bg-white text-secondary-blue`}>
                    <td className="p-2">
                      <div
                        className={`text-secondary-blue d-flex flex-column justify-content-center`}
                      >
                        <div
                          className="mr-2 mb-1"
                          style={{ fontSize: "0.63em" }}
                        >
                          Account Number
                        </div>
                        <div style={{ fontSize: "0.75em" }} className="fw-bold">
                          {data.account?.split("-")[0]}
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div
                        className={`text-secondary-blue d-flex flex-column justify-content-center`}
                      >
                        <div
                          className="mr-2 mb-1"
                          style={{ fontSize: "0.63em" }}
                        >
                          Account Name
                        </div>
                        <div style={{ fontSize: "0.75em" }} className="fw-bold">
                          {data.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div
                        className={`text-secondary-blue d-flex flex-column justify-content-center `}
                      >
                        <div
                          className="mr-2 mb-1"
                          style={{ fontSize: "0.63em" }}
                        >
                          Account Type
                        </div>
                        <div style={{ fontSize: "0.75em" }} className="fw-bold">
                          {data.account?.split("-")[1]}
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div
                        className={`text-secondary-blue d-flex flex-column justify-content-center `}
                      >
                        {/* <div className="mr-2 mb-1" style={{ fontSize: "0.63em" }}>
                        Bank
                      </div>
                      <div style={{ fontSize: "0.75em" }} className="fw-bold">
                        {data.bank}
                      </div> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className={`${TableStyles.tablecontainer} d-block d-md-none`}>
        <table className={TableStyles.separatetable}>
          <tbody>
            {/* tabledata.map((data, i) => {
              return (
                <tr key={i} className={`bg-white text-secondary-blue`}>
                  <td className="p-2 py-3 w-80">
                    <div
                      className={`text-secondary-blue d-flex flex-column justify-content-start`}
                    >
                      <div className="mr-2 mb-1" style={{ fontSize: "0.63em" }}>
                        {data.accountName}
                      </div>
                      <div style={{ fontSize: "0.75em" }} className="fw-bold">
                        {data.accountNo} | {data.bank}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div
                      className={`text-secondary-blue d-flex justify-content-between align-items-center`}
                    >
                      <button className="d-flex flex-column justify-content-start align-items-center transparent-button cursor-pointer mr-3">
                        <FaPencilAlt className="text-primary-blue" />
                        <span className="text-primary-blue">Edit</span>
                      </button>
                      <button className="d-flex flex-column justify-content-start align-items-center transparent-button cursor-pointer">
                        <FaTrash className="text-red" />
                        <span className="text-red">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            }) */}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AccountTable;
