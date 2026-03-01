import React from 'react'

const Profile = ({data ,setData}) => {
    const {name , email , age} = data;
    const handleChange = (e ,item)=> {
        setData((prevState) => ({
            ...prevState,
            [item]:e.target.value,
        }))
    }
  return (
    <div>
        <div>
            <label>Name </label>
            <input className=' bg-red-500' type="text" value={name} onChange={(e) => handleChange(e ,"name")} />
            <label >age </label>
            <input className=' bg-red-500'  type="Number" value={age} onChange={(e) => handleChange(e ,"age")} />
            <label  >email </label>
            <input className=' bg-red-500' type="email" value={email} onChange={(e) => handleChange(e ,"email")} />
        </div>
    </div>
  )
}

export default Profile