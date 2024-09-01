import Evento from "@/components/basicos/Evento";

export default function paginaEventos () {
    return (
        <div className={`
            flex flex-wrap justify-center items-center
            h-screen bg-slate-600 gap-5
        `}>
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}