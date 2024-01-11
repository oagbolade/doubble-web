import {
  FlexWrapper,
  Typography,
  Card
} from "../../shared-components";

import {
  CompletedIcon,
  ActiveIcon,
  FutureIcon
} from "../../icons";


const InvestmentStatus = () => (
  <>
    <FlexWrapper type="item" lg="4" md="4" justifyContent="center" marginLeft="-30px" display="flex">
      <Card
        width="100%"
        flexDirection="column"
        boxShadow=""
        bgColor="#EBFFFA"
        borderRadius="10px"
        height="130px"
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        /* padding="20px" */
        paddingTop="20px"
        paddingBottom="20px"
      >
        <FlexWrapper justifyContent="space-between" padding="5px" width="95%">
          <FlexWrapper type="item" lg="8" md="8" sm="8" xs="8" alignItems="center">
            <ActiveIcon />
            <Typography fontWeight="700" fontSize="18px" fontColor="#09B78A">
              Active
            </Typography>
          </FlexWrapper>
          <FlexWrapper type="item" lg="4" md="4" sm="4" xs="4" justifyContent="flex-end">
            <Typography fontSize="24px">
              13
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper marginTop="5px" width="100%" padding="5px">
          <Typography
            variant="span"
            fontColor="#09B78A"
            fontSize="8px"
            background="#B3EDDE"
            padding="5px"
            borderRadius="10px"
          >
            Targets
          </Typography>
          <Typography
            variant="span"
            fontColor="#09B78A"
            fontSize="8px"
            background="#B3EDDE"
            padding="5px"
            borderRadius="10px"
            marginLeft="2px"
          >
            Guaranteed Investment notes
          </Typography>
          <Typography
            fontColor="#09B78A"
            fontSize="8px"
            padding="5px"
            borderRadius="10px"
            marginLeft="2px"
          >
            + 5 more
          </Typography>
        </FlexWrapper>
        <button
          style={{
            width: "50%",
            height: "35px",
            background: "#00CCFF",
            color: "#263E61",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "5px",
            border: "none",
            marginTop: "5px",
            cursor: "pointer",
            fontSize: "12px"
          }}
        >
          <Typography fontSize="12px">Click to view</Typography>
        </button>
      </Card>
    </FlexWrapper>

    <FlexWrapper type="item" lg="4" md="4" justifyContent="center" display="flex">
      <Card
        width="100%"
        flexDirection="column"
        boxShadow=""
        bgColor="#FFECC3"
        borderRadius="10px"
        height="130px"
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <FlexWrapper justifyContent="space-between" padding="5px" width="100%">
          <FlexWrapper type="item" lg="8" md="8" sm="8" xs="8" alignItems="center">
            <FutureIcon />
            <Typography fontWeight="700" fontSize="18px" fontColor="#F8AB08" marginLeft="5px">
              Future
            </Typography>
          </FlexWrapper>
          <FlexWrapper type="item" lg="4" md="4" sm="4" xs="4" justifyContent="flex-end">
            <Typography fontSize="24px">
              13
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper marginTop="5px" width="100%" padding="5px">
          <Typography
            variant="span"
            fontColor="#F8AB08"
            fontSize="8px"
            background="#FEDF9E"
            padding="5px"
            borderRadius="10px"
          >
            Targets
          </Typography>
          <Typography
            variant="span"
            fontColor="#F8AB08"
            fontSize="8px"
            background="#FEDF9E"
            padding="5px"
            borderRadius="10px"
            marginLeft="2px"
          >
            Guaranteed Investment notes
          </Typography>
          <Typography
            fontColor="#F8AB08"
            fontSize="8px"
            padding="5px"
            borderRadius="10px"
            marginLeft="2px"
          >
            + 5 more
          </Typography>
        </FlexWrapper>
        <button
          style={{
            width: "50%",
            height: "35px",
            background: "#00CCFF",
            color: "#263E61",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "5px",
            border: "none",
            marginTop: "5px",
            cursor: "pointer",
            fontSize: "12px"
          }}
        >
          <Typography fontSize="12px">Click to view</Typography>
        </button>
      </Card>
    </FlexWrapper>

    <FlexWrapper type="item" lg="4" md="4" justifyContent="center" display="flex">
      <Card
        width="100%"
        flexDirection="column"
        boxShadow=""
        bgColor="#E9ECEF"
        borderRadius="10px"
        height="130px"
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <FlexWrapper justifyContent="space-between" padding="5px" width="100%">
          <FlexWrapper type="item" lg="8" md="8" sm="8" xs="8" alignItems="center">
            <CompletedIcon />
            <Typography fontWeight="700" fontSize="18px" fontColor="#576984" marginLeft="5px">
              Completed
            </Typography>
          </FlexWrapper>
          <FlexWrapper type="item" lg="4" md="4" sm="4" xs="4" justifyContent="flex-end">
            <Typography fontSize="24px">
              1
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper marginTop="5px" width="100%" padding="5px">
          <Typography
            variant="span"
            fontColor="#576984"
            fontSize="8px"
            background="#C5CBD4"
            padding="5px"
            borderRadius="10px"
          >
            Targets
          </Typography>
        </FlexWrapper>
        <button
          style={{
            width: "50%",
            height: "35px",
            background: "#00CCFF",
            color: "#263E61",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "5px",
            border: "none",
            marginTop: "5px",
            cursor: "pointer",
            fontSize: "12px"
          }}
        >
          <Typography fontSize="12px">Click to view</Typography>
        </button>
      </Card>
    </FlexWrapper>
  </>
)

export default InvestmentStatus;
