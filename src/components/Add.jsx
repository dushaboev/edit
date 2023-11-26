

export default function Add({edit, pname, setPname, price, setPrice, addProduct, editItem, products, deleteItem}) {
  return (
    <div>
      <form className="form" action="" onSubmit={addProduct}>
        <input 
        type="text" 
        name="" 
        id=""
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        />
        <input 
        type="text" 
        name="" 
        id="" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />  
       <button className="btn2" >
        {edit ? 'edit' : 'add'}
       </button>
        </form>
        <div>
      {products.map((item) => {
        return (
          <div className="delett" key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <button className="btn4" onClick={() => deleteItem(item.id)}>delete</button>
            <button className="btn5"  onClick={() => editItem(item.id)}>edit</button>
            </div>
          )
      })}
      </div>
        </div>
  )
}
