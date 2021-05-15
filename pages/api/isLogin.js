export default (req, res) => {
  res.json({ ID: 'Park', Password: 'stupid0924!' })

  if(req = "POST" && req.ID === res.data.ID){ // admin page Data, res.json Data를 연결하는 방법
    res.statusCode = 200;
    console.log(res.data)
  }
};