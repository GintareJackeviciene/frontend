export default function LoginPage() {
    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-3xl my-5'>Login here</h1>
           
            <form className='w-full mx-auto max-w-sm'>
                <div className='mb-8'>
                    <label
                        htmlFor='firstname'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Vardas
                    </label>
                    <input
                        type='text'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    {/* {formik.touched['firstname'] && formik.errors['firstname'] && (
                        <p className='text-red-600'>{formik.errors['firstname']}</p>
                    )} */}
                </div>
                <div className='mb-8'>
                    <label
                        htmlFor='lastname'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Pavardė
                    </label>
                    <input
                        type='text'
                       
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    {/* {formik.touched['lastname'] && formik.errors['lastname'] && (
                        <p className='text-red-600'>{formik.errors['lastname']}</p>
                    )} */}
                </div>
                <div className='mb-8'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        EL. paštas
                    </label>
                    <input
                        type='email'
                        id='email'
                        
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    {/* {formik.touched['email'] && formik.errors['email'] && (
                        <p className='text-red-600'>{formik.errors['email']}</p>
                    )} */}
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}
