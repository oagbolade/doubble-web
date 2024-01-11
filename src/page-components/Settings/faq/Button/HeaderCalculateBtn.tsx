import { ReactNode } from "react";
import Link from "next/link";

import { HeaderCalculateBtnStyle } from "./styles";

interface HeaderCalculateBtnProps {
  children?: ReactNode;
}
const HeaderCalculateBtn = (props: HeaderCalculateBtnProps) => (
  <Link href="#calculate-section">
    <HeaderCalculateBtnStyle>{props.children}</HeaderCalculateBtnStyle>
  </Link>
);

export default HeaderCalculateBtn;
