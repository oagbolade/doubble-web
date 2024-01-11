import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Typography } from '../../shared-components';
import DashboardLayout from '../../shared-components/DashboardLayout/DashboardLayout';
import InvestMentDetails from './InvestMentDetails';
import Investments from './Investments';
import MessageDetails from './MessageDetails';
import Messages from './Messages';
import SearchStyles from "./Search.module.css";
import { CLEAR_SELECTED_INVESTMENT, CLEAR_SELECTED_MESSAGE } from '../../redux/search/SearchTypes';
import { useWidth } from '../../../hooks/useWidth';

const tabs = ["Messages", "Investments"];

const Search = () => {
    const [term, setTerm] = useState("");
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    const router = useRouter();

    const dispatch = useAppDispatch();

    const { width } = useWidth();

    const { investment, messages, selectedInvestment, selectedMessage } = useAppSelector(state => state.search);

    useEffect(() => {
        setTerm(router?.query?.term as string)
    }, [router?.query?.term])


    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-lg-8">
                    <div className="d-flex justify-content-between mt-5 mb-3">
                        <Typography fontWeight="700" fontSize="18px">
                            Search for {term}
                        </Typography>
                        <Typography fontWeight="700" fontSize="18px">
                            {investment.data.length + messages.data.length}
                        </Typography>
                    </div>
                    <div className="px-2 px-lg-3 pt-2 pt-lg-3 pb-1 bg-white d-flex flex-wrap justify-content-center w-100">
                        {tabs.map((tab, i) => (
                            <div
                                key={i}
                                onClick={() => setCurrentTab(tab)}
                                className={`${SearchStyles.tab} pt-2 pb-1 px-2 ${currentTab === tab ? SearchStyles.activetab : ""}`}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className={`${currentTab === "Messages" ? "d-block" : "d-none"}`}><Messages /></div>
                        <div className={`${currentTab === "Investments" ? "d-block" : "d-none"}`}><Investments /></div>
                    </div>
                </div>
                <div className="col-md-4 d-none d-lg-block mt-5 mb-3">
                    {currentTab === "Messages" && selectedMessage && <MessageDetails />}
                    {currentTab === "Investments" && selectedInvestment && <InvestMentDetails />}
                </div>
                {width < 992 && <Modal
                    visible={selectedMessage || selectedInvestment}
                    centered={true}
                    closable={true}
                    onCancel={() => {
                        dispatch({ type: CLEAR_SELECTED_INVESTMENT });
                        dispatch({ type: CLEAR_SELECTED_MESSAGE });
                    }}
                    footer={null}
                >
                    {currentTab === "Messages" && selectedMessage && <MessageDetails />}
                    {currentTab === "Investments" && selectedInvestment && <InvestMentDetails />}
                </Modal>}
            </div>
        </DashboardLayout>
    )
}

export default Search
