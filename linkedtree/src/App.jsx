import mee from './assets/mee.jpeg'


export default function App() {

  const links = [
    {
      color: "bg-cyan-400",
      text:"Linkedin profile",
      link: "https://www.linkedin.com/in/ndifreke-etukudo/"
    },
    {
      color: "bg-teal-400",
      text:"Github account",
      link: "https://github.com/frekeB"
    },
    {
      color: "bg-orange-400",
      text:"Find ingredient for your meal",
      link: "https://dancing-parfait-29d453.netlify.app/"
    },
    {
      color: "bg-sky-500",
      text:"Music app - team projec",
      link: "https://smooze.netlify.app/"
    },
  ];


  return (
    <div className ="w-full h-screen bg-emerald-300">

      <div className="max-w-2xl mx-auto h-screen">
        <div className='h-40 w-40 mx-auto'> 
        <div className='aspect-w-1 aspect-h-1' >
          <img src = {mee} alt ="Mee" className= "rounded-full object-cover object-center"/>;
          
          </div>
          </div>
          <div>
          <h1> Ndifreke Etukudo </h1>
          <p> Making software development a delight not a hassle</p>
          </div>
      </div>
      
    </div>
  )
}