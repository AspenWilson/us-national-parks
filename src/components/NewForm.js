import React from 'react'
import { Form } from 'semantic-ui-react'

function NewForm({formStyle, setOpen, setFormValues, formValues, ...modalProps}) {

  const {dropdownOptions, optionsArr, textInputs,handleNewItemSubmit, handleTextChange, handleDropDownChange} = {...modalProps}


  function handleSubmit(e) {
    e.preventDefault()
    setOpen(false)
    handleNewItemSubmit()
  }


    const allTextInputs= textInputs.map((textInput) => {
         return <Form.Field style={{width: '100%'}} key={textInput.dataName}>
                  <label>{textInput.formName} </label>
                  <input
                    fluid 
                    name={textInput.dataName} 
                    placeholder={textInput.formName} 
                    onChange={(e) => handleTextChange(e, textInput.dataName)}
                  />
                </Form.Field>
    })

    const allDropDownOptions = dropdownOptions.map((dropdown) => {
      const options= optionsArr(dropdown.options)
         return <Form.Select
                    fluid
                    key={dropdown.dataName}
                    value={formValues[dropdown.dataName] || ''}
                    options={options}
                    placeholder={dropdown.formName}
                    onChange={(e,{value}) => handleDropDownChange(e, dropdown.dataName, {value})}
                />
      })
    
  return (
    <Form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
      <Form.Group widths='equal'>
        {allTextInputs}
      </Form.Group>
      <Form.Group>
        {allDropDownOptions}
      </Form.Group>
      <Form.Button fluid>Submit</Form.Button>
    </Form>
  )
}

export default NewForm