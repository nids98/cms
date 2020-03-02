import React from "react";
import {connect} from 'react-redux'
import {Table} from "antd";
import {Container} from "./ListTableStyles";

const ListTable = ({ cities }) =>  {
        const dataSource = cities;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Endpoint',
                dataIndex: 'endpoint',
                key: 'endpoint',
            },
            {
                title: 'Edit',
                dataIndex: 'edit',
                key: 'edit',
                render: () => (
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                ),
            },
        ];
        const getPageNumber = page => {
            console.log(page);
        }
        return(
            <Container>
                <Table dataSource={dataSource} columns={columns} rowKey="name" pagination={{ pageSize: 10 }}/>
            </Container>
        )

}

const mapStateToProps = state =>{
    console.log(state);
    return {
        cities: state.ListingDuck.cities
    }
}


export default connect(mapStateToProps, null)(ListTable)