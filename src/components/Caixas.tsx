export default function Caixas(props: any) {
    return (
        <div className={`
        flex justify-center items-center
        bg-neutral-600
        w-1/4 h-96
        text-5xl font-thin
        `}>
            Caixas
            {100 * 100}  {/*Itens ou operadores dentro de caixas funcionam como comandos em javascript */}
        </div>
    )
}