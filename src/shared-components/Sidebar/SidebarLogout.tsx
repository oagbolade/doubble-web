import { IconButton, FlexWrapper } from "../../shared-components";

import { PowerIcon } from "../../icons";

interface SidebarLogoutProps {
  marginTop: number;
  marginBottom: number;
}

const SidebarLogout = ({ marginTop, marginBottom }: SidebarLogoutProps) => (
  <FlexWrapper
    style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}
    justifyContent="center"
  >
    <IconButton>
      <PowerIcon />
    </IconButton>
  </FlexWrapper>
);

SidebarLogout.defaultProps = {
  marginTop: 200,
  marginBottom: 0
}

export default SidebarLogout;
