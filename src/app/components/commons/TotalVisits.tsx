import { TrendingUp } from "lucide-react";

export function TotalVisits() {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg">
      <span className="text-white font-bold">Total Visits</span>
      <div className="flex items-center gap-2 text-green-100">
        <span className="text-3xl font-bold">1,234</span>
        <TrendingUp />
      </div>
      {/* <div className="flex items-center gap-2">
        <Button>Portal</Button>
        <Button>Sair</Button>
      </div> */}
    </div>
  )
}