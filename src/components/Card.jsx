import { useNavigate } from 'react-router-dom';

const GitCard = ({ data }) => {
    const navigate = useNavigate();  // Hook to navigate between routes

    const goBack = () => {
      navigate('/');  // Redirect to the "/" route (Input page)
    };

    return (
        
      <div className="flex justify-center items-center min-h-screen">
        <button onClick={goBack} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-10">Username</button>
        <div className="relative bg-white w-1/4 rounded-lg shadow-lg h-72 m-4">
          <div className="bg-blue-500 w-full h-20 rounded-t-lg"></div>
          <img
            src={data.avatar_url}
            alt="Profile"
            className="rounded-full h-20 w-20 mx-auto object-center border-4"
          />
          <div className="text-center">
            <h2 className="text-xl">{data.name}</h2>
            <p className="text-gray-500 text-md">{data.login}</p>
          </div>
          <div className="flex justify-around text-center mt-6 pb-4">
            <div>
              <h3 className="font-bold text-lg">{data.public_repos}</h3>
              <p className="text-gray-500 text-sm">REPOs</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">{data.id}</h3>
              <p className="text-gray-500 text-sm">Id</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GitCard;
  