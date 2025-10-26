import { useEffect} from "react";
import { useLocation} from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start"});
}, 100); // pequeno delay para garantir que o DOM esteja pronto
}
}
}, [location]);

  return null;
}
