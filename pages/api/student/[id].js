export default (req, res) => {
    
  const id = req.query.id

  const student = { id, name: "John Doe" }

  res.end(JSON.stringify({student}));
};
