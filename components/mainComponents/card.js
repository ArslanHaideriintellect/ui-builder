import {Draggable, Droppable} from "react-beautiful-dnd";
const Card = (props) => {
    return (
        <Draggable draggableId={props.colId} index={props.newKey}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                >
                    <img src={props.imageUrl} alt=""
                         className="w-full mb-10 cursor-pointer bloc-image"/>

                </div>
            )}
        </Draggable>
    )
}
export default Card