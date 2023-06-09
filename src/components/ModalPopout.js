import React, {useState} from 'react'
import NewForm from './NewForm'
import { Modal, Image, Button } from 'semantic-ui-react'

function ModalPopout({setFormValues, formValues, ...modalProps}) {

    const {selectedPark, dropdownOptions, optionsArr, textInputs, msg, handleNewItemSubmit, handleTextChange, handleDropDownChange} = {...modalProps}
    const [open, setOpen] = useState(false)
    const modalStyle = {display: 'flex', alignItems: 'stretch'}
    const formStyle = {height: '100%', width: '100%', display: 'flex'}

  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='large'
        style={modalStyle}
        trigger={<Button>Add {msg}!</Button>}
    >
    <Modal.Header>Add {msg} to {selectedPark.title}</Modal.Header>
    <Modal.Content image>
      <Image size='medium' src={selectedPark.imgUrl} wrapped />
      <Modal.Description>
        <NewForm 
            {...modalProps}
            style={formStyle}
            setOpen={setOpen}
            setFormValue={setFormValues}
            formValues={formValues}
        />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='black' onClick={() => setOpen(false)}>
        Cancel adding this {msg}
      </Button>
    </Modal.Actions>
  </Modal>
  )
}

export default ModalPopout
