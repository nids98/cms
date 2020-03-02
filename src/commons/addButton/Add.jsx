import React, {useState, Fragment} from 'react';
import {AndButton} from "./AddStyles";
import {Tooltip, Modal, Button} from "antd";
import AddCityModal from "../modal/AddCityModal";

const Add = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    return(
        <Fragment>
            <div onClick={showModal}>
                <Button type="primary">
                    <Tooltip title="Add a city">
                        <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                    </Tooltip>
                </Button>
            </div>
            { visible && <AddCityModal visible={visible} setVisible={() => setVisible()}/>}
        </Fragment>

    )
}

export default Add