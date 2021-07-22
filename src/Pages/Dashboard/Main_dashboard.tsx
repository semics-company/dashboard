import React from 'react';
import MenuSideBar from "../../Components/Menu";

import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import Home from "./Home";
import Orders from "./Orders";
import Company from "./Company";
import transaction_list from "./transaction_list";
import TicketPage from "./ticket_page";
import SettingPage from "./Setting_page";
import DetaileCompany from "./Detaile_company";
import Advert from "./Advert";
import DetaileAdvert from "./Detaile_advert";
import AddCompany from "./Add_company";
import AddAdvert from "./Add_advert";
import Add_Order from "./Add_Order";

const MainDashboard = () => {
    let location = useLocation();

    return (
        <div>
            <MenuSideBar>

                {/*   <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="dialog"
                        timeout={300}
                    > */}
                        <Switch location={location}>
                            <Route exact path={"/dashboard/"} component={Home} />
                            <Route exact path={"/dashboard/advert"} component={Advert} />
                            <Route exact path={"/dashboard/addAdvert"} component={AddAdvert} />
                            <Route exact path={"/dashboard/advert/:sku"} component={DetaileAdvert} />
                            <Route exact path={"/dashboard/orders"} component={Orders} />
                            <Route exact path={"/dashboard/addOrder"} component={Add_Order} />
                            <Route exact path={"/dashboard/company"} component={Company} />
                            <Route exact path={"/dashboard/transaction"} component={transaction_list} />
                            <Route path={"/dashboard/ticket"} component={TicketPage} />
                            <Route exact path={"/dashboard/setting"} component={SettingPage} />
                            <Route exact path={"/dashboard/company/:sku"} component={DetaileCompany} />
                            <Route exact path={"/dashboard/addcompany"} component={AddCompany} />

                        </Switch>
                {/*
                    </CSSTransition>
                </TransitionGroup>
                */}

            </MenuSideBar>
        </div>
    );
};

export default MainDashboard;