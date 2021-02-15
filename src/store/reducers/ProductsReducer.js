const initState = {
	products: [
		{
			id: 1,
			name: 'Man t-shirt summer season',
			image: '1.jpg',
			price: 20,
			discount: 2,
			discountPrice: 20 - 2 / 1000 * 20,
			size: 'L',
			quantity: 1,
			desc:
				'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.'
		},
		{
			id: 2,
			name: 'Woman winter jacket',
			image: '2.jpg',
			price: 30,
			discount: 3,
			discountPrice: 30 - 3 / 1000 * 30,
			size: 'L',
			quantity: 1,
			desc:
				'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.'
		},
		{
			id: 3,
			name: 'Man trouser for all season',
			image: '3.jpg',
			price: 15,
			discount: 2,
			discountPrice: 15 - 2 / 1000 * 15,
			size: 'L',
			quantity: 1,
			desc:
				'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.'
		},
		{
			id: 4,
			name: 'Shoes for all season',
			image: '4.jpg',
			price: 40,
			discount: 4,
			discountPrice: 40 - 4 / 1000 * 40,
			size: 'L',
			quantity: 1,
			desc:
				'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.'
		},
		{
			id: 5,
			name: 'FeMan soot for summer',
			image: '5.jpg',
			price: 20,
			discount: 2,
			discountPrice: 20 - 2 / 1000 * 20,
			size: 'L',
			quantity: 1,
			desc:
				'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.'
		},
		{
			id: 6,
			name: 'Man jeans for summer',
			image: '6.jpg',
			price: 55,
			discount: 3,
			discountPrice: 55 - 3 / 1000 * 55,
			size: 'L',
			quantity: 1,
			desc:
				'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.'
		},
		{
			id: 7,
			name: 'Man trouser for all seasons',
			image: '7.jpg',
			price: 35,
			discount: 2,
			discountPrice: 35 - 2 / 100 * 35,
			size: 'L',
			quantity: 1,
			desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?'
		},
		{
			id: 8,
			name: 'Man jacket for winter',
			image: '8.jpg',
			price: 40,
			discount: 7,
			discountPrice: 40 - 7 / 100 * 40,
			size: 'L',
			quantity: 1,
			desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?'
		},
		{
			id: 9,
			name: 'Man jacket for all season',
			image: '9.jpg',
			price: 75,
			discount: 4,
			discountPrice: 75 - 4 / 100 * 75,
			size: 'L',
			quantity: 1,
			desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?'
		},
		{
			id: 10,
			name: 'Man winter jacket',
			image: '10.jpg',
			price: 65,
			discount: 3,
			discountPrice: 65 - 3 / 100 * 65,
			size: 'L',
			quantity: 1,
			desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?'
		},
		{
			id: 11,
			name: 'Women summer skirt',
			image: '11.jpg',
			price: 45,
			discount: 3,
			discountPrice: 45 - 3 / 100 * 45,
			size: 'L',
			quantity: 1,
			desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?'
		},
		{
			id: 12,
			name: 'Women winter jacket',
			image: '12.jpg',
			price: 35,
			discount: 3,
			discountPrice: 35 - 3 / 100 * 35,
			size: 'L',
			quantity: 1,
			desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?'
		}
	],

	product: {}
};

const ProductsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'PRODUCT':
			return { ...state, product: state.products.find((product) => product.id === parseInt(action.id)) };

		default:
			return state;
	}
};

export default ProductsReducer;
