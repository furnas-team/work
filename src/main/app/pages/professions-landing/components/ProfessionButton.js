import React from 'react';
import classNames from 'classnames';
import {bool, func, any, string} from 'prop-types';
import {Professions} from '../ProfessionsLandingPageModel';

const ProfessionTranslations = {
  [Professions.DEVELOPER]: 'Программист',
  [Professions.BARISTA]: 'Бариста',
  [Professions.FARMER]: 'Фермер',
  [Professions.CONFECTIONER]: 'Кондитер',
  [Professions.DESIGNER]: 'Дизайнер',
  [Professions.TEACHER]: 'Преподаватель',
  [Professions.ARTIST]: 'Художник',
  [Professions.GUIDE]: 'Экскурсовод',
  [Professions.LAWYER]: 'Адвокат',
  [Professions.PHOTOGRAPHER]: 'Фотограф',
  [Professions.ECONOMIST]: 'Экономист',
  [Professions.MANAGER]: 'Менеджер'
};

export class ProfessionButton extends React.Component {

  static propTypes = {
    profession: string,
    chosen: bool,
    onChange: func,
  };

  render() {
    const {chosen, onChange, profession} = this.props;
    return (
      <div className={classNames('professions-landing__profession-button', {'professions-landing__profession-button_chosen': chosen})}
           onClick={() => onChange(profession)}>
        {ProfessionTranslations[profession]}
      </div>
    );
  }

}
