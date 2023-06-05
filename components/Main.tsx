import Response from "./response";
import Task from "./task";

const Main = () => {
    return ( 
        <main className="container mx-auto w-3/5 py-2">
            {/* {ask component} */}
            <Task/>
            {/* {response} */}
            <Response/>
        </main>
     );
}
 
export default Main;