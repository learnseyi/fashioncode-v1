import {useState,useEffect} from 'react'

export const useFetch = (ur)=> {
    const [data,setData] = useState([]);

       
    useEffect(()=>{
        let mounted = true
        const getData= async function(){
            try{
                const res = await fetch(ur);
                const data = await res.json();
               mounted &&  setData(data);
            }catch(e){
                alert(e.message)
            }
        }
        getData()
    },[ur])
    return {
        data,
        mounted: false
    }
}


