import Image from "next/image"

export default function ImagemAleatoria() {

    let pesquisa: string = ''

    const url = 'https://source.unsplash.com/featured/300x300?'


    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function renderizarBotao(valor: string) {
        return (
            <button className={`
            px-4 py-2 rounded-md bg-red-700`}
                onClick={() => {
                    pesquisa = valor
                    console.log(urlImagem())
                }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-yellow-50 p-7">
            <Image src={urlImagem()} height={200} width={200} alt="Imagem" />
            <div className="flex gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('cat')}
                {renderizarBotao('mimic')}
            </div>
        </div>
    )
}