import React from 'react'
import { Form } from 'semantic-ui-react'

function NewForm({textInputs, dropdownOptions, optionsArr}) {
    console.log(textInputs, dropdownOptions)

    const allTextInputs= textInputs.map((textInput) => {
         return <><Form.Input fluid placeholder={textInput.formName} />
         <br/>
         </>
    })

    const allDropDownOptions = dropdownOptions.map((dropdown) => {
      const options= optionsArr(dropdown.options)
         return <><Form.Select
                    fluid
                    value={dropdown.dataName}
                    options={options}
                    placeholder={dropdown.formName}
                />
                <br/>
                </>
    })
    console.log(allTextInputs, allDropDownOptions)

    return (
        <Form>
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