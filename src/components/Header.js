import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import banner2 from '../images/Slider_01.jpg';
import banner1 from '../images/Slider_02.jpg';
import banner3 from '../images/Slider_03.jpg';
import banner4 from '../images/Slider_04.jpg';

const Header = () => {
	const content = [
		{
			image: banner1,
			title: `30% off With Promo Code`,
			description: 'LIMITED OFFER',
			button: 'SHOP NOW'
		},
		{
			image: banner2,
			title: `10% off for Couple Shopping`,
			description: 'LIMITED OFFER',
			button: 'SHOP NOW'
		},
		{
			image: banner3,
			title: `20% off With Men Dress`,
			description: 'EXCLUSIVE OFFER',
			button: 'SHOP NOW'
		},
		{
			image: banner4,
			title: `10% off for Black Friday`,
			description: 'PREMIUM OFFER',
			button: 'VISIT NOW'
		}
	];

	return (
		<Slider autoplay={3000}>
			{content.map((item, index) => (
				<div key={index} style={{ background: `url(${item.image}) no-repeat center center` }}>
					<div className="slider-content">
						<p className="lead">{item.description}</p>
						<h2 className="mb-4 banner-text">{item.title}</h2>
						<button
							className="btn btn-danger banner-button"
							onClick={() => {
								window.scrollTo(0, 800);
							}}
						>
							{item.button}
						</button>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default Header;
