import IDCard from "./components/IDCard";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-300 gap-6">
      <IDCard name="Rachel Nyinawabana" role="Student" id="KC23173" />
      <IDCard name="Gad Johnson" role="Developer" id="KC23174" />
      <IDCard name="Bob Smith" role="Designer" id="KC23175" />
    </div>
  );
}

export default App;