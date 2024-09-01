export default function Caixas(props: any) {
    return (
        <div className={`
        flex justify-center items-center
        bg-neutral-600
        w-1/4 h-96
        text-2xl font-thin
        `}>
            {props.children}  {/*Itens ou operadores dentro de caixas funcionam como comandos em javascript */}
        </div>
    )
}