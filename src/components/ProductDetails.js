import currencyFormatter from 'currency-formatter';
import React, { useEffect, useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { id } = useParams();
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.ProductReducer);
	const [ quantity, setQuantity ] = useState(1);
	const [ size, setSize ] = useState('L');

	useEffect(
		() => {
			dispatch({ type: 'PRODUCT', id });
		},
		[ id, dispatch ]
	);

	const decQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleStatusChange = (status) => {
		setSize(status);
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-6">
					<div className="details-image">
						<img src={`/images/${product.image}`} alt="" />
					</div>
				</div>
				<div className="col-6">
					<div className="details-name">{product.name}</div>
					<div className="details-p">
						{product.desc}
						{product.desc}
					</div>

					<div className="details-prices my-3">
						<span className="details-actaul">
							{currencyFormatter.format(product.price, { code: 'USD' })}
						</span>
						<span className="details-discount">
							{currencyFormatter.format(product.discountPrice, { code: 'USD' })}
						</span>
					</div>

					<div className="details-info mt-4">
						<div className="details-incDec">
							<span className="dec" onClick={decQuantity}>
								<BsDash />
							</span>
							<span className="quantity">{quantity}</span>
							<span className="inc" onClick={() => setQuantity(quantity + 1)}>
								<BsPlus />
							</span>

							<button className="btn ml-3" disabled>
								Size
							</button>
							<select onChange={(e) => handleStatusChange(e.target.value)} defaultValue={size}>
								<option>S</option>
								<option>M</option>
								<option>L</option>
								<option>XL</option>
							</select>
							<button
								className="btn-default ml-4"
								onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, size } })}
							>
								add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
