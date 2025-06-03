export default function Notes(props){
    return(
        <>
        <div id="Notes" className="Notes position-relative p-3 rounded" style={{background: props.color}}>
            <h1 className="cardNoteTitle">{props.title}</h1>
            <p className="cardNoteDescription pt-3">{props.description}</p>
            <div className="cardNoteOptionWrapper d-flex justify-content-between align-items-center">
                <h4 className="cardNoteDate pt-3">{props.date.slice(0,props.date.indexOf(','))}</h4>
                <div className="cardNoteEdit rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa fa-edit"></i>
                </div>  
            </div>
            {props.bookmarks == true &&
                <div className="cardNoteStar position-absolute rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa fa-star"></i>
                </div>
            }
        </div>
        </>
    );
}