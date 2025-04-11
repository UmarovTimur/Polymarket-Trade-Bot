import React, { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Статичные данные JSON
const json = [
  {
    id: 1781090822034768100,
    created_at: "Apr 18, 6:41:57 PM EDT"
  },
  {
    id: 1781091220816560400,
    created_at: "Apr 18, 6:43:32 PM EDT"
  },
  {
    id: 1781094892866781200,
    created_at: "Apr 18, 6:58:08 PM EDT"
  },
  {
    id: 1781098833700655000,
    created_at: "Apr 18, 7:13:47 PM EDT"
  },
  {
    id: 1781100981037494500,
    created_at: "Apr 18, 7:22:19 PM EDT"
  },
  {
    id: 1781115210725511200,
    created_at: "Apr 18, 8:18:52 PM EDT"
  },
  {
    id: 1781115316879212500,
    created_at: "Apr 18, 8:19:17 PM EDT"
  },
  {
    id: 1781159551598743600,
    created_at: "Apr 18, 11:15:04 PM EDT"
  },
  {
    id: 1781159615167619300,
    created_at: "Apr 18, 11:15:19 PM EDT"
  },
  {
    id: 1781159792288899000,
    created_at: "Apr 18, 11:16:01 PM EDT"
  },
  {
    id: 1781168624503275800,
    created_at: "Apr 18, 11:51:07 PM EDT"
  },
  {
    id: 1781183251731677200,
    created_at: "Apr 19, 12:49:14 AM EDT"
  },
  {
    id: 1781369713458552800,
    created_at: "Apr 19, 1:10:10 PM EDT"
  },
  {
    id: 1781384773388108000,
    created_at: "Apr 19, 2:10:01 PM EDT"
  },
  {
    id: 1781387457193230300,
    created_at: "Apr 19, 2:20:41 PM EDT"
  },
  {
    id: 1781390448717623600,
    created_at: "Apr 19, 2:32:34 PM EDT"
  },
  {
    id: 1781393250021941500,
    created_at: "Apr 19, 2:43:42 PM EDT"
  },
  {
    id: 1781394185951564000,
    created_at: "Apr 19, 2:47:25 PM EDT"
  },
  {
    id: 1781394539376222500,
    created_at: "Apr 19, 2:48:49 PM EDT"
  },
  {
    id: 1781394906491003000,
    created_at: "Apr 19, 2:50:17 PM EDT"
  },
  {
    id: 1781411339744764000,
    created_at: "Apr 19, 3:55:35 PM EDT"
  },
  {
    id: 1781433998079656200,
    created_at: "Apr 19, 5:25:37 PM EDT"
  },
  {
    id: 1781531716751876000,
    created_at: "Apr 19, 11:53:55 PM EDT"
  },
  {
    id: 1781534209837826600,
    created_at: "Apr 20, 12:03:49 AM EDT"
  },
  {
    id: 1781542250075316200,
    created_at: "Apr 20, 12:35:46 AM EDT"
  },
  {
    id: 1781542490853503200,
    created_at: "Apr 20, 12:36:43 AM EDT"
  },
  {
    id: 1781544288179851800,
    created_at: "Apr 20, 12:43:52 AM EDT"
  },
  {
    id: 1781544584100659500,
    created_at: "Apr 20, 12:45:03 AM EDT"
  },
  {
    id: 1781544984404959700,
    created_at: "Apr 20, 12:46:38 AM EDT"
  },
  {
    id: 1781548457733292000,
    created_at: "Apr 20, 1:00:26 AM EDT"
  },
  {
    id: 1781559444196766000,
    created_at: "Apr 20, 1:44:05 AM EDT"
  },
  {
    id: 1781562388640108800,
    created_at: "Apr 20, 1:55:47 AM EDT"
  },
  {
    id: 1781608499715129600,
    created_at: "Apr 20, 4:59:01 AM EDT"
  },
  {
    id: 1781609025504755700,
    created_at: "Apr 20, 5:01:07 AM EDT"
  },
  {
    id: 1781610721282830300,
    created_at: "Apr 20, 5:07:51 AM EDT"
  },
  {
    id: 1781616840935903200,
    created_at: "Apr 20, 5:32:10 AM EDT"
  },
  {
    id: 1781619340942410000,
    created_at: "Apr 20, 5:42:06 AM EDT"
  },
  {
    id: 1781694419642519800,
    created_at: "Apr 20, 10:40:26 AM EDT"
  },
  {
    id: 1781734977429737500,
    created_at: "Apr 20, 1:21:36 PM EDT"
  },
  {
    id: 1781736155651637200,
    created_at: "Apr 20, 1:26:17 PM EDT"
  },
  {
    id: 1781736454923731200,
    created_at: "Apr 20, 1:27:28 PM EDT"
  },
  {
    id: 1781738783819370500,
    created_at: "Apr 20, 1:36:43 PM EDT"
  },
  {
    id: 1781740249426625000,
    created_at: "Apr 20, 1:42:33 PM EDT"
  },
  {
    id: 1781742652313981200,
    created_at: "Apr 20, 1:52:06 PM EDT"
  },
  {
    id: 1781784134391841000,
    created_at: "Apr 20, 4:36:56 PM EDT"
  },
  {
    id: 1781832337354883600,
    created_at: "Apr 20, 7:48:28 PM EDT"
  },
  {
    id: 1781834537443418600,
    created_at: "Apr 20, 7:57:13 PM EDT"
  },
  {
    id: 1781862255103038000,
    created_at: "Apr 20, 9:47:21 PM EDT"
  },
  {
    id: 1782064732649693400,
    created_at: "Apr 21, 11:11:56 AM EDT"
  },
  {
    id: 1782065730713756000,
    created_at: "Apr 21, 11:15:54 AM EDT"
  },
  {
    id: 1782092258214330600,
    created_at: "Apr 21, 1:01:18 PM EDT"
  },
  {
    id: 1782099424979620000,
    created_at: "Apr 21, 1:29:47 PM EDT"
  },
  {
    id: 1782165979088179500,
    created_at: "Apr 21, 5:54:15 PM EDT"
  },
  {
    id: 1782202582473040400,
    created_at: "Apr 21, 8:19:42 PM EDT"
  },
  {
    id: 1782259484124992000,
    created_at: "Apr 22, 12:05:48 AM EDT"
  },
  {
    id: 1782262114230448600,
    created_at: "Apr 22, 12:16:15 AM EDT"
  },
  {
    id: 1782269474147606500,
    created_at: "Apr 22, 12:45:30 AM EDT"
  },
  {
    id: 1782279316497174800,
    created_at: "Apr 22, 1:24:36 AM EDT"
  },
  {
    id: 1782315558748254500,
    created_at: "Apr 22, 3:48:37 AM EDT"
  },
  {
    id: 1782418703759315200,
    created_at: "Apr 22, 10:38:29 AM EDT"
  },
  {
    id: 1782431330606731800,
    created_at: "Apr 22, 11:28:39 AM EDT"
  },
  {
    id: 1782439176937328600,
    created_at: "Apr 22, 11:59:50 AM EDT"
  },
  {
    id: 1782441020036145200,
    created_at: "Apr 22, 12:07:09 PM EDT"
  },
  {
    id: 1782504136849728000,
    created_at: "Apr 22, 4:17:58 PM EDT"
  },
  {
    id: 1782538782593495300,
    created_at: "Apr 22, 6:35:38 PM EDT"
  },
  {
    id: 1782550334155420200,
    created_at: "Apr 22, 7:21:32 PM EDT"
  },
  {
    id: 1782552013378634000,
    created_at: "Apr 22, 7:28:12 PM EDT"
  },
  {
    id: 1782552493928460500,
    created_at: "Apr 22, 7:30:07 PM EDT"
  },
  {
    id: 1782558405053268200,
    created_at: "Apr 22, 7:53:36 PM EDT"
  },
  {
    id: 1782566202117599500,
    created_at: "Apr 22, 8:24:35 PM EDT"
  },
  {
    id: 1782568012857418000,
    created_at: "Apr 22, 8:31:47 PM EDT"
  },
  {
    id: 1782573789923914200,
    created_at: "Apr 22, 8:54:44 PM EDT"
  },
  {
    id: 1782584820549202000,
    created_at: "Apr 22, 9:38:34 PM EDT"
  },
  {
    id: 1782617349964640300,
    created_at: "Apr 22, 11:47:50 PM EDT"
  },
  {
    id: 1782626706974454000,
    created_at: "Apr 23, 12:25:01 AM EDT"
  },
  {
    id: 1782648405862339000,
    created_at: "Apr 23, 1:51:14 AM EDT"
  },
  {
    id: 1782788691255038200,
    created_at: "Apr 23, 11:08:41 AM EDT"
  },
  {
    id: 1782790676821790700,
    created_at: "Apr 23, 11:16:34 AM EDT"
  },
  {
    id: 1782791181610418400,
    created_at: "Apr 23, 11:18:35 AM EDT"
  },
  {
    id: 1782792093389177000,
    created_at: "Apr 23, 11:22:12 AM EDT"
  },
  {
    id: 1782794328714174500,
    created_at: "Apr 23, 11:31:05 AM EDT"
  },
  {
    id: 1782801354877973000,
    created_at: "Apr 23, 11:59:00 AM EDT"
  },
  {
    id: 1782806697112723500,
    created_at: "Apr 23, 12:20:14 PM EDT"
  },
  {
    id: 1782808782143361000,
    created_at: "Apr 23, 12:28:31 PM EDT"
  },
  {
    id: 1782814798985720000,
    created_at: "Apr 23, 12:52:25 PM EDT"
  },
  {
    id: 1782821354569679400,
    created_at: "Apr 23, 1:18:28 PM EDT"
  },
  {
    id: 1782826163326579200,
    created_at: "Apr 23, 1:37:35 PM EDT"
  },
  {
    id: 1782828815590519000,
    created_at: "Apr 23, 1:48:07 PM EDT"
  },
  {
    id: 1782839788401557800,
    created_at: "Apr 23, 2:31:43 PM EDT"
  },
  {
    id: 1782842393110409500,
    created_at: "Apr 23, 2:42:04 PM EDT"
  },
  {
    id: 1782848959993774300,
    created_at: "Apr 23, 3:08:10 PM EDT"
  },
  {
    id: 1782852494076559600,
    created_at: "Apr 23, 3:22:13 PM EDT"
  },
  {
    id: 1782919954704351700,
    created_at: "Apr 23, 7:50:16 PM EDT"
  },
  {
    id: 1782920736212189400,
    created_at: "Apr 23, 7:53:23 PM EDT"
  },
  {
    id: 1782993311374226000,
    created_at: "Apr 24, 12:41:46 AM EDT"
  },
  {
    id: 1783037271719186700,
    created_at: "Apr 24, 3:36:27 AM EDT"
  },
  {
    id: 1783053802033332500,
    created_at: "Apr 24, 4:42:08 AM EDT"
  },
  {
    id: 1783058628238512600,
    created_at: "Apr 24, 5:01:19 AM EDT"
  },
  {
    id: 1783188100552012300,
    created_at: "Apr 24, 1:35:47 PM EDT"
  },
  {
    id: 1783361651892535600,
    created_at: "Apr 25, 1:05:25 AM EDT"
  },
  {
    id: 1783434138789568800,
    created_at: "Apr 25, 5:53:27 AM EDT"
  }
]

const Dashboard = () => {
  const [jsonData, setJsonData] = useState<any[]>([])
  const [groupBy, setGroupBy] = useState<"days" | "hours">("days")

  useEffect(() => {
    // Преобразуем данные в формат для графика
    const formattedData = json.map((row: any) => ({
      tweetId: row.id,
      time: formatDate(row.created_at),
    }))
    setJsonData(formattedData)
  }, [])

  // Преобразуем строку времени в формат Date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toISOString() // Возвращаем в ISO формате
  }

  // Подготовим данные для графика с разделением по дням и часам
  const getChartData = () => {
    const groupedData: { [key: string]: number } = {}
  
    // Группируем данные по дням или часам в зависимости от выбранного варианта
    jsonData.forEach((row: any) => {
      let key = ""
      if (groupBy === "days") {
        // Получаем день в формате YYYY-MM-DD
        key = new Date(row.time).toISOString().split('T')[0]
      } else if (groupBy === "hours") {
        // Получаем час и делаем его двухзначным
        key = new Date(row.time).getHours().toString().padStart(2, '0')
      }
  
      // Если такого ключа ещё нет в groupedData, создаём его
      if (!groupedData[key]) {
        groupedData[key] = 1
      } else {
        groupedData[key] += 1
      }
    })
  
    // Форматируем данные для графика
    const chartData = Object.keys(groupedData).map((key) => ({
      key,
      count: groupedData[key],
    }))
  
    return chartData
  }
  
  

  return (
    <div style={{ padding: "20px" }}>
      <h1>JSON Dashboard</h1>

      {/* Переключатель для дня/часа */}
      <div>
        <button onClick={() => setGroupBy("days")}>По дням</button>
        <button onClick={() => setGroupBy("hours")}>По часам</button>
      </div>

      {/* График */}
      {jsonData.length > 0 && (
        <ResponsiveContainer width={800} height={400}>
          <LineChart data={getChartData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="key" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default Dashboard
