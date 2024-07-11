import Footer from "@/components/Footer";
import Nav from "@/components/Nav/Nav";
import { Outlet } from "react-router-dom";

const layout = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
};

export default layout;
