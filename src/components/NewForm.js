import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'

function NewForm({modalProps, formStyle, setOpen}) {

  const {selectedPark, dropdownOptions, optionsArr, textInputs, msg, endangered, commonAnimals, allHikes} = modalProps
  const [formValues, setFormValues] = useState({})
  const hikeUrl = `http://localhost:3004/allHikes`
  const commonUrl= `http://localhost:3004/bioDiv`
  const rareUrl = `http://localhost:3004/endangered`
  const newEntry= ({
    ...formValues,
    parkId: selectedPark.id,
    park: selectedPark.title
  })

  function fetchCall(url, list, setter){
    fetch(url ,{
      method:'POST',
      header:{
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify()
    })
    .then((respn) => respn.json())
    .then ((newItem) => {
      setter([...list, newItem])
      setFormValues({})
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setOpen(false)
    console.log('new entry', newEntry)
    if (msg === 'hike'){
      console.log({
        url: hikeUrl,
        list: allHikes
      })
    } else if (formValues.abundance.includes('Endangered') || formValues.abundance.includes('Threatened')){
      console.log({
        url: rareUrl,
        list: endangered
      })
    }else {
      console.log({
        url: commonUrl,
        list: commonAnimals
      })
    }
  }


    const allTextInputs= textInputs.map((textInput) => {
         return <Form.Field fluid style={{width: '100%'}}>
          <label>{textInput.formName} </label>
          <input 
            name={textInput.dataName} 
            placeholder={textInput.formName} 
            onChange={(e) => 
              setFormValues((prevData) => ({
                ...prevData,
                [textInput.dataName]: e.target.value
              }))} 
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
                    onChange={(e, {value}) => 
                      setFormValues((prevData) => ({
                        ...prevData,
                        [dropdown.dataName]:value
                      }))}
                />

    })
    return (
        <Form style={formStyle} onSubmit={handleSubmit}>
          <Form.Group 
          widths='equal'
          >
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