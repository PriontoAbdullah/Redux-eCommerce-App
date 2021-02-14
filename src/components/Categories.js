import React from 'react';
import feature1 from '../images/feature_1.jpg';
import feature2 from '../images/feature_2.jpg';
import feature3 from '../images/feature_3.jpg';
import feature4 from '../images/feature_4.jpg';
import feature5 from '../images/feature_5.jpg';
import feature6 from '../images/feature_6.jpg';

const Categories = () => {
	const content = [
		{
			image: feature1,
			title: `T-Shirt`
		},
		{
			image: feature2,
			title: `F-Shirt`
		},
		{
			image: feature3,
			title: `M-Shirt`
		},
		{
			image: feature4,
			title: `Pillow`
		},
		{
			image: feature5,
			title: `Phone Case`
		},
		{
			image: feature6,
			title: `Elegant Bag`
		}
	];

	return (
		<div className="">
			<div className="feature-heading mt-5">
				<h2 className="mb-4">Featured Categories</h2>
			</div>

			<ul id="autoWidth" className="row">
				{content.map((item, index) => (
					<li className="item" key={index}>
						<div className="feature-box">
							<img src={item.image} alt="Featured" />
						</div>
						<span className="mt-3">{item.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
