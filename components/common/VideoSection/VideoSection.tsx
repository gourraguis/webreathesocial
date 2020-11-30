import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { FunctionComponent, useState } from 'react'
import style from './videoSection.module.scss'

export const VideoSection: FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className={classNames('section', style.section)}>
      <div className="container">
        <div className="columns is-vcentered" style={{ flexDirection: 'row-reverse' }}>
          <div className="column">
            <div className="columns is-mobile is-centered is-vcentered">
              <div className="column is-narrow">
                <a onClick={toggleModal}>
                  <span className={classNames('icon is-large has-text-white', style.playIcon)}>
                    <FontAwesomeIcon icon={faPlay} size="3x" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="column is-8">
            <h2 className="title has-text-white">
              {`"We are Primal. A client-centric, results-driven group of the top digital marketers in
        Morocco"`}
            </h2>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={toggleModal}></div>
          <div className="modal-content" style={{ width: '80%', height: '80%' }}>
            <div
              style={{ height: '100%' }}
              dangerouslySetInnerHTML={{
                __html: `<iframe style='width: 100%; height:100%' src=https://www.youtube-nocookie.com/embed/vM7Pi735fdQ?controls=0 frameborder=“0" allow=“accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture” allowfullscreen></iframe>`,
              }}
            ></div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={toggleModal}
          ></button>
        </div>
      )}
    </div>
  )
}
