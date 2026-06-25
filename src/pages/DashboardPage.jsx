import MainLayout from "../layout/MainLayout";


const DashboardPage = () => {
    return (
        <MainLayout>
            <div className="min-h-screen p-8 pt-28 bg-gradient-to-br from-slate-900 to-slate-800 dark:text-white">

                <h1 className="text-4xl font-bold mb-8">
                    Dashboard
                </h1>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="rounded-3xl p-6 backdrop-blur-xl bg-white/10 border border-white/20">
                        <h2 className="text-xl font-semibold">
                            Applications
                        </h2>
                        <p className="text-3xl mt-4">12</p>
                    </div>

                    <div className="rounded-3xl p-6 backdrop-blur-xl bg-white/10 border border-white/20">
                        <h2 className="text-xl font-semibold">
                            Auto Apply Logs
                        </h2>
                        <p className="text-3xl mt-4">8</p>
                    </div>

                    <div className="rounded-3xl p-6 backdrop-blur-xl bg-white/10 border border-white/20">
                        <h2 className="text-xl font-semibold">
                            Match Score
                        </h2>
                        <p className="text-3xl mt-4">87%</p>
                    </div>

                </div>

                <div className="mt-10 rounded-3xl p-6 backdrop-blur-xl bg-white/10 border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4">
                        Recent Applications
                    </h2>

                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-white/5">
                            Backend Developer - Remote
                        </div>

                        <div className="p-4 rounded-xl bg-white/5">
                            Python Developer - Hybrid
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default DashboardPage;