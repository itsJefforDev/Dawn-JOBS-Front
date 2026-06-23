import MainLayout from "../layout/MainLayout";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex justify-center items-center">
        <RegisterForm />
      </div>
    </MainLayout>
  );
}