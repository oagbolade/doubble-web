import {
  MTNIcon,
  GloIcon,
  AirtelIcon,
  NineMobileIcon,
  SendIcon,
} from "../../icons";

export const getLogo = (sp) => {
  switch (sp) {
    case "Airtel":
      return <AirtelIcon />;

    case "9Mob":
      return <NineMobileIcon />;

    case "GLO":
      return <GloIcon />;

    case "MTN":
      return <MTNIcon />;

    case "Send Money":
      return <SendIcon />;

    default:
      return null;
  }
};

interface TabItemProps {
  item: { icon: any; label: string; serviceProvider: string; logoUrl: string };
  // tslint:disable-next-line: ban-types
  onClick?: Function | any;
}

const TabItem = ({ item, onClick }) => {
  return (
    <div className={`tab-item-card cursor-pointer`} onClick={onClick}>
      <div className="p-1">
        <div className="d-flex justify-content-center">
          {getLogo(item.serviceProvider)
            ? getLogo(item.serviceProvider)
            : item.icon}
        </div>
        <div className="d-flex justify-content-center">
          {item.serviceProvider ? item.serviceProvider : item.label}
        </div>
      </div>
    </div>
  );
};
TabItem.defaultProps = {
  onClick: () => null,
};

export default TabItem;
