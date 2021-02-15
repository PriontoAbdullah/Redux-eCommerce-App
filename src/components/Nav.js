import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo.webp';

const Nav = () => {

	const {totalQuantity} = useSelector(state => state.CartReducer);

	return (
		<div className="nav">
			<div className="container">
				<div className="nav-container">
					<div className="nav-left">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<div className="nav-left">
						<div className="basket">
							<FcSearch className="basket-icon mr-3" />
							<FaUserAlt className="basket-icon mr-3" />
							<Link to="/cart">
								<BsFillBagFill className="basket-icon" />
								<span>{totalQuantity}</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
