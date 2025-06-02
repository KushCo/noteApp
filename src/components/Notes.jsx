import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';

export default function Notes(){
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const supabaseURL = "https://ssqwkqgtbblysludodcf.supabase.co";
    const supabaseANONKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcXdrcWd0YmJseXNsdWRvZGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3ODAyNjksImV4cCI6MjA2NDM1NjI2OX0.ZK60Fakubndx2NyKUfVdi1S7hAn5kwfYyBplz5fYDTs";
    
    const supabase = createClient(supabaseURL, supabaseANONKey);

    useEffect(() => {
        const fetchData = async() => {
            const { data, error } = await supabase.from('notes').select('*');

            if(error) {
                console.error("Error fetching data");
            } else {
                setData(data);
            }

            setLoading(false);
        }
        fetchData();
    }, []);

    if(loading) return <p>Loading...</p>;

    return(
        <>
     
        <ul>
            {data.map((dat) => (
                <li key={dat.id}>{dat.title}</li>
            ))}
        </ul>

        <div id="Notes" className="Notes position-relative p-3 rounded">
            <div className="cardNoteTitle">
                <h1>Good Notes</h1>
            </div>
            <p className="cardNoteDescription pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fuga debitis tempora magnam nobis, corporis quaerat neque voluptate ipsam repellat!</p>
            <div className="cardNoteOptionWrapper d-flex justify-content-between align-items-center">
                <h4 className="cardNoteDate pt-3">May 31, 2025</h4>
                <div className="cardNoteEdit rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa fa-edit"></i>
                </div>  
            </div>
            {/* <div className="cardNoteStar position-absolute rounded-circle d-flex align-items-center justify-content-center">
                <i className="fa fa-star"></i>
            </div> */}
        </div>
        </>
    );
}