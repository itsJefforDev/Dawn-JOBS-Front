import MainLayout from "../layout/MainLayout";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex justify-center items-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
}