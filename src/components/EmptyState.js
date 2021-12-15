import {AiFillBell} from "react-icons/ai"

const EmptyState = () => <div className="flex flex-column flex-grow align-center justify-center"style={{height:"20rem"}}>
    <div className="flex flex-row align-center empty">
        <div><AiFillBell size="12rem" /></div>
        <div className="flex flex-column"style={{fontSize:"110%"}}>
            <span>Here is empty..</span>
            <span>try typing something awesome into thte input above and click search</span>
        </div>
    </div>
</div>

export default EmptyState;