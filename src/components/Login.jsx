

export default function Login({name ,setName, email, setEmail, handleSubmit, }) {
    return (
      <div>
          <form className="form2" action="">
              <input
                   type="text" 
                   value={name} 
                   onChange={(e) => setName(e.target.value)}
                   />
              <input
                  type="text" 
                  value={email}  
                   onChange={(e) => setEmail(e.target.value)}
                  />
                      <button className="btn3" onClick={() => handleSubmit()}>
                          login
                      </button>
          </form>
      </div>
    )
  }
  