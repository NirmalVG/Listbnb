import LoginForm from "@/components/LoginForm/LoginForm.tsx";
import Register from "@/components/Register/Register.tsx";

const LoginPage = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          <LoginForm />
          <Register />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
