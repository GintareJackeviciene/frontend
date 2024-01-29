import useApiData from "../../hooks/useApiData.jsx";
import { baseApiUrl } from "../../helper.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const itemsUrl = 'http://localhost:3000/api/students';

export default function ListPage() {

   
    const [studentList, setStudentList] = useApiData(`${baseApiUrl}students`);

    const navigate = useNavigate();


    function handleDelete (idToDelete) {
        console.log('deleting post ===', idToDelete);
        //siusti uxklausa istrynimui
        //http://localhost:3000/api/students/5
        const delUrl =`${itemsUrl}/${idToDelete}`
        axios
        .delete(delUrl)
        .then(ats => {
         console.log('ats  ===', ats ); 
         //atnaujiname sarasa
         const updatedList = studentList.filter((item) => item.id !== idToDelete);
         setStudentList(updatedList);
        })
        .catch(error => {
           console.warn('ivyko klaida', error)
        })
    }


    return (
        <div className='container mx-auto p-4'>
        <h1 className='text-4xl'>Studentų sąrašas</h1>
    
        <div className='mt-5'>
            <table className="min-w-full table-auto">
                <thead className="bg-gray-600 text-white">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Vardas</th>
                        <th className="px-4 py-2">Pavardė</th>
                        <th className="px-4 py-2">El. paštas</th>
                        <th className="px-4 py-2">Veiksmai</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((studentas) => (
                        <tr key={studentas.id} className="bg-gray-200">
                            <td className="border px-4 py-2">{studentas.id}</td>
                            <td className="border px-4 py-2">{studentas.firstname}</td>
                            <td className="border px-4 py-2">{studentas.lastname}</td>
                            <td className="border px-4 py-2">{studentas.email}</td>
                            <td className="border px-4 py-2">
                                <button
                                onClick={() => navigate (`/edit-student/${studentas.id}`)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white 
                                    font-bold py-1 px-3 rounded mr-2 transition-all duration-300"
                                >
                                    Atnaujinti
                                </button>
                                <button
                                onClick={() => handleDelete(studentas.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white 
                                    font-bold py-1 px-3 rounded transition-all duration-300"
                                >
                                    Ištrinti
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}
