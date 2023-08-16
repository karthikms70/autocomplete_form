import axios from "axios"
import { Searchbox } from "./Searchbox"
import { Searchlist } from "./Searchlist"
import { useEffect, useState,useRef} from "react";


const url = "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";



export const Search = () =>{
    const inputRef = useRef(null);

    const [search,setSearch] = useState("")
    const [searchList,setSearchList] = useState([])
    // const [filteredList, setFilteredList] = useState([]); - for method 1
   
     
    useEffect ( ()=>{
        

        const timeout = setTimeout(()=>{
            if(search){
            fetch()
        }
        },300)

        return () =>{
            clearTimeout(timeout)
        }
        },[search])

     
   
   
   
    const handleChange =(e) =>{
        setSearch(e.target.value)
        // fetch(e.target.value)                method 2  - query also change
       
       
        // const newFilteredItems = searchList.filter(data => {
        //         return data.title.toLowerCase().includes(e.target.value);
        //       });                                                                        method 1 - setFilteredList used
        //       setFilteredList(newFilteredItems); 

        
    }

    const clear =()=>{
        
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(0, 0);
          }
          setSearch("")
          setSearchList([])
    }


     
    const fetch = async () => {
        const response =  await axios(url ,{
            params :{
                query : search,
            },
        });
        
        setSearchList(response.data.results) 
        // setFilteredList(response.data.results) 
    }

   
    
    
    return (
        
        <>
        <Searchbox search = {search} handleChange={handleChange} clear={clear} inputRef={inputRef}/>
        <Searchlist searchLis={searchList} />
        </>
    )
    } 