import currencyFormatter from 'currency-formatter';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
	const { products } = useSelector((state) => state.ProductReducer);

	return (
		<div className="container my-4">
			<div className="feature-heading mb-3">
				<h2>New Arrival</h2>
			</div>

			<div className="row">
				{products.map((product) => (
					<div className="col-md-3 col-sm-6 all-products" key={product.id}>
						<div className="product">
							<div className="product-img">
								<Link to={`details/${product.id}`}>
									<img src={`/images/${product.image}`} alt="product name" />
                                    <div className="show">View Details</div>
								</Link>
							</div>
							<div className="product-name">{product.name}</div>
						     
							<div className="row">
								<div className="col-8">
									<div className="product-price">
										<span className="actualPrice">
											{currencyFormatter.format(product.price, { code: 'USD' })}
										</span>
										<span className="discount">{product.discount}% discount</span>
									</div>
								</div>
								<div className="col-4">
									<div className="product-discount-price">
										{currencyFormatter.format(product.discountPrice, { code: 'USD' })}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
