import mePic from "../assets/me.jpeg";

function IDCard({ name, role, id }) {
  return (
    <div className="w-64 p-4 border rounded-lg shadow-md bg-white text-center">
      <img
        src={mePic}
        alt="profile"
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-500"> {role}</p>
      <p className="text-sm">ID: {id}</p>
    </div>
  );

}

export default IDCard;