import { FiCheck } from "react-icons/fi"


const ConfirmationPopup = () => {
    return (
        <div className="fixed pointer-events-none top-5 inset-0 flex items-start justify-center">
            <div className="flex items-center gap-3 rounded bg-green-600 px-6 py-3 text-white shadow-lg">
                <span className="text-sm font-medium">
                    Markerad som åtgärdad
                </span>
                <FiCheck className="h-5 w-5" />
            </div>
        </div>
    )
}

export default ConfirmationPopup