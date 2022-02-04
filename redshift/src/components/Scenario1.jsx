import Nav from "./Nav.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { selectOptions } from "@testing-library/user-event/dist/select-options";
// const BasicData = ({basic.name, DOB, postcode, postcode, nationality,}) => {

const Scenario1 = () => {
  const center = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };


  let citizenID = useParams().id;
  console.log(citizenID);

  useEffect (() => {
    loadPage();
  }, []);

  function loadPage() {
    const queryPerson = {
      citizenID: citizenID
    };
    axios.get(`http://localhost:8080/queryPerson/byID/`, {params: queryPerson})
    .then((response) => {
         console.log(response);
    }).catch((error) => {
        console.log(error);
    })
  }
  

  




  return (
    <div>
      <Nav></Nav>
      <h1> Scenario 1 </h1>
      <body>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Basic Information</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Known Associates</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Financial</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Past Whereabouts</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Call Records</h1>
            <p>
              Lorem Ipsum
            </p>
            
        {/* MapContainer is for Leaflet */}


        <h2>HTML Iframes for information</h2>


        <h2>tets {citizenID}</h2>
        
       

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
          </div>
        </div>
      </div>

        <iframe src="" title="Iframe"></iframe>
      </body>
    </div>
  );
};

export default Scenario1;
