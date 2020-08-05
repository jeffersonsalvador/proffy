import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/18353686?s=460&u=e73eec63364da1046b3c6ff1e029edf06856c16f&v=4" alt=""/>
                <div>
                    <strong>Jerson Script</strong>
                    <span>Full stack</span>
                </div>
            </header>
            <p>
                Texto 1<br /><br />
                texto 2
            </p>
            <footer>
                <p>
                    Price/hour
                    <strong>$ 10,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Contact"/>
                    Contact me
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem