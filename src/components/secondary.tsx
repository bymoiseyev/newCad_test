// src\components\secondary.tsx
import { RiErrorWarningFill } from 'react-icons/ri'
import type { Deviation, Priority } from '../types/deviation'

interface SecondaryProps {
    deviation: Deviation
}

// This dropdown displays the secondary information.

const Secondary = ({ deviation }: SecondaryProps) => {

    // Makes the displayed priority labels clearer
    const priorityLabels: Record<Priority, string> = {
        low: 'Låg',
        medium: 'Mellan',
        high: 'Hög',
    }

    // Makes the displayed status labels clearer
    const statusLabels = {
        rejected: 'Ej åtgärdad',
        resolved: 'Åtgärdad',
    }
    // Additional status (Ej åtgärdad - Åtgärdad) clarity
    const statusColors: Record<Deviation["status"], string> = {
        rejected: "text-black",
        resolved: "text-green-500",
    };

    // Adding color to priority
    const priorityColors: Record<Priority, string> = {
        low: 'text-green-500',
        medium: 'text-amber-500',
        high: 'text-red-500',
    }

    // Reusable text styles
    const text = {
        label: "text-sm text-neutral-500",
        value: "text-base lg:text-[15.5px] font-semibold ",
        meta: "text-sm text-neutral-500",
    };

    return (
        <div className='bg-neutral-100  lg:bg-[#F9FAFB]  border border-t-0 max-lg:border-b-0 border-neutral-300 p-3 lg:p-7 space-y-10  lg:space-y-7 '>
            {/* ROW 1 */}
            <hr className=' border-neutral-300' />
            <dl>
                <dt className={text.label}>Fastighet</dt>
                <dd className={text.value}>{deviation.propertyName}</dd>
            </dl>
            {/* ROW 2 */}
            <div className='flex max-lg:flex-col max-lg:gap-4 gap-10'>
                <dl>
                    <dt className={text.label}>Byggnad</dt>
                    <dd className={text.value}>{deviation.buildingName}</dd>
                </dl>
                <dl>
                    <dt className={text.label}>Våningsplan</dt>
                    <dd className={text.value}>{deviation.levelName}</dd>
                </dl>
                <dl>
                    <dt className={text.label}>Rum</dt>
                    <dd className={text.value}>{deviation.roomName}</dd>
                </dl>
            </div>
            <hr className=' border-neutral-300' />
            {/* ROW 3 */}
            <dl>
                <dt className={text.label}>Objektnamn</dt>
                <dd className={text.value}>{deviation.objectName}</dd>
            </dl>
            <hr className=' border-neutral-300' />
            {/* ROW 4 */}
            <div className='flex max-lg:flex-col max-lg:gap-2 gap-10'>
                <dl>
                    <dt className={text.label}>Prioritet</dt>
                    <dd className={`flex items-center gap-1 ${text.value} ${priorityColors[deviation.priority]}`}>
                        {deviation.priority === "high" && (
                            <RiErrorWarningFill className="text-red-500" />
                        )}
                        {priorityLabels[deviation.priority]}
                    </dd>
                </dl>
                <dl>
                    <dt className={text.label}>Status</dt>
                    <dd className={`${text.value} ${statusColors[deviation.status]} `}>{statusLabels[deviation.status]}</dd>
                </dl>
                <dl>
                    <dt className={text.label}>Ansvarig</dt>
                    <dd className={text.value}>{deviation.responsibleUser ?? 'Ej tilldelad'}</dd>
                </dl>
            </div>
            <hr className=' border-neutral-300' />
            <span className={text.label}>Senast uppdaterad: {new Date(deviation.updatedAtUtc).toLocaleDateString('sv-SE')}</span>
        </div>
    )
}

export default Secondary