// Supports only POST
const requestApi = (req, res) => {
    if (req.method === 'POST') {
       return res.status(200).json(req.body)
    } else {
        return res.status(404)
    }
}

export default requestApi
