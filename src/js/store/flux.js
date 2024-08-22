const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// Personajes: () => {
			// 	fetch("https://www.swapi.tech/api/people")
			// 		.then(res => res.json())
			// 		.then(data => setStore({...getStore(), personajes: data.results}))
			// 		.catch(err => console.error(err))
			// },
		
			getPersonajes: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people`)
					const data = await response.json();
					setStore({...getStore(), personajes: data.results});
					
				} catch(error) {
					console.error("Error del argumento", error);
				}
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
