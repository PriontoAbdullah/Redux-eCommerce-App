import currencyFormatter from 'currency-formatter';
import React, { useEffect, useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import banner from '../images/custom-banner.jpg';

const ProductDetails = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { id } = useParams();
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.ProductReducer);
	const [ quantity, setQuantity ] = useState(1);
	const [ size, setSize ] = useState('L');
	const [ isSuccess, setIsSuccess ] = useState(false);

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

	if (isSuccess) {
		setTimeout(() => setIsSuccess(false), 1500);
	}

	const finalCartHandler = () => {
		dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, size } });
		setIsSuccess(true);
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6">
					<div className="details-image">
						<img src={`/images/${product.image}`} alt="product" />
					</div>
				</div>
				<div className="col-md-6">
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

						{isSuccess && (
							<span className="ml-5 success-mgs text-success">
								<FaCheckCircle /> Item added to Cart
							</span>
						)}
					</div>

					<div className="details-info my-4">
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
							<button className="btn-default ml-4" onClick={finalCartHandler}>
								Add to cart
							</button>
						</div>
					</div>

					<div className="my-4">
						<img src={banner} alt="banner" width="100%" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
