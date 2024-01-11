import { FlexWrapper } from "..";
import ComingSoon from "../ComingSoon/ComingSoon";
import LinkButton from "./LinkButton";

interface GroupLinkBtnsProps {
  data: { text: string; url: string; comingSoon?: boolean }[];
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  activeLink?: string;
  activeFontColor?: string;
  activeFontWeight?: string;
  activeFontSize?: string;
  linkMargin?: string;
  linkMarginBottom?: string;
  linkMarginLeft?: string;
  linkMarginRight?: string;
}

const GroupLinkBtns = (props: GroupLinkBtnsProps) => {
  const links = props.data.map((link) => {
    const isActive = link.url.toLowerCase() === props.activeLink.toLowerCase();
    return link.comingSoon ? (
      <ComingSoon>
        <LinkButton
          text={link.text}
          url={link.url}
          key={link.text}
          margin={props.linkMargin}
          marginBottom={props.linkMarginBottom}
          marginLeft={props.linkMarginLeft}
          marginRight={props.linkMarginRight}
          fontWeight={isActive ? props.activeFontWeight : props.fontWeight}
          fontSize={isActive ? props.activeFontSize : props.fontSize}
          fontColor={isActive ? props.activeFontColor : props.fontColor}
        />
      </ComingSoon>
    ) : (
      <LinkButton
        text={link.text}
        url={link.url}
        key={link.text}
        margin={props.linkMargin}
        marginBottom={props.linkMarginBottom}
        marginLeft={props.linkMarginLeft}
        marginRight={props.linkMarginRight}
        fontWeight={isActive ? props.activeFontWeight : props.fontWeight}
        fontSize={isActive ? props.activeFontSize : props.fontSize}
        fontColor={isActive ? props.activeFontColor : props.fontColor}
      />
    );
  });
  return <>{links}</>;
};

GroupLinkBtns.defaultProps = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  activeLink: "",
};

export default GroupLinkBtns;
