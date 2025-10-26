import {
  DesktopOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneFilled,
  UserOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import MenuMobile from "./components/MenuMobile";
import PortfolioModal from "./components/PortfolioModal";
import img_perfil from "./assets/images/img_perfil.png";

import { Progress } from "antd";

const itens = [
  { id: 1, path: "/", nome: "PÁGINA INICIAL" },
  { id: 2, path: "/#sobre-mim", nome: "SOBRE MIM" },
  { id: 3, path: "/#software", nome: "SOFTWARES" },
  { id: 4, path: "/#experiencia", nome: "EXPERIÊNCIA" },
  { id: 5, path: "/#sector", nome: "2 SECTOR" },
  { id: 6, path: "/#portfolio", nome: "PORTFÓLIO" },
  { id: 7, path: "/#contactos", nome: "CONTACTOS" },
];
function Portfolio() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const openModal = (section = null) => {
    setSelectedSection(section);
    setModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="flex flex-col">
        {/* Botão mobile */}
        <button onClick={toggleMenu} className="md:hidden text-neutral-600">
          <MenuOutlined size={24} />
        </button>

        {/* Menu lateral mobile */}
        <MenuMobile open={open} closeNavbar={closeMenu} items={itens} />

        <div className="bg-[url('./assets/images/img_bg.png')] bg-no-repeat bg-top md:bg-cover">
          <div className="flex flex-col md:flex-row py-35 gap-y-6 justify-around items-center bg-[#131466]/80">
            <div>
              <span className="bg-white rounded-full text-5xl my-color font-pirates py-5 px-6">
                all
              </span>
            </div>
            <div className="text-[#fefffd]">
              <h1 className="text-4xl font-pirates">Nginamau Mbuta</h1>
              <h3>Design Civil e Gráfico</h3>
              <br />
              <p>
                Projectos e Design Arquitectonico <br />
                Comunicação Visual Gráfica
              </p>
            </div>
          </div>
        </div>

        <nav>
          <ul className="hidden md:flex flex-wrap justify-center gap-x-5 py-4 text-sm text-[#3f3e5d] bg-[#e5e5e5]">
            {itens.map((item) => (
              <li
                key={item.id}
                className={
                  location.pathname == item.path
                    ? `font-bold`
                    : `hover:text-[#131466]`
                }
              >
                {console.log(location.host)}
                <Link to={item.path}>{item.nome}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <section id="sobre-mim" className="bg-[#e5e5e5] pt-8 px-4">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center">
            <h2 className="font-pirates text-4xl my-color text-center">
              Sobre Mim
            </h2>

            <div className="w-[50%] flex justify-center items-center my-color text-sm my-3">
              <div className="flex-grow border-t border-4"></div>
              <p className="text-white px-3 py-2 bg-[#131466] rounded-full">
                <UserOutlined />
              </p>
              <div className="flex-grow border-t border-4"></div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-x-2 justify-center items-center w-full">
              {/* Bloco Esquerdo */}
              <div className="flex flex-wrap gap-x-6 gap-y-4 max-w-[300px] justify-between text-center md:flex-col md:text-right">
                {[
                  { label: "Nome Completo", value: "Nginamau Pedro Mbuta" },
                  { label: "Aniversário", value: "27/06/2002" },
                  { label: "Organização", value: "RLPS / RUOBRAS" },
                  { label: "Nacionalidade", value: "Angolana" },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="font-pirates my-color text-xl">
                      {item.label}
                    </p>
                    <p className="my-color">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Imagem */}
              <div className="w-[200px] m-4 md:w-[300px]">
                <img
                  src={img_perfil}
                  alt="Imagem do Nginamau Mbuta"
                  className="h-[200px] md:h-[280px] rounded-full p-4 bg-white mx-auto"
                />
              </div>

              {/* Bloco Direito */}
              <div className="flex flex-wrap gap-x-6 gap-y-4 max-w-[300px] justify-center text-center md:flex-col md:text-left">
                {[
                  { label: "Endereço", value: "Cacuaco Vila, Salina" },
                  { label: "Telefone", value: "+244 931 068 988" },
                  { label: "Email", value: "nginamaumbuta@gmail.com" },
                  { label: "Web", value: "www.nginamaupedrombuta.com" },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="font-pirates my-color text-xl">
                      {item.label}
                    </p>
                    <p className="my-color text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="max-w-screen-md py-6 px-3 text-justify my-color">
              Sou um técnico polivalente apaixonado por criar, projectar e
              oferecer soluções impactantes em múltiplos campos, de
              arquitectura, arte, engenharia integrada, engenharia civil,
              engenharia metalomecânica, design, informática, marketing,
              eventos, liderança e formação. Combinando minhas diversas
              formações, busco sempre inovar, trazendo criatividade,
              funcionalidade sustentabilidade, acessibilidade, ergonomia dentre
              outros para cada projecto que abordo, com eficiência e eficácia.
              Criar e oferecer soluções eficientes e sustentáveis, capazes de
              elevar e melhorar a qualidade de vida e promover os objetivos de
              desenvolvimento sustentável...
            </p>

            <button className="bg-[#131466] py-3 px-6 rounded-full text-white text-lg font-pirates cursor-pointer md:text-2xl hover:bg-[#131466]/90">
              Baixar Perfil
            </button>
          </div>
        </section>
        <section id="software" className="bg-[#e5e5e5] pt-8 px-4">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center">
            <h2 className="font-pirates text-4xl my-color text-center">
              Softwares
            </h2>

            <div className="w-[50%] flex justify-center items-center my-color text-sm my-3">
              <div className="flex-grow border-t border-4"></div>
              <p className="text-white px-3 py-2 bg-[#131466] rounded-full">
                <DesktopOutlined />
              </p>
              <div className="flex-grow border-t border-4"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { label: "Autocad, Archicad", percent: 70 },
                { label: "Lumion, Revit", percent: 30 },
                { label: "Movavi - Vídeo", percent: 30 },
                { label: "XD, IA, Sites", percent: 40 },
                { label: "Photoshop, Sketchup", percent: 70 },
                { label: "MS Word, Excel, P. Point", percent: 60 },
              ].map((item, index) => (
                <div key={index} className="relative max-w-[380px] h-[40px]">
                  <Progress
                    percent={item.percent}
                    strokeColor="#131466"
                    trailColor="white"
                    size={[340, 44]}
                    className="font-bold text-lg!"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <span className="text-white font-pirates text-base">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="bg-[#e5e5e5] pt-8 px-4">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center">
            <h2 className="font-pirates text-4xl my-color text-center">
              Experiência
            </h2>

            <div className="w-[50%] flex justify-center items-center my-color text-sm my-3">
              <div className="flex-grow border-t border-4"></div>
              <p className="text-white px-3 py-2 bg-[#131466] rounded-full">
                <DesktopOutlined />
              </p>
              <div className="flex-grow border-t border-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
              {[
                {
                  id: 1,
                  label: "2021",
                  title: "Atelier de Arquitectura Traço G",
                  text: [
                    "Desenhador Projectista e Assistente",
                    "Elaboração de Desenho de Projecto",
                    "Arquitetónico, Modelagem 3D e render",
                  ],
                },
                {
                  id: 2,
                  label: "2022 - 2024",
                  title: "Metalotec - Construçao Civil",
                  text: [
                    "Metalotec - Construçao Civil",
                    "Designer Civil e Designer Grafico",
                    "Elaboração de Desenho de Projecto",
                    "Modelagem 3D, Render",
                    "Gestão de Marketing",
                  ],
                },
                {
                  id: 3,
                  label: "2021 - 2025",
                  title: "Formador Particular",
                  text: [
                    "De Desenho Esquiço, Técnico",
                    "Arquitectónico, Modelagem 3D",
                    "Designer Grafico, Desenhos Gráfico",
                    "Marketing, Renderização, Softwares",
                    "Gráficos, BIM, CAD e Adobe",
                    "(actualmente).",
                  ],
                },
                {
                  id: 4,
                  label: "2024 - 2025",
                  title: "RLPS - Construçoo Civil",
                  text: [
                    "Gestor do Escritório, Técnico de Arquitectura",
                    "Designer e Formador",
                    "Elaboração de Desenho de Projecto",
                    "Modelagem 3D, Render, Lideranca",
                    "Formação e Administracão",
                    "(actualmente).",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.id % 2 === 0
                      ? `md:items-start md:text-left`
                      : `md:items-end md:text-right`
                  } my-3 flex flex-col items-center text-center`}
                >
                  <div className="bg-[#131466] text-white py-3 px-8 rounded-full font-pirates text-lg ">
                    {item.label}
                  </div>
                  <h3 className="my-color font-pirates text-xl p-2">
                    {item.title}
                  </h3>
                  <ul className="my-color">
                    {item.text.map((it, index) => (
                      <li key={index}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* SECTOR */}
        <section id="sector" className="bg-[#e5e5e5] pt-8 px-4">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center">
            <h2 className="font-pirates text-4xl my-color text-center">
              Segundo Sector
            </h2>

            <div className="w-[50%] flex justify-center items-center my-color text-sm my-3">
              <div className="flex-grow border-t border-4"></div>
              <p className="text-white px-3 py-2 bg-[#131466] rounded-full">
                <DesktopOutlined />
              </p>
              <div className="flex-grow border-t border-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
              {[
                {
                  id: 1,
                  label: "2017 - 2025",
                  title: "Associaçao de Escuteiro de Angola",
                  text: "Membro da Associação, Dirigente, Secretario de Agrupamento, Instrutor da IIª Unidade Secção Júnior, Designer Gráfico, Membro da Comunicação e Imagem Escutista, Liderança, Formação e Organização.",
                },
                {
                  id: 2,
                  label: "2023 - 2025",
                  title: "Nginax Company",
                  text: "Empreendedor comprometido com o desenvolvimento social e o crescimento priorizando o crescimento pessoal e profissional da equipe e contribuindo para a transformação positiva da sociedade.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`my-3 flex flex-col items-center text-center`}
                >
                  <div className="bg-[#131466] text-white py-3 px-8 rounded-full font-pirates text-lg ">
                    {item.label}
                  </div>
                  <h3 className="my-color font-pirates text-xl p-2">
                    {item.title}
                  </h3>
                  <ul className="my-color">
                    <p className="max-w-120">{item.text}</p>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PORTFOLIO */}
        <section id="portfolio" className="bg-[#e5e5e5] pt-8 pb-19">
          <div className=" bg-[url('/images/portfolio/Arquitectura-7.jpeg')] bg-no-repeat bg-cover">
            <div className="flex flex-col md:flex-row py-40 gap-y-6 justify-around items-center bg-[#131466]/80">
              <div>
                <button
                  onClick={() => openModal()}
                  className="bg-white rounded-full text-3xl my-color font-pirates py-3 px-6 cursor-pointer"
                >
                  Ver Portfólio
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 pt-10">
            <a
              href="/docs/portfolio_nginamau_mbuta.pdf"
              download
              className="bg-[#131466] py-3 px-6 rounded-full text-white text-lg font-pirates cursor-pointer md:text-2xl hover:bg-[#131466]/90"
            >
              Baixar Portfólio
            </a>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              {[
                { label: "nginamaumbuta arquitectura" },
                { label: "nginamaumbuta engenharia" },
                { label: "nginamaumbuta formação" },
                { label: "nginamaumbuta design" },
                { label: "nginamaumbuta arte" },
                { label: "nginamaumbuta informatica" },
                { label: "nginamaumbuta eventos" },
                { label: "nginamaumbuta marketing" },
              ].map((item, index) => (
                <div key={index} className="w-[360px]">
                  <div className="bg-[#131466] text-white py-2 px-6 rounded-full text-lg text-center">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CONTACTOS */}
        <section id="contactos" className="bg-[#e5e5e5] pt-8 px-4 pb-19">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center">
            <h2 className="font-pirates text-4xl my-color text-center">
              Contactos
            </h2>

            <div className="w-[50%] flex justify-center items-center my-color text-sm my-3">
              <div className="flex-grow border-t border-4"></div>
              <p className="text-white px-3 py-2 bg-[#131466] rounded-full">
                <PhoneFilled className="rotate-90" />
              </p>
              <div className="flex-grow border-t border-4"></div>
            </div>
            <div className="flex flex-col text-center gap-y-4">
              <div className="bg-[#131466] text-white py-2 px-3 rounded-full text-lg ">
                <span className="px-2">
                  <a href="http://wa.me/244931068988" target="_blank" rel="noopener noreferrer">
                  <WhatsAppOutlined className="mr-1 p-1 bg-white my-color rounded-full" />
                  </a>
                  <a href="tel:+244931068988">
                  <PhoneFilled className="rotate-90 p-1 bg-white my-color rounded-full" />
                  </a>
                </span>{" "}
                931068988
              </div>
              <div className="bg-[#131466] text-white py-2 px-3 rounded-full text-lg ">
                <span className="px-2">
                  <a href="http://wa.me/244955735923" target="_blank" rel="noopener noreferrer">
                  <WhatsAppOutlined className="mr-1 p-1 bg-white my-color rounded-full" />
                  </a>
                  <a href="tel:+244955735923">
                  <PhoneFilled className="rotate-90 p-1 bg-white my-color rounded-full" />
                  </a>
                </span>{" "}
                955735923
              </div>
              <div className="bg-[#131466] text-white py-2 px-3 rounded-full text-lg ">
                <span className="px-2">
                  <a href="mailto:nginamaumbuta@gmail.com">
                  <MailOutlined className="mr-1 p-1 bg-white my-color rounded-full" />
                  </a>
                </span>{" "}
                nginamaumbuta@gmail.com
              </div>
              <div className="bg-[#131466] text-white py-2 px-3 rounded-full text-lg ">
                <span className="px-2">
                  <a href="https://www.facebook.com/share/174xg7Rhkx/" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined className="mr-1 p-1 bg-white my-color rounded-full" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined className="p-1 bg-white my-color rounded-full" />
                  </a>
                </span>{" "}
                Nginamau Pedro
              </div>
            </div>
          </div>
        </section>
      </main>
      <PortfolioModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        section={selectedSection}
      />
    </div>
  );
}

export default Portfolio;
