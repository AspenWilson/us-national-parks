import React from 'react'
import { Form } from 'semantic-ui-react'

function NewForm({textInputs, dropdownOptions, optionsArr, formStyle}) {

    const allTextInputs= textInputs.map((textInput) => {
         return <Form.Field fluid style={{width: '100%'}}>
          <label>{textInput.formName} </label>
          <input placeholder={textInput.formName}/>
          </Form.Field>

    })

    const allDropDownOptions = dropdownOptions.map((dropdown) => {
      const options= optionsArr(dropdown.options)
         return <Form.Select
                    fluid
                    key={dropdown.dataName}
                    value={dropdown.dataName}
                    options={options}
                    placeholder={dropdown.formName}
                />

    })
    return (
        <Form style={formStyle}>
          <Form.Group 
          widths='equal'
          >
            {allTextInputs}
            </Form.Group>
            <Form.Group>
            {allDropDownOptions}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
  )
}

export default NewForm