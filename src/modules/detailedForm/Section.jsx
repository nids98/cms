import React, {useState, Fragment} from 'react'
import Subsection from "./Subsection.jsx";
import {SectionTitle, Container, ToggleButton} from "./detailedFormStyle";
import {updateFormikSchema, updateCurrentInput} from "../../commons/utils";
import cloneDeep from 'lodash.clonedeep';

const Section = ( { title, name, fields, allowMultipleSubsection, formikProps, currentInputName } ) => {
    const [visible, setVisible] = useState(false);
    const [subsectionId, setSubsectionId] = useState(['0'])

    let currentInputName1 = cloneDeep(updateCurrentInput(name, allowMultipleSubsection, currentInputName));

    const toggle = () => {
        setVisible(!visible);
    };

    const generateSubsection = () => {
        let newSubSectionId = `${subsectionId.length}`
        setSubsectionId([
            ...subsectionId,
            newSubSectionId
        ])

        updateFormikSchema(formikProps, title)
    }

    return(
        <Fragment>
            <span onClick={toggle}>{visible ? "-" : "+"}</span>
            <SectionTitle>{title}</SectionTitle>
            <span onClick={generateSubsection}>{allowMultipleSubsection && "+"}</span>
            <br/>
            {
                subsectionId.map((subsec, id) =>
                    <Subsection
                        key={id}
                        sectionName={name}
                        fields={fields}
                        allowMultipleSubsection={allowMultipleSubsection}
                        currentInputName={currentInputName1}
                        formikProps={formikProps}
                        subsectionId={subsectionId}
                        fromChild={false}
                    />
                )
            }
        </Fragment>
    )
}

export default Section