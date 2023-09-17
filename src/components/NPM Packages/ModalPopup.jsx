import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Cart from "../Cart/Cart";
import "./ReactModal.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const ModalPopup = () => {
	const {state,Dispatch} = useContext(CartContext)
	return (
		<Modal
			open={state.isCart}
			onClose={() => Dispatch({type:"TOGGLE_CART"})}
			classNames={{
				overlayAnimationIn: "customEnterOverlayAnimation",
				overlayAnimationOut: "customLeaveOverlayAnimation",
				modalAnimationIn: "customEnterModalAnimation",
				modalAnimationOut: "customLeaveModalAnimation",
			}}
			animationDuration={800}
			center>
				<Cart  />
		</Modal>
	);
};

export default ModalPopup;
