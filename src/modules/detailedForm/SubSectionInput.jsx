import React from 'react'
import { Label, Input} from "./detailedFormStyle";

const SubSectionInput = ({ sectionName, allowMultipleSubsection, name, inputType, required, formikProps, fromChild}) => {
    const {values, handleChange, handleBlur, formikKey} = formikProps


    console.log(sectionName, name, fromChild)
    // console.log(values["tipps"][0]["cta"]["title"])
    let value=null;
    let names=null

    if(allowMultipleSubsection && !fromChild) {
        value = values[sectionName][0][name];
        names = sectionName[0][name]
    } else if(!allowMultipleSubsection && !fromChild){
        value = values[sectionName][name]
        names = sectionName[name]
    }

    if(fromChild) {
        console.log(sectionName)
        let str = sectionName.split("-")
        value = values[str[0]][0][str[1]][name]
        console.log(str[0][0])
        names= str[0][0][str[1]].name
    }

    return(
        <div>
            <Label htmlFor={name}>{name}</Label>
            <Input
                type={inputType}
                name={names}
                value={value}
                required={required}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default SubSectionInput

// introduction.text
// faq[0].question
//      tipps[0][cta] . title
//      ------------    -----
//      sectionName     name
