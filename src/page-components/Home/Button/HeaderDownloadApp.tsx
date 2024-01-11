import { ReactNode } from "react";
import Link from "next/link";
import {
  DownloadMobileAppBackgroundStyle,
  DownloadMobileAppWrapper,
} from "./styles";

interface GetStartedBtnProps {
  children?: ReactNode;
}
const DownloadMobileApp = (props: GetStartedBtnProps) => (
  <DownloadMobileAppBackgroundStyle>
    <Link href="#">
      <DownloadMobileAppWrapper>{props.children}</DownloadMobileAppWrapper>
    </Link>
  </DownloadMobileAppBackgroundStyle>
);

export default DownloadMobileApp;
