
import {useState,useEffect} from 'react'
import Pagination from '../Pagination/Pagination'
import DeleteButton from '@/app/components/Event/delete'
import { getAuthToken } from '@/app/lib/middleware/apiInceptor';
import axios from 'axios';

export default function WaitingForApproval({news}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Set your desired items per page
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [paginatedEvents, setPaginatedEvents] = useState([]);
  
    useEffect(() => {
      const indexOfLastEvent = currentPage * itemsPerPage;
      const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
      setPaginatedEvents(news.slice(indexOfFirstEvent, indexOfLastEvent));
    }, [currentPage, itemsPerPage, news]);


    const handleStatusChange = async (uuid, status) => {
        try {
          const token = getAuthToken(); // Get the authentication token
          await axios.put(`https://lnct-backend.vercel.app/api/v1/news/approve/${uuid}`, {
            status
          }, {
            headers: {
              Authorization: `Bearer ${token}` // Pass the token in the request headers
            }
          });
          // Update the notices list by removing the updated notice
          setPaginatedEvents(prevNotices => prevNotices.filter(notice => notice.uuid !== uuid));
        } catch (error) {
          console.error(`Error changing notice status to ${status}:`, error);
        }
      };
    
  
    const handleDelete = (uuid) => {
      setSelectedEventId(uuid);
      setShowDeleteModal(true);
    };
  
    const handleEdit = (uuid) => {
      onEdit(uuid);
    };
  
    const handleCancelDelete = () => {
      setShowDeleteModal(false);
      setSelectedEventId(null);
    };
  
    const handleConfirmDelete = () => {
      onDelete(selectedEventId);
      setShowDeleteModal(false);
      setSelectedEventId(null);
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  return (
   <>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className='text-xl font-bold p-6'>News</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedEvents.map((news, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "even:bg-gray-50 even:dark:bg-gray-800"
                  : "odd:bg-white odd:dark:bg-gray-900"
              } border-b dark:border-gray-700`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {news.title}
              </td>
              <td className="px-6 py-4">{news.description}</td>
              <td className="px-6 py-4">
              <button
                    onClick={() => handleStatusChange(news.uuid, 'APPROVED')}
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Approve
                  </button>
              </td>
              <td className="px-6 py-4">
              <button
                    onClick={() => handleStatusChange(news.uuid, 'REJECTED')}
                    className="font-medium text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    Reject
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination component */}
      <Pagination
        totalItems={news.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <DeleteButton
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
   
   
   </>
  )
}
