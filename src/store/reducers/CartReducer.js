const initState = {
	products: [],
	totalPrice: 0,
	totalQuantity: 0
};

const CartReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const { product, quantity, size } = action.payload;
			const checkProduct = state.products.find((pd) => pd.id === product.id);

			if (checkProduct) {
				return state;
			} else {
				const TotalPrice = state.totalPrice + product.discountPrice * quantity;
				const TotalQuantity = state.totalQuantity + quantity;

				product.quantity = quantity;
				product.size = size;
				return {
					...state,
					products: [ ...state.products, product ],
					totalPrice: TotalPrice,
					totalQuantity: TotalQuantity
				};
			}

		default:
			return state;
	}
};

export default CartReducer;
