import React from 'react';
import {string, func, arrayOf} from 'prop-types';
import {ProfessionButton} from '../profession-button/ProfessionButton';
import {Profession} from '../../common/enums/Profession';
import './profession-button-list.scss';
import classNames from 'classnames';

export class ProfessionButtonList extends React.Component {

  static propTypes = {
    chosenProfessions: arrayOf(string),
    className: string,
    onChange: func
  };

  static defaultProps = {
    onChange(){

    }
  };

  handleProfessionButtonChange = profession => {
    const {chosenProfessions, onChange} = this.props;
    const professionIndex = chosenProfessions.indexOf(profession);
    if (professionIndex === -1) {
      onChange([...chosenProfessions, profession]);
    } else {
      onChange(chosenProfessions.slice(0, professionIndex).concat(chosenProfessions.slice(professionIndex + 1)));
    }
  };

  isProfessionChosen(profession) {
    return this.props.chosenProfessions.indexOf(profession) !== -1;
  }

  render() {
    const {className} = this.props;

    return (
      <div className={classNames('profession-button-list', className)}>
        <ProfessionButton profession={Profession.DEVELOPER}
                          className="profession-button-list__profession-button"
                          onChange={this.handleProfessionButtonChange}
                          chosen={this.isProfessionChosen(Profession.DEVELOPER)}/>
        <ProfessionButton profession={Profession.BARISTA}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.BARISTA)}/>
        <ProfessionButton profession={Profession.FARMER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.FARMER)}/>
        <ProfessionButton profession={Profession.CONFECTIONER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.CONFECTIONER)}/>
        <ProfessionButton profession={Profession.DESIGNER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.DESIGNER)}/>
        <ProfessionButton profession={Profession.TEACHER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.TEACHER)}/>
        <ProfessionButton profession={Profession.ARTIST}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.ARTIST)}/>
        <ProfessionButton profession={Profession.GUIDE}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.GUIDE)}/>
        <ProfessionButton profession={Profession.LAWYER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.LAWYER)}/>
        <ProfessionButton profession={Profession.PHOTOGRAPHER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.PHOTOGRAPHER)}/>
        <ProfessionButton profession={Profession.ECONOMIST}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.ECONOMIST)}/>
        <ProfessionButton profession={Profession.MANAGER}
                          onChange={this.handleProfessionButtonChange}
                          className="profession-button-list__profession-button"
                          chosen={this.isProfessionChosen(Profession.MANAGER)}/>
      </div>
    );
  }

}
