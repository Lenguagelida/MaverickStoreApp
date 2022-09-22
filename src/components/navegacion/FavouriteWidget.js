import React from "react";

const FavouriteWidget = () => {
	return (
		<button className="btn btn-outline-light mx-1">
			<i class="bi bi-star-fill mx-1"></i>
			Mis Favoritos
			<span className="badge bg-dark text-white ms-1 rounded-pill">
				0
			</span>
		</button>
	);
};

export default FavouriteWidget;
