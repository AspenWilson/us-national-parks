import React from 'react'

function Sources() {

    const sources= ([
        {id:1, source:`Biodiversity in National Parks. (2017, January 20). Kaggle. https://www.kaggle.com/datasets/nationalparkservice/park-biodiversity?resource=download`}, 
        {id:2, source:`data.world. (n.d.). data.world. https://data.world/kevinnayar/us-national-parks/workspace/file?filename=data.json`},
        {id:3, source:`Jversteegh, & Olivier, J. (2023). The Best Hike in Every National Park. Outside Online. https://www.outsideonline.com/adventure-travel/national-parks/the-best-hike-in-every-national-park/`}, 
        {id:4, source:`NPS - Trails - Web Mercator. (n.d.). https://public-nps.opendata.arcgis.com/datasets/nps-trails-web-mercator/api`}
    ])

    const allSources= sources.map((source) => {
        return <li key={source.id}>{source.source}</li>
    })

  return (
    <div><small>
      <h5>Project Sources</h5>
      <ul>{allSources}</ul>
      </small>
    </div>
  )
}

export default Sources
