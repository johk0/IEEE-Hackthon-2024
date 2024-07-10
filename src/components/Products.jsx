import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/product-cover-5 (1).png";
// import img2 from '../assets/product-cover-5 (2).png'
// import img3 from '../assets/product-cover-5 (3).png'
// import img4 from '../assets/product-cover-5.png'
import { Contxt } from "../store/Context";
export default function Products() {
	const [addedToCart, setAddedToCart] = useState(false);
	function HandleAddingToCart() {
		setAddedToCart((prev) => !prev);
	}
	const Context = useContext(Contxt);
	const [Load, setLoad] = useState(false);
	function handleLoad() {
		setLoad((prev) => !prev);
	}
	return (
		<div className="grapper flex flex-col items-center bg-slate-100 pt-5 max-sm:px-2">
			<h2 className="text-xl text-gray-500 py-2">Featured Products</h2>
			<h1 className="font-bold text-2xl py-2">BESTSELLER PRODUCTS</h1>
			<p className="text-gray-500 pt-2 pb-8 max-sm:text-center">
				Problems trying to resolve the conflict between
			</p>
			<div className="products pb-7 grid  place-items-center gap-y-6 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] w-full px-7 max-sm:px-2">
				<div className="product text-center w-80 bg-white py-5 px-2 rounded-2xl">
					<div className="image w-11/12 m-auto h-1/2">
						<img
							src={img1}
							alt="product image"
							onClick={Context.HandleProduct}
							className="rounded-2xl w-full h-56 object-cover"
						/>
					</div>
					<div className="description flex py-4 px-5">
						<div className="text w-1/2 text-start">
							<p className="font-semibold pb-1 text-[15px]">
								Snickers Off-White
							</p>
							<p className="font-semibold pb-1">2024</p>
							<p className="text-neutral-500 pb-1">NIKE</p>
							<p className="font-semibold ">$38.00</p>
						</div>
						<div className="add w-1/2 flex items-end justify-end">
							<button
								onClick={HandleAddingToCart}
								className="rounded-2xl bg-black opacity-0 text-white w-fit h-fit text-center p-2 px-3 text-sm">
								Buy Now
							</button>
							<button
								onClick={HandleAddingToCart}
								className="rounded-[50%] mb-1 bg-black ml-3 text-white w-7 h-7 text-center pb-1">
								{addedToCart ? (
									<FontAwesomeIcon
										icon={faShoppingCart}
										className="text-white w-3 h-3"
									/>
								) : (
									"+"
								)}
							</button>
						</div>
					</div>
				</div>
				<div className="product text-center w-80 bg-white py-5 px-2 rounded-2xl">
					<div className="image w-11/12 m-auto h-1/2">
						<img
							src={img1}
							alt="product image"
							onClick={Context.HandleProduct}
							className="rounded-2xl w-full h-56 object-cover"
						/>
					</div>
					<div className="description flex py-4 px-5">
						<div className="text w-1/2 text-start">
							<p className="font-semibold pb-1 text-[15px]">
								Snickers Off-White
							</p>
							<p className="font-semibold pb-1">2024</p>
							<p className="text-neutral-500 pb-1">NIKE</p>
							<p className="font-semibold ">$38.00</p>
						</div>
						<div className="add w-1/2 flex items-end justify-end">
							<button
								onClick={HandleAddingToCart}
								className="rounded-2xl bg-black opacity-0 text-white w-fit h-fit text-center p-2 px-3 text-sm">
								Buy Now
							</button>
							<button
								onClick={HandleAddingToCart}
								className="rounded-[50%] mb-1 bg-black ml-3 text-white w-7 h-7 text-center pb-1">
								{addedToCart ? (
									<FontAwesomeIcon
										icon={faShoppingCart}
										className="text-white w-3 h-3"
									/>
								) : (
									"+"
								)}
							</button>
						</div>
					</div>
				</div>
				<div className="product text-center w-80 bg-white py-5 px-2 rounded-2xl">
					<div className="image w-11/12 m-auto h-1/2">
						<img
							src={img1}
							alt="product image"
							onClick={Context.HandleProduct}
							className="rounded-2xl w-full h-56 object-cover"
						/>
					</div>
					<div className="description flex py-4 px-5">
						<div className="text w-1/2 text-start">
							<p className="font-semibold pb-1 text-[15px]">
								Snickers Off-White
							</p>
							<p className="font-semibold pb-1">2024</p>
							<p className="text-neutral-500 pb-1">NIKE</p>
							<p className="font-semibold ">$38.00</p>
						</div>
						<div className="add w-1/2 flex items-end justify-end">
							<button
								onClick={HandleAddingToCart}
								className="rounded-2xl bg-black opacity-0 text-white w-fit h-fit text-center p-2 px-3 text-sm">
								Buy Now
							</button>
							<button
								onClick={HandleAddingToCart}
								className="rounded-[50%] mb-1 bg-black ml-3 text-white w-7 h-7 text-center pb-1">
								{addedToCart ? (
									<FontAwesomeIcon
										icon={faShoppingCart}
										className="text-white w-3 h-3"
									/>
								) : (
									"+"
								)}
							</button>
						</div>
					</div>
				</div>

				<div
					className={
						Load
							? "product text-center w-80 bg-white py-5 px-2 rounded-2xl"
							: "product text-center w-80 bg-white py-5 px-2 rounded-2xl hidden"
					}>
					<div className="image w-11/12 m-auto h-1/2">
						<img
							src={img1}
							alt="product image"
							onClick={Context.HandleProduct}
							className="rounded-2xl w-full h-56 object-cover"
						/>
					</div>
					<div className="description flex py-4 px-5">
						<div className="text w-1/2 text-start">
							<p className="font-semibold pb-1 text-[15px]">
								Snickers Off-White
							</p>
							<p className="font-semibold pb-1">2024</p>
							<p className="text-neutral-500 pb-1">NIKE</p>
							<p className="font-semibold ">$38.00</p>
						</div>
						<div className="add w-1/2 flex items-end justify-end">
							<button
								onClick={HandleAddingToCart}
								className="rounded-2xl bg-black opacity-0 text-white w-fit h-fit text-center p-2 px-3 text-sm">
								Buy Now
							</button>
							<button
								onClick={HandleAddingToCart}
								className="rounded-[50%] mb-1 bg-black ml-3 text-white w-7 h-7 text-center pb-1">
								{addedToCart ? (
									<FontAwesomeIcon
										icon={faShoppingCart}
										className="text-white w-3 h-3"
									/>
								) : (
									"+"
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
			<button
				onClick={handleLoad}
				className="text-sky-500 border-2 border-sky-500 py-2 px-4 font-bold">
				{Load ? "Show Less" : "Show More"}
			</button>
		</div>
	);
}