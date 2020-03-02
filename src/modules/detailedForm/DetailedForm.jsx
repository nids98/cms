import React, {useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import Section from "./Section";
import {getInitialValues} from '../../commons/utils'
import { getTemplate} from "../../redux-store/reducers/fixedTemplateDuck";
import { Formik } from 'formik'
import {Container} from "./detailedFormStyle";

// import {validateTemplate} from './Schema/validateTemplate'
const DetailedForm = ({ sections, getTemplate, data  }) => {
    let currentInputName = [];
    useEffect(() => {
        getTemplate()
    }, []);

    let initialValues = getInitialValues(sections)
    console.log(initialValues)

    return(
        <Container>
            {
                sections.length &&
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, setSubmitting) => {
                        setTimeout(() => {
                            console.log("Logging in ", values)
                        }, 5000);
                    }}
                >
                    {
                        formikProps => {
                            console.log(formikProps)
                            return (
                                <Fragment>
                                    {
                                        sections.map((section, id) => {
                                            // (!currentInputName.isEmpty()) ? currentInputName.pop(): null
                                            // if(currentInputName.length > 0) currentInputName.pop()
                                            return <Section
                                                key={id}
                                                title={section.title}
                                                name={section.name}
                                                fields={section.fields}
                                                allowMultipleSubsection={section.allowMultipleSubsection}
                                                formikProps={formikProps}
                                                currentInputName={currentInputName}
                                            />
                                        })
                                    }
                                </Fragment>
                            )
                        }
                    }
                </Formik>
            }
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        sections: state.fixedTemplateDuck.template,
        data: state.fixedTemplateDuck.template
    }
}

export default connect(mapStateToProps, {getTemplate})(DetailedForm)