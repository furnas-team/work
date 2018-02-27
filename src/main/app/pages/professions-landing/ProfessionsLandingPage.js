import React from 'react';
import './professions-landing.scss';

export class ProfessionsLandingPage extends React.Component {



  render() {
    return (
      <div className="professions-landing__background">
        <div className="professions-landing__title">В каких профессиях вы хотели бы себя попробовать?</div>
        <div className="professions-landing__profession-list">
          <div className="professions-landing__profession-button">
            Программист
          </div>
          <div className="professions-landing__profession-button">
            Бариста
          </div>
          <div className="professions-landing__profession-button">
            Фермер
          </div>
          <div className="professions-landing__profession-button">
            Кондитер
          </div>
          <div className="professions-landing__profession-button">
            Дизайнер
          </div>
          <div className="professions-landing__profession-button">
            Преподаватель
          </div>
          <div className="professions-landing__profession-button">
            Художник
          </div>
          <div className="professions-landing__profession-button">
            Экскурсовод
          </div>
          <div className="professions-landing__profession-button">
            Адвокат
          </div>
          <div className="professions-landing__profession-button">
            Фотограф
          </div>
          <div className="professions-landing__profession-button">
            Экономист
          </div>
          <div className="professions-landing__profession-button">
            Менеджер
          </div>
        </div>
      </div>
    );
  }

}
