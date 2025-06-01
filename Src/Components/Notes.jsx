export default function Notes(){
    return(
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
    );
}