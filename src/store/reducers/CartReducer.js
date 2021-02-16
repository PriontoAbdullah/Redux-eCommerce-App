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

		case 'INC':
			const findIncProduct = state.products.find((product) => product.id === action.payload);
			const findIncProductIndex = state.products.findIndex((product) => product.id === action.payload);

			findIncProduct.quantity += 1;
			state.products[findIncProductIndex] = findIncProduct;

			return {
				...state,
				totalPrice: state.totalPrice + findIncProduct.discountPrice,
				totalQuantity: state.totalQuantity + 1
			};

		case 'DEC':
			const findDexProduct = state.products.find((product) => product.id === action.payload);
			const findDecProductIndex = state.products.findIndex((product) => product.id === action.payload);

			if (findDexProduct.quantity > 1) {
				findDexProduct.quantity -= 1;
				state.products[findDecProductIndex] = findDexProduct;

				return {
					...state,
					totalPrice: state.totalPrice - findDexProduct.discountPrice,
					totalQuantity: state.totalQuantity - 1
				};
			} else {
				return state;
			}

		case 'SIZE':
			const findSizeProduct = state.products.find((product) => product.id === action.payload.id);
			const findSizeProductIndex = state.products.findIndex((product) => product.id === action.payload.id);
			console.log(action.payload.id);
			console.log(action.payload.status);
			findSizeProduct.size = action.payload.status;
			state.products[findSizeProductIndex] = findSizeProduct;

			return {
				...state
			};

		case 'REMOVE':
			const findRemoveProduct = state.products.find((product) => product.id === action.payload);
			const filterProduct = state.products.filter((product) => product.id !== action.payload);

			return {
				...state,
				products: filterProduct,
				totalPrice: state.totalPrice - findRemoveProduct.discountPrice * findRemoveProduct.quantity,
				totalQuantity: state.totalQuantity - findRemoveProduct.quantity
			};

		case 'CHECKOUT':
			return {
				...state,
				products: [],
				totalPrice: 0,
				totalQuantity: 0
			};

		default:
			return state;
	}
};

export default CartReducer;
