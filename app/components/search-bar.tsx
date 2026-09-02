
import { Calendar, MapPin, Search, Users } from "lucide-react";
import Field from "./field";

export default function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-4xl rounded-2xl border border-white/15 bg-stone-950/40 p-3 backdrop-blur-xl sm:p-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
        <Field icon={<MapPin className="h-4 w-4" />} label="Destination" value="Mount Bromo" />
        <Field icon={<Calendar className="h-4 w-4" />} label="When" value="Aug — Sep 2026" />
        <Field icon={<Users className="h-4 w-4" />} label="Travellers" value="2 adults" />
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
          <Search className="h-4 w-4" /> Search
        </button>
      </div>
    </div>
  );
}