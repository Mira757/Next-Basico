const usuarios = []

export default function form(req,res) {

  if (req.method === "POST") {
    post(re.res)
  } else {
  res.status(200).json(usuarios)
  }
}

function post(req,res) {
  const usuarios = JSON.parse(req.body)
  usuarios.push(usuarios)
  res.status(200).send()
}