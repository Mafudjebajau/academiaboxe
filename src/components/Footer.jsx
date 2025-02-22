import { useEffect, useState } from "react";

export default function Footer() {
 const [mydate, setmydate] = useState([])
 //  setmydate(d.getFullYear())
 useEffect(()=>{
  const d = new Date
  setmydate(d.getFullYear())
},[])
    return (
      <footer className="bg-black text-white text-center p-4 mt-8">
        <p>© {mydate} Academia de Boxe - Todos os direitos reservados.</p>
      </footer>
    );
  }
  