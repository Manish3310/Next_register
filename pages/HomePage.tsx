import Carousel from "react-bootstrap/esm/Carousel";
import Aside from "../components/Aside";
import Main from "@/components/Main";
import SearchBar from "@/components/search";

const HomePage = () => {
    return ( 
        <>
        <div className="grid grid-cols-6">
            <div className="z-10 col-span-1 text-white bg-gray-900 aside">
                <Aside></Aside>
            </div>
            <div className="h-full min-h-screen col-span-5 mb-40 text-white bg-gray-800 ">
                <Main/>
                <SearchBar/>
            </div>
        </div></>
     );
}
 
export default HomePage;