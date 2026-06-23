import MainLayout from "../layout/MainLayout";
import Button from "../components/Button";

export default function LandingPage() {
  return (
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center">
        <div className="glass rounded-global p-10 max-w-3xl text-center">
          <h1 className="text-6xl font-bold mb-6">
            Automate your job applications
          </h1>

          <p className="text-lg opacity-80 mb-8">
            Smart job matching, CV optimization, auto apply and application tracking.
          </p>

          <Button>
            Start Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}