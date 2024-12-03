import Register from "@/components/Register/Register";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          <RegisterForm />
          <Register />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
