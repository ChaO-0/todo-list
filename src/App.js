import bgLight from './images/bg-desktop-light.jpg';
import moonIcon from './images/icon-moon.svg';
import List from './components/List';

function App() {
  return (
    <div
      className="bg-scroll font-body h-72"
      style={{ backgroundImage: `url(${bgLight})` }}
    >
      <div className="container mx-auto md:max-w-xl max-w-sm pt-16 text-white font-bold">
        <div className="flex justify-between text-4xl tracking-widest">
          <div>T O D O</div>
          <img src={moonIcon} className="w-10 cursor-pointer" alt="icon" />
        </div>
        <div className="pt-12 text-light relative">
          <span className="absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer"></span>
          <input
            type="text"
            className="rounded-md px-3 pl-14 py-4 focus:outline-none w-full text-lg"
          />
        </div>

        <List />

        <div className="text-light text-center py-14 text-sm">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
}

export default App;
