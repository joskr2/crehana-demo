import React from "react";

const List: React.FC = () => {

    return (
        <table className="table-auto">
            <thead>
            <tr>
                <th className="px-4 py-2">Nombre del pais</th>
                <th className="px-4 py-2">Capital</th>
                <th className="px-4 py-2">Bandera</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border px-4 py-2">Peru</td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">858</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="border px-4 py-2">Chile
                </td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">112</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Bolivia</td>
                <td className="border px-4 py-2">Chris</td>
                <td className="border px-4 py-2">1,280</td>
            </tr>
            </tbody>
        </table>
    )
}

export default List;