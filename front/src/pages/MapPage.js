import React, {useState, useEffect} from "react";

import Navbar from "../component/navbar";
import SimpleMap from "../component/map";

function MapPage() {
    return (
        <React.Fragment>
            <Navbar/>
            <SimpleMap/>
        </React.Fragment>
    );
}

export default MapPage;
