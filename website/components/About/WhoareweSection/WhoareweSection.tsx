import React, { FunctionComponent } from 'react'
import { CtaButton } from '../../common/CtaSection/CtaButton'

export const WhoareweSection: FunctionComponent = () => {
  return (
    <section className="section has-background-info">
      <div className="container is-small">
        <div className="content has-text-centered has-text-white">
          <h2 className="has-text-white">Who We Are?</h2>
          <p>
            At We Breathe Social, social media marketing is our dream and passion. We are a leading digital marketing agency in Morocco. We are expanding at a tremendous rate and aim to become the best of the bests in social media marketing agencies around the globe. We have an amazing team of market researchers, creative website content creators, social media experts, excellent graphic designers, and skilled communication experts.
          </p>
          <p>
            {`We strongly believe that digital marketing must be made available easily. People opting for it must not need to compromise on the product they receive. Our team provides you outstanding digital and social marketing solutions which are customized and personalized according to your needs. We help make your ideas trending across social media so that can make the most of your business and website.`}
          </p>
          <p>
            We are your one-stop destination for everything related to digital marketing and social media marketing. We provide you with digital strategies, community management, social media marketing, Google marketing, lead generation, email marketing, web development, eCommerce and so much more. Having all the services under one banner helps us to give you smoother and faster results. This permits us to help make your business reach out to more number of people. We ensure that your visitors become your clients and your already existing clients become addicted to your services. We help you build a flawless social media hold so your business can truly breathe the social.
          </p>
          <h3 className="has-text-white">
            Bottom Line : We're made for YOU and we already know You're made for US.
          </h3>
        </div>

        <CtaButton />
      </div>
    </section>
  )
}
