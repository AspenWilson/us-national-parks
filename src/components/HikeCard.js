import React, {useState} from 'react'
import { Card, Button, Dropdown, Icon } from 'semantic-ui-react'

function HikeCard({hike, onClickHike, onUnclickHike, optionsArr}) {

    const [isSelected, setIsSelected] = useState(false)
    const [ editMode, setEditMode ] = useState(false)
    const optionsList = ['>1', '1 - 5', '3 - 5', '5 - 10','10 - 50']
    const options = optionsArr(optionsList)
    const [seletedLength, setSelectedLength] = useState('')

    function handleClick () {
        setIsSelected(!isSelected)
        onClickHike(hike)
    }

    function handleUnClick() {
        setIsSelected(!isSelected)
        onUnclickHike(hike)
    }

    function handleEdit(e, id) {
        setEditMode(!editMode)
        setSelectedLength(e.target.innerText)
        console.log(id, seletedLength)
    }

    function handleClickEdit () {
        setEditMode(!editMode)
        console.log(editMode)
    }

  return (
    <div className = 'hike-card'>
        <Card raised>
            <Card.Content as='header' style={{textAlign: 'center'}}><strong>{hike.name}</strong>,<br/>  <small>{hike.distance + ' miles'}</small></Card.Content>
            <Card.Content>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Class:</strong> {hike.class}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Surface:</strong> {hike.surface}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Type:</strong> {hike.type}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Trail Use:</strong> {hike.use}</Card.Description>
                <Card.Description style= {{padding:'5px'}}><strong>Seasonal Use?</strong> {hike.seasonal}</Card.Description>
                {hike.seasonal === "Yes" ? 
                    <Card.Description style= {{padding:'5px'}}><strong>Seasonal Use Details:</strong> {hike.seasonalDetails}</Card.Description> : null
                }
            </Card.Content>
            <Card.Content style={{textAlign: 'center'}}>
            {editMode ? 
                <div className='filter'>
                  <Dropdown 
                  fluid 
                  multiple 
                  sytle={{width: '75%'}}
                  options={options} 
                  placeholder='Choose new length'
                  onChange={(e) => handleEdit(e, hike.id)}
                  />
                  </div> :
                <Button circular icon='edit' className='btn' onClick={handleClickEdit} sytle={{width: '75%'}}><small><Icon name='edit' /> Edit Length</small></Button> 
                }
                </Card.Content>
             <Card.Content extra>
                {isSelected ? 
                <Button basic color='red' onClick={handleUnClick} className='btn'>Remove from Trip</Button> : 
                <Button basic color='green' onClick={handleClick} className='btn'>Add to Trip</Button>}
            </Card.Content>
        </Card>
    </div>
  )
}

export default HikeCard
