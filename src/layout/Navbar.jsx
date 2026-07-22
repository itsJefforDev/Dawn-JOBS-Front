import { Link, useNavigate } from "react-router-dom";
import {
    UserCircle,
    Briefcase,
    FileText,
    Settings,
    LogOut,
    ChevronDown
} from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {

    const token = useSelector(state => state.auth.token);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [open,setOpen]=useState(false);

    const menuRef=useRef(null);

    useEffect(()=>{

        const handler=(e)=>{

            if(menuRef.current && !menuRef.current.contains(e.target))
                setOpen(false);

        }

        document.addEventListener("mousedown",handler);

        return ()=>document.removeEventListener("mousedown",handler);

    },[]);

    function handleLogout(){

        dispatch(logout());

        navigate("/");

    }

    return (

        <nav className="fixed top-0 w-full z-50 glass px-8 py-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                JobBot
            </h1>

            <div className="flex gap-8">

                <Link to="/">Home</Link>

                <Link to="/jobs">Jobs</Link>

                {token && (
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                )}

            </div>

            {!token ? (

                <div className="flex gap-3">

                    <Link to="/login">
                        Login
                    </Link>

                    <Link to="/register">
                        Register
                    </Link>

                </div>

            ) : (

                <div
                    className="relative"
                    ref={menuRef}
                >

                    <button
                        onClick={()=>setOpen(!open)}
                        className="flex items-center gap-2 hover:opacity-80"
                    >

                        <UserCircle size={36}/>

                        <ChevronDown size={18}/>

                    </button>

                    {open && (

                        <div className="absolute right-0 mt-3 w-64 glass rounded-3xl shadow-xl overflow-hidden">

                            <Link
                                to="/dashboard"
                                onClick={()=>setOpen(false)}
                                className="flex items-center gap-3 p-4 hover:bg-white/10"
                            >

                                <Briefcase size={18}/>

                                Dashboard

                            </Link>

                            <Link
                                to="/applications"
                                onClick={()=>setOpen(false)}
                                className="flex items-center gap-3 p-4 hover:bg-white/10"
                            >

                                <FileText size={18}/>

                                Mis postulaciones

                            </Link>

                            <Link
                                to="/profile"
                                onClick={()=>setOpen(false)}
                                className="flex items-center gap-3 p-4 hover:bg-white/10"
                            >

                                <Settings size={18}/>

                                Editar perfil

                            </Link>

                            <Link
                                to="/preferences"
                                onClick={()=>setOpen(false)}
                                className="flex items-center gap-3 p-4 hover:bg-white/10"
                            >

                                ⚙ Preferencias

                            </Link>

                            <Link
                                to="/cv"
                                onClick={()=>setOpen(false)}
                                className="flex items-center gap-3 p-4 hover:bg-white/10"
                            >

                                📄 Mi CV

                            </Link>

                            <hr className="border-white/10"/>

                            <button
                                onClick={handleLogout}
                                className="w-full text-left flex items-center gap-3 p-4 hover:bg-red-500/20 text-red-400"
                            >

                                <LogOut size={18}/>

                                Cerrar sesión

                            </button>

                        </div>

                    )}

                </div>

            )}

        </nav>

    );

}