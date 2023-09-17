import React from "react";
import footerImg from "../../Assets/footer1.jpeg";
import IndiaLogo from "../../Assets/footerImg.png";
const Footer = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${footerImg})`,
				// opacity:"0.7",
			}}
			className="w-full h-auto bg-cover bg-center mt-4 p-4 ">
			<div className="grid gap-7 grid-cols-2  text-white md:grid-cols-4 max-w-[1000px] mx-auto">
				<div>
					<p className="font-bold text-2xl p-1">FIND US</p>
					<div className="text-gray-300">
						<p>
							Ward no 02 Bhatera
							Balaghat,Madhya Pradesh
						</p>
						<p>Balaghat-481001</p>
						<p>Phone: +91 7999545311</p>
						<p>Email</p>
						<p>chandubopche321@gmail.com</p>
					</div>
				</div>
				<div>
					<p className="font-bold text-2xl p-1">
						CATEGORIES
					</p>
					<div className="text-gray-300">
						<p>Best Selling Products</p>
						<p>Epic Deals</p>
						<p>Wall Clocks</p>
						<p>Collectibles</p>
						<p>Posters</p>
						<p>Notebooks</p>
					</div>
				</div>
				<div className="hidden md:block">
					<p className="font-bold text-2xl p-1">HELP</p>
					<div className="text-gray-300">
						<p>Track your order</p>
						<p>My Account</p>
						<p>Contact Us</p>
						<p>Privacy policy</p>
						<p>Term & conditions</p>
						<p>FAQ</p>
					</div>
				</div>
				<div className="hidden md:block">
					<p className="font-bold text-2xl p-1">MORE</p>
					<div className="text-gray-300">
						<p>About Us</p>
						<p>Careers</p>
						<p>Schools & Colleges</p>
						<p>Bulk & Custom Orders</p>
						<p>Sell Your Artwork</p>
						<p>Privacy Policy</p>
						<p>Refund Policy</p>
						<p>Terms of Service</p>
						<p>Shipping Policy</p>
					</div>
				</div>
			</div>

			<div className=" flex flex-col justify-center items-center">
				<h1 className="text-white font-bold text-2xl  tracking-widest">
					PRODUCTS MADE IN INDIA
				</h1>
				<div className="w-48 h-24  ">
					<img src={IndiaLogo} alt="" />
				</div>
			</div>
			<div>
				<p className="text-gray-300 text-medium  max-w-[1000px] text-center mx-auto">
					An ambitious nation-building initiative to
					encourage manufacturing of goods in India. We
					support this initiative, Our endeavour is that
					most of the EPIC STUFF on our website is Made In
					India.
				</p>
			</div>
		</div>
	);
};

export default Footer;
