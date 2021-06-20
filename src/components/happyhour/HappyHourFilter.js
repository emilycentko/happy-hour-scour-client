import React, { useState } from "react"
import MultiSelect from "react-multi-select-component"

export const Filter = () => {
    const options = [
      { label: "Patio", value: `${happyhour.business.patio}` },
      { label: "Trivia", value: `${happyhour.business.trivia}` },
      { label: "Drinks", value: `${happyhour.special_type}` },
      { label: "Food", value: `${happyhour.special_type}` },
      { label: "Drinks & Food", value: `${happyhour.special_type}` },
    ]
  
    const [selected, setSelected] = useState([]);
  
    return (
      <div>
        <h4>Filter</h4>
        <pre>{JSON.stringify(selected)}</pre>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>
    )
  }