import { useState } from "react";

function Table() {
	const data = [
		{ id: 1, title: 'Document 1 Add more data as needed' },
		{ id: 2, title: 'Document 2 Add more data as needed' },
		{ id: 3, title: 'Document 2Document 2 dhsdhb shbsdhb sdhbdhb' },
		// Add more data as needed
	  ];

	return (
		<>
	    <div className="container mx-auto mt-8">
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Number</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-orange-400">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2 md:py-3 text-center text-black">{item.id}</td>
                <td className="border px-4 py-2 md:py-3 text-black text-center text-sm w-3/4">{item.title}</td>
                <td className="border px-4 py-2 md:py-3 text-center">
                  <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">
                    View / Download
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
		</>
	);
}

export default Table;
