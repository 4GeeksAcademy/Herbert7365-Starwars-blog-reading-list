import React, {useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigate } from "react-router-dom";
import { Context } from "../store/appContext";
export const Cards = (props) => {

    const {store, actions} = useContext(Context); 

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('')
    }

    useEffect(() => {
        actions.getPersonajes();

    }, [])

    console.log(store.personajes)

	return (
        <div className="relative flex items-center">

            <div id="slider" className="navbar navbar-light bg-light mb-3 overflow-x-scroll whitespace-nowrap scroll-smooth scroll-container " style={{ overflowX: "auto" }} >
                {
                    store.personajes.map((item, index)=> {
                        
                        return (
                            <>
                            <div key ={index} className="card inline-block m-5" style={{width: '250px'}} >
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"></p>
                                <button className="btn btn-primary" onClick={onClickHandler}>Learn More</button>
                            </div>
                            </div> 
                            </>
                        )
                    }
                    )
                }
            </div>
        </div>
	);
};

