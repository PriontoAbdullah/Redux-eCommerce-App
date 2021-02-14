import React from 'react';
import sale1 from '../images/sale-1.jpg';
import sale2 from '../images/sale-2.jpg';
import sale3 from '../images/sale-3.jpg';

const SaleOffer = () => {
	const content = [
		{
			image: sale1,
			title: 'Bag with rose pattern',
			desc: 'Sale off 25%'
		},
		{
			image: sale2,
			title: 'Hello Summer',
			desc: 'Sale off 20%'
		},
		{
			image: sale3,
			title: 'Lets Party Hard Pillow',
			desc: 'Sale off 25%'
		}
	];

	return (
		<div>
			<div className="feature-heading mb-3">
				<h2>Sale Offer</h2>
			</div>
			<div className="sale">
				{content.map((item, index) => (
					<div className="sale-box sale-1" key={index}>
						<img src={item.image} alt="sale" />
						<div className="sale-text">
							<strong>{item.title}</strong>
							<span>{item.desc}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SaleOffer;
