import './style.css'

export default function Sidebar(){
    return(
        <div id='SideBar' className='SideBar d-flex flex-column align-items-center'>
            <h1 className='py-3 text-center'>NoteIn</h1>
            <button className='btn rounded-circle text-white mt-3' style={{ backgroundColor: '#151515' }}>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    );
}