import { Link, useLocation } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

function MenuMobile({ open, closeNavbar, items, logo }) {
  const location = useLocation();

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-red-50 shadow-lg z-60 transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {logo ? (
        <div className="flex items-center justify-between px-4 py-6">
          <Link to="/" onClick={closeNavbar}>
            <img src={logo} className="w-24" alt="Logo da Nginax Company" />
          </Link>
          <button onClick={closeNavbar} className="text-red-600">
            <CloseOutlined size={24} />
          </button>
        </div>
      ) : null}
      <ul className="flex flex-col items-center gap-6 mt-10 text-lg text-neutral-700 font-medium">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={closeNavbar}
            className={`hover:text-red-700 transition ${
              location.pathname === item.path
                ? "text-red-700"
                : "cursor-pointer"
            }`}
          >
            <Link to={item.path}>{item.nome}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-center gap-4">
        <button className="px-6 py-2 text-neutral-800 hover:text-red-700">
          Entrar
        </button>
        <button className="px-6 py-2 rounded-xl bg-neutral-800 hover:bg-red-700 text-neutral-50">
          Registrar
        </button>
      </div>
    </div>
  );
}

export default MenuMobile;
