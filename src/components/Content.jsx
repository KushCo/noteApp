import './style.css'

import supabase from "../supabaseClient";
import { useState, useEffect } from "react";
import Notes from './Notes';

export default function Content(){    
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const supabaseConfig = async () => {
            const { data, error } = await supabase.from('notes').select('*');
            if(error){
                console.error(`Something went wrong: ${error}`);
            } else{
                setData(data);
            }
        }
        supabaseConfig();
    }, []); 
    const keydown = (event) => {
        console.log(event.key)
    }

    return(
        <>
            <div id="SearchNav" className="SearchNav d-flex align-items-center border px-2 py-2 rounded mt-3">
                <i className='fa fa-search px-2'></i>
                <input type="search" onKeyPress={keydown} className="pt-1 px-2 border-0 w-100 bg-transparent" placeholder="Search" autoFocus spellCheck='false' />
            </div>
            <div id="ContentNav" className="ContentNav w-100 mt-4 d-flex gap-3 flex-wrap">
                {data.map((item) => (
                    <Notes key={item.id}
                    {...item}
                    date={new Date(item.created_at).toLocaleString()}
                    />    
                ))}
            </div>
        </>
    );
}