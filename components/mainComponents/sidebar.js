import {useState} from "react";
import {Draggable, Droppable} from "react-beautiful-dnd";
import Head from "next/head";
import Card from "./card"
const SideBar = (props) => {
    const [mainData, setMaindata] = useState(props.initialData)
    let {componentsFilter, columnData, isVisible, setIsVisible} = props;

    return (
        <div className="flex relative ">
            <div className="border-r h-screen shadow bg-gray-100 overflow-y-scroll custom-side-bar custom-menu-bar"
                 style={{width: "230px"}}>
                <div className="pt-6 pb-6 pl-6 w-full flex  border-b border-gray-300">
                    <img src="/images/tailwind-builder-logo_80px.png" alt="" className="h-10"/>
                </div>
                <div className="w-full flex  border-b border-gray-300">
                    <ul className="w-full">
                        <li
                            className="pt-6 pb-3 pl-6 font-medium text-gray-400 text-base  cursor-pointer">
                            Blocks
                        </li>
                        {
                            mainData && mainData.columns[0].rows.map((sin, i) => {
                                return (
                                    <li onMouseEnter={() => componentsFilter(sin.key)} key={i}
                                        className="py-2 pl-6  text-base  cursor-pointer hover:bg-gray-400">
                                        {sin.title}
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

            <Droppable droppableId={"column-1"}

            >
                {provided => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={ isVisible ? "custom-open-menu-open border-r h-screen shadow overflow-y-scroll custom-side-bar opening-sidebar bg-gray-100" : "custom-open-menu-close border-r h-screen shadow overflow-y-scroll custom-side-bar opening-sidebar" }
                        onMouseLeave={() => setIsVisible(false)}

                    >
                        <div

                            style={{width: "450px"}}>
                            <div className="p-6">
                                <p className="flex flex-wrap items-center text-base text-gray-800 ">Select component
                                    <img
                                        src="/images/point-down.png" alt="" className="px-1"/> and drag it to the
                                    canvas
                                    <img
                                        src="/images/point-right.png" alt="" className="px-1"/></p>
                            </div>
                            <div className="p-4">
                                {
                                    columnData && columnData.blocks.map((sin, i) => {
                                        return (
                                            <Card imageUrl={sin.imageUrl} colId={sin.id} key={i} newKey={i}/>
                                        )
                                    })
                                }


                            </div>
                        </div>


                        {provided.placeholder}
                    </div>
                )}


            </Droppable>


        </div>



    );
}

export default SideBar;
