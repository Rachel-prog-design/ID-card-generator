function ProfileCard({ image, name, role }) {
  return (
    <div className="bg-white text-black p-4 rounded shadow text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full"
      />
      <h2 className="mt-2 font-bold">{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;