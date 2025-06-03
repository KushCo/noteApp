export default function CreateNotes(){
    return(
        <>
            <input type="text" className="title" />
            <input type="text" className="description" />
            <div className="selectColors">
                <div className="colors colorBlue"></div>
                <div className="colors colorRed"></div>
                <div className="colors colorOrange"></div>
            </div>
        </>
    );
}