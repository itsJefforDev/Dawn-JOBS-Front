import api from "../../../services/api";

export const getAllJobs = async () => {
    const { data } = await api.get("/jobs/all");
    return data;
};

export const getMatchedJobs = async () => {
    const { data } = await api.get("/jobs/matches");
    return data;
};

export const getJobById = async (id) => {
    const { data } = await api.get(`/jobs/${id}`);
    return data;
};

export const applyJob = async (jobId) => {
    const { data } = await api.post("/applications", {
        job_id: jobId
    });

    return data;
};