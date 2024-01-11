import { Dispatch, SetStateAction } from "react";
import { FlexWrapper, Typography } from "../../shared-components";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from '../../icons';

const SelectSmall = styled.select`
  border: 1px solid #e5e5e5;
  height: 30px;
  width: 68px;
  border-radius: 5px;
  padding: 5px;
`;

interface PaginationComponentProps {
    limit: number;
    setLimit: Dispatch<SetStateAction<number>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    totalpages: number;
}

const PaginationComponent = ({ limit, setLimit, setPage, page, totalpages }: PaginationComponentProps) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <SelectSmall
                    value={limit}
                    onChange={(e) => setLimit(Number(e.currentTarget.value))}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </SelectSmall>
            </div>
            <div>
                <FlexWrapper alignItems="center">
                    <FlexWrapper marginRight="10px">
                        <Typography fontSize="16px">
                            {totalpages < 1 ? 0 : page} of {totalpages}
                        </Typography>
                    </FlexWrapper>
                    <FlexWrapper>
                        <ChevronLeft
                            opacity={page > 1 ? "1" : "0.5"}
                            onClick={() => (page > 1 ? setPage(page - 1) : null)}
                            style={{
                                marginRight: "10px",
                                cursor: `${page > 1 ? "pointer" : "not-allowed"}`,
                            }}
                        />
                        <ChevronRight
                            opacity={page === totalpages || totalpages === 0 ? "0.5" : "1"}
                            onClick={() =>
                                page + 1 <= totalpages ? setPage(page + 1) : null
                            }
                            style={{
                                cursor: `${page < totalpages ? "pointer" : "not-allowed"}`,
                            }}
                        />
                    </FlexWrapper>
                </FlexWrapper>
            </div>
        </div>
    )
}

export default PaginationComponent
