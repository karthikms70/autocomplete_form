import React from "react"
import './searchlist.css'

export const Searchlist = ({searchLis}) =>{

    return (
        <>
        <div  className="ima">
            {searchLis.map((data)=>(
               
                    <div key={data.id} className="ma">
                    
                        <img 
                        width="50px"
                        height="50px"
                        style={{objectFit: "contain"}}
                        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} /> 
                    
                        <p>{data.title}</p>
                     
                     </div>
                    
              
               
               
            ))}
          </div>
        </>
    )
}