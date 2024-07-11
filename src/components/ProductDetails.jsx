import  { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import {
    faCartShopping,
    faHeart,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/rayul-_M6gy9oHgII-unsplash.jpg";
import { Contxt } from "@/store/Context";
import demoProducts from "@/demoProducts";

export default function ProductDetails({id}) {
    const context = useContext(Contxt);
	console.log(context.component);
    const item = demoProducts.find((iterator) => iterator.id === id);
	console.log(item)

    if (!item) {
        return <div className="m-auto py-9 bg-sky-500 text-white text-center text-2xl">Product not found</div>;
    }

    return (
        <div className="grapper">
            <p className="pl-3 py-5 font-semibold">
                <span className="pr-3">
                    <Link to="/">Home</Link>
                </span>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>{" "}
                <span className="pl-3 text-neutral-500"> shop</span>
            </p>
            <div className="grapper flex lg:h-[450px] max-sm:flex-col">
                <div className="image w-1/3 max-sm:w-full max-sm:h-32 ">
                    <img src={img} alt="" className="h-full object-cover max-sm:w-full" />
                </div>
                <div className="text pl-7 w-2/3 max-sm:pt-6 max-sm:w-full max-sm:pl-0">
                    <h3 className="text-neutral-700 font-semibold text-lg">
                        {item.name}
                    </h3>
                    <div className="stars py-2">
                        <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-400"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-400"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-400"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-400"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={farStar}
                            className="text-yellow-400"
                        ></FontAwesomeIcon>
                        <span className="pl-3 text-neutral-500">10 Reviews</span>
                    </div>
                    <p className="text-2xl font-bold">${item.Price}</p>
                    <p className="text-sky-500 py-2">
                        <span className="text-neutral-600">Availability :</span> In Stock
                    </p>
                    <p className="text-neutral-500 w-2/3 py-2 max-sm:w-full max-sm:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                        dolor est, velit, nam molestias, tempore non architecto sequi quidem
                        inventore esse ipsa! Eum, odit earum nemo harum amet nostrum alias!
                    </p>
                    <hr className="h-1  bg-neutral-300 w-2/3 max-sm:w-full" />
                    <div className="colours h-5 flex gap-2 py-3">
                        <span className="w-5 h-5 rounded-[50%] bg-sky-500 block"> </span>
                        <span className="w-5 h-5 rounded-[50%] bg-teal-700 block"> </span>
                        <span className="w-5 h-5 rounded-[50%] bg-orange-400 block"> </span>
                    </div>
                    <div className="buttons  flex justify-start pt-12 ">
                        <button
                            onClick={() => {
                                context.HandleAddToCart(item.id);
                            }}
                            className="bg-sky-500 px-4 py-3 text-white font-bold max-sm:py-1  max-sm:text-sm max-sm:px-2 "
                        >
                            Add To Cart
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
