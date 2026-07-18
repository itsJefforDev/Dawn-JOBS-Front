import { applyJob } from "../services/jobsService";

export default function JobDetails({ job }) {

    if (!job)
        return (
            <div className="glass rounded-3xl p-10">
                Selecciona una vacante
            </div>
        );

    async function handleApply(){

        await applyJob(job.id);

        alert("Aplicación enviada correctamente");

    }

    return (

        <div className="glass rounded-3xl p-8 sticky top-28">

            <h1 className="text-3xl font-bold">

                {job.title}

            </h1>

            <p className="mt-5">

                <strong>Empresa:</strong> {job.company}

            </p>

            <p>

                <strong>Ubicación:</strong> {job.location}

            </p>

            <p>

                <strong>Modalidad:</strong> {job.modality}

            </p>

            <p>

                <strong>Salario:</strong> ${job.salary}

            </p>

            <div className="mt-8">

                <h2 className="font-bold">

                    Descripción

                </h2>

                <p className="mt-3">

                    {job.description}

                </p>

            </div>

            <button
                onClick={handleApply}
                className="mt-8 w-full rounded-xl bg-blue-600 py-3"
            >

                Aplicar

            </button>

        </div>

    );

}