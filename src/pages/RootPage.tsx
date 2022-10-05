import GetEventList from "../components/MainForm";

function RootPage() {
  return (
    <div className="page">
      <h1 className="page__header">Главная страница</h1>
      <GetEventList />
    </div>
  );
}

export default RootPage;
