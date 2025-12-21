// src/components/primary.tsx


import { useState } from 'react'
import Secondary from './secondary'
import type { Deviation, Priority } from '../types/deviation'
import Button from './UI/button'
import { BiUndo } from "react-icons/bi";
import { FiCheck } from "react-icons/fi"
import { FaChevronDown } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";

// Primary clickable card
// Shows core info and main action
// name, buildingName, roomName, status, priority

interface PrimaryProps {
    deviation: Deviation
    onResolve: () => void;
    onUndo: () => void;
}

const Primary = ({ deviation, onResolve, onUndo }: PrimaryProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    // Adding color to priority
    const priorityColors: Record<Priority, string> = {
        low: 'bg-green-500',
        medium: 'bg-amber-500',
        high: 'bg-red-500',
    }

    return (
        <article>
            <div
                onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                }}
                className={`lg:h-25 flex items-center justify-between border max-lg:border-b-0 lg:border-l-0 border-neutral-200 max-lg:p-2 bg-neutral-100  cursor-pointer 
                ${deviation.status === "resolved" ? 'bg-neutral-200' : ''}
                ${isDropdownOpen ? "lg:bg-neutral-200" : "hover:bg-neutral-200"}`}>
                <header className='flex max-lg:flex-col max-lg:w-full max-lg:justify-between lg:items-center max-lg:min-h-40 gap-5 max-lg:bg-white'>
                    <span className={` lg:h-25 h-2 w-full lg:w-2 ${deviation.status === "resolved" ? 'bg-neutral-400' : priorityColors[deviation.priority]}`} />
                    {/* FUTURE IMAGE PLACEHOLDER */}
                    <div className=' flex items-center justify-between mx-2'>
                        <div className=' w-14 h-14  max-lg:bg-neutral-100/50  flex items-center justify-center'>
                            <img className=' w-10 h-auto ' src={deviation.objectIcon?.url} alt={deviation.objectName} />
                        </div>
                        <FaChevronDown className={` transition-transform lg:hidden mr-3 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    <div className='p-2'>
                        <div className='flex lg:items-center gap-2'>
                            <h3 className='text-lg lg:text-xl max-lg:font-semibold'>{deviation.name}</h3>
                            {deviation.priority === "high" && (
                                <RiErrorWarningFill className="text-red-500 text-xl lg:text-lg shrink-0 mt-1" />
                            )}
                        </div>
                        <p className='text-neutral-500 text-sm'>{deviation.buildingName} • {deviation.roomName} </p>
                    </div>
                </header>

                {/*:🖥️ DESKTOP: Resolve button for desktop */}
                <div className="hidden lg:flex gap-5 rounded-xs">
                    {deviation.status === "resolved" ? (
                        <>
                            <button
                                onClick={onUndo}
                                className="w-10 h-10 cursor-pointer bg-red-500 hover:bg-red-600 text-white flex justify-center items-center ">
                                <BiUndo />
                            </button>
                            <Button
                                className=" flex items-center gap-2 text-green-600 cursor-default font-semibold mr-5">
                                Åtgärdad <FiCheck />
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={onResolve}
                            className="bg-newCad-blue hover:bg-newCad-blue/90 active:bg-newCad-blue/80  text-white mr-5">
                            Åtgärda
                        </Button>
                    )}
                </div>
            </div>
            {isDropdownOpen &&
                // Passing down the deviations to display the secondary information
                <Secondary
                    key={deviation.id}
                    deviation={deviation} />
            }
            {/* 📱 MOBILE: Resolve button for mobile */}
            <div className="flex  items-center lg:hidden gap-5 rounded-xs  border border-t-0 bg-neutral-100 border-neutral-200 p-2">
                {deviation.status === "resolved" ? (
                    <>
                        <button
                            onClick={onUndo}
                            className="flex-1 lg:w-10 h-10 cursor-pointer bg-red-500 hover:bg-red-600 text-white flex justify-center items-center ">
                            <BiUndo />
                        </button>
                        <Button
                            className=" flex flex-1 justify-center items-center gap-2 bg-neutral-200 text-green-600 cursor-default font-semibold">
                            Åtgärdad <FiCheck />
                        </Button>
                    </>
                ) : (
                    <Button
                        onClick={onResolve}
                        className="bg-newCad-blue hover:bg-newCad-blue/90 w-full active:bg-newCad-blue/80 text-white"
                    >
                        Åtgärda
                    </Button>
                )}
            </div>
        </article>
    )
}

export default Primary

