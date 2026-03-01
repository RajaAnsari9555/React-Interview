import React ,{useState} from 'react'

const App = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {open && (<div style={{position: "fixed",top:0,left:0,width: "100%",height: "100%",background: "rgba(0,0,0,0.5)"}}>
        <div style={{
              background: "red",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center"
            }}>

              <button onClick={() => setOpen(false)}>close</button>
            </div>
      </div>)}

      
    </div>
  )
}

export default App