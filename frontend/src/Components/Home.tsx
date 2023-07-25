import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/AccountSlice";

export default function Home() {
    const user = useSelector(selectUser);

    return (
        <>
            <Navbar />
            {/* <h1>Type : {user.type}</h1>
            <h1>ID : {user.id}</h1> */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pt-14 items-center justify-center flex-col">
                    <img className="object-cover object-center rounded" alt="hero" src="../assets/img/home-bg.png" />
                    <div className="text-center lg:w-2/3 w-full p-8">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to <span className="font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Shopify</span></h1>
                        <p className="mb-8 leading-relaxed">The one stop shop for all your Digital Product Needs</p>
                    </div>
                </div>
            </section>
        </>
    );
}