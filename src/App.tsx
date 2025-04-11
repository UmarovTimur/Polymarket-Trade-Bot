import { useState } from "react"
import { Button } from "./components/ui/button"
import Dashboard from "./components/dashboard/dashboard"

function App() {
  const [activeTab, setActiveTab] = useState("chart1")

  return (
    <div className="p-4">
      <div className="flex gap-4 border-b mb-4 justify-center">
        <Button onClick={() => setActiveTab("chart1")} className={activeTab === "chart1" ? "active" : ""}>
          Обычный график
        </Button>
        <Button onClick={() => setActiveTab("chart2")} className={activeTab === "chart2" ? "font-bold border-b-2 border-black" : ""}>
          Среднее значение
        </Button>
      </div>

      {/* Содержимое вкладок */}
      {activeTab === "chart1" && <Chart1 />}
      {activeTab === "chart2" && <Chart2 />}
    </div>
  )
}

// Примеры графиков
function Chart1() {
  return <Dashboard />
}

function Chart2() {
  return <div>📈 График 2 тут</div>
}

export default App
