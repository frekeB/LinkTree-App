import mee from "./assets/mee.jpeg";

export default function App() {
  const links = [
    {
      color: "bg-violet-400",
      text: "Linkedin profile",
      link: "https://www.linkedin.com/in/ndifreke-etukudo/",
    },
    {
      color: "bg-red-300",
      text: "Github account",
      link: "https://github.com/frekeB",
    },
    {
      color: "bg-orange-400",
      text: "Find ingredient for your meal",
      link: "https://dancing-parfait-29d453.netlify.app/",
    },
    {
      color: "bg-sky-500",
      text: "Smoove Music app - team project",
      link: "https://smooze.netlify.app/",
    },
  ];

  return (
    <div className="w-full h-screen bg-emerald-300 flex justify-center items-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className="h-40 w-40 mx-auto">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={mee}
              alt="Mee"
              className="rounded-full object-cover object-center"
            />
          </div>
        </div>
        <div className="text-center p-3">
          <h1 className="font-bold text-4xl pt-7"> Ndifreke Etukudo </h1>
          <p className="text-lg mt-3">
            Making software development a delight not a hassle! since 2022
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {links.map(({ text, color, link }, index) => {
            return (
              <a href={link} key={index} target="_blank">
                <div
                  className={`w-80 sm:w-96 mx-auto  ${color} text-center text-xl font-bold py-3 border-2
         border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
                >
                  {text}
                </div>
              </a>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}
