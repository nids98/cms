export const getInitialValues = (sections) => {
    let initialValue = new Object();

    sections.map(section => {
        initialValue[section.name] = getSubSection(section.fields, section.allowMultipleSubsection)
    })
    return initialValue
}

export const getSubSection = (fields, allowMultipleSubsection) => {
    let subsection = {}

    fields.map(field => {
        if(!field.hasChildren) {
            subsection[field.field_name]="";
        } else {
            subsection[field.field_name] = getSubSection(field.children.fields, field.children.allowMultipleSubsection)
        }
    });
    if(!allowMultipleSubsection) {
        return subsection
    } else {
        let subsec = [];
        subsec.push(subsection);
        return subsec;
    }
}

export const updateFormikSchema = (formikProps, sectionTitle) => {
    const {values} = formikProps
    const sectionFields = values[sectionTitle]
    console.log(values)
    console.log(sectionFields)
}

export const updateCurrentInput = (name, allowMultipleSubsection, currentInputName) => {
    if(allowMultipleSubsection) {
        currentInputName.push(name+"[0]")
    } else {
        currentInputName.push(name)
    }
    return currentInputName
}

export const setInitialFormicValues = (formicProps, sectionName) => {

}
// export const fillTemplateValues = (sections, formicValue, data) => {
//     sections.map(section => {
//         const fields=[];
//
//         const sectionName = section.name
//         console.log(formicValue[sectionName])
//     })
// }


export const getValidationSchema = () => {

}
