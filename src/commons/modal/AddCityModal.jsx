import React, {Fragment} from 'react';
import { Modal } from "antd";
import BasicForm from "./BasicForm";

const AddCityModal = ({ visible, setVisible }) => {

    const handleOk = e => {
        console.log(e);
        setVisible(false)
    };

    const closeModal = () => {
        setVisible(false)
    };
    return(
        <Fragment>
            <Modal
                title="Add a city"
                visible={visible}
                onOk={handleOk}
                onCancel={closeModal}
            >
                <BasicForm/>
            </Modal>
        </Fragment>

    )
}

export default AddCityModal