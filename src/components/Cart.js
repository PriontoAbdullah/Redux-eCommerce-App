import currencyFormatter from 'currency-formatter';
import React from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
	const { products } = useSelector((state) => state.CartReducer);
	const dispatch = useDispatch();

	const handleSizeChange = (status, id) => {
		dispatch({ type: 'SIZE', payload: {status, id} });
	};

	return (
		<div className="cart mx-5">
			<h3>Your Cart</h3>
			{products.length > 0 ? (
				<div className="row">
					<div className="col-md-9 mb-4">
						<div className="cart-heading">
							<div className="row">
								<div className="col-md-2">Picture </div>
								<div className="col-md-3">Name </div>
								<div className="col-md-1">Price </div>
								<div className="col-md-2 text-center">Quantity </div>
								<div className="col-md-1">Size</div>
								<div className="col-md-2 text-center">Total Price</div>
								<div className="col-md-1">Remove </div>
							</div>
						</div>
						{products.map((product) => (
							<div className="row mt-2 align-items-center" key={product.id}>
								<div className="col-md-2">
									<div className="cart-image">
										<img src={`/images/${product.image}`} alt="product" />
									</div>
								</div>
								<div className="col-md-3">
									<div className="cart-name">{product.name}</div>
								</div>
								<div className="col-md-1 ">
									<div className="cart-price">
										{currencyFormatter.format(product.discountPrice, { code: 'USD' })}
									</div>
								</div>

								<div className="col-md-2">
									<div className="details-info ">
										<div className="details-incDec">
											<span
												className="dec-cart"
												onClick={() => dispatch({ type: 'DEC', payload: product.id })}
											>
												<BsDash />
											</span>
											<span className="quantity-cart">{product.quantity}</span>
											<span
												className="inc-cart"
												onClick={() => dispatch({ type: 'INC', payload: product.id })}
											>
												<BsPlus />
											</span>
										</div>
									</div>
								</div>
								<div className="col-md-1">
									<select
										onChange={(e) => handleSizeChange(e.target.value, product.id)}
										defaultValue={product.size}
									>
										<option>S</option>
										<option>M</option>
										<option>L</option>
										<option>XL</option>
									</select>
								</div>

								<div className="col-md-2 pl-4">
									<div className="cart-total">
										{currencyFormatter.format(product.discountPrice * product.quantity, {
											code: 'USD'
										})}
									</div>
								</div>
								<div className="col-md-1">
									<div
										className="cart-remove"
										onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}
									>
										<MdRemoveShoppingCart />
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="col-md-3">Summery</div>
				</div>
			) : (
				'Your cart is empty!'
			)}
		</div>
	);
};

export default Cart;
