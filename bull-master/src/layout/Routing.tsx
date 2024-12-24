const Routing = () => {
  return (
    <div className="w-full font-Pretendard">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:Id" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-contents/:EVENT_ID" element={} />
          <Route path="/login" element={} />
          <Route path="/userfind" element={} />
          <Route path="/signup" element={} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/seatreservation" element={} />
          <Route path="/reservation/:id" element={} />
          <Route path="/movielist" element={} />
          <Route path="/movieinfo/:id" element={} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Routing;
