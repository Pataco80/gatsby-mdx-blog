import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my friends every few weeks</h4>
          <form action="post" className="contact-form">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
            />
            <button className="btn submit-btn form-control">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
