import { useState } from "react";

import JobCard from "../components/JobCard";
import JobDetails from "../components/JobDetails";
import { useJobs } from "../hooks/useJobs";

export default function JobsPage(){

    const { jobs } = useJobs();

    const [selectedJob, setSelectedJob] = useState(null);

    return(

        <div className="pt-28 px-8">

            <div className="grid lg:grid-cols-2 gap-8">

                <div className="space-y-6">

                    {jobs.map(job=>(

                        <JobCard
                            key={job.id}
                            job={job}
                            onClick={()=>setSelectedJob(job)}
                        />

                    ))}

                </div>

                <JobDetails job={selectedJob}/>

            </div>

        </div>

    );

}