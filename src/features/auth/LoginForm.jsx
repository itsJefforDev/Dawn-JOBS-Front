import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);

    dispatch(login(res.access_token));
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-global space-y-4">
      <Input
        placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}
      />

      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})}
      />

      <Button type="submit">Login</Button>
    </form>
  );
}