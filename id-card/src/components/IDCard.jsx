function IDCard() {
  return (
    <div className="w-64 p-4 border rounded-lg shadow-md bg-white text-center">
      <img
        src="me.jpeg"
        alt="profile"
        className="w-24 h-24 mx-auto rounded-full"
      />
      <h2 className="text-lg font-bold mt-2">Rachel Nyinawabana</h2>
      <p className="text-gray-500">Student</p>
      <p className="text-sm">ID: KC23173</p>
    </div>
  );
}

export default IDCard;