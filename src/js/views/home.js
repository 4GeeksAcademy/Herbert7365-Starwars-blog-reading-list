import React from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { ReadMore } from "./readMore";
import { Detalles } from "../views/Detalles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Cards/>
		<ReadMore/>
		<Detalles/>
		

		<p>hola herbert</p>
	</div>
);
