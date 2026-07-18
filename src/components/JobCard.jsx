import { MapPin, Building2 } from "lucide-react";

export default function JobCard({ job, onClick }) {

    return (

        <div
            onClick={onClick}
            className="glass rounded-3xl p-6 cursor-pointer transition hover:scale-[1.02]"
        >

            <h2 className="text-xl font-bold">

                {job.title}

            </h2>

            <div className="mt-3 flex gap-2 items-center">

                <Building2 size={16}/>

                {job.company}

            </div>

            <div className="mt-2 flex gap-2 items-center">

                <MapPin size={16}/>

                {job.location}

            </div>

            <div className="mt-4">

                <span className="glass px-3 py-1 rounded-full">

                    {job.modality}

                </span>

            </div>

        </div>

    );

}