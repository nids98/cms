import * as Yup from 'yup'
import { validateSections  } from './ValidateSections'

export const validateTemplate = sections => {
    sections.map(section => {
        Yup.object().shape({
            section: validateSections(section.fields)
        })
    })

}