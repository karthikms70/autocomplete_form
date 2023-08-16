import './searchbox.css'


export const Searchbox = ({handleChange, search , clear,inputRef}) =>{
  
    
    return (
        <>
        
        <div className="inp-div">
                <p className='para'>Search Your Movies</p>
                <input className='inp' type="text" value={search} onChange={handleChange} ref={inputRef}  placeholder='Search here..'/>
                {search ? 
                    <button onClick={clear}>           
                        <img src="https://png.pngtree.com/png-vector/20190419/ourlarge/pngtree-vector-cross-icon-png-image_956622.jpg"/>
                    </button> 
                    :

                    <button >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pCec1KQkaT_bFezHzj68S1ytUib2x68ceg&usqp=CAU"/>
                    </button>
                }                
        </div>
        </>
    )
}

