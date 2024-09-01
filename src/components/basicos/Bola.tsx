interface bolaProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Bola(props: bolaProps) {
    console.log(props)
    return (
        <div className={`
        flex justify-center items-center
        w-64 h-64 bg-green-300 text-black
        text-3xl font-black
        ${props.quasePerfeito ? 'rounded-3xl' : 'rounded-full'}
        `}>

            {props.texto}

        </div>
    )
}