import { Clock } from "lucide-react";
import { companyInfo } from "@/lib/data";

export function BusinessHours() {
  return (
    <div className="bg-coconut-cream rounded-2xl border border-border p-6">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="h-5 w-5 text-coconut-green" />
        <h3 className="font-bold text-lg">Business Hours</h3>
      </div>
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span className="text-muted-foreground">Weekdays</span>
          <span className="font-medium">{companyInfo.businessHours.weekdays}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-muted-foreground">Sunday</span>
          <span className="font-medium">{companyInfo.businessHours.sunday}</span>
        </li>
      </ul>
    </div>
  );
}
