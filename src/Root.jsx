import {Outlet, Link} from "react-router-dom";

function Root () {
    return(
        <div>
            <nav style={{display:"flex", gap: "10px", marginBottom:"10px"}}>
                <Link to ="/">Home</Link>
                <Link to ="/favorites">Favorites</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Root;