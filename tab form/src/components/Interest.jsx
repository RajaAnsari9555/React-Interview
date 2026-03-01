import React from 'react'

const Interest = (data ,setData) => {
    const {Interest} = data;
  return (
    <div>
        <div>
            <label >
                <input type="checkbox"  name='sex'  />
                sex
            </label>
             <label >
                <input type="checkbox"  name='sex'  />
                music
            </label>
             <label >
                <input type="checkbox"  name='sex'  />
                coding
            </label>
        </div>
    </div>
  )
}

export default Interest