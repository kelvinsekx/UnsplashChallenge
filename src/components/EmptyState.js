import {AiFillBell} from "react-icons/ai"

const EmptyState = () => <div className="flex flex-column flex-grow align-center justify-center"style={{height:"20rem"}}>
    <div className="flex flex-row align-center">
        <div><AiFillBell size="12rem" /></div>
        <div className="flex flex-column"style={{fontSize:"150%"}}>
            <span>Here is empty..</span>
            <span>try typing into the input above and CLICK search button to see something awesome</span>
        </div>
    </div>
</div>

export default EmptyState;