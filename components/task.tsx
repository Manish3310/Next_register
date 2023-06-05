import Image from "next/image";

const Task = () => {
    return ( 

        <div className=" grid grid-cols-12 bg-gray-700 rounded-full">
            <div className=" icon col-span-1 bg-gray-600 p-2 mr-auto rounded-full">
            <Image src="/assets/man1.png" width={50} height={50} alt="profile" ></Image>
            </div>
            <div className="question col-span-11 px-4 flex flex-col justify-center">Ask questions?</div>
        </div>
     );
}
 
export default Task;