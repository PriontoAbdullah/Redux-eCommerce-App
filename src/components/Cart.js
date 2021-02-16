import currencyFormatter from 'currency-formatter';
import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { products, totalQuantity, totalPrice } = useSelector((state) => state.CartReducer);
	const dispatch = useDispatch();
	const [ modalIsOpen, setModalIsOpen ] = useState(false);

	const handleSizeChange = (status, id) => {
		dispatch({ type: 'SIZE', payload: { status, id } });
	};

    const checkoutCartHandler = () => {
		dispatch({ type: 'CHECKOUT' });
		setModalIsOpen(true)
	};

	return (
		<div>
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
											<div className="details-incDec cart-incDec">
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
						<div className="col-md-3 summary-col">
							<div className="summary">
								<div className="summary-heading">
									<span className="d-flex justify-content-center">Summary</span>
								</div>
								<div className="summary-details">
									<div className="row mb-3">
										<div className="col-md-6"> Total Items: </div>
										<div className="col-md-6"> {totalQuantity}</div>
									</div>
									<div className="row mb-3">
										<div className="col-md-6"> Total Items: </div>
										<div className="col-md-6">
											{currencyFormatter.format(totalPrice, { code: 'USD' })}
										</div>
									</div>
									<button className="checkout">
										<FaShoppingCart />
										<span className="ml-2" onClick={checkoutCartHandler}>
											Checkout
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h2 className="text-center my-5">
							Your cart is empty! <Link to="/">Keep shopping</Link>
						</h2>
					</div>
				)}
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				id="modal-responsive"
				style={{
					overlay: {
						backgroundColor: 'rgba(130,125,125,0.75)'
					},
					content: {
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						width: '50%',
						transform: 'translate(-50%, -50%)'
					}
				}}
			>
				<div className="px-5 py-3">
					<div className="text-center  my-5">
						<FaCheckCircle className="text-success" style={{ fontSize: '5em' }} />
						<h4 className="mt-4 lead text-success">Your order placed successfully</h4>
						<p className="mt-4 px-3">Thank you for your order!</p>
						<small> This e-commerce application is build for React Redux practice purposes.</small>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Cart;
