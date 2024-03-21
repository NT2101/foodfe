import React, { Component, useState, useEffect, forwardRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css'
const App = () => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });

  
  useEffect(() => {
    fetch("https://localhost:7256/api/MobileFoodPermit/Getall")
      .then(response=> response.json())   
      .then((data) => {
        setFood(data);
      })    
  }, []);

  
  const handleSearch = () => {
    fetch(
      `https://localhost:7256/api/MobileFoodPermit/GetFacilityType?FacilityType=${search}`)
      .then(response=> response.json())   
      .then((data) => {
        setFood(data);
      })
    
  };

  const handleSearchInputChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value);
  };
const Style = {
    width: "200px",
    height: "30px",
    fontSize: "20px",
   
  
  };
  const style2 = {
    width: "800px",
    height: "880px",
    
  };

  return (
    <div className="food" >
        <h2>Food Truckss</h2>
      <div className="textbox">
        <input
          type="text"
          value={search}
          onChange={handleSearchInputChange}
          style={Style}
        />
        <button id="search"  onClick={handleSearch}>Search</button>
      </div>
      <div>
        <div className="container">
          <div className="list">           
          {Array.isArray(food) && food.map((food)=>(
            <div key={food.objectid}>
              <h2>{food.applicant}</h2>
              <p>{food.Address}</p>
              <p>{food.FacilityType}</p>
              <p>{food.LocationDescription}</p>              
            </div>
           
          ))}
          </div>
          <div className="map">
          <MapContainer center={mapCenter} zoom={1} style={style2}>
        {/* Sử dụng tile layer từ Mapbox */}
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/655/1583?access_token=pk.eyJ1IjoibnRyYW4yMTAxMDIiLCJhIjoiY2x1MHF2Z20zMGR2dDJxanY3NnM5aTFkaCJ9.Sr4fSaMWY8M_oAghpjiTwQ  "
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          id="mapbox/streets-v11"
          accessToken="pk.eyJ1IjoibnRyYW4yMTAxMDIiLCJhIjoiY2x1MHF2Z20zMGR2dDJxanY3NnM5aTFkaCJ9.Sr4fSaMWY8M_oAghpjiTwQ"
        />
        {food.map(food => (
          <Marker key={food.objectid} position={[food.Latitude, food.Longitude]}>
            <Popup>
           <div>
                {food.applicant} 
              
              </div>
              </Popup>
            
          </Marker>
        ))}
      </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;