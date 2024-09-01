import Bola from "@/components/basicos/Bola";

export default function paginaBolas() {
    return (
        <div className={`
        flex justify-evenly items-center
        h-screen bg-green-800
        `}>
            <Bola texto="Bola #1"/>
            <Bola texto="Bola #2"></Bola>
            <Bola texto="Bola #3" quasePerfeito></Bola>
            <Bola texto="Bola#4"></Bola>
        </div>
    )
}