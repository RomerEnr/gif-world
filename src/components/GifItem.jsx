import { CopyToClipboard } from "react-copy-to-clipboard";

export const GifItem = ({ title, url }) => {
  return (
    <tbody>
      <tr className="border-b">
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <p>{title}</p>
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <p>{crypto.getRandomValues(new Uint8Array(1))[0]}</p>
        </td>
        <td className="flex flex-col items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <img className=" w-full h-full object-cover" src={url} alt={title} />
          <CopyToClipboard
            text={url}
          >
            <button
              id="btn"
              className="mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              ¡Copy Gif!
            </button>
          </CopyToClipboard>
        </td>
      </tr>
    </tbody>
  );
};
