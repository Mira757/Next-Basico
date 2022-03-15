const usuarios = []

export default function form(req,res) {

  if (req.method === "POST") {

  }

  res.status(200).json({
    dados: JSON.parse(req.body)
  })
}

function post(req,res) {
  const usuarios = JSON.parse(req.body)
  usuarios.push(usuarios)
}