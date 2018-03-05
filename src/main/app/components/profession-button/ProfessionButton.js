import React from 'react';
import classNames from 'classnames';
import {bool, func, any, string} from 'prop-types';
import {Profession} from '../../common/enums/Profession';
import './profession-button.scss';

const ProfessionTranslations = {
  [Profession.DEVELOPER]: 'Программист',
  [Profession.BARISTA]: 'Бариста',
  [Profession.FARMER]: 'Фермер',
  [Profession.CONFECTIONER]: 'Кондитер',
  [Profession.DESIGNER]: 'Дизайнер',
  [Profession.TEACHER]: 'Преподаватель',
  [Profession.ARTIST]: 'Художник',
  [Profession.GUIDE]: 'Экскурсовод',
  [Profession.LAWYER]: 'Адвокат',
  [Profession.PHOTOGRAPHER]: 'Фотограф',
  [Profession.ECONOMIST]: 'Экономист',
  [Profession.MANAGER]: 'Менеджер'
};

export class ProfessionButton extends React.Component {

  static propTypes = {
    profession: string,
    className: string,
    chosen: bool,
    onChange: func,
  };

  render() {
    const {chosen, onChange, profession, className} = this.props;
    return (
      <div className={classNames('profession-button', {'profession-button_chosen': chosen}, className)}
           onClick={() => onChange(profession)}>
        {ProfessionTranslations[profession]}
      </div>
    );
  }

}
