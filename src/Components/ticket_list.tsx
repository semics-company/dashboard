import React from 'react';
import {Paper} from "@material-ui/core";
import EnhancedTable from "./table/Ticket_table";

const Ticket_list = () => {
    return (
            <Paper style={{padding:"10px",marginRight:"5px",marginLeft:"5px",width:"100%"}}>
                <EnhancedTable/>
            </Paper>
    );
};

export default Ticket_list;