import { Dispatch, forwardRef, SetStateAction, useRef } from "react";
import { Modal, ModalProps } from "antd";
import RecieptStyles from "./Reciept.module.css";
import { useReactToPrint } from "react-to-print";

type ReceiptContent = { title: string; value: string; divider?: boolean };

interface ContentProps {
  recieptTitle: string;
  recieptType: string;
  recieptIcon: any;
  content: ReceiptContent[];
}
interface RecieptProps extends ModalProps {
  recieptTitle: string;
  recieptType: string;
  recieptIcon: any;
  content: ReceiptContent[];
  showReciept: boolean;
  setShowReciept: () => void;
}

const RecieptContent = forwardRef(
  ({ content, recieptTitle, recieptIcon, recieptType }: ContentProps, ref) => {
    return (
      <div className={`bg-white`} ref={ref as any}>
        <div className="d-flex justify-content-start">
          <img src="/doubble-icon.png" alt="" />
        </div>
        <div className={`my-3 ${RecieptStyles.smalltitle}`}>Reciept</div>
        <div className={`my-3 ${RecieptStyles.bigtitle}`}>{recieptTitle}</div>
        <div className="d-flex justify-content-center">{recieptIcon}</div>
        <div className={RecieptStyles.smalltitle}>{recieptType}</div>
        <div className={RecieptStyles.innercontent}>
          <div className={`my-2 ${RecieptStyles.dotted}`} />
          {content.map((item, i) => (
            <div className={`py-2`} key={i}>
              <div className="d-flex justify-content-between">
                <span className={`${RecieptStyles.itemtitle} w-40`}>
                  {item.title}
                </span>
                <span className={`${RecieptStyles.itemvalue} w-60`}>
                  {item.value}
                </span>
              </div>
              {item.divider && (
                <div className={`${RecieptStyles.divider} my-3`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

const Reciept = ({
  content,
  showReciept,
  recieptTitle,
  recieptIcon,
  recieptType,
  setShowReciept,
  ...rest
}: RecieptProps) => {
  const receiptRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
  });

  return (
    <Modal
      visible={showReciept}
      centered={true}
      closable={false}
      footer={null}
      {...rest}
    >
      <RecieptContent
        recieptTitle={recieptTitle}
        recieptType={recieptType}
        recieptIcon={recieptIcon}
        content={content}
        ref={receiptRef}
      />
      <div className="d-flex justify-content-center mt-3">
        <button className={RecieptStyles.btn} onClick={handlePrint}>
          Download Reciept
        </button>
      </div>
      <div className={`${RecieptStyles.backhome} mt-4 mb-3 cursor-pointer`} onClick={setShowReciept}>Back to Home Screen</div>
    </Modal>
  );
};

export default Reciept;
