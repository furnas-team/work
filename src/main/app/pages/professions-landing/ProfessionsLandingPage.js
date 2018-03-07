import React from 'react';
import './professions-landing.scss';
import classNames from 'classnames';
import {Title} from '../../components/title/Title';
import {ProfessionButtonList} from '../../components/profession-button-list/ProfessionButtonList';
import {Button} from '../../components/button/Button';
import {TextBlock, TextBlockTextAlign} from '../../components/text-block/TextBlock';
import {Input} from '../../components/input/Input';

const LandingStep = {
  PROFESSIONS: 'professions',
  EMAIL: 'email',
  SUCCESS: 'success'
};

export class ProfessionsLandingPage extends React.Component {

  state = {
    chosenProfessions: [],
    activeStep: LandingStep.PROFESSIONS,
    email: '',
    emailSent: false,
    stepIsChanging: false,
  };

  handleChosenProfessionsChange = chosenProfessions => this.setState({chosenProfessions});

  handleTryClick = () => {
    window.mixpanel.track(
      "Want try professions",
      {professions: this.state.chosenProfessions.join()}
    );
    this.goToEmailStep();
  };

  handleEmailFormSubmit = event => {
    event.preventDefault();
    if (!this.state.emailSent) {
      window.mixpanel.track(
        "Provides email",
        {email: this.state.email}
      );
      window.mixpanel.identify(this.state.email);
      window.mixpanel.alias(this.state.email);
      window.mixpanel.people.set({
        "$created": (new Date()).toString(),
        "$email": this.state.email
      });
      this.setState({emailSent: true});
    }
  };

  handleEmailChange = event => this.setState({email: event.target.value});

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
    return this.state.chosenProfessions.length > 0;
  }


  render() {
    const {activeStep, stepIsChanging, chosenProfessions, email} = this.state;
    return (
      <div className="professions-landing__layout">
        {activeStep === LandingStep.PROFESSIONS &&
        <div className={classNames('professions-landing__step', {'professions-landing__step_active': !stepIsChanging})}>
          <Title className="professions-landing__title">В каких профессиях вы хотели бы себя попробовать?</Title>
          <ProfessionButtonList className="professions-landing__profession-list"
                                chosenProfessions={chosenProfessions}
                                onChange={this.handleChosenProfessionsChange}>
          </ProfessionButtonList>
          {this.hasChosenProfessions() &&
          <div className="professions-landing__try-button-row">
            <Button onClick={this.handleTryClick}>
              Попробовать
            </Button>
          </div>}
        </div>}
        {(activeStep === LandingStep.EMAIL || activeStep === LandingStep.SUCCESS) &&
        <div className={classNames('professions-landing__step', {'professions-landing__step_active': !stepIsChanging})}>
          <div className="professions-landing__email-text">
            <TextBlock className="professions-landing__email-title"
                       textAlign={TextBlockTextAlign.CENTER}>
              Мы хотим дать возможность попробовать себя в разных профессиях, чтобы найти то, что вам по душе.
              Пока мы собираем статистику и договариваемся с компаниями, чтобы можно было осуществить этот проект.
            </TextBlock>
            <TextBlock className="professions-landing__email-subtitle"
                       textAlign={TextBlockTextAlign.CENTER}>
              Если вы хотите получить результат наших исследований и узнать, когда мы будем готовы — оставьте ваш e-mail.
            </TextBlock>
          </div>
          <form className="professions-landing__email-form" onSubmit={this.handleEmailFormSubmit}>
            <Input value={email}
                   className="professions-landing__email-input"
                   placeholder="Введите email"
                   onChange={this.handleEmailChange}/>
            <Button className="professions-landing__save-email-button">
              Отправить
            </Button>
          </form>
        </div>}
      </div>
    );
  }

}