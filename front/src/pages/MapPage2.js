import React, {useState, setState} from "react";
import GoogleMapReact from 'google-map-react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
 

export default class Map extends React.Component{
   

    constructor(props) {
        super();
        this.state ={
            lati: 50.605869, 
            lngi: 3.136819,
            localsData: [
                {
                    id:"1",
                    name: "um",
                    latitude: 50.607100,
                    longitude: 3.145745
                },
                {
                    id:"2",
                    name: "dois",
                    latitude: 50.614933,
                    longitude: 3.140231
                }
            ],
            selectedLocalId: null,
        }
    };

    map = () => {
        
        return (
        // Important! Always set the container height explicitly
            <div style={{backgroundColor: "beige",   height: '100vh', width: '100%'  }}>
                <GoogleMapReact
                    onClick={() => { this.setState({selectedLocalId: null})}}
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={{
                    lat: this.state.lati, 
                    lng: this.state.lngi,
                    }}
                    defaultZoom={14}
                >
                {this.state.localsData.map((local) => {
                    return (
                        
                        <LocationOnIcon
                            lat={local.latitude}
                            lng={local.longitude}
                            onClick = {() => {this.setState({selectedLocalId: local.id})}}
                        />
                    )
                })}
                {this.state.localsData.map((local) => {
                    if(this.state.selectedLocalId == local.id){
                        return (
                            <div lat = {local.latitude}
                            lng = {local.longitude}
                            style={{backgroundColor: "white", width:100}}
                            >
                                <p>
                                    {local.name}
                                </p>
                            </div>
                        )
                    }else{
                        return null
                    }
                    
                })}
                <MyLocationIcon
                    lat={this.state.lati}
                    lng={this.state.lngi}
                />
                </GoogleMapReact>
            </div>
        );
    }

    render () {
        return(
            <div style={{backgroundColor: "beige"}}>
                {this.map()}
            </div>
        )
    } 
}

