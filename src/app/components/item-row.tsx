import Image from 'next/image'
export default function ItemRow({ registro}: any, {key}: any) {
    return (
        <div id={key} className="grid grid-cols-2 gap-4 p-4">
            <div>
                <div id={key+"-titulo"} className="p-1 font-ultra">
                    {registro.titulo}
                </div>
                <div id={key+"-descripcion"} className="p-1 font-outfit">
                    {registro.descripcion}
                </div>
                <div id={key+"-precio"} className="p-1 font-outfit">
                    {registro.precio}
                </div>
                <div id={key+"-categoria"} className="p-1 font-outfit">
                    {registro.categoria}
                </div>
            </div>
            <div>
                <div className="p-1">
                    <Image  id={key+"-foto"} src={registro.foto} width={500} height={500} alt={registro.titulo} />
                </div>
            </div>
        </div>
    )
}