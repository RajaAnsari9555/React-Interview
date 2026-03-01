import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'

import setting from './setting'

const Tabform = () => {
    const [data , setData] = useState({
        name:"MD Raja",
        age:23,
        email:"mdking5003@gmail.com",
        Interest:["sex" ,"roughSex"],
        theme:'dark'



    })
    const [activeTab , setActiveTab] = useState(0);
    const tabs = [{
        name:"Profile",
        component:Profile
    },{

        name:"Interest",
        component:Interest
    },
    {

        name:"Setting",
        component:setting
    }
    ]

    const handlePrevClick = () => {
        setActiveTab((prev) => prev-1)
    }

    const handlenextClick = () => {
        setActiveTab((prev) => prev+1)
    }

    const handleSubmitButton = () => {
        alert("you form is submitted")
    }

const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
    <div className=' flex gap-2 p-5 justify-between'>{tabs.map((t ,index) => (
        <div key={index} onClick={() => setActiveTab(index)} className='flex border-2 '>{t.name}</div>
    ))}
    </div>

    <div className=' w-full h-100 border-2'>
        <ActiveTabComponent data={data} setData={setData}/>
    </div>
     <div >{activeTab > 0 && <button className='mt-5  h-10 w-20 bg-red-500' onClick={handlePrevClick}>prev</button>}</div>
   <div >{activeTab < tabs.length-1 && <button className='mt-5  h-10 w-20 bg-red-500' onClick={handlenextClick}>next</button>}</div>
   <div>{activeTab === tabs.length-1 && <button  className='mt-5  h-10 w-20 bg-green-500' onClick={handleSubmitButton}>submit</button>}</div>  
</div>
    
  )
}

export default Tabform;