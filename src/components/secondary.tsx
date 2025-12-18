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

    return (
        <div className='bg-[#F9FAFB]  border border-t-0 border-neutral-300  p-7 space-y-7'>

            {/* ROW 1 */}
            <div>
                <dt className='text-base text-neutral-500'>Fastighet</dt>
                <dd className='font-semibold text-[15.5px]'>{deviation.propertyName}</dd>
            </div>

            {/* ROW 2 */}
            <div className='flex gap-10'>
                <div>
                    <dt className='text-base text-neutral-500'>Byggnad</dt>
                    <dd className='font-semibold text-[15.5px]'>{deviation.buildingName}</dd>
                </div>

                <div>
                    <dt className='text-base text-neutral-500'>Våningsplan</dt>
                    <dd className='font-semibold text-[15.5px]'>{deviation.levelName}</dd>
                </div>

                <div>
                    <dt className='text-base text-neutral-500'>Rum</dt>
                    <dd className='font-semibold text-[15.5px]'>{deviation.roomName}</dd>
                </div>
            </div>

            {/* ROW 3 */}
            <div>
                <dt className='text-base text-neutral-500'>Objekt</dt>
                <dd className='font-semibold text-[15.5px]'>{deviation.objectName}</dd>
            </div>

            {/* ROW 4 */}
            <div className='flex gap-10'>
                <div>
                    <dt className='text-base text-neutral-500'>Prioritet</dt>
                    <dd
                        className={`font-semibold text-[15.5px] ${priorityColors[deviation.priority]}`}>
                        {priorityLabels[deviation.priority]}
                    </dd>
                </div>

                <div>
                    <dt className='text-base text-neutral-500'>Status</dt>
                    <dd className={`font-semibold ${statusColors[deviation.status]} text-[15.5px]`}>{statusLabels[deviation.status]}</dd>
                </div>

                <div>
                    <dt className='text-base text-neutral-500'>Ansvarig</dt>
                    <dd className='font-semibold text-[15.5px]'>{deviation.responsibleUser ?? 'Ej tilldelad'}</dd>
                </div>
            </div>
            <span className='text-[15.5px] text-neutral-500'>Senast uppdatrerad: {new Date(deviation.updatedAtUtc).toLocaleDateString('sv-SE')}</span>

        </div>
    )
}

export default Secondary