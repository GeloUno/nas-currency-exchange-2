import SectionExchange from '../components/sectionExchange';

function Layout() {
  return (
    <div
      className="w-full h-full flex"
      style={{ backgroundColor: 'hsl(220, 20%, 97%)' }}
    >
      <div className="h-full w-2/5 flex absolute top-0 left-0 items-end bg-gradient-to-b from-blue-500 to-blue-700 font-sans">
        <h1 className="p-10 text-5xl font-black opacity-30">NASK</h1>
        <div>
          <SectionExchange />
        </div>
      </div>
    </div>
  );
}

export default Layout;
