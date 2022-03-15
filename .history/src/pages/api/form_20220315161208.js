const usuarios = []

export default function form(req,res) {

  if (req.method === "POST") {
    post(req,res)
  } else if (req.method === "GET") {
    get(req,res)
  }
}

function post(req,res) {
  const usuarios = JSON.parse(req.body)
  usuarios.push(usuarios)
  res.status(200).send()
}

function get(req,res) {
  res.status(200).json(usuarios)
}