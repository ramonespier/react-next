import Caixas from "@/components/Caixas";

export default function PaginaCaixa () {
    return (
        <div className="flex gap-5 p-5">
            <Caixas>#1</Caixas>
            <Caixas>#2</Caixas>
            <Caixas>#3</Caixas>
            <Caixas>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Caixas>
        </div>
    )
}