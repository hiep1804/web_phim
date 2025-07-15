import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function App() {
  return (
    <Router basename='/web_phim'>
      <Routes>
        <Route path="/video/:id" element={<Video />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}
function Home() {
  const s = ["/mai_mai_khong_la_anh.mp4","/neu_ngay_ay.mp4"];
  return (
    <>
      {s.map((x,idx)=><div>
        <p>id: {idx} name{x}</p>
        <br/>
      </div>)}
    </>
  );
}
function Video() {
  const { id } = useParams();
  const s = ["/mai_mai_khong_la_anh.mp4","/neu_ngay_ay.mp4"];
  return (
    <>
      <video width="600" controls>
        <source src={s[id]} type="video/mp4" />
        Trình duyệt không hỗ trợ video.
      </video>
    </>
  );
}
export default App;
