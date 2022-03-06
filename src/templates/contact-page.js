/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { Helmet } from "react-helmet"
export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    } 
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (


    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Helmet>
  <body className="contactpage" />
</Helmet>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />





      <div className="wrapper fluff" style={{}}>
        <h1 style={{fontSize:'130%'}}>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>

        <div className="wrapper" style={{width:'80%', maxWidth:'900px', padding:'0 3%'}}>
        <form
          className="contact-form"
          action="/thanks"
          state={{modal: true}}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <input type="text" name="name" placeholder="Name" required style={{  background:'rgba(0,0,0,0.50)', outline:'1px solid #06f8f8', color:'#ccc'}}/>
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="your@email.com" required style={{  background:'rgba(0,0,0,0.50)', outline:'1px solid #06f8f8', color:'#ccc'}} />
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="subject" placeholder="Subject" required style={{  background:'rgba(0,0,0,0.50)', outline:'1px solid #06f8f8', color:'#ccc'}} />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" placeholder="Your Message" required style={{  background:'rgba(0,0,0,0.50)', outline:'1px solid #06f8f8', color:'#ccc'}}></textarea>
            </label>
          </p>
          <div className="" style={{textAlign:'center', color:'#fff', display:'flex', justifyContent:'center'}}>
            <button
              className="actionJackson"
              
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </div>
        </form>
      </div>
      <br />
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}
