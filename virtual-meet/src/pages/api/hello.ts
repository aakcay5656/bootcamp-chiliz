// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRkYmZkNjcxLTY4NjQtNDE0Ny04OTMyLTNjMDMwNDAyMmNmOSIsIm9yZ0lkIjoiMzYyOTM5IiwidXNlcklkIjoiMzczMDA4IiwidHlwZUlkIjoiNTA0ZjFiMjEtZjlkYS00ZTkwLTkyNTAtODRmNmMzZWYxNjNjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTg4MjgzOTIsImV4cCI6NDg1NDU4ODM5Mn0.ym8htkPLqVq3EXTcnqRlD1doaku6LIXSaQsvdH19OEk' })
}
