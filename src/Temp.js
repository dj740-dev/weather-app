import React, { useEffect, useState } from 'react';
import './temp.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=99660a11035b42f1a36e85954d188c44`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className="container-fluid">
                <div className='row py-5'>
                    <h1 style={{ color: "white" }}>Search Live Weather</h1>
                </div>
                <div className="row justify-content-center mt-4" >
                    <div className='col-md-6 p-5' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", background: "rgba(219, 241, 206, 0.6)", borderRadius: "2rem" }}>
                        <div className="inputData">
                            <input
                                type="search"
                                value={search}
                                className='inputField form-control mt-4'
                                onChange={(event) => {
                                    console.log(event.target.value);
                                    setSearch(event.target.value);
                                }}
                            />
                        </div>
                        {!city ? (<h4 className='error_msg text-white'>Enter city name</h4>) :
                            (<div className="info text-white">
                                <h3 className="location mt-5">
                                    <i className="fa-solid fa-street-view"></i>{search}
                                </h3>
                                <h2 className='temp'>{city.temp}°C</h2>
                                <h5 className="tempmin_max">
                                    Min : {city.temp_min}°C | Max : {city.temp_max}°C
                                </h5>

                            </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tempapp;
