
export default function Products({editItem, products, deleteItem}) {
  return (
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
  )
}

  
  
  

