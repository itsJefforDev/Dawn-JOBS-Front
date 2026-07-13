import { useEffect, useState } from "react";
import * as service from "../services/jobsService";

export function useJobs() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {

        setLoading(true);

        try{
            const data = await service.getAllJobs();
            setJobs(data);
        }
        finally{
            setLoading(false);
        }

    };

    return {
        jobs,
        loading,
        reload: loadJobs
    };

}