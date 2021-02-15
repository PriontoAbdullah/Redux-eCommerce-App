import React from 'react';

const Footer = () => {
	const content = [
		{
			image: 'fas fa-shipping-fast',
			title: 'Free Shipping',
			desc: 'Free Shipping for all US order'
		},
		{
			image: 'fas fa-headphones-alt',
			title: 'Support 24/7',
			desc: 'We support 24h a day'
		},
		{
			image: 'fas fa-sync',
			title: '100% Money Back',
			desc: 'You have 30 days to Return'
		}
	];

	return (
		<div className="services">
			{content.map((item, index) => (
				<div className="services-box" key={index}>
					<i className={item.image} />
					<span>{item.title}</span>
					<p>{item.desc}</p>
				</div>
			))}

			<footer>
				<span className="copyright">Copyright 2021 - Prionto Abdullah</span>
				<div className="subscribe order-first order-md-last">
					<form>
						<input type="email" placeholder="Example@gmail.com" required />
						<input type="submit" value="Subscribe" />
					</form>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
