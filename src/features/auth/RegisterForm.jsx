import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registerUser } from "../../services/authService";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-global space-y-4">
      <Input
        placeholder="Full Name"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />

      <Input
        placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}
      />

      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})}
      />

      <Button type="submit">
        Register
      </Button>
    </form>
  );
}