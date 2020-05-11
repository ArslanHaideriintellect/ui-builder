import {useState} from "react"
import {DragDropContext} from "react-beautiful-dnd"
import SideBar from  "../components/mainComponents/sidebar";
import RightSection from "../components/mainComponents/rightSection";
import {initialData} from "../initialData";
import {v4 as uuidv4} from 'uuid';

const Homepage = () => {
    const [mainData, setMainData] = useState(initialData);
    const [displayData, setDisplayData] = useState([]);
    const [columnData, setColumnData] = useState(null);
    const [isVisible, setIsVisible] = useState(null);

    const onDragEnd = (result) => {
        let {destination, source, draggableId, type} = result;

        // if there is no destination

        if (!destination) {
            return;
        }

        // if its same columnn and date is moved to same place
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {

            return;
        }

        //   Re-order items in same column
        if (destination.droppableId === source.droppableId) {
            let original = [...displayData];
            let newOrignal = [...original]
            let temp = newOrignal[source.index];
            newOrignal[source.index] = newOrignal[destination.index];
            newOrignal[destination.index] = temp;
            original = newOrignal;
            setDisplayData(original)
            return;
        }


        // // for moving between columns
        else{
            let singleColumnData = {...columnData};
            let DragingPart = singleColumnData && singleColumnData.blocks.find(sin => sin.id === draggableId);
            let newCopy = [...displayData];
            let copyDragPart = {...DragingPart}
            copyDragPart.id = uuidv4();
            newCopy.push(copyDragPart);
            setDisplayData(newCopy)
            setIsVisible(false)
        }



    }

    const onBeforeDragStart = (result) => {
        let {source} = result;
        if (source.droppableId === "column-1") {
        }


    }
    const componentsFilter = (keyValue) => {
        setIsVisible(true)
        let check = initialData && initialData.columns[0].rows.find(sin => sin.key === keyValue);
        setColumnData(check)
    }


    return (
        <DragDropContext onDragEnd={onDragEnd} onBeforeDragStart={onBeforeDragStart}>
            <div className="w-full bg-gray-100 flex h-screen">
                <SideBar initialData={mainData} componentsFilter={componentsFilter}
                         columnData={columnData} setColumnData={setColumnData}
                         isVisible={isVisible}
                         setIsVisible={setIsVisible}
                />
                <RightSection initialData={mainData} displayData={displayData}
                              isVisible={isVisible}/>
            </div>
        </DragDropContext>
    )
}

export default Homepage