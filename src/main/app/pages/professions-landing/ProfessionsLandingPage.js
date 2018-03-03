import React from 'react';
import './professions-landing.scss';
import {ProfessionButton} from './components/ProfessionButton';
import {Professions} from './ProfessionsLandingPageModel';
import classNames from 'classnames';

const LandingStep = {
  PROFESSIONS: 'professions',
  EMAIL: 'email',
  SUCCESS: 'success'
};

export class ProfessionsLandingPage extends React.Component {

  state = {
    [Professions.DEVELOPER]: false,
    [Professions.BARISTA]: false,
    [Professions.FARMER]: false,
    [Professions.CONFECTIONER]: false,
    [Professions.DESIGNER]: false,
    [Professions.TEACHER]: false,
    [Professions.ARTIST]: false,
    [Professions.GUIDE]: false,
    [Professions.LAWYER]: false,
    [Professions.PHOTOGRAPHER]: false,
    [Professions.ECONOMIST]: false,
    [Professions.MANAGER]: false,

    activeStep: LandingStep.PROFESSIONS,
    stepIsChanging: false,
  };

  handleProfessionButtonChange = (profession) => {
    this.setState({
      [profession]: !this.isProfessionChosen(profession)
    })
  };

  handleTryClick = () => {
    this.goToEmailStep();
  };

  createAnimationTimeoutPromise(timeout) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeout || 300);
    });
  }

  async goToEmailStep() {
    this.setState({stepIsChanging: true});
    await this.createAnimationTimeoutPromise();
    this.setState({activeStep: LandingStep.EMAIL});
    await this.createAnimationTimeoutPromise(10);
    this.setState({stepIsChanging: false});
  }

  isProfessionChosen(profession) {
    return this.state[profession];
  }

  hasChosenProfessions() {
    const state = this.state;
    return state[Professions.DEVELOPER] ||
      state[Professions.BARISTA] ||
      state[Professions.FARMER] ||
      state[Professions.CONFECTIONER] ||
      state[Professions.DESIGNER] ||
      state[Professions.TEACHER] ||
      state[Professions.ARTIST] ||
      state[Professions.GUIDE] ||
      state[Professions.LAWYER] ||
      state[Professions.PHOTOGRAPHER] ||
      state[Professions.ECONOMIST] ||
      state[Professions.MANAGER];
  }


  render() {
    const {activeStep, stepIsChanging} = this.state;
    return (
      <div className="professions-landing__background">
        {activeStep === LandingStep.PROFESSIONS &&
        <div className={classNames('professions-landing__step', {'professions-landing__step_active': !stepIsChanging})}>
          <div className="professions-landing__title">В каких профессиях вы хотели бы себя попробовать?</div>
          <div className="professions-landing__profession-list">
            <ProfessionButton profession={Professions.DEVELOPER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.DEVELOPER)}/>
            <ProfessionButton profession={Professions.BARISTA}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.BARISTA)}/>
            <ProfessionButton profession={Professions.FARMER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.FARMER)}/>
            <ProfessionButton profession={Professions.CONFECTIONER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.CONFECTIONER)}/>
            <ProfessionButton profession={Professions.DESIGNER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.DESIGNER)}/>
            <ProfessionButton profession={Professions.TEACHER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.TEACHER)}/>
            <ProfessionButton profession={Professions.ARTIST}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.ARTIST)}/>
            <ProfessionButton profession={Professions.GUIDE}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.GUIDE)}/>
            <ProfessionButton profession={Professions.LAWYER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.LAWYER)}/>
            <ProfessionButton profession={Professions.PHOTOGRAPHER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.PHOTOGRAPHER)}/>
            <ProfessionButton profession={Professions.ECONOMIST}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.ECONOMIST)}/>
            <ProfessionButton profession={Professions.MANAGER}
                              onChange={this.handleProfessionButtonChange}
                              chosen={this.isProfessionChosen(Professions.MANAGER)}/>
          </div>
          {this.hasChosenProfessions() &&
          <div className="professions-landing__try-button-row">
            <button className="professions-landing__try-button"
                    onClick={this.handleTryClick}>
              Попробовать
            </button>
          </div>}
        </div>}
        {(activeStep === LandingStep.EMAIL || activeStep === LandingStep.SUCCESS) &&
        <div className={classNames('professions-landing__step', {'professions-landing__step_active': !stepIsChanging})}>
          <div className="professions-landing__email-title">
            Мы хотим дать возможность попробовать себя в разных профессиях, чтобы найти то, что вам по душе.
            Пока мы собираем статистику и договариваемся с компаниями, чтобы можно было осуществить этот проект.
          </div>
          <div className="professions-landing__email-subtitle">
            Если вы хотите получить результат наших исследований и узнать, когда мы будем готовы — оставьте ваш e-mail.
          </div>
          <div className="professions-landing__email-form">
            <input/>
            <button>
              Отправить
            </button>
          </div>
        </div>}
      </div>
    );
  }

}