import React, { FunctionComponent } from 'react'

const paragraphs = [
  `Social media plays an important role in every person’s life. Did you know? Most of the top brands have gained a monopoly by making a strong hold on social media. It’s their social media handle that sets the latest trends. It all begins with marking an online presence of your business. What to do next? Get yourself an exceptionally well experienced social media marketing agency, i.e. us! We Breathe Social bring life to your social media with our talented team of experts and excellent services.`,
  `We are your one-stop destination for everything related to digital marketing and social media marketing. We provide you with digital strategies, community management, social media marketing, Google marketing, lead generation, email marketing, web development, eCommerce and so much more. Having all the services under one banner helps us to give you smoother and faster results. This permits us to help make your business reach out to more number of people.`,
  `We strongly believe that digital marketing must be made available easily. People opting for it must not need to compromise on the product they receive. Our team provides you outstanding digital and social marketing solutions which are customized and personalized according to your needs. We help make your ideas trending across social media so that can make the most of your business and website.`,
  `One of the first things that come to a person’s mind as soon as he sees anything new is to Google it. Getting your business online can be a great idea! Not really! For every word, there are a million of sites in Google search. Setting up a new website without SEO can land your site that you created with so many efforts on the last page of the search engine. Want your website and business to breathe a healthy social life?`,
]

export const AboutSection: FunctionComponent = () => {
  return (
    <div className="section has-background-primary">
      <div className="container">
        <div className="content">
          <h2 className="has-text-centered has-text-white">
            A digital agency in Morocco with a difference
          </h2>
          <div className="columns is-multiline">
            {paragraphs.map((paragraph) => (
              <div className="column is-6" key={paragraph}>
                <p className="has-text-white has-text-centered">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
