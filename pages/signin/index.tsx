import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react';
import Container from "../../components/Container";
import { Row, Col } from "antd";
import React from 'react';

const SignIn = () => {

  return (
    <Container>
      <Row>
        <Col>
        {
          Object.values(getProviders).map((provider) => {
            return (
              <button>
                SignIn with {provider}
              </button>
            )
          })
        }
        </Col>
      </Row>
    </Container>
  )
}

SignIn.getInititalProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req })

  if (session && res) {
    res.writehead(302, {
      Location: "/"
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await getProviders(),
    csrfToken: await getCsrfToken(context)
  }
}

export default SignIn