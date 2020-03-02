import React, {useState, Fragment} from 'react'
import SubSectionInput from "./SubSectionInput";
import {Label} from "./detailedFormStyle";

const Subsection = ({ sectionName , fields, allowMultipleSubsection, currentInputName, formikProps, fromChild }) => {
    const [visible, setVisible] = useState(false)
    const toggle = () => {
        setVisible(!visible)
    }

    let bool = false

    return(
        <Fragment>
            {
                fields.map((field, id) => {
                    //currentInputName = updateCurrentInput(field.field_name, false, currentInputName);
                    // console.log(currentInputName, field.field_name)
                    return <Fragment key={id}>
                                { !(field.hasChildren) &&
                                    <SubSectionInput
                                        sectionName={sectionName}
                                        allowMultipleSubsection={allowMultipleSubsection}
                                        name={field.field_name}
                                        inputType={field.field_input_type}
                                        required={field.isRequired}
                                        formikProps={formikProps}
                                        fromChild={fromChild}
                                    />
                                }

                                { field.hasChildren &&
                                    <Fragment>
                                        <span onClick={toggle}>{visible ? "-": "+"}</span>
                                        <Label>{field.field_name}</Label>
                                        {
                                            // sectionName = appendSectionName(sectionName,field.field_name);
                                            <Subsection
                                                sectionName={sectionName.concat("-", field.field_name)}
                                                // sectionName={sectionName}
                                                fields={field.children.fields}
                                                allowMultipleSubsection={field.children.allowMultipleSubsection}
                                                currentInputName={currentInputName}
                                                formikProps={formikProps}
                                                fromChild={true}
                                            />
                                        }
                                        <span>{field.children.allowMultipleSubsection && "+"}</span>
                                        <br />
                                    </Fragment>
                                }
                    </Fragment>

            }
                )
            }
            {allowMultipleSubsection && <hr />}

        </Fragment>
    )
}

export default Subsection