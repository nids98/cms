import React from 'react'
import {Container} from "./ListingStyles";
import ListTable from "../../commons/listTable/ListTable";
import Add from "../../commons/addButton/Add";

const ListingContainer = () => {
    return(
        <Container>
            <Add />
            <ListTable />
        </Container>
    )
}

export default ListingContainer
