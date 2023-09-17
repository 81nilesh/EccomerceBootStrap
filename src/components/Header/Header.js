import React from "react";
import Hero from '../../Assets/Animations/Hero.gif'
import hero from '../../Assets/heroImage.jpg'


const Header = () => {
	return (
		<div>
			<div className="hidden sm:block w-full mt-[58px] h-[150px]  md:h-[350px] border ">
				<img
					className=" w-full h-full object-cover "
					src={hero}
					alt="hero"
				/>
			</div>
			<div className="sm:hidden">
				<img className="ml-[70px]" src={Hero} alt="hero" />
			</div>
		</div>
	);
};

export default Header;
