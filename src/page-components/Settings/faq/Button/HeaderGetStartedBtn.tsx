import { ReactNode } from "react";
import Link from "next/link";
import { GetStartedBtnBackgroundStyle, GetStartedBtnStyle } from "./styles";

interface GetStartedBtnProps {
  children?: ReactNode;
}
const GetStartedBtn = (props: GetStartedBtnProps) => (
  <GetStartedBtnBackgroundStyle>
    <Link href="/login">
      <GetStartedBtnStyle>{props.children}</GetStartedBtnStyle>
    </Link>
  </GetStartedBtnBackgroundStyle>
);

export default GetStartedBtn;
