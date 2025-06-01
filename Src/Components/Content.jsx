import './style.css'

import { useState, useEffect } from 'react';
import Notes from './Notes';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

export default function Content(){

    const [note, setNote] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    async function getNotes(){
        const { data } = await supabase.from("notes").select();
        
        setNotes(data);

    }

    return(
        <>
            <ul>
                {note.map((nt) => (
                    <li>{nt.title}</li>
                ))}
            </ul>
            <div id="SearchNav" className="SearchNav d-flex align-items-center border px-2 py-2 rounded mt-3">
                <i className='fa fa-search px-2'></i>
                <input type="search" className="pt-1 px-2 border-0 w-100 bg-transparent" placeHolder="Search" autoFocus spellCheck='false' />
            </div>
            <div id="ContentNav" className="ContentNav w-100 mt-4 d-flex gap-3 flex-wrap">
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
                <Notes />
            </div>
        </>
    );
}