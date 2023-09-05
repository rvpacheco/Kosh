const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			favorites :[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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
			},
			markFavorite:(elemenId,name)=>{
				let {favorites} = getStore()
				//verificando si el favorito exista
				if(!favorites.some(person=>person.id==elemenId)){
					// en caso de que no exista, se agg...
					setStore({favorites:[...favorites,{id:elemenId, name}]})
				}else{
					//en caso que si se elimina
					let index=favorites.findIndex(person=>person.id==elemenId)
					let newFavorites=[...favorites]
					newFavorites.splice(index,1)
					setStore({favorites:newFavorites})
				}
			}
		}
	};
};

export default getState;
