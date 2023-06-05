import { IoIosAddCircleOutline } from "react-icons/io";
import {BiComment, BiTrashAlt} from 'react-icons/bi'

const Aside = () => {
    return ( 
        <aside className="fixed left-0 h-screen bg-gray-900 w-80">
            <div className="flex flex-col items-center gap-5 py-3"> 
                <button className="w-4/5 border rounded hover:bg-emerald-600">
                    <span className="block py-3 "><IoIosAddCircleOutline className="inline " size={20}/>New Chat</span>
                </button>
                <div className=" chat_list w-full flex flex-col gap-5 px-3">
                    <div className=" w-full border-0 rounded-md bg-gray-800 py-1 px-3 flex justify-center items-center">
                        <button className="text-left truncate w-full active:bg-violet-700">
                            <span className="block py-3 text-gray-50"><BiComment className="inline mx-2" size={20}></BiComment>Room 1</span>
                        </button>
                        <button  className=" bg-gradient-to-l from-gray-800 py-4 px-3 hover:text-indigo-400">
                                        <BiTrashAlt />
                                    </button>
                    </div>
                </div>
            </div>
        </aside>
     );
}
 
export default Aside;