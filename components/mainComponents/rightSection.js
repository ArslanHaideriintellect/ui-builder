import {useState} from "react";
import {Draggable, Droppable} from "react-beautiful-dnd";
import Head from "next/head"
const RightSection = (props) => {
    const [canvasWidth, setcanvasWith] = useState("1025px");
    return (
        <div className="h-screen w-full h-full ">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className="w-full flex justify-end px-6 items-center" style={{height: "15vh"}}>
                <div className="flex justify-end items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Export project
                    </button>
                </div>
            </div>
            <div className="overflow-hidden" style={{height: "85vh"}}>
                <div className="w-10/12 mx-auto border main-canvas shadow mt-2 bg-white"
                     style={{height: "82vh", width: canvasWidth}}>

                    <div className="flex bg-gray-100 w-full px-4 items-center h-12 justify-between"
                         style={{height: "7vh"}}>
                        <div className="w-1/5 flex items-center">
                            <div className="h-3 w-3 bg-gray-300 rounded-full mr-3"/>
                            <div className="h-3 w-3 bg-gray-300 rounded-full mr-3"/>
                            <div className="h-3 w-3 bg-gray-300 rounded-full mr-3"/>
                        </div>
                        <div
                            className={canvasWidth === "375px" ? "w-4/12 flex justify-center" : "w-6/12 flex justify-center"}>
                            <div className="w-64 h-8 bg-white border flex items-center justify-end pr-2 cursor-pointer">
                                <div className="cursor-pointer">
                                    <img src="/images/pointing.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div
                            className={ canvasWidth === "375px" ? "w-4/12 flex items-center justify-end" : "w-1/6 flex items-center justify-end"}>
                            <div className="hover:bg-gray-400 p-2 cursor-pointer"
                                 onClick={() => setcanvasWith("1025px")}>
                                <img src="/images/desktop.png" alt=""/>
                            </div>
                            <div className="hover:bg-gray-400 p-2 cursor-pointer"
                                 onClick={() => setcanvasWith("778px")}>
                                <img src="/images/tab.png" alt=""/>
                            </div>
                            <div className="hover:bg-gray-400  p-2 cursor-pointer"
                                 onClick={() => setcanvasWith("375px")}>
                                <img src="/images/mobile.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <Droppable droppableId={"column-2"}>
                        {provided => (
                            <div
                                className="overflow-y-scroll custom-dropable-area"
                                style={{height: "75vh"}}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {
                                    props.displayData && props.displayData.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Draggable draggableId={item.id} index={index}

                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}

                                                        >
                                                            {
                                                                item.content
                                                            }

                                                        </div>
                                                    )}
                                                </Draggable>
                                            </div>

                                        )
                                    })
                                }

                                {provided.placeholder}
                            </div>
                        )}


                    </Droppable>
                </div>

            </div>
        </div>



    )
}
export default RightSection