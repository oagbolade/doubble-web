import { GroupLinkButtons } from "../../../shared-components";
import { footerLinkTexts } from "../../../utils/utilities";

const FooterLinks = () => {
  return (
    <GroupLinkButtons
      width="100%"
      justifyContent="space-between"
      data={footerLinkTexts}
      linkMargin="5px"
    />
  );
};

export default FooterLinks;
