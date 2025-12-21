// src\pages\deviation.tsx
import Primary from "../components/primary";
import deviationsData from "../data/data.json"
import type { Deviation, DeviationStatus } from "../types/deviation";
import Button from "../components/UI/button";
import { useState } from "react";
import ConfirmationPopup from "../components/UI/confirmationPopup";

// Main page

const DeviationsPage = () => {

  const [statusFilter, setStatusFilter] = useState<DeviationStatus>("rejected");
  const [showConfirmation, setShowConfirmation] = useState(false);


  // The deviations
  const [deviations, setDeviations] = useState<Deviation[]>(
    deviationsData as Deviation[]
  );

  // To keep track of the resolved and rejected in the filter buttons e.g "Aktuella (4)"
  const rejectedCount = deviations.filter(d => d.status === "rejected").length;
  const resolvedCount = deviations.filter(d => d.status === "resolved").length;

  // Simple filtering logic by, rejected & resolved
  const filteredDeviations = deviations.filter(
    deviation => deviation.status === statusFilter
  );

  // Updates a deviation by id
  const resolveDeviation = (id: number) => {
    setDeviations(prev =>
      prev.map(d =>
        d.id === id ? { ...d, status: "resolved" } : d
      )
    );

    // Displays a short confirmation after resolving a deviation   
    setShowConfirmation(true);
    // Remove after 800ms
    setTimeout(() => {
      setShowConfirmation(false);
    }, 800);
  };

  // Undo deviation
  const rejectDeviation = (id: number) => {
    setDeviations(prev =>
      prev.map(d =>
        d.id === id ? { ...d, status: "rejected" } : d
      )
    );
  };

  return (
    <main className="m-2 lg:m-5">
      {showConfirmation && <ConfirmationPopup />}
      <h1 className="text-5xl font-semibold">Avvikelser</h1>

      {/* Status filter: rejected / resolved */}
      <div className=" flex flex-col gap-6 my-6">
        <div className="space-y-3">
          <p className="text-neutral-500 text-sm">Filtrera avvikelser</p>
          <div className=" flex justify-between max-lg:items-end">
            <div className="lg:space-x-5 max-lg:space-y-2 max-lg:w-full">
              <Button
                onClick={() => setStatusFilter("rejected")}
                className={`border border-neutral-300 max-lg:w-full ${statusFilter === "rejected"
                  ? "bg-neutral-200 text-neutral-900"
                  : "bg-white hover:bg-neutral-50"}`}>
                Aktuella ({rejectedCount})
              </Button>
              <Button
                onClick={() => setStatusFilter("resolved")}
                className={`border border-neutral-300 max-lg:w-full ${statusFilter === "resolved"
                  ? "bg-neutral-200 text-neutral-900"
                  : "bg-white hover:bg-neutral-50"}`}>
                Avslutade ({resolvedCount})
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full gap-4">
          <span className="text-sm text-neutral-500">
            {statusFilter === "rejected"
              ? "Aktuella avvikelser"
              : "Avslutade avvikelser"}
          </span>
          <hr className="flex-1 border-t border-neutral-300" />
        </div>
      </div>

      <div className="space-y-5">
        {filteredDeviations.map((deviation => (
          <Primary
            key={deviation.id}
            deviation={deviation}
            onResolve={() => resolveDeviation(deviation.id)}
            onUndo={() => rejectDeviation(deviation.id)} />
        )))
        }
      </div>
    </main>
  );
};

export default DeviationsPage;
