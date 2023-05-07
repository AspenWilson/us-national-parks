import React, {useState} from 'react'
import NewForm from './NewForm'
import { Modal, Image, Button } from 'semantic-ui-react'

function ModalPopout({modalProps}) {

    const {selectedPark, dropdownOptions, optionsArr, textInputs, msg} = modalProps
    const [open, setOpen] = useState(false)
  return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button>Add a {msg}!</Button>}
  >
    <Modal.Header>Add a {msg} to {selectedPark.title}</Modal.Header>
    <Modal.Content image>
      <Image size='medium' src={selectedPark.imgUrl} wrapped />
      <Modal.Description>
        <NewForm dropdownOptions={dropdownOptions} textInputs={textInputs} optionsArr={optionsArr}/>
        <p>Ready to Submit?</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='black' onClick={() => setOpen(false)}>
        Cancel adding this {msg}
      </Button>
      <Button
        onClick={() => setOpen(false)}
        positive
      >Add this {msg}</Button>
    </Modal.Actions>
  </Modal>
  )
}

export default ModalPopout
