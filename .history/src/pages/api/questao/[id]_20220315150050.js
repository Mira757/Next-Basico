export default function questao(req,res) {
  if(req.method === "GET") {

    const id = req.query.id

    res.status(200).json({
      id,
      enunciado: "Qual sua cor preferida",
      repostas: [
        'Branca','Vermelha','Amarela','Verde'
      ]
    })
  } else {
    req.status(405).send()
  }
}