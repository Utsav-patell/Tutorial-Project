import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const {id} = useParams();
  

  const getSingleUser = async ()=>{
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(response.ok){
      console.log("Updated Response :",result);
      setError("");
      setName(result.singleUser.name);
      setAge(result.singleUser.age);
      setEmail(result.singleUser.email);

    }

    
  }
  useEffect(() => {
    getSingleUser();

  }, [])
  return (
  <div class="w-full max-w-xs mx-auto mt-10">
  {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 <span class="font-medium">Error:-</span> {error}
</div>}   
 <form class="bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4">
   <h2 class="text-4xl font-bold text-blue-500 dark:text-white mb-4">Edit Details</h2>
   <div class="mb-4">
     <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Name
     </label>
     <input value={name} onChange={(e)=> setName(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="name" type="text" placeholder="Name"/>
   </div>
   <div class="mb-4">
     <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
       Email
     </label>
     <input value={email} onChange={(e)=> setEmail(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="email" type="email" placeholder="22bt04@gmail.com"/>
   </div>
   <div class="mb-6">
     <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
       Age
     </label>
     <input value={age} onChange={(e)=> setAge(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline" id="age" type="number" placeholder="21 years"/>
   </div>
   <div class="flex items-center justify-between">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       Edit
     </button>
   </div>
 </form>
 <p class="text-center text-gray-500 text-xs">
 </p>
</div>

  )
}

export default Update