import React from 'react'


import './styles.css'
import PageHeader from '../../components/PageHeader'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
            <form id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject" />
                </div>
                <div className="input-block">
                    <label htmlFor="weekday">Dia da semana</label>
                    <input type="text" id="weekday" />
                </div>
                <div className="input-block">
                    <label htmlFor="time">Hora</label>
                    <input type="text" id="time" />
                </div>
            </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList