import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-6 text-white text-center">
            <p className="mb-4">Copyright © 2024 Coração de Algodão</p>
            <Link to="/privacidade-de-dados" className="text-blue-400 hover:text-blue-600">
                Política de Privacidade
            </Link>
        </footer>
    );
}