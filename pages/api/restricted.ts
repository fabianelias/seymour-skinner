import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req })

  if(session) {
    res.send({
      content:
        "this is protected content, you can access this content because you are signed in",
    })
    return;
  }

  res.send({
    error: "you must be signed in to view the protected contect on this page"
  })
  return;
}