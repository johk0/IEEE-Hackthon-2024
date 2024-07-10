import  { useContext, useState } from 'react';
import "./cart.css";
import { Contxt } from '../../store/Context';
import demoProducts from '../../demoProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments, faPhone } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    let context=useContext(Contxt);
  const [cartItems, setCartItems] = useState(context.Cart.length>0?[
    demoProducts.filter((item)=>{
    context.Cart.includes(item.id);
    })
      ]:[]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  const handleCouponApply = () => {
    // Handle coupon code application logic
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shopping Bag</h1>
      <p className="mb-6">{context.Cart.length} items in your bag</p>

      <div className="flex flex-wrap -mx-2">
        <div className="w-full lg:w-2/3 px-2 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b pb-4 mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity === 1}
                    className="bg-gray-300 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-300 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                <div className="ml-4">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 px-2">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-bold mb-4">Calculated Shipping</h2>
            <form className="mb-4">
              <select className="w-full mb-2 p-2 border rounded">
                <option>Country</option>
              </select>
              <input type="text" className="w-full mb-2 p-2 border rounded" placeholder="State / City" />
              <input type="text" className="w-full mb-2 p-2 border rounded" placeholder="ZIP Code" />
              <button type="button" className="bg-black text-white w-full py-2 rounded">Update</button>
            </form>

            <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
            <form className="mb-4">
              <input type="text" className="w-full mb-2 p-2 border rounded" placeholder="Coupon Code" />
              <button type="button" onClick={handleCouponApply} className="bg-black text-white w-full py-2 rounded">Apply</button>
            </form>

            <div className="bg-yellow-100 p-4 rounded-lg">
              <p>Cart Subtotal: ${cartTotal.toFixed(2)}</p>
              <p>Design by Fluttertop: Free</p>
              <p>Discount: -$4.00</p>
              <p className="font-bold">Cart Total: ${(cartTotal - 4).toFixed(2)}</p>
            </div>
            <button className="bg-yellow-500 text-white w-full py-2 rounded mt-4">Proceed to Checkout</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center bg-orange-100 p-4 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
        <FontAwesomeIcon icon={faPhone} className="text-orange-500 w-8 h-8 mr-4" />
        <div>
          <p className="font-semibold">Call Us Anytime</p>
          <p className="text-gray-600">+34 555 5555</p>
        </div>
      </div>
      <div className="flex items-center bg-green-100 p-4 rounded-lg w-full md:w-auto">
        <FontAwesomeIcon icon={faComments} className="text-green-500 w-8 h-8 mr-4" />
        <div>
          <p className="font-semibold">Chat With Us</p>
          <p className="text-gray-600">We offer 24-hour chat support</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;