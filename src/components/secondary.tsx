// src\components\secondary.tsx
import type { Deviation, Priority } from '../types/deviation'


interface PrimaryProps {
    deviation: Deviation
}


const Secondary = ({ deviation }: PrimaryProps) => {

    // Makes the displayed status labels clearer
    const priorityLabels = {
        low: 'Låg',
        medium: 'Mellan',
        high: 'Hög',
    }

    // Makes the displayed status labels clearer
    const statusLabels = {
        rejected: 'Ej åtgärdad',
        resolved: 'Åtgärdad',
    }

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
        <div className='bg-neutral-100  lg:bg-[#F9FAFB]  border border-t-0 max-lg:border-b-0 border-neutral-300 p-3 lg:p-7 space-y-10 lg:space-y-7 '>
            {/* <hr className=' opacity-15 block lg:hidden' /> */}
            {/* ROW 1 */}
            <div>
                <dt className={text.label}>Fastighet</dt>
                <dd className={text.value}>{deviation.propertyName}</dd>
            </div>

            {/* ROW 2 */}
            <div className='flex max-lg:flex-col max-lg:gap-2 gap-10'>
                <div>
                    <dt className={text.label}>Byggnad</dt>
                    <dd className={text.value}>{deviation.buildingName}</dd>
                </div>

                <div>
                    <dt className={text.label}>Våningsplan</dt>
                    <dd className={text.value}>{deviation.levelName}</dd>
                </div>

                <div>
                    <dt className={text.label}>Rum</dt>
                    <dd className={text.value}>{deviation.roomName}</dd>
                </div>
            </div>

            {/* ROW 3 */}
            <div>
                <dt className={text.label}>Objekt</dt>
                <dd className={text.value}>{deviation.objectName}</dd>
            </div>

            {/* ROW 4 */}
            <div className='flex max-lg:flex-col max-lg:gap-2 gap-10'>
                <div>
                    <dt className={text.label}>Prioritet</dt>
                    <dd className={`${text.value} ${priorityColors[deviation.priority]}`}>
                        {priorityLabels[deviation.priority]}
                    </dd>
                </div>

                <div>
                    <dt className={text.label}>Status</dt>
                    <dd className={`${text.value} ${statusColors[deviation.status]} `}>{statusLabels[deviation.status]}</dd>
                </div>

                <div>
                    <dt className={text.label}>Ansvarig</dt>
                    <dd className={text.value}>{deviation.responsibleUser ?? 'Ej tilldelad'}</dd>
                </div>
            </div>
            <span className={text.label}>Senast uppdatrerad: {new Date(deviation.updatedAtUtc).toLocaleDateString('sv-SE')}</span>

        </div>
    )
}

export default Secondary