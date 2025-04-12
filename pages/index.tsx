import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://779f-35-222-7-153.ngrok-free.app/sharp-signals")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">WEALTHYONWIFI Sharp Betting Dashboard</h1>

      {!data ? (
        <p>Loading sharp picks...</p>
      ) : (
        <>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Sharp Picks</h2>
            <div className="grid gap-4">
              {data.alerts.map((pick, idx) => (
                <div key={idx} className="p-4 bg-gray-900 rounded-lg shadow">
                  <p className="font-bold text-lg">{pick.game}</p>
                  <p>{pick.signal} | {pick.bookmaker}</p>
                  <p>Public Bets: {pick.publicBets}%</p>
                  <p>Public Money: {pick.publicMoney}%</p>
                  <p>Historical Edge: {pick.historicalEdge}%</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Player Props</h2>
            <div className="grid gap-4">
              {data.playerProps.map((prop, idx) => (
                <div key={idx} className="p-4 bg-gray-800 rounded-lg shadow">
                  <p className="font-bold">{prop.player}</p>
                  <p>{prop.prop}</p>
                  <p>Public Bets: {prop.publicBets}%</p>
                  <p>Public Money: {prop.publicMoney}%</p>
                  <p>Odds Movement: {prop.oddsMovement}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
