
import './TaskHeader.scss';

const TaskHeader = () => {

    const handleClick = () => {
        // reveal left menu
        /*
            
            
        */
    };
    
    return (
        <>
            <nav id='nav'>
                <div id='nav-content'>
                    <div id='left-control'>
                        <i className="bi bi-list nav-icon" onClick={handleClick}></i>
                        <i className="bi bi-house-door nav-icon"></i>
                    </div>

                    <div id='search-bar'>
                        <label htmlFor="search-input">
                            <i className="bi bi-search"></i>
                        </label>
                        <input type="text" id='search-input' />
                    </div>

                    <div id='right-control'>
                        <i className='bi bi-bell nav-icon'></i>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default TaskHeader;