import { GroupLinkButtons } from "../../../shared-components";
import { ResponsiveWrapper } from "../../../util-components/ResponsiveWrappers";
import { headerLinkTexts } from "../../../utils/utilities";


const HeaderLinks = () => {
  return (
    <ResponsiveWrapper>
      <GroupLinkButtons
        width="100%"
        justifyContent="space-between"
        data={headerLinkTexts}
      />
    </ResponsiveWrapper>
  );
};

export default HeaderLinks;
