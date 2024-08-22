import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  async function getData() {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result.showAll);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  const handleDelete = async(id) => {
  const response = await fetch(`http://localhost:5000/${id}`,{method:'DELETE'});
  const result = await response.json();
  if (!response.ok) {
    console.log(result.error);
    setError(result.error);
  }
  if (response.ok) {
    setError("Deleted Succesfully");
    setTimeout(() => {
      setError("");
      getData();
      
    }, 2000);
  }

  }

  return (

    <div class="mx-auto max-w-full ">
      <h1 class="text-4xl font-bold text-blue-500 dark:text-white mb-4">All Details</h1>
      {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Error:-</span> {error}
</div>}
      <div class="mx-3 grid grid-cols-4 gap-4">

{data?.map((ele)=>(
        <div key={ele._id} class=" w-full pt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
        <div class="flex flex-col items-center pb-10">
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {ele.name}</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Email: {ele.email}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">Age: {ele.age}</span>
          <div class="flex mt-4 md:mt-6">
            <a onClick={()=>handleDelete(ele._id)} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</a>
            <Link to={`/${ele._id}`} class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</Link>
          </div>
        </div>
      </div>
))}
      </div>

    </div>

  )
}

export default Read