// src/components/primary.tsx

import { useState } from 'react'
import Secondary from './secondary'
import type { Deviation, Priority } from '../types/deviation'
import Button from './UI/button'
import { BiUndo } from "react-icons/bi";
import { FiCheck } from "react-icons/fi"

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
            {/*☢️☢️☢️ For ux clarity add darker bg on selected card */}
            <div
                onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                }}
                className={`flex  items-center justify-between  h-25 border border-l-0 border-neutral-300 cursor-pointer 
                ${deviation.status === "resolved" ? 'bg-neutral-200' : ''}
                ${isDropdownOpen ? "bg-neutral-200" : "hover:bg-neutral-50"}`}>
                <header className='flex items-center gap-5'>
                    <span className={` h-25 w-2 ${deviation.status === "resolved" ? 'bg-neutral-400' : priorityColors[deviation.priority]}`} />
                    {/* FUTURE IMAGE PLACEHOLDER */}
                    <img className=' w-10 h-auto' src={deviation.objectIcon?.url} alt='' />
                    <div>
                        <h3 className='text-xl'>{deviation.name}</h3>
                        <p className='text-neutral-500 text-base'>{deviation.buildingName} • {deviation.roomName} </p>
                    </div>
                </header>
                <div className="flex gap-5 rounded-xs">
                    {deviation.status === "resolved" ? (
                        <>
                            <button
                                onClick={onUndo}
                                className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white flex justify-center items-center cursor-pointer">
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
                            className="bg-newCad-blue hover:bg-newCad-blue/90 active:bg-newCad-blue/80 cursor-pointer text-white mr-5"
                        >
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
        </article>
    )
}

export default Primary